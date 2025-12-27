import React from 'react';

import styles from '@/styles/Visitor-Managment/KeyFeatures.module.css';

const features = [
  {
    title: 'Pre-Appointment',
    description: 'Mandatory pre-appointment system where hosts can provide visitor details in advance, saving time and enhancing security.',
    icon: '📅'
  },
  {
    title: 'OTP Verification',
    description: 'Secure check-in and check-out process using OTP verification to ensure accurate visitor tracking and data integrity.',
    icon: '🔐'
  },
  {
    title: 'Host Approval System',
    description: 'Hosts can approve or deny visitor requests before pass generation using the Allow/Deny feature.',
    icon: '✅'
  },
  {
    title: 'Overstay Alerts',
    description: 'Automatic notifications to hosts and security personnel when visitors exceed their scheduled meeting duration.',
    icon: '⏰'
  },
  {
    title: 'Visitor Identification',
    description: 'Comprehensive ID capture and storage for enhanced security and future reference.',
    icon: '📷'
  },
  {
    title: 'Frequent Visitor Management',
    description: 'Streamlined process for repeat visitors with automatic retrieval of previous visit information.',
    icon: '🔄'
  },
  {
    title: 'Customizable Solution',
    description: 'Tailor-made security solutions to fit your specific requirements and budget.',
    icon: '⚙️'
  },
  {
    title: 'Comprehensive Reporting',
    description: 'Generate detailed visitor reports with check-in/out times and visit purposes for any time period.',
    icon: '📈'
  }
];

const KeyFeatures = () => {
  return (
    <>
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
