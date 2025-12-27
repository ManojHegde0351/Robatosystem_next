import dynamic from 'next/dynamic';
import styles from '@/styles/parking/airport/AirportParkingHero.module.css';

const HeroContentClient = dynamic(() => import('./HeroContent.client'), {
  loading: () => (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Airport Parking Solutions</h1>
          <p className={styles.heroSubtitle}>
            Efficient, secure, and hassle-free parking solutions for busy airports
          </p>
        </div>
      </div>
    </section>
  )
});

const HeroContent = () => {
  return <HeroContentClient />;
};

export default HeroContent;
