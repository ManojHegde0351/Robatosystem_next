
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/parking/university/ParkingGuidance.module.css';

const ParkingGuidance = () => {
  return (
    <section className={styles.parkingGuidance}>
      <div className={styles.container}>
        {/* Section 1: On-campus car park management */}
        <div className={styles.section}>
          <div 
            className={styles.contentWrapper}
           
          >
            <div className={styles.textContent}>
              <h2>On-campus car park management</h2>
              <p>
                Smart parking system offers car parking solutions to universities and educational facilities according to the inherent requirements of campuses and minimize the potential pitfalls particular for these sites.
              </p>
              <p>
                Smart Parking system features a range of sensing options to manage the staff, student and visitor parking areas efficiently and meet the requirements of the individual car parks.
              </p>
              <p>
                The sensors embedded in the Smart Parking systems send individual bay status data to our Smart cloud system and feed the information back to the site to be displayed as a live feed on digital LED guidance signage.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/products/university-parking.webp" 
                alt="University Parking Management Dashboard"
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 2: Dashboard Management */}
        <div className={`${styles.section} ${styles.sectionAlt}`}>
          <motion.div 
            className={`${styles.contentWrapper} ${styles.reverse}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.textContent}>
              <h2>Manage the site from one dashboard</h2>
              <p>
                The Smart Cloud system is used to integrate all the current systems and platforms to provide all campus management information on one platform. It is also programmed to gather information for almost any other sensor on site and can merge different services such as public WiFi, air quality and surveillance.
              </p>
              <p>
                We can also customize an app for the parking site which includes spots availability, parking condition and tariffs, directions and more.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/products/university-Parking2.webp" 
                alt="University Parking Management Dashboard Overview"
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParkingGuidance;
