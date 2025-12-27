'use client';

import { useCallback } from 'react';
import styles from '@/styles/parking/handheld/ParkLogixFeatures.module.css';

export default function ExpandButton({ isExpanded, onToggle }) {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    onToggle();
    
    // Scroll to the features section when expanding
    if (!isExpanded) {
      const element = document.getElementById('features-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [onToggle, isExpanded]);

  return (
    <div className={styles.buttonContainer}>
      <button 
        onClick={handleClick} 
        className={`${styles.readMoreButton} ${isExpanded ? styles.expanded : ''}`}
        aria-expanded={isExpanded}
        aria-controls="features-content"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
