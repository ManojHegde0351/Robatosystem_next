

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/BarcodeCardAccess/TouchlessSolution.module.css';

const TouchlessSolution = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>QRcode Based Touchless Solution for All</h2>
        
        <div className={styles.solutionsGrid}>
          {/* Visitor Management Section */}
          <div className={styles.solutionCard}>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>Visitor QRcode Access Control System</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Company Visitor Management System</li>
                <li className={styles.featureItem}>Zoo Visitor Management System</li>
                <li className={styles.featureItem}>Society Visitor Management System</li>
                <li className={styles.featureItem}>School Visitor Management System</li>
                <li className={styles.featureItem}>Whole Sale Shop / Mall Visitor Management System</li>
              </ul>
            </div>
            <div className={styles.solutionImage}>
              <Image
                src="/images/SecureAccessManagement/Barcode access Management/Visitor QRcode Access Control System.jpg"
                alt="Visitor Management System"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>

          {/* Employee Management Section */}
          <div className={`${styles.solutionCard} ${styles.reverse}`}>
            <div className={styles.solutionContent}>
              <h3 className={styles.solutionTitle}>Employee QRcode Access & Attendance System</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Employee Entry & Exit Control System.</li>
                <li className={styles.featureItem}>Employee Attendance Management System.</li>
                <li className={styles.featureItem}>Mobile Application for Employee Unique.</li>
                <li className={styles.featureItem}>Paper Printing QRcode for employees.</li>
                <li className={styles.featureItem}>Record of Every Entry & Exit.</li>
                <li className={styles.featureItem}>Attendance Management of Employees.</li>
                <li className={styles.featureItem}>Integration with Existing Attendance System.</li>
              </ul>
            </div>
            <div className={styles.solutionImage}>
              <Image
                src="/images/SecureAccessManagement/Barcode access Management/Employee_QRcode_Access_Attendance_System.jpg"
                alt="Employee Access & Attendance System"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className={styles.specialNote}>
          <h3 className={styles.noteTitle}>Special Note</h3>
          <p className={styles.noteText}>
            Our QRcode Access Control solution can be integrated with any type of access gate including 
            <strong> Tripod Gates, Turnstile Gates, Magnetic Door Locks</strong>, and more. This flexibility 
            ensures seamless compatibility with your existing security infrastructure.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default TouchlessSolution;
