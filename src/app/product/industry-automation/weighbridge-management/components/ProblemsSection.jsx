import React from 'react';
import styles from '../../../../../styles/industry/weighbridge-management/ProblemsSection.module.css';
import { 
  FaClock, 
  FaUserCog, 
  FaExclamationTriangle, 
  FaMoneyBillWave, 
  FaTruckLoading, 
  FaChartLine, 
  FaClipboardCheck, 
  FaUserShield,
  FaFileAlt
} from 'react-icons/fa';

const problems = [
  {
    id: 1,
    icon: <FaClock className={styles.icon} />,
    title: 'Time Consuming',
    description: 'Maintaining manual data points requires time and effort, does not allow for real-time data visibility.'
  },
  {
    id: 2,
    icon: <FaExclamationTriangle className={styles.icon} />,
    title: 'Vulnerable to Human Error',
    description: 'High chances of typing errors in vehicle numbers, weighment data, product details, etc.'
  },
  {
    id: 3,
    icon: <FaClipboardCheck className={styles.icon} />,
    title: 'Material Loss',
    description: 'Wrong entry of weighment data can create room for material loss and theft.'
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className={styles.icon} />,
    title: 'Manpower Costs',
    description: 'Sites that run 24/7 operations require multiple weighbridge operators, the wages of the operators and the supervisors are a significant cost to the organization.'
  },
  {
    id: 5,
    icon: <FaTruckLoading className={styles.icon} />,
    title: 'Delay in Operations',
    description: 'Manpower-dependent operations always experience delays due to unforeseen circumstances.'
  },
  {
    id: 6,
    icon: <FaFileAlt className={styles.icon} />,
    title: 'Errors in Data Capturing',
    description: 'Intentional or unintentional errors in the data capturing can cause significant discrepancies and issues moving ahead in the supply chain operations.'
  },
  {
    id: 7,
    icon: <FaChartLine className={styles.icon} />,
    title: 'Difficulty in Supervision and Reporting',
    description: 'As all the data is manually captured, there are high chances of errors, which are difficult to fix at a later stage, and manually prepared reports are time-consuming and inaccurate due to the inaccurate data.'
  },
  {
    id: 8,
    icon: <FaUserShield className={styles.icon} />,
    title: 'Security Concerns',
    description: 'Manual processes are more susceptible to security breaches and unauthorized access to sensitive data.'
  }
];

const ProblemsSection = () => {
  return (
    <section className={styles.problemsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Problems with Current Weighing Systems</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.problemsGrid}>
          {problems.map((problem) => (
            <div key={problem.id} className={styles.problemCard}>
              <div className={styles.iconContainer}>
                {problem.icon}
              </div>
              <h3 className={styles.problemTitle}>{problem.title}</h3>
              <p className={styles.problemDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
