"use client";

import { useEffect, useRef, useState, useMemo } from 'react';

export const useScrollVisibility = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Memoize the options to prevent unnecessary effect re-runs
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = false } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]); // Only include primitive dependencies

  return [elementRef, isVisible];
};