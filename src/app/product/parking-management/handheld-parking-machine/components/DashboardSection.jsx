'use client';

import React from 'react';
import Image from 'next/image';
import useCarousel from '@/hooks/useCarousel';
import styles from '@/styles/parking/handheld/DashboardSection.module.css';

const DashboardSection = () => {
  const images = [
    '/images/products/HandledParkingMachine/parking_handheld_POS_machine.webp',
    '/images/products/HandledParkingMachine/parking_management_system_portal.webp',
    '/images/products/HandledParkingMachine/Smart_Parking_Web_Portal_Reports.webp'
  ];
  
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(images, 5000);

  const features = [
    'Online Dashboard for parking owner',
    'Efficient use of parking space',
    'Real time availability of parking lots',
    'Money Collection Reports: Day, Month, Year wise',
    'Visitors Reports: Day, Month, Year wise',
    'Vehicle Reports: Vehicle, Day, Week, Month wise',
    'Device management from SaaS dashboard',
    'Add parking fee tariff remotely to POS terminal',
    'Add shift and operators of POS device'
  ];

  return (
    <section className={styles.dashboardSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Parking Dashboard Countless Possibilities</h2>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className={styles.carouselSlide}>
                <Image
                  src={img}
                  alt={`Dashboard feature ${index + 1}`}
                  width={600}
                  height={400}
                  className={styles.carouselImage}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <div className={styles.carouselDots}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;