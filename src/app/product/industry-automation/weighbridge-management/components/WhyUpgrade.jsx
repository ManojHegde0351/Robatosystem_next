import React from 'react';
import styles from '../../../../../styles/industry/weighbridge-management/WhyUpgrade.module.css';
import Image from 'next/image';
import { 
  FaUserCog, 
  FaTachometerAlt, 
  FaLock, 
  FaMoneyBillWave, 
  FaFileAlt, 
  FaIndustry,
  FaSync
} from 'react-icons/fa';

const WhyUpgrade = () => {

  const calculateAngles = (count, radius, startAngle = 0) => {
    return Array.from({ length: count }, (_, i) => (i * 360 / count) + startAngle);
  };

  const benefitItems = [
    {
      id: 1,
      icon: <FaUserCog className={styles.benefitIcon} />,
      title: 'Reduce Human Dependency',
      description: 'Minimize manual intervention and human errors in the weighing process.'
    },
    {
      id: 2,
      icon: <FaTachometerAlt className={styles.benefitIcon} />,
      title: 'Smoother Operations',
      description: 'Streamline your operations with faster and more efficient weighing processes.'
    },
    {
      id: 3,
      icon: <FaLock className={styles.benefitIcon} />,
      title: 'Enhanced Security',
      description: 'Secure and tamper-proof weighment processes for better accountability.'
    },
    {
      id: 4,
      icon: <FaMoneyBillWave className={styles.benefitIcon} />,
      title: 'Cost Effective',
      description: 'Eliminate all manpower-associated costs and improve your bottom line.'
    },
    {
      id: 5,
      icon: <FaFileAlt className={styles.benefitIcon} />,
      title: 'Automated Reporting',
      description: 'Generate accurate reports automatically, saving time and reducing errors.'
    },
    {
      id: 6,
      icon: <FaIndustry className={styles.benefitIcon} />,
      title: 'Industry 4.0 Ready',
      description: 'Align with modern industrial standards and digital transformation goals.'
    }
  ];


  const integrationBox = {
    id: 7,
    type: 'integration',
    content: (
      <div className={styles.integrationBox}>
        <h4 className={styles.integrationBoxTitle}>Integrated With</h4>
        <div className={styles.integrationLogos}>
          <div className={styles.integrationLogo}>
            <Image 
              src="/images/industry4.0/weighbridge/Oracle-Logo.webp"
              alt="Oracle"
              width={60}
              height={30}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.integrationLogo}>
            <Image 
              src="/images/industry4.0/weighbridge/SAP-Logo.webp"
              alt="SAP"
              width={60}
              height={30}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.integrationLogo}>
            <Image 
              src="/images/industry4.0/weighbridge/Tally-Logo.webp"
              alt="Tally"
              width={60}
              height={30}
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    )
  };

  // Calculate positions for all items
  const allItems = [...benefitItems, integrationBox];
  const angles = calculateAngles(allItems.length, 300);
  const benefits = allItems.map((item, index) => ({
    ...item,
    angle: angles[index]
  }));

  return (
    <section className={styles.whyUpgrade}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Upgrade to <span className={styles.highlight}>Automated Weighbridge</span> Solution?
          </h2>
          <p className={styles.subtitle}>
            Experience seamless operations and enhanced efficiency with our state-of-the-art weighbridge automation system
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className={`${styles.featureCard} ${benefit.type === 'integration' ? styles.integrationCard : ''}`}
            >
              {benefit.type === 'integration' ? (
                <div className={styles.integrationWrapper}>
                  <h4 className={styles.integrationTitle}>Seamless Integration With</h4>
                  <div className={styles.integrationLogos}>
                    <div className={styles.integrationLogo}>
                      <Image 
                        src="/images/industry4.0/weighbridge/Oracle-Logo.webp"
                        alt="Oracle"
                        width={80}
                        height={40}
                        className={styles.logoImage}
                      />
                    </div>
                    <div className={styles.integrationLogo}>
                      <Image 
                        src="/images/industry4.0/weighbridge/SAP-Logo.webp"
                        alt="SAP"
                        width={80}
                        height={40}
                        className={styles.logoImage}
                      />
                    </div>
                    <div className={styles.integrationLogo}>
                      <Image 
                        src="/images/industry4.0/weighbridge/Tally-Logo.webp"
                        alt="Tally"
                        width={80}
                        height={40}
                        className={styles.logoImage}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.iconWrapper}>
                    {benefit.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDescription}>{benefit.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUpgrade;
