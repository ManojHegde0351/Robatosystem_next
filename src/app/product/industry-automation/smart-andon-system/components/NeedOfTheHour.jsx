import styles from '@/styles/industry/smart-andon/NeedOfTheHour.module.css';
import Image from 'next/image';

export default function NeedOfTheHour() {
  return (
    <section className={styles.needOfTheHour}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Smart Andon System: Need of an hour</h2>
            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                A modular Andon system to meet your immediate needs, and then can be modified and scaled as your operation evolves.
              </p>
              
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Provides visualization of production with customizable real time dashboards to enable workers about the production goals.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Delivers real time data to monitor and diagnose recurring problems and to take immediate necessary actions through signboard or LED displays integrating signal lights.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Electro-Matic Visuals FactoryVision product line of industrial LED/TV displays and Andon systems aids all the visual management needs with proven systems in different types of major industries, including: automotive, aerospace, material handling, and food and beverages.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>The system may include a means to stop production so the issue can be corrected.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/industry4.0/SmartANDONSystem/Andon_System_Benefits.webp" 
                alt="Smart ANDON System in action"
                fill
                className={styles.featureImage}
                sizes="(max-width: 1000px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}