import React from 'react';
import HeroWithTextAnimation from './HeroWithText.Client';
import styles from '@/styles/industry/smart-andon/HeroWithText.module.css';

const lines = [
  "Poor visibility of",
  "production floor & manual",
  "data entry lead to",
  "inefficiency and delays"
];

export default function HeroWithText() {
  return (
    <section className={styles.heroWithText}>
      <div className={styles.container}>
        <HeroWithTextAnimation lines={lines} />
      </div>
    </section>
  );
}