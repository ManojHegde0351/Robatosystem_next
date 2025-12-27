// ESDChallenges.jsx
import React from 'react';
import styles from '@/styles/ESD-Access-Control/ESDChallenges.module.css';

const ESDChallenges = () => {
  const challenges = [
    'Human ESD shock damages electronic product/component on Production floor.',
    'ESD impacted product will fail in the field, leading to more product complaints and unsatisfied customers.',
    'Low Quality Product results in loss of business and revenue.',
    'No Control on Unauthorized access on Production floor.',
    'In Manual ESD testing system, there is tendency of employees to skip ESD test before getting access to ESD Protected Area (EPA).',
    'Negative impact on company Brand value.',
    'No records of ESD Tests done by employees, providing no help in ESD Audit process of production floor.',
    'On field product failure leads to unsatisfied customers.'
  ];

  return (
    <section className={styles.challengesSection}>
      <div className={styles.container}>
        {/* YouTube Video Section */}
        <div className={styles.videoContainer}>
          <h2 className={styles.sectionTitle}>See Our ESD Access Control in Action</h2>
          <div className={styles.videoWrapper}>
            <iframe 
              width="100%" 
              height="100%"
              src="https://www.youtube.com/embed/b86TtkG8WrU" 
              title="ESD Access Control System"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* Challenges Section */}
        <div className={styles.challengesContent}>
          <h2 className={styles.sectionTitle}>Challenges on Production Floor without ESD Control</h2>
          <div className={styles.challengesGrid}>
            {challenges.map((challenge, index) => (
              <div key={index} className={styles.challengeCard}>
                <div className={styles.challengeNumber}>{index + 1}</div>
                <p className={styles.challengeText}>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESDChallenges;