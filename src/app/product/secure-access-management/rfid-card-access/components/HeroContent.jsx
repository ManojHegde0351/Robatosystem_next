

import React from 'react';
import styles from '@/styles/RfidCardAccess/Hero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>RFID Card Access Control System</h1>
          <p>
            Secure, efficient, and reliable access control solutions for modern facilities.
            Our system integrates RFID card technology for seamless access management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;