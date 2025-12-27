

import React from 'react';
import styles from '@/styles/Visitor-Managment/VisitorManagementIntro.module.css';

const VisitorManagementIntro = () => {
  return (
    <section className={styles.introSection}>
      <div className="container">
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <h2>Visitor Management System</h2>
            <p className={styles.firstParagraph}>
              The visitor management system helps with the effective control of the visitors in a particular area, 
              maintaining records of the visitors along with the issuance of gate passes to the visitors. 
              It helps in managing the security of an area by preventing entry of unauthorized personals in the premises.
            </p>
            <p className={styles.secondParagraph}>
              In traditional way, organizations are maintaining manual register entries for Visitor Management 
              which is time taking and difficult to maintain. It is almost impossible to generate visitors entries 
              and exit reports after months end or year-end. No visual proofs maintained for visitors, which plays 
              vital role in security of an organizations.
            </p>
          </div>
          
        </div>
        
        
      </div>
    </section>
  );
};

export default VisitorManagementIntro;
