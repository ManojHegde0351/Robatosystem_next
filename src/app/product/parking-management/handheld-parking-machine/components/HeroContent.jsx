import React from 'react';

import styles from '@/styles/parking/handheld/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Handheld Parking Machine</h1>
        <p className={styles.subtitle}>Portable, efficient, and reliable parking management solution</p>
      </div>
      
    </section>
  );
};

export default HeroContent;
