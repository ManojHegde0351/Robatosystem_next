import { useState, useEffect, useRef } from 'react';

export const useAnimatedNumber = (target, suffix = '') => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);

  // Handle intersection observer for scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = numberRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Handle the counting animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const step = (target * 10) / duration;
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  // Format number with commas and add M for millions
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return num.toLocaleString();
  };

  return {
    ref: numberRef,
    displayValue: `${formatNumber(count)}${suffix}`
  };
};
