'use client';

import { useEffect } from 'react';

export default function EmbeddedFirmwareFAQClient() {
  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');

    const handleItemClick = (item) => {
      const isActive = item.classList.contains('active');
      
 
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

  
      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    };

    const handleMouseEnter = (item) => {
      if (!item.classList.contains('active')) {
        item.classList.add('hover');
      }
    };

    const handleMouseLeave = (item) => {
      item.classList.remove('hover');
    };


    faqItems.forEach(item => {
      item.addEventListener('click', () => handleItemClick(item));
      item.addEventListener('mouseenter', () => handleMouseEnter(item));
      item.addEventListener('mouseleave', () => handleMouseLeave(item));
    });


    return () => {
      faqItems.forEach(item => {
        item.removeEventListener('click', handleItemClick);
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return null; 
}
