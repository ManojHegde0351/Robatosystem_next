'use client';

import { useState, useEffect, useCallback } from 'react';

const useCarousel = (items, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (totalItems <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [totalItems, autoPlayInterval, nextSlide]);

  return {
    currentIndex,
    currentItem: items[currentIndex],
    nextSlide,
    prevSlide,
    goToSlide,
    totalItems
  };
};

export default useCarousel;
