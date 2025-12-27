import React from 'react';

import styles from '@/styles/Visitor-Managment/HeroContent.module.css';

const HeroContent = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Smart Visitor Management System</h1>
          <p>Streamline your visitor check-ins and enhance security with our advanced visitor management solution</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;