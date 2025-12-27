import React from 'react';
import AndonBenefitsClient from './AndonBenefits.client';
import styles from '@/styles/industry/smart-andon/AndonBenefits.module.css';

const AndonBenefits = () => {
  return (
    <section className={styles.andonBenefits}>
      <div className={styles.container}>
        <AndonBenefitsClient />
      </div>
    </section>
  );
};

export default AndonBenefits;
