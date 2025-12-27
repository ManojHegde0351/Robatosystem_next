'use client';

import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import '../styles/components/backToTop.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      style={{ 
        position: 'fixed',
        bottom: '0.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <button
        onClick={scrollToTop}
        className="back-to-top"
        aria-label="Back to top"
      >
        <FaArrowUp />
        <span className="back-to-top-text">Back to top</span>
      </button>
    </div>
  );
}