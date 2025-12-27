'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/parking/led/LEDParkingIntro.module.css';

const LEDParkingIntroClient = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.ledParkingIntro}>
      <div className={styles.container}>
        <motion.div
          className={styles.fullWidthContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.sectionTitle}>{content.title}</h1>
          <div className={`${styles.textContent} ${isExpanded ? styles.expanded : ''}`}>
            {content.paragraphs.map((paragraph, index) => (
              (isExpanded || index < 2) && (
                <p key={index}>{paragraph}</p>
              )
            ))}
            <button 
              onClick={toggleExpand} 
              className={styles.readMoreButton}
              suppressHydrationWarning
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LEDParkingIntroClient;
