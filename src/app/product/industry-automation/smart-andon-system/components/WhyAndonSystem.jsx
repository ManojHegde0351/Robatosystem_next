'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/industry/smart-andon/WhyAndonSystem.module.css';

const WhyAndonSystem = () => {
  const firstSectionPoints = [
    "It is very essential to manage the exact status of days schedule in real time for any manufacturing unit.",
    "Andon system locates the problem of the production unit in shorter time and creates huge savings by eliminating the speed loss.",
    "LabView based Andon Displays are a big change and innovation for the production lines as these create continuous communication with the line PLCs to know the exact status of the process.",
    "Andon systems contains in built algorithms to detects the problems (if arises) and highlights them on the visual display boards.",
    "All the production line data is recorded to MySQL database so that reports can be generated subsequently."
  ];

  const secondSectionPoints = [
    "In addition to the visual display system notification, another feature incorporated by Robato's is audio message alerts.",
    "Beside supporting partially to the sighted workers, it helps to those members of the team which are fixed on their assignments or have their sight impacted by wearable accessories.",
    "The integration of both audio and visual elements for notification to the users makes Smart Andon system a better product and more advanced.",
    "Moreover, the Smart Andon system can be tailored according to the need of the individual business.",
    "Our Smart Andon system is integrated by two main systems: Manufacturing Execution System (MES) or Enterprise Resource Planning (ERP) systems, the use of alarms to notify the right personnel about the specific issue, reporting of track signals and response times."
  ];

  return (
    <section className={styles.whyAndonSection}>
      <h2 className={styles.mainTitle}>Why Andon System required at production and manufacturing floor?</h2>
      
      {/* First Section - Image on Right */}
      <div className={`${styles.section} ${styles.imageRight}`}>
        <div className={styles.pointsContainer}>
          {firstSectionPoints.map((point, index) => (
            <motion.div 
              key={`first-${index}`}
              className={styles.point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.checkIcon}>✓</div>
              <p className={styles.pointText}>{point}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/industry4.0/SmartANDONSystem/Andon_Product1.webp"
            alt="Why Andon System is required in manufacturing"
            width={500}
            height={400}
            className={styles.image}
          />
        </motion.div>
      </div>

      {/* Second Section - Image on Left */}
      <div className={`${styles.section} ${styles.imageLeft}`}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.largeImageContainer}>
            <Image
              src="/images/industry4.0/SmartANDONSystem/Andon_product2.webp"
              alt="Audio Message Alerts in Smart Andon System"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`${styles.image} ${styles.largeImage}`}
              onError={(e) => {
                console.error('Image failed to load. Tried:', e.target.src);
                e.target.style.border = '2px solid red';
              }}
            />
          </div>
        </motion.div>
        <div className={styles.pointsContainer}>
          {secondSectionPoints.map((point, index) => (
            <motion.div 
              key={`second-${index}`}
              className={styles.point}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.checkIcon}>✓</div>
              <p className={styles.pointText}>{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAndonSystem;