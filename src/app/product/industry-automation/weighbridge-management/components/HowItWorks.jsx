import React from 'react';
import Image from 'next/image';
import styles from '../../../../../styles/industry/weighbridge-management/HowItWorks.module.css';

const HowItWorks = () => {
  const phases = [
    {
      id: 1,
      title: 'Authorization',
      description: 'This is a fail-safe method to ensure that only authorized trucks enter the premises. Only after the data is captured from the RFID or the ANPR system does the boom barrier open, and the truck enters the weighbridge.',
      image: '/images/industry4.0/weighbridge/weigheye-phase1.png'
    },
    {
      id: 2,
      title: 'Positioning',
      description: 'Mispositioned trucks do not give accurate weighment, which would cause incorrect data storage and affect the supply chain. Our Unmanned System utilizes position sensors to ensure every truck weighment is accurate.',
      image: '/images/industry4.0/weighbridge/weigheye-phase2.png'
    },
    {
      id: 3,
      title: 'Weighment',
      description: 'CCTV/IP cameras enhance security and safety. The system automatically captures various images of the truck and stores them with the weighment data. After all data is stored, the barriers open, and the truck can leave.',
      image: '/images/industry4.0/weighbridge/weigheye-phase3.png'
    },
    {
      id: 4,
      title: 'Transaction Completion',
      description: 'After gross/tare weights are measured, automated text/email alerts are sent to relevant personnel. All information, including truck photos, is accessible on all platforms, including the software, cloud server, or ERP platform.',
      image: '/images/industry4.0/weighbridge/weigheye-phase4.png'
    }
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How Does an Unmanned System Work?</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.phases}>
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`${styles.phase} ${index % 2 === 0 ? styles.leftImage : styles.rightImage}`}
            >
              <div className={styles.phaseContent}>
                <div className={styles.phaseNumber}>0{phase.id}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDescription}>{phase.description}</p>
              </div>
              <div className={styles.phaseImage}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;