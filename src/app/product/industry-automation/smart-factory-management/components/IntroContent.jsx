import React from 'react';
import Image from 'next/image';
import styles from '@/styles/industry/SmartFactoryManagment/IntroContent.module.css';

const IntroContent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Process Management System Section */}
        <div className={`${styles.contentSection} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Process Management System</h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionText}>
              Process Automation Systems (PAS) are big-ticket items. Whether they are part of new plant construction, an upgrade to an existing facility, or a long-planned plant expansion, deciding how to choose and implement them takes time, money, and plenty of control expertise.
            </p>
            <p className={styles.sectionText}>
              They can be implemented in-house, through a system integrator, and/or in conjunction with a PAS supplier. Along with high price comes high-return expectations on the part of companies and control engineers. Perhaps ironically, some respondents indicate they are not getting the most from some PAS features because of too-few onsite personnel.
            </p>
            <p className={styles.sectionText}>
              Process Automation Systems has delivered process automation systems to Fortune 500 companies in a wide range of markets, including industrial products, infrastructure, and semiconductors to name a few.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/industry4.0/process-managment/Process_Management_System_.webp"
              alt="Process Management System"
              width={600}
              height={400}
              className={styles.sectionImage}
            />
          </div>
        </div>

        {/* Area of Applications Section */}
        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Area of Applications</h2>
            <div className={styles.divider}></div>
            <ul className={styles.featureList}>
              <li>Multiple machines used in the manufacture of industrial sensors, including pressure test systems, high pressure cleaning systems, and laser welders.</li>
              <li>Robotic material handling system to support plastics development and interfacing to an oven.</li>
              <li>Robotic material handling system to support automated testing processes for plastics development.</li>
              <li>Full-line web handling and assembly system to convert raw material into final product using ultrasonic welding, pneumatic pick-place, stapling, and die cutting processes.</li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/industry4.0/process-managment/applications_process_management.jpg"
              alt="Area of Applications"
              width={600}
              height={400}
              className={styles.sectionImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
