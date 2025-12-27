'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SmartWasteAdvantages.module.css';

const SmartWasteAdvantages = () => {
  const advantages = [
    'GPS & GPRS based Tracking & monitoring movement of each vehicle on the website.',
    'Tracking & monitoring of bins collected from each location.',
    'RFID integrated vehicle entry and weighing of trucks through automatic controlled traffic lights.',
    'Traffic Light for weighing machine traffic control.',
    'LED Display to show daily vehicle count at the transfer station.',
    'Remotely live view of activities at transfer station with connected Cameras.',
    'Generate waste collection & activity reports of each vehicle.'
  ];

  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Advantages of Smart Solid Waste Management System</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.advantagesList}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className={styles.advantagesGrid}>
              {advantages.map((advantage, index) => (
                <motion.li 
                  key={index}
                  className={styles.advantageItem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className={styles.bullet}>•</span>
                  <span>{advantage}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image 
              src="/images/industry4.0/smart-waste-city/solid-waste-management.webp" 
              alt="Smart Waste Management Dashboard"
              width={600}
              height={500}
              className={styles.featureImage}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartWasteAdvantages;
