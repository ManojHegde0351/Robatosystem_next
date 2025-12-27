

import React from 'react';
import styles from '@/styles/BarcodeRfidAccess/Hero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>Barcode & RFID Access Control System</h1>
          <p>
            Advanced dual-technology access control combining the reliability of barcode scanning
            with the convenience of RFID for comprehensive security solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
