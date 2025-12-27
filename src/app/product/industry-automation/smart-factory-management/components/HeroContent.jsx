import React from 'react';
import styles from '@/styles/industry/SmartFactoryManagment/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Smart Factory Automation
        </h1>
        <p className={styles.subtitle}>
          Transform your manufacturing processes with our advanced automation solutions that drive efficiency, quality, and productivity to new heights.
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
