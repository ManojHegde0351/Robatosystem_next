import React from 'react';
import styles from '@/styles/industry/SmartTrafficManagement/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Smart Traffic Management
        </h1>
        <p className={styles.subtitle}>
          Revolutionizing urban mobility with intelligent traffic control systems that optimize flow and reduce congestion
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
