import React from 'react';
import styles from '@/styles/ESD-Access-Control/ESDGatesOptions.module.css';
import Image from 'next/image';

const ESDGatesOptions = () => {
  const gateOptions = [
    {
      id: 1,
      title: 'ESD Full Height Flap Barrier',
      image: '/images/SecureAccessManagement/esd_access_control_system.webp',
      alt: 'ESD Full Height Flap Barrier',
      description: 'High-security access control with full-height protection',
    },
    {
      id: 2,
      title: 'ESD Flap Barrier',
      image: '/images/SecureAccessManagement/esd_access_control_system1.webp',
      alt: 'ESD Flap Barrier',
      description: 'Standard flap barrier with ESD protection',
    },
    {
      id: 3,
      title: 'ESD Turnstile Gate',
      image: '/images/SecureAccessManagement/esd_access_control_system2.webp',
      alt: 'ESD Turnstile Gate',
      description: 'High-throughput turnstile solution with ESD protection',
    },
  ];

  return (
    <section className={styles.gatesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ESD Access Control Gates Options</h2>
        <div className={styles.gatesGrid}>
          {gateOptions.map((gate) => (
            <div key={gate.id} className={styles.gateCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={gate.image}
                  alt={gate.alt}
                  width={350}
                  height={250}
                  className={styles.gateImage}
                />
              </div>
              <h3 className={styles.gateTitle}>{gate.title}</h3>
              <p className={styles.gateDescription}>{gate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESDGatesOptions;
