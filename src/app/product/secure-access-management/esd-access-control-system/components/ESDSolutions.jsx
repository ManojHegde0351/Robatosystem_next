import React from 'react';
import styles from '@/styles/ESD-Access-Control/ESDSolutions.module.css';
import Image from 'next/image';

const ESDSolutions = () => {
  return (
    <section className={styles.solutionsSection}>
      <div className={styles.container}>
        <div className={styles.solutionsContent}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>ESD Access Control System: A Way Out</h2>
            <p className={styles.introText}>
              Fully automatic software controlled ESD turnstile access control system from ROBATO SYSTEMS solved all the risks involved on EPA from ESD charged human body. Admin controlled software to register the different types of users (Direct Staff, Indirect Staff, Visitor) with applicable access policy (ESD test required on every entry, one ESD test per day and so on). Only registered users can get access to EPA after completely follow the entry procedure defined below.
            </p>
            
            <div className={styles.solutionsList}>
              <h3 className={styles.solutionsTitle}>ROBATO SYSTEMS has developed two solutions for ESD Access Control System:</h3>
              
              <div className={styles.solutionItem}>
                <div className={styles.solutionBullet}>•</div>
                <div>
                  <h4>Integrated ESD Turnstile Access Control System:</h4>
                  <p>Single ESD Combo Tester and ESD Foot plate is integrated on turnstile / flap barrier along with Proximity Card Reader.</p>
                </div>
              </div>
              
              <div className={styles.solutionItem}>
                <div className={styles.solutionBullet}>•</div>
                <div>
                  <h4>Distributed ESD Turnstile Access Control System:</h4>
                  <p>Multiple ESD combo Testers and Proximity Card Readers can be integrated with ESD turnstile / flap barrier / ESD gate.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <Image 
              src="/images/SecureAccessManagement/Solution.webp" 
              alt="ESD Access Control System Solutions"
              width={500}
              height={400}
              className={styles.solutionImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESDSolutions;
