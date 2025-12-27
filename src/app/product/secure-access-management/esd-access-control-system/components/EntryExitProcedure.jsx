
import React from 'react';
import styles from '@/styles/ESD-Access-Control/EntryExitProcedure.module.css';
import Image from 'next/image';

const EntryExitProcedure = () => {
  return (
    <section className={styles.procedureSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entry & Exit Procedure</h2>
        
        {/* Combined Content with Image on Right */}
        <div className={styles.combinedContainer}>
          {/* Content Section */}
          <div className={styles.contentSection}>
            {/* Entry Procedure */}
            <div className={`${styles.procedureCard} ${styles.entryCard}`}>
              <div className={styles.procedureHeader}>
                <div className={`${styles.procedureIcon} ${styles.entryIcon}`}>→</div>
                <h3>Entry Procedure</h3>
              </div>
              <div className={styles.procedureContent}>
                <ol className={styles.procedureSteps}>
                  <li>Punch the Card on card reader embedded on ESD Turnstile / ESD Tripod / ESD Tester Stand / ESD Gate.</li>
                  <li>User should be already registered in SQL database by Admin using ESD Access Management Software.</li>
                  <li>User do ESD test after properly standing on ESD combo Tester stand.</li>
                  <li>If ESD test result is PASS then only then user will get access from ESD Turnstile / ESD Tripod / ESD Tester Stand / ESD Gate.</li>
                  <li>Automatic ESD test results and entry logs get saved into SQL Server Database.</li>
                </ol>
              </div>
            </div>

            {/* Exit Procedure */}
            <div className={`${styles.procedureCard} ${styles.exitCard}`}>
              <div className={styles.procedureHeader}>
                <div className={`${styles.procedureIcon} ${styles.exitIcon}`}>←</div>
                <h3>Exit Procedure</h3>
              </div>
              <div className={styles.procedureContent}>
                <ol className={styles.procedureSteps}>
                  <li>ROBATO SYSTEMS provide few options for user exit from EPA. Proximity Card Reader, Infrared Sensors and Push Button.</li>
                  <li>Exit logs of users from ESD Protected Area can only be provided If card punch required at time of exit from ESD turnstile gate.</li>
                  <li>Infrared Sensors embedded on flap barrier gate for exit purpose.</li>
                  <li>Push button can also be used for exit purpose.</li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/SecureAccessManagement/benefit.webp"
                alt="ESD Entry & Exit Procedure"
                width={500}
                height={700}
                layout="responsive"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryExitProcedure;