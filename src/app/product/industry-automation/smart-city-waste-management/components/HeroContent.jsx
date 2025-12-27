

import styles from '@/styles/industry/smart-city-waste/HeroContent.module.css';


const HeroContent = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>Smart City Waste Management</h1>
          <p className={styles.subtitle}>
            Intelligent solutions for cleaner, greener, and more sustainable cities
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
