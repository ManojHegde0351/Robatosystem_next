// SmartEyeSuite.client.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SmartEyeSuite.module.css';

const SmartEyeSuiteClient = ({ 
  title, 
  description, 
  desktopFeatures, 
  webPortalFeatures,
  images 
}) => {
  return (
    <>
      {/* Header Section */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </motion.div>

      {/* Desktop Application Section */}
      <div className={styles.sectionWithImage}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.sectionTitle}>Desktop Application</h3>
          <ul className={styles.featureList}>
            {desktopFeatures.map((feature, index) => (
  <motion.li
    key={index}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className={styles.featureItem}
  >
    <span className={styles.bullet}>•</span>
    <span>{feature}</span>
  </motion.li>
))}
          </ul>
        </motion.div>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
  src={images.desktopApp}
  alt="SmartEye Desktop Application"
  width={600}
  height={400}
  className={styles.featureImage}
  priority
/>
        </motion.div>
      </div>

      {/* Web Portal Section */}
      <div className={`${styles.sectionWithImage} ${styles.reverse}`}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
  src={images.webPortal}
  alt="SmartEye Web Portal"
  width={600}
  height={400}
  className={styles.featureImage}
/>
        </motion.div>
        
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.sectionTitle}>Web Portal</h3>
          <ul className={styles.featureList}>
            
          </ul>{webPortalFeatures.map((feature, index) => (
  <motion.li
    key={index}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className={styles.featureItem}
  >
    <span className={styles.bullet}>•</span>
    <span>{feature}</span>
  </motion.li>
))}
        </motion.div>
      </div>
    </>
  );
};

export default SmartEyeSuiteClient;