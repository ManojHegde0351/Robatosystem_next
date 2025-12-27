import styles from '@/styles/parking/handheld/ParkLogixFeatures.module.css';
import ParkLogixFeaturesClient from './ParkLogixFeatures.client';

export default function ParkLogixFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          ParkLogix Application Key Features
        </h2>

        {/* Content rendered on server */}
        <div
          id="features-content"
          className={styles.contentWrapper}
        >
          <div className={styles.featureBlock}>
            <h3 className={styles.featureTitle}>Vehicle Entry in Parking</h3>
            <p className={styles.featureSubtitle}>
              Parking operators has to do following steps:
            </p>
            <ul className={styles.featureList}>
              <li>Choose vehicle type: two-wheeler or four-wheeler.</li>
              <li>Enter vehicle number: manually or auto filling using ANPR.</li>
              <li>
                Print ticket with parking name, QR code, date, vehicle details,
                charges and terms.
              </li>
              <li>
                Entry saved locally and pushed to server if required
                <span className={styles.proBadge}> ParkLogix Pro</span>
              </li>
              <li>Visitors reports: Day, Month, Year wise.</li>
              <li className={styles.proPlusFeature}>
                Boom barrier control on ticket generation
                <span className={styles.proPlusBadge}> ParkLogix Pro+</span>
              </li>
              <li className={styles.proPlusFeature}>
                LED parking count auto updates
                <span className={styles.proPlusBadge}> ParkLogix Pro+</span>
              </li>
            </ul>
          </div>

          <div className={styles.featureBlock}>
            <h3 className={styles.featureTitle}>Vehicle Exit in Parking</h3>
            <p className={styles.featureSubtitle}>
              Parking operators has to do following steps:
            </p>
            <ul className={styles.featureList}>
              <li>Scan QR code from entry ticket</li>
              <li>Automatic fee calculation as per tariff</li>
              <li>Different tariffs for two- and four-wheelers</li>
              <li>Generate exit ticket with full details</li>
              <li>Collect parking fee</li>
              <li>
                Entry saved locally and pushed to server
                <span className={styles.proBadge}> ParkLogix Pro</span>
              </li>
              <li className={styles.proPlusFeature}>
                Boom barrier opens automatically
                <span className={styles.proPlusBadge}> ParkLogix Pro+</span>
              </li>
              <li className={styles.proPlusFeature}>
                LED display updates parking count
                <span className={styles.proPlusBadge}> ParkLogix Pro+</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Client-only behavior */}
        <ParkLogixFeaturesClient />
      </div>
    </section>
  );
}
