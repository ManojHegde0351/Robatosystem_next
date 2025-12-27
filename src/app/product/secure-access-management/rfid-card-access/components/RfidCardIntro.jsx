

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/RfidCardAccess/Intro.module.css';

const RfidCardIntro = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2>RFID Card Access Control</h2>
          <p className={styles.lead}>
            Robato RFID Card Access Control is the superlative automatic solution for organizations of all sizes - small, medium, and large.
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <ul className={styles.featureList}>
              <li>RFID Card Access Control is the superlative automatic solution to protect physical, IP, and human possessions from unauthorized access.</li>
              <li>RFID Card Access Control integrates with any type of door like wooden, glass, and metal.</li>
              <li>Very adaptive, modular, scalable, and function-rich Access Control solution used for employee&apos;s attendance purpose as well.</li>
              <li>Design to meet access control needs of any organization regardless of its size, locations, layouts, and timings.</li>
              <li>Full range of value-added services like Anti-Pass back, 2-Person rule, First-In User, Blocked Users, Door Auto Re-lock, Guard Tour, Man-Trap.</li>
              <li>Smart Card based Identification ensures Foolproof security of physical assets and safety of employees.</li>
              <li>Desktop application to generate the reports with several options in Excel and PDF format.</li>
              <li>Customized access policies for different types of employees supported by RFID Card Access Control such as Direct Employee, Indirect Employee, and Visitors.</li>
              <li>This system works in online and offline mode. In offline mode, it has capability to store access logs that pushes to main server when system gets online.</li>
              <li>Microsoft SQL Server or cloud-based server used as a server database.</li>
              <li>Auto-generated email feature to send day access report on predefined emails.</li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/SecureAccessManagement/Barcode access Management/Card_Access_Control_System.jpg"
              alt="RFID Card Access Control System"
              width={600}
              height={400}
              className={styles.featureImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RfidCardIntro;
