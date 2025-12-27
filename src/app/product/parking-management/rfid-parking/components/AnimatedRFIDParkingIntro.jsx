'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/parking/rfid/RFIDParkingIntro.module.css';

const AnimatedRFIDParkingIntro = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{title}</h2>
          <div className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button onClick={toggleExpand} className={styles.readMoreButton}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedRFIDParkingIntro;
