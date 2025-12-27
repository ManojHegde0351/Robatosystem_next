import React from 'react';
import styles from '@/styles/ESD-Access-Control/KeyFeatures.module.css';
import Image from 'next/image';

const KeyFeatures = () => {
  const features = [
    'Fully automatic system to restricted entries to the EPA to protect the electronic products from human ESD ghost.',
    'Only authorized person can get access to EPA after fully ESD test by ESD Access control system. Door opens after swiping EM card and footwear test passed.',
    'The Access gate allows bi-directional both entry with ESD Pass and exit, with IR sensors or by pressing a button.',
    'ESD result logs helps for audit purpose without putting any additional efforts.',
    'Desktop software to generate the reports with several options in Excel and PDF format.',
    'Microsoft SQL Server used as a server database to store all the access logs of users entries (Pass & Fail) to audit and managerial purposes.',
    'A bulk mode user registration is also available in application software to save the precious time.',
    'The ESD Access Controller equipped with LED\'s for Health indication of the system (connectivity status and errors).',
    'The ESD ACS can be integrated with attendance module; it can provide the access events served as Time Attendance data base to make many HR reports.',
    'Problem self-recovery and corrective measure ability.',
    'Anti-pinch function with UPS to satisfy firefighter requires, ensure user\'s safe.'
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Features of ESD Turnstile Access Control System</h2>
        <div className={styles.featuresContainer}>
          <div className={styles.featureImage}>
            <Image
              src="/images/SecureAccessManagement/About_Esd_System.webp"
              alt="ESD Turnstile Access Control System Features"
              width={500}
              height={600}
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.featuresList}>
            <ul className={styles.featuresUl}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <div className={styles.featureNumber}>{index + 1}.</div>
                  <div className={styles.featureText}>{feature}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
