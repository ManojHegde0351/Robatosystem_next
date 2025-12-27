'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  suffix = '',
  prefix = '',
  className = '',
  format = (n) => n.toLocaleString()
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationFrameId = useRef(null);
  const isMounted = useRef(true);

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const startAnimation = useCallback(() => {
    if (!isMounted.current) return;
    
    startTimeRef.current = performance.now();
    setCount(0);
    
    const animate = (currentTime) => {
      if (!isMounted.current) return;
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      setCount(Math.floor(easedProgress * value));
      
      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, [value, duration]);

  // Handle mount and unmount
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Handle intersection observer
  useEffect(() => {
    const currentRef = counterRef.current;
    if (!currentRef) return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          // Use setTimeout to avoid synchronous state updates in the effect
          setTimeout(() => {
            setHasAnimated(true);
            startAnimation();
          }, 0);
        }
      });
    };

    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
      observer.observe(currentRef);
    } else {
      // Fallback for browsers without IntersectionObserver
      setTimeout(() => {
        setHasAnimated(true);
        startAnimation();
      }, 0);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, startAnimation]);

  // Custom formatting function to handle millions
  const formatNumber = useCallback((num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return num.toLocaleString();
  }, []);

  return (
    <span ref={counterRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;