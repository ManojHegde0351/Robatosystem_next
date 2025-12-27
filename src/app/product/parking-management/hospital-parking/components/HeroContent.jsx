



import styles from '@/styles/parking/hospital/HospitalParkingHero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>

       
          <div className={styles.heroText}>
    
          <h1 className={styles.heroTitle}>
            Hospital Parking Solutions
          </h1>
          <p className={styles.heroSubtitle}>
            Optimized parking management for healthcare facilities to ensure smooth patient access and efficient space utilization.
          </p>
          </div>
      </div>
    </section>
  );
};

export default HeroContent;
