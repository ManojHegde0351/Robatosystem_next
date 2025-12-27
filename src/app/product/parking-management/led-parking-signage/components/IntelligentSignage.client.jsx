'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/styles/parking/led/LEDParkingSignage.module.css';

const IntelligentSignage = () => {
  const features = [
    'Customizable designs',
    'Real-time information on the availability status of parking facility spaces',
    'High visibility LEDs with adjustable intensity',
    'Low power consumption',
    'Suitable for indoor and outdoor environments'
  ];

  return (
    <section className={styles.intelligentSignage}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            Intelligent Signage for Multi-Level Parking
          </h2>

          <div className={styles.description}>
            <p>
              Enhance the parking experience with the clever use of digital
              technology and attract new customers, grow your market share and
              increase revenue.
            </p>

            <p>
              Robato Systems takes pride in our capability to deliver customized
              digital parking signage solutions for each of our clients. Our
              smart digital technology embodies innovation for car parks,
              ensuring our clients are delivering key messages in a visually
              engaging and effective manner to improve the customer experience.
            </p>
          </div>

          <div className={styles.features}>
            <h3 className={styles.featuresTitle}>Key Features:</h3>

            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntelligentSignage;
