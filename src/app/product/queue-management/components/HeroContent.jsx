import React from 'react';
import styles from '../../../../styles/Queue-Management/herocontent.module.css';


const HeroContent = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Smart Queue Management System</h1>
          <p>Streamline your customer flow and enhance service efficiency with our intelligent queue management solution.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
