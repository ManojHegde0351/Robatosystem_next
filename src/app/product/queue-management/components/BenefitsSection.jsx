import React from 'react';
import styles from '../../../../styles/Queue-Management/BenefitsSection.module.css';
import { FaClock, FaSmile, FaChartBar, FaMobile } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaClock className={styles.benefitIcon} />,
    title: 'Reduced Wait Times',
    description: 'Dramatically decrease customer wait times with intelligent queue distribution.'
  },
  {
    icon: <FaSmile className={styles.benefitIcon} />,
    title: 'Improved Satisfaction',
    'description': 'Enhance customer experience with transparent queue information and updates.'
  },
  {
    icon: <FaChartBar className={styles.benefitIcon} />,
    title: 'Data-Driven Decisions',
    'description': 'Make informed staffing decisions with comprehensive analytics and reporting.'
  },
  {
    icon: <FaMobile className={styles.benefitIcon} />,
    title: 'Mobile Integration',
    'description': 'Allow customers to manage their queue position through their smartphones.'
  }
];

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <h2>Business Benefits</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              {benefit.icon}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
