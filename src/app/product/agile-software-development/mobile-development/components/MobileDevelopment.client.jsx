'use client'
import React from 'react';
import { 
  FaApple, 
  FaAndroid, 
  FaWindows, 
  FaPencilRuler 
} from 'react-icons/fa';
import { useAnimatedList } from '@/hooks/useAnimatedList';
import styles from '@/styles/Agile-software-development/MobileDevelopment/mobileDevelopment.module.css';

const services = [
  {
    id: 1,
    name: 'iOS / Phone app development',
    icon: <FaApple size={24} />,
  },
  {
    id: 2,
    name: 'Android App development',
    icon: <FaAndroid size={24} />,
  },
  {
    id: 3,
    name: 'Windows app development',
    icon: <FaWindows size={24} />,
  },
  {
    id: 4,
    name: 'UI/UX design',
    icon: <FaPencilRuler size={24} />,
  }
];

const MobileDevelopmentServicesCSR = () => {
  const servicesRef = useAnimatedList({
    threshold: 0.1,
    initialOpacity: 0,
    initialTranslate: '50px',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  });

  return (
    <div ref={servicesRef} className={styles.heroServicesList}>
      {services.map((service) => (
        <div key={service.id} className={styles.heroServiceItem}>
          <span className={styles.heroServiceIcon}>{service.icon}</span>
          <span className={styles.heroServiceName}>{service.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MobileDevelopmentServicesCSR;
