

import React from 'react';

import styles from '@/styles/BarcodeRfidAccess/Hero.module.css';

const HeroContent = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>Gym Access Control System</h1>
          <p>
            Advanced access control solutions tailored for fitness centers and gyms. 
            Secure, efficient, and user-friendly access management for your fitness facility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
