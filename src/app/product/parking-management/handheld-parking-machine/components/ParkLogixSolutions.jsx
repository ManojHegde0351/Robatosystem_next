import React from 'react';
import styles from '@/styles/parking/handheld/ParkingLogixSolutions.module.css';

const ParkLogixSolutions = () => {
  const solutions = [
    {
      title: 'ParkLogix',
      features: [
        'Parking management controls',
        'POS and Mobile devices',
        'Sales report via USB',
        'Local app management',
        'Parking Tickets'
      ]
    },
    {
      title: 'ParkLogix Pro',
      features: [
        'All ParkLogix features',
        'Real-time dashboard',
        'Online sales reports',
        'Available parking lots',
        'Remote app management'
      ]
    },
    {
      title: 'ParkLogix Pro+',
      features: [
        'All ParkLogix Pro features',
        'Auto Fill vehicle number',
        'Open/close Boom Barrier',
        'Control Parking Count Display',
        'SaaS Platform controls'
      ]
    },
    {
      title: 'Custom Apps',
      features: [
        'On-demand app controls',
        'External hardware integration',
        'Customized SaaS features',
        'Special feature demand',
        'Changes in existing app'
      ]
    }
  ];

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>
            <span>Wide Range of Mobility Solutions</span>
          </h2>
        </div>
        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={styles.solutionCard}
            >
              <h3 className={styles.solutionTitle}>
                {index + 1}. {solution.title}
              </h3>
              <ul className={styles.solutionFeatures}>
                {solution.features.map((feature, i) => (
                  <li key={i} className={styles.solutionFeature}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.enquireButton}>
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParkLogixSolutions;
