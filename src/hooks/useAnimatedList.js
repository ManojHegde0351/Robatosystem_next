'use client'
import { useEffect, useRef } from 'react';

export const useAnimatedList = (options = {}) => {
  const listRef = useRef(null);
  const {
    threshold = 0.1,
    initialOpacity = 0,
    initialTranslate = '50px',
    transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && listRef.current) {
          listRef.current.style.opacity = '1';
          listRef.current.style.transform = 'translateX(0)';
        }
      },
      { threshold }
    );

    const currentRef = listRef.current;
    if (currentRef) {
      // Set initial styles
      currentRef.style.opacity = initialOpacity.toString();
      currentRef.style.transform = `translateX(${initialTranslate})`;
      currentRef.style.transition = transition;
      
      // Start observing
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, initialOpacity, initialTranslate, transition]);

  return listRef;
};
