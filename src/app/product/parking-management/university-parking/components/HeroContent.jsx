
import styles from '@/styles/parking/university/UniversityParkingHero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div
          
          className={styles.textContainer}
        >
          <h1>University Parking Solutions</h1>
          <p>Smart parking solutions tailored for educational institutions to enhance campus mobility</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
