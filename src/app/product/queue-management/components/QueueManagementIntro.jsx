import React from 'react';
import styles from '../../../../styles/Queue-Management/QueueManagementIntro.module.css';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const QueueManagementIntro = () => {
  const benefits = [
    'Reduces customer wait and service time.',
    'Increases Customer Satisfaction by 30%.',
    'Zero irregular and haphazard queuing.',
    'Ensures seamless customer journey & experience.',
    'Increases performance statistics and enhance control over the services.',
    'Information of number of people entering the premises.',
    'Information of Queue Length, Average Wait Time, Operator Time and Total Wait Time.'
  ];

  const advantages = [
    'Leading Access Control Solution Provider.',
    '100% in-house designed Solution',
    'Open-end Hardware Integration.',
    'Huge satisfied customer base.',
    'Fully expandable, scalable.',
    'Flexible to integrate with 3rd Party software.'
  ];

  return (
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Queue & People Management System</h1>
      </div>
      
      {/* Benefits Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.sectionSubtitle}>Benefits of Smart Queue Management System</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheck className={styles.checkIcon} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/VisitorsManagment/QueueManagment/Benefits_QueueManagementSystem.webp" 
            alt="Queue Management Benefits"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className={`${styles.section} ${styles.advantagesSection}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/VisitorsManagment/QueueManagment/Advantages_QueueManagementSystem.webp" 
            alt="Robato Advantages"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.sectionSubtitle}>Advantages with Robato</h3>
          <ul className={styles.advantagesList}>
            {advantages.map((advantage, index) => (
              <li key={index}>
                <FaCheck className={styles.checkIcon} />
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QueueManagementIntro;
