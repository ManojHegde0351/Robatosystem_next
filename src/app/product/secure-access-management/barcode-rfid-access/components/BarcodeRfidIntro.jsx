'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/BarcodeRfidAccess/Intro.module.css';

const BarcodeRfidIntro = () => {

  return (
    <section className={styles.introSection}>
      {/* Section 1: Main Intro */}
      <div className={`${styles.section} ${styles.sectionTextOnly}`}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h2 className={styles.mainTitle}>
              Barcode & RFID Access Control System
            </h2>
            <p className={styles.lead}>
              ROBATO comes with next generation solution for access control management of several market segments such as 
              membership based organizations, factories, Gyms, Hotels, Expo Centre, etc. Mobile Applications based access 
              control system. This system acts as basic locks and keys used in the homes to access entry but works with 
              Barcode & RFID technology.
            </p>
          </div>
        </div>
      </div>

      {/* Rest of your component */}
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.videoContainer}>
            <h2 className={styles.sectionTitle}>
              Barcode & RFID Access Control System
            </h2>
            <div className={styles.iframeWrapper}>
              <iframe 
                width="896" 
                height="504" 
                src="https://www.youtube.com/embed/GXbK3Gkt46A" 
                title="Barcode and Card Access Control System" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>

            {/* New Content Section */}
            <div className={styles.contentSection}>
              <div className={styles.contentWrapper}>
                <div className={styles.textContent}>
                  <h3 className={styles.contentTitle}>
                    Barcode Access Control System (BACS)
                  </h3>
                  <p>
                    Who, when and where get the access to specific area and physical assets? BACS is an advanced automatic solution to protect physical, IP and human possessions from unauthorized access.
                  </p>
                  
                  <ul className={styles.featureList}>
                    {[
                      "Saves smart card cost because now everyone has smartphones.",
                      "BACS integrates with any type of door like wooden, glass and metal.",
                      "Only registered authorized members will get the QR code from their service provider.",
                      "Mobile Applications can also be used to get valid unique QR code to get access from BACS.",
                      "BACS system can be integrated with cloud-based payment management module.",
                      "Very adaptive, modular, scalable and function-rich Access Control solution used for employee's attendance purpose as well.",
                      "Designed to meet access control needs of any organization regardless of its size, locations, layouts, and timings.",
                      "Desktop application to generate the reports with several options in Excel and PDF format.",
                      "Customized access policies for different types of employees supported by BACS such as Direct Employee, Indirect Employee and Visitors.",
                      "This system works in online and offline mode. In offline mode, it has capability to store access logs that pushes to main server when system gets online.",
                      "Microsoft SQL Server or cloud based server used as a server database.",
                      "Auto generated email feature to send day access report on predefined emails."
                    ].map((item, index) => (
                      <li 
                        key={index}
                        className={styles.featureItem}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className={styles.imageWrapper}
                >
                  <Image
                    src="/images/SecureAccessManagement/Barcode access Management/Barcode_Access_Control_System.webp"
                    alt="Barcode Access Control System"
                    width={500}
                    height={600}
                    className={styles.featureImage}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Card Access Control System Section */}
            <div 
              className={styles.cardAccessSection}
            >
              <div className={styles.cardAccessWrapper}>
                <div 
                  className={styles.cardAccessImageWrapper}
                >
                  <Image
                    src="/images/SecureAccessManagement/Barcode access Management/Card_Access_Control_System.webp"
                    alt="Card Access Control System"
                    width={500}
                    height={600}
                    className={styles.cardAccessImage}
                    priority
                  />
                </div>

                <div className={styles.cardAccessContent}>
                  <h3 className={styles.contentTitle}>
                    Card Access Control System
                  </h3>
                  <p>
                    Robato Card Access Control System is the superlative automatic solution for all major worries of every size organization - small, medium, and large.
                  </p>
                  
                  <ul className={styles.featureList}>
                    {[
                      "Superlative automatic solution to protect physical, IP and human possessions from unauthorized access.",
                      "Integrates with any type of door like wooden, glass and metal.",
                      "Very adaptive, modular, scalable and function-rich Access Control solution used for employee's attendance purpose as well.",
                      "Designed to meet access control needs of any organization regardless of its size, locations, layouts, and timings.",
                      "Full range of value-added services like Anti-Pass back, 2-Person rule, First-In User, Blocked Users, Door Auto Re-lock, Guard Tour, Man-Trap.",
                      "Smart Card based Identification ensures Foolproof security of physical assets and safety of employees.",
                      "Desktop application to generate the reports with several options in Excel and PDF format.",
                      "Customized access policies for different types of employees supported by Card Access Control System such as Direct Employee, Indirect Employee and Visitors.",
                      "This system works in online and offline mode. In offline mode, it has capability to store access logs that pushes to main server when system gets online.",
                      "Microsoft SQL Server or cloud based server used as a server database.",
                      "Auto generated email feature to send day access report on predefined emails."
                    ].map((item, index) => (
                      <li 
                        key={`card-${index}`}
                        className={styles.featureItem}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarcodeRfidIntro;