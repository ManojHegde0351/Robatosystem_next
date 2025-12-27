'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { services } from './WebDevelopmentServices';
import styles from '@/styles/Agile-software-development/WebDevelopment/webDevelopment.module.css';

const WebDevelopmentServicesClient = () => {
  return (
    <div className={styles.servicesWrapper}>
      <motion.div 
        className={styles.servicesContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Web Application Development Service Offerings</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={styles.serviceCard}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.serviceHeader}>
                {service.icon}
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className={styles.servicesImageContainer}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image 
          src="/images/AgileSoftwareDevelopment/webapplication/WebDevelopment-Service.webp" 
          alt="Web Development Services"
          width={600}
          height={800}
          className={styles.servicesImage}
          priority
        />
      </motion.div>
    </div>
  );
};

export default WebDevelopmentServicesClient;
