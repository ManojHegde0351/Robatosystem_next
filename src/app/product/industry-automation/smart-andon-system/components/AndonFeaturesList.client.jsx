
"use client";

import { motion } from 'framer-motion';
import styles from '@/styles/industry/smart-andon/AndonFeaturesList.module.css';

const AndonFeaturesListClient = ({ features }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.sectionHeader}
      >
        <h2>Andon Features</h2>
      </motion.div>
      
      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className={styles.featureItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AndonFeaturesListClient;