import React from 'react';
import BenefitsAnimation from './Benefits.Client';
import styles from '@/styles/industry/smart-andon/Benefits.module.css';

const benefitItems = [
  {
    icon: 'REAL TIME MONITORING',
    label: 'REAL TIME MONITORING'
  },
  {
    icon: 'DATA ANALYTICS',
    label: 'DATA ANALYTICS'
  },
  {
    icon: 'LED / LCD',
    label: 'CONCURRENT INFORMATION'
  },
  {
    icon: 'EMAIL / SMS',
    label: 'INSTANT NOTIFICATION'
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <BenefitsAnimation items={benefitItems} />
      </div>
    </section>
  );
}