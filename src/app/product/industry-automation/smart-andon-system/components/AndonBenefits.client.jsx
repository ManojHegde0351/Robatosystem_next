"use client";

import { motion } from 'framer-motion';
import styles from '@/styles/industry/smart-andon/AndonBenefits.module.css';

const benefits = [
  {
    title: 'Enhanced Communication',
    description: 'Improved communication among operators and engineers with digital signage, Andon lights, and email alerts.'
  },
  {
    title: 'Immediate Issue Resolution',
    description: 'Allows workers to alert decision-makers about production floor problems for immediate corrective action.'
  },
  {
    title: 'Quality Improvement',
    description: 'Enhances product quality and creates continuous improvement opportunities through real-time monitoring.'
  },
  {
    title: 'Reduced Downtime',
    description: 'Minimizes downtime to boost Overall Equipment Effectiveness (OEE) and supports quality improvement initiatives.'
  },
  {
    title: 'Increased Productivity',
    description: 'Boosts production levels and decreases waste through efficient monitoring and response systems.'
  },
  {
    title: 'Universal Connectivity',
    description: 'Connects to any modern CNC Machine with our smart control unit and FactoryVision Software via Ethernet, Modbus, WiFi, or Radio technology.'
  },
  {
    title: 'Real-time Data Processing',
    description: 'Robato\'s FactoryVision Software processes machine data in real-time and streams it securely to Robato\'s or your cloud server.'
  }
];

const AndonBenefitsClient = () => {
  return (
    <>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Andon Benefits: Get visibility into your production floor
      </motion.h2>
      
      <div className={styles.grid}>
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AndonBenefitsClient;
