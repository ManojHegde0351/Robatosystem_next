"use client";

import { motion } from 'framer-motion';
import styles from '@/styles/industry/smart-andon/AndonFeatures.module.css';

const AndonFeaturesClient = ({ features, sectionTitle, sectionDescription }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.sectionHeader}
      >
        <h2>{sectionTitle}</h2>
        <p>{sectionDescription}</p>
      </motion.div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.featureType}>{feature.type}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AndonFeaturesClient;