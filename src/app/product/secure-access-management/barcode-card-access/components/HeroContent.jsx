

import React from 'react';
import styles from '@/styles/BarcodeCardAccess/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>Barcode & Card Access Control System</h1>
          <p>
            Secure, efficient, and reliable access control solutions for modern facilities.
            Our system integrates barcode and card technologies for seamless access management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
