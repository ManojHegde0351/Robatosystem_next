
import styles from '@/styles/parking/led/LEDParkingHero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>LED Parking Signage Solutions</h1>
          <p className={styles.subtitle}>
            Advanced digital signage for efficient parking management and seamless vehicle guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
