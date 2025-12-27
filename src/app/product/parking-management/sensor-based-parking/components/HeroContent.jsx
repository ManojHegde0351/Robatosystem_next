import styles from '@/styles/parking/sensorparking/SensorParkingHero.module.css';

const HeroContent = () => {
  return (
    <section id="overview" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Sensor-Based Parking Solutions
          </h1>
          <p className={styles.heroSubtitle}>
            Smart, efficient, and automated parking management powered by advanced sensor technology
          </p>
          <div className={styles.ctaContainer}>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
