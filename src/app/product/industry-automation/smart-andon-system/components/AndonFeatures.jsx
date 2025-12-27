// AndonFeatures.jsx
import React from 'react';
import AndonFeaturesClient from './AndonFeatures.client';
import styles from '@/styles/industry/smart-andon/AndonFeatures.module.css';

const getFeatures = () => [
  {
    type: 'SMART',
    title: 'Pendant / Tablet / HMI',
    description: 'Advanced Industry 4.0 automation solutions with cutting-edge technology'
  },
  {
    type: 'AVAILABILITY',
    title: 'Remote Monitoring',
    description: 'Monitor your production floor from anywhere, anytime with real-time updates.'
  },
  {
    type: 'EASY',
    title: 'Plug N Play Installation',
    description: 'Quick and simple setup to get your system up and running in no time.'
  },
  {
    type: 'MULTI MODE',
    title: 'WiFi / Ethernet / Zigbee / Modbus',
    description: 'Flexible connectivity options to suit your existing infrastructure.'
  },
  {
    type: 'REAL TIME',
    title: 'Display / Audio / Tower Light',
    description: 'Multiple alert systems to ensure no critical notification is missed.'
  },
  {
    type: 'ANALYTICS',
    title: 'Admin Reports',
    description: 'Comprehensive reporting tools for data-driven decision making.'
  }
];

const AndonFeatures = () => {
  const features = getFeatures();
  const sectionTitle = "FEATURES";
  const sectionDescription = "Advanced Industry 4.0 automation solutions with cutting-edge technology";

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <AndonFeaturesClient 
          features={features} 
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />
      </div>
    </section>
  );
};

export default AndonFeatures;