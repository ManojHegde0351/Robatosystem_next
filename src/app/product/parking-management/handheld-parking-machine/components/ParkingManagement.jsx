import React from 'react';

import styles from '@/styles/parking/handheld/ParkingManagement.module.css';


const ParkingManagement = () => {
  const features = [
    {
      title: 'Digital Enforcement',
      description: 'Digital enforcement to manage parking efficiently and reduce manual intervention.',
     
    },
    {
      title: 'User-friendly Interface',
      description: 'Easy-to-use parking application designed for parking operators of all skill levels.',
   
    },
    {
      title: 'Boom Barrier Integration',
      description: 'Seamlessly connect POS device with parking boom barriers for smooth operations.',
     
    },
    {
      title: 'Real-time Updates',
      description: 'Push parking sales logs and live status of available parking slots in real-time.',
    
    },
    {
      title: 'Secure Access',
      description: 'Password protected admin dashboard for secure access and management.',
     
    },
    {
      title: 'QR Code System',
      description: 'Generate and scan unique QR codes on parking tickets for easy management.',
  
    },
    {
      title: 'Ticket Management',
      description: 'Handle lost tickets by searching with vehicle number and automatic cost calculation.',
     
    },
    {
      title: 'Tariff Management',
      description: 'Easily manage parking tariffs directly on the device.',
   
    },
    {
      title: 'Comprehensive Reporting',
      description: 'Generate online and offline sales reports for better insights.',
     
    },
    {
      title: 'Shift Controls',
      description: 'Operator shift controls for better staff management.',
   
    },
    {
      title: 'Special Controls',
      description: 'Special controls for parking managers to handle exceptions.',
    
    },
    {
      title: 'Centralized Management',
      description: 'Device management from SaaS Platform for centralized control.',
     
    }
  ];

  return (
    <section className={styles.managementSection}>
      

        <div className={styles.videoSection}>
          <h3 className={styles.videoTitle}>See It In Action</h3>
          <div className={styles.videoContainer}>
<iframe
  src="https://www.youtube.com/embed/aLvzP37AX4w"
  title="Android Handheld Parking Machine"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className={styles.videoIframe}
></iframe>
          </div>
        </div>
        <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>Boost your Sales with Parking Applications</h2>
          <p className={styles.sectionSubtitle}>Comprehensive solution for modern parking management</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default ParkingManagement;