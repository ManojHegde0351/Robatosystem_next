import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Visitor-Managment/BenefitsSection.module.css';

const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsContent}>
          <div className={styles.benefitsImage}>
            <Image
              src="/images/VisitorsManagment/visitor_management_system_features.webp"
              alt="Visitor Management System"
              width={600}
              height={500}
              className={styles.featureImage}
            />
          </div>
          <div className={styles.benefitsText}>
            <h2 className={styles.sectionTitle}>Benefits of Visitor Management System</h2>
            <p className={styles.benefitsIntro}>
              Robatos Visitor Management System is the best-fit solution to overcome all traditional problems.
            </p>
            <ul className={styles.benefitsList}>
              <li>This system acts as basic locks and keys used in the homes to access entry but works with Barcodes.</li>
              <li>Visitor Management System is totally controlled by computers, barcode scanner and readers to provide the access that provides ease of management, enhances security, and improved functionality over the manual systems.</li>
              <li>Provides automatic counts of the visitors.</li>
              <li>Visitor photograph saved in server database with entry and exit time along with visiting purpose.</li>
              <li>Company guard provides barcode enabled Visitor paper slip to visitor using our VMS software.</li>
            </ul>
            <button className={styles.quoteButton}>
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
