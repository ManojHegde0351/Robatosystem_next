

import React from 'react';
import styles from '@/styles/BarcodeCardAccess/BarcodeCardIntro.module.css';
import Image from 'next/image';

const BarcodeCardIntro = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>QRcode / Barcode Access & Attendance Solution</h2>
          <p className={styles.description}>
            ROBATO comes with next generation solution for access control management of several market segments 
            such as membership based organizations, factories, Gyms, Hotels, Expo Centre, etc. Mobile Applications 
            based access control system. This system acts as basic locks and keys used in the homes to access 
            entry but works with QRcode or Barcode.
          </p>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>Who, when and where get the access to specific area and physical assets?</h3>
            <p className={styles.description}>
              QRcode / Barcode access solution is an advanced automatic solution to protect physical, IP and human 
              possessions from unauthorized access.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Saves smart card cost because now everyone has smart phones.</li>
              <li className={styles.featureItem}>QRcode / Barcode access solution integrates with any type of door like wooden, glass and metal.</li>
              <li className={styles.featureItem}>Only registered authorized members will get the QRcode from their service provider.</li>
              <li className={styles.featureItem}>Mobile Applications can also be used to get valid unique QRcode for access.</li>
              <li className={styles.featureItem}>Can be integrated with cloud-based payment management module.</li>
              <li className={styles.featureItem}>Very adaptive, modular, scalable and function-rich Access Control solution used for employee attendance.</li>
              <li className={styles.featureItem}>Designed to meet access control needs of any organization regardless of its size, locations, layouts, and timings.</li>
              <li className={styles.featureItem}>Desktop application to generate reports with several options in Excel and PDF format.</li>
              <li className={styles.featureItem}>Customized access policies for different employee types (Direct Employee, Indirect Employee, and Visitors).</li>
              <li className={styles.featureItem}>Works in both online and offline modes with local log storage that syncs when back online.</li>
              <li className={styles.featureItem}>Uses Microsoft SQL Server or cloud-based server as the database.</li>
              <li className={styles.featureItem}>Auto-generated email feature to send daily access reports to predefined emails.</li>
            </ul>
          </div>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/SecureAccessManagement/Barcode access Management/Barcode_Access_Control_System.jpg"
                alt="Barcode Access Control System"
                width={500}
                height={600}
                className={styles.introImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarcodeCardIntro;