'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/industry/smart-andon/Benefits.module.css';

export default function BenefitsAnimation() {
  return (
    <>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        BENEFITS
      </motion.h2>

      <div className={styles.grid}>
        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.amount}>$590K</div>
          <div className={styles.label}>ANNUAL COST SAVING</div>
        </motion.div>

        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.arrow}>⬇ 10%-15%</div>
          <div className={styles.label}>Minimize Downtime</div>
        </motion.div>

        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.arrow}>⬆ 7%-14%</div>
          <div className={styles.label}>Increase Output</div>
        </motion.div>

        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.icon}>MES / ERP</div>
          <div className={styles.label}>EASY INTEGRATION</div>
        </motion.div>

        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={styles.icon}>LED / LCD</div>
          <div className={styles.label}>CONCURRENT INFORMATION</div>
        </motion.div>

        <motion.div
          className={styles.benefitCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className={styles.icon}>EMAIL / SMS</div>
          <div className={styles.label}>INSTANT NOTIFICATION</div>
        </motion.div>
      </div>
    </>
  );
}
