// SmartEyeSuite.jsx
import React from 'react';
import SmartEyeSuiteClient from './SmartEyeSuite.client';
import styles from '@/styles/industry/smart-city-waste/SmartEyeSuite.module.css';

const getDesktopFeatures = () => [
  'Automation controls at transfer station',
  'Load waste collected data to cloud server',
  'RFID Boom Gate open & closing',
  'Automatic entry & exit of garbage vehicle',
  'Data collection from weighing bridges',
  'Automatic solid waste weight calculation',
  'Traffic light controls',
  'Solid waste management data storage in local database',
  'Camera Control for real-time monitoring'
];

const getWebPortalFeatures = () => [
  'Live health status of each device of transfer stations',
  'Real-time view of transfer stations by smart cameras',
  'Remotely register vehicles for transfer stations',
  'Real-time tracking of garbage trucks',
  'Weight collected by each truck',
  'Several types of reports: daywise, timewise, vehicle wise, etc.',
  'REST APIs for external system integration'
];

const SmartEyeSuite = () => {
  const desktopFeatures = getDesktopFeatures();
  const webPortalFeatures = getWebPortalFeatures();
  const title = "SmartEye - A Software Suite of Solid Waste Management";
  const description = "Robato's SmartEye is a complete software package for solid waste management for automation controls at transfer station and online dashboard application for smart cities central office to watch and control the solid waste management activities.";


  const images = {
    desktopApp: "/images/industry4.0/smart-waste-city/Dashboard_smart_solid_waste_management.webp",
    webPortal: "/images/industry4.0/smart-waste-city/Reports_smart-cities-solid-waste-management.webp"
  };

  return (
    <section className={styles.smartEyeSection} id="smarteye">
      <div className={styles.container}>
        <SmartEyeSuiteClient 
          title={title}
          description={description}
          desktopFeatures={desktopFeatures}
          webPortalFeatures={webPortalFeatures}
          images={images}
        />
      </div>
    </section>
  );
};

export default SmartEyeSuite;