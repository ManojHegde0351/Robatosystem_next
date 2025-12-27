import React from 'react';
import styles from '@/styles/industry/weighbridge-management/HardwareComponents.module.css';
import Image from 'next/image';

const hardwareItems = [
  { title: 'Control Panel', image: '/images/industry4.0/weighbridge/control-panel.webp' },
  { title: 'RFID Reader / ANPR Camera', image: '/images/industry4.0/weighbridge/rfi-wms.webp' },
  { title: 'Vehicle Detector', image: '/images/industry4.0/weighbridge/loop-detector-wms.webp' },
  { title: 'Boom Barrier', image: '/images/industry4.0/weighbridge/safety-boom-barriers-wms.webp' },
  { title: 'Traffic Lights', image: '/images/industry4.0/weighbridge/traffic-wms.webp' },
  { title: 'LED Display', image: '/images/industry4.0/weighbridge/jumbo-display-wms.webp' },
  { title: 'Announcement System', image: '/images/industry4.0/weighbridge/annousment-wms.webp' }
];

const HardwareComponents = () => {
  return (
    <section className={styles.section} id="hardware-components">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Hardware Components</h2>
        <div className={styles.grid}>
          {hardwareItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareComponents;
