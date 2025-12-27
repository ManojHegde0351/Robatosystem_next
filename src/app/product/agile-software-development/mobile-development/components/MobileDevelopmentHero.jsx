import React from 'react';
import MobileDevelopmentServicesCSR from './MobileDevelopment.client';
import styles from '@/styles/Agile-software-development/MobileDevelopment/mobileDevelopment.module.css';

const MobileDevelopmentHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>Mobile Application Development</h1>
          <p>Building powerful and scalable mobile solutions for your business needs</p>
        </div>
        
        {/* CSR animated services list */}
        <MobileDevelopmentServicesCSR />
      </div>
    </section>
  );
};

export default MobileDevelopmentHero;