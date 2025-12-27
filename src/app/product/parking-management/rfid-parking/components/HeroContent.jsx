
import styles from '@/styles/parking/rfid/RFIDParkingHero.module.css';

const HeroContent = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div
          
          className={styles.textContainer}
        >
          <h1>RFID-Based Parking Solutions</h1>
          <p>Advanced RFID technology for secure, efficient, and automated parking management</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
