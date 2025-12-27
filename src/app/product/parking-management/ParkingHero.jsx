

import styles from '@/styles/parking/ParkingHero.module.css';

export default function ParkingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Parking Management Solutions
        </h1>
        <p className={styles.subtitle}>
          Intelligent parking solutions designed to maximize space utilization, enhance user experience, 
          and streamline operations for modern parking facilities.
        </p>
      </div>
    </section>
  );
}
