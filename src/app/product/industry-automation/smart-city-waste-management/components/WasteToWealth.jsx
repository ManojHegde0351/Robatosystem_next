import styles from '@/styles/industry/smart-city-waste/WasteToWealth.module.css';

const WasteToWealth = () => {
  const benefits = [
    {
      id: 1,
      title: 'Funds Misuse',
      percentage: '25-45%',
      description: 'No Central Control',
      icon: ''
    },
    {
      id: 2,
      title: 'Unmanaged',
      percentage: '0%',
      description: 'Work Transparency',
      icon: ''
    },
    {
      id: 3,
      title: 'No Trace',
      percentage: '0%',
      description: 'No Traceability of Waste',
      icon: ''
    },
    {
      id: 4,
      title: 'Manipulation',
      percentage: '10-20%',
      description: 'Manipulated Records',
      icon: ''
    },
    {
      id: 5,
      title: 'Vague',
      percentage: 'Up to 35%',
      description: 'No Collection Assurance',
      icon: ''
    },
    {
      id: 6,
      title: 'Work Proxy',
      percentage: '18-28%',
      description: 'No Vehicle Tracing',
      icon: ''
    }
  ];

  return (
    <section className={styles.benefitsSection} id="benefits">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          Smart Solid Waste Management Converts Waste to Wealth
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <div className={styles.percentage}>{benefit.percentage}</div>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.painPointsSection}>
          <h3 className={styles.painPointsTitle}>
            Major Pain Areas of Solid Waste Management
          </h3>
          
          <div className={styles.painPointsList}>
            <div className={styles.painPoint}>
              <span className={styles.painPointIcon}>•</span>
              <span>Lack of information of total collected waste (Wet / Dry) at transfer stations.</span>
            </div>
            
            <div className={styles.painPoint}>
              <span className={styles.painPointIcon}>•</span>
              <span>Lack of tracking of waste collecting vehicles.</span>
            </div>
            
            <div className={styles.painPoint}>
              <span className={styles.painPointIcon}>•</span>
              <span>Lack of overall control at different sites leads to misuse of funds and facilities.</span>
            </div>
            
            <div className={styles.painPoint}>
              <span className={styles.painPointIcon}>•</span>
              <span>Lack of transparency to higher authorities.</span>
            </div>
            
            <div className={styles.painPoint}>
              <span className={styles.painPointIcon}>•</span>
              <span>Lack of records to implement future prospective.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteToWealth;
