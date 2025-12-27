import React from 'react';
import styles from '@/styles/Queue-Management/KioskBasedQueueManagement.module.css';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const KioskBasedQueueManagement = () => {
  const kioskFeatures = [
    'User Friendly kiosk machine issued paper slip to users on entering required details.',
    'Paper slip contains his or her token number along with approximate waiting time.',
    'Local Centralized server software manages the separate queue for different departments or services in single premises.',
    'LED Display boards to show current serving token number.',
    'Client software for operators to serve the people as per their queue token sequence.',
    'Several types of reports generated for managerial purpose.',
    'Hassle free people queue management making happy and well-managed work place.',
    'SMS feature is optional that we give on customer demand.'
  ];

  const mobileFeatures = [
    'Web Application / Mobile Application provided for end users to book an appointment as per their convenient time and current availability.',
    'Digital token assigned to end user with time details with Print feature and SMS.',
    'User will reach to service premises along with printed slip or SMS received on mobile phone.',
    'Digital promotion is also available in cloud based Queue Management System.',
    'Cloud connected centralized software to manage the separate queue for different departments or services in single premises.',
    'This system provides direct communication with the visitors/ customers by audio-visual means and acts as a user-friendly interface between the managing agents and customers.',
    'Client software for agents to serve the people as per their queue token sequence.',
    'Several types of reports generated for managerial purpose.',
    'Hassle free people queue management making happy and well-managed work place.'
  ];

  return (
    <div className={styles.container}>
      {/* Kiosk Based Queue Management Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Kiosk Based Queue Management System</h2>
          <ul className={styles.featuresList}>
            {kioskFeatures.map((feature, index) => (
              <li key={`kiosk-${index}`}>
                <FaCheck className={styles.checkIcon} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/VisitorsManagment/QueueManagment/Kiosk_based_QueueManagementSystem.webp" 
            alt="Kiosk Based Queue Management System"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
      </section>

      {/* Mobile Based Queue Management Section */}
      <section className={`${styles.section} ${styles.mobileSection}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/VisitorsManagment/QueueManagment/Mobile_based_QueueManagementSystem.webp" 
            alt="Mobile Based Queue Management System"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Mobile Based Queue Management System</h2>
          <ul className={styles.featuresList}>
            {mobileFeatures.map((feature, index) => (
              <li key={`mobile-${index}`}>
                <FaCheck className={styles.checkIcon} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KioskBasedQueueManagement;
