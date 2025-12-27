import React from 'react';
import styles from '@/styles/ESD-Access-Control/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>ESD Access Control System</h1>
          <p>
            Secure your sensitive environments with our advanced Electrostatic Discharge (ESD) Access Control System.
            Ensure only properly grounded and authorized personnel can access ESD-protected areas to prevent costly
            damage to sensitive electronic components.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
