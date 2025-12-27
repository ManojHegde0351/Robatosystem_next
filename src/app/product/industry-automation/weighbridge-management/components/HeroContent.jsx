

import styles from '../../../../../styles/industry/weighbridge-management/HeroContent.module.css';


const HeroContent = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle} style={{ color: '#ffffff !important' }}>Weighbridge Management System</h1>
          <p className={styles.subtitle} style={{ color: '#ffffff !important' }}>
            Automated, accurate, and efficient weighing solutions for modern industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
