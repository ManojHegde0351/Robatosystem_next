
import React from 'react';
import AndonFeaturesListClient from './AndonFeaturesList.client';
import styles from '@/styles/industry/smart-andon/AndonFeaturesList.module.css';


const getFeatures = () => [
  'Role-based alarms to notify the correct person at the right time.',
  'Integrate with existing Andon lights system.',
  'Integrate with MES or ERP systems.',
  'Digital alerts on operator HMIs and factory floor displays.',
  'Built-in reporting to track alerts over time and response time.',
  'Indicates machine related and non-machine related issues.',
  'Real-Time production information available online Robato\'s Server or your server.',
  'Wide range of communication options: WiFi, Modbus, Ethernet LAN, Radio technology etc.'
];

const AndonFeaturesList = async () => {

  const features = getFeatures();
  
  return (
    <section className={styles.featuresListSection}>
      <div className={styles.container}>
      
        <AndonFeaturesListClient features={features} />
      </div>
    </section>
  );
};

export default AndonFeaturesList;