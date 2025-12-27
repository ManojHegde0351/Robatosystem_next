'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/parking/rfid/ParkingBenefits.module.css';

const AnimatedParkingBenefits = ({ benefits }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>RFID Automatic Parking Benefits to Owners & Motorists</h2>
        </motion.div>
        
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe 
              width="712" 
              height="418" 
              src="https://www.youtube.com/embed/Ado6QLzk0mc" 
              title="RFID Automatic Car Parking System" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.benefitsList}>
          <h3>Key Benefits:</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={styles.benefitIcon}>✓</div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mixed Parking System Section */}
        <div className={styles.mixedParkingSection}>
          <div className={styles.mixedParkingContent}>
            <motion.div 
              className={styles.mixedParkingText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Mixed Automatic Parking System for Corporate Offices</h2>
              <p>Mixed Parking solution for multiple corporates in single parking area where multiple companies are using common parking area. If you face a problem to manage mixed parking lots that can used by several companies in a building then we have an advance RFID parking solution for you. Define the maximum parking lots limit to each company and deploy our Robato Systems RFID Mixed Automatic Parking Solution. RFID Mixed Parking System can automatically manages the vehicle entry and exit of different companies as per defined parking lots limit.</p>
              <p>If parking lots occupied limit reach to maximum for specific company then no vehicle registered with company get entry to parking system. However, other companies vehicle can get automatic entry to parking area if there parking lots still not fully occupied or reach to maximum limit.</p>
            </motion.div>
            <motion.div 
              className={styles.mixedParkingImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/products/mixed-parking.webp"
                alt="Mixed Corporate Parking Solution"
                width={500}
                height={350}
                className={styles.mixedImage}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedParkingBenefits;
