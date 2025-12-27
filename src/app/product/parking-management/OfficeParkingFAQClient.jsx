"use client";

import { useState, useEffect } from 'react';

export default function OfficeParkingFAQClient() {
  const [activeItems, setActiveItems] = useState(new Set());

  useEffect(() => {
    // Add hover effects and click interactions
    const faqItems = document.querySelectorAll('.faq-item');
    
    const handleMouseEnter = (index) => {
      const newActiveItems = new Set(activeItems);
      newActiveItems.add(index);
      setActiveItems(newActiveItems);
    };

    const handleMouseLeave = (index) => {
      const newActiveItems = new Set(activeItems);
      newActiveItems.delete(index);
      setActiveItems(newActiveItems);
    };

    const handleClick = (index) => {
      const newActiveItems = new Set(activeItems);
      if (newActiveItems.has(index)) {
        newActiveItems.delete(index);
      } else {
        newActiveItems.add(index);
      }
      setActiveItems(newActiveItems);
    };

    faqItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => handleMouseEnter(index));
      item.addEventListener('mouseleave', () => handleMouseLeave(index));
      item.addEventListener('click', () => handleClick(index));
    });

    return () => {
      faqItems.forEach((item, index) => {
        item.removeEventListener('mouseenter', () => handleMouseEnter(index));
        item.removeEventListener('mouseleave', () => handleMouseLeave(index));
        item.removeEventListener('click', () => handleClick(index));
      });
    };
  }, [activeItems]);

  return null; // This component only handles client-side interactions
}
