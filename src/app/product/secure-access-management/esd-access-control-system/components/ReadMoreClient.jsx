'use client';

import React, { useState } from 'react';
import styles from '@/styles/ESD-Access-Control/ESDAccessIntro.module.css';

const ReadMoreClient = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className={styles.readMoreButton}
      >
        {isVisible ? 'Read Less' : 'Read More'}
      </button>
      <div className={`${styles.additionalContent} ${isVisible ? styles.visible : ''}`}>
        {children}
      </div>
    </>
  );
};

export default ReadMoreClient;
