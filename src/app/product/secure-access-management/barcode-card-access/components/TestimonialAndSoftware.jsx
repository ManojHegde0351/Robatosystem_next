

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/BarcodeCardAccess/TestimonialAndSoftware.module.css';

const TestimonialAndSoftware = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Testimonial Video Section */}
        <div className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>QRcode / Barcode / Card Access Control Testimonial</h2>
          <div className={styles.videoContainer}>
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
        </div>

        {/* Software Suite Section */}
        <div className={styles.softwareSection}>
          <h2 className={styles.sectionTitle}>QRcode / Barcode / Card Access Control Software Suite</h2>
          <div className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/SecureAccessManagement/Barcode access Management/secure_login.jpg"
                  alt="Secure Login Interface"
                  width={500}
                  height={350}
                  className={styles.softwareImage}
                />
                <div className={styles.imageOverlay}>
                  <h3>Secure Login</h3>
                </div>
              </div>
            </div>

            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/SecureAccessManagement/Barcode access Management/dashboard.jpg"
                  alt="Dashboard Interface"
                  width={500}
                  height={350}
                  className={styles.softwareImage}
                />
                <div className={styles.imageOverlay}>
                  <h3>Dashboard</h3>
                </div>
              </div>
            </div>

            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/SecureAccessManagement/Barcode access Management/visitor_pass_generation.png"
                  alt="Pass Generation Interface"
                  width={500}
                  height={350}
                  className={styles.softwareImage}
                />
                <div className={styles.imageOverlay}>
                  <h3>Pass Generation</h3>
                </div>
              </div>
            </div>

            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/SecureAccessManagement/Barcode access Management/report_management.jpg"
                  alt="Report Management Interface"
                  width={500}
                  height={350}
                  className={styles.softwareImage}
                />
                <div className={styles.imageOverlay}>
                  <h3>Report Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndSoftware;
