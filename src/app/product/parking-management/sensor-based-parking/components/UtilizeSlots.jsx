import styles from '@/styles/parking/sensorparking/UtilizeSlots.module.css';

export default function UtilizeSlots() {

  return (
    <section className={styles.section} id="utilize-slots">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Utilize Every Slot of your Parking</h2>
            <p className={styles.description}>
              A parking sensor system monitors the storage availability in a parking facility and also notifies motorists about the parking availability.
            </p>
            <p className={styles.description}>
              Solution to utilize the parking space up to maximum level without manual force. Parking bay sensor to determine the real time presence of vehicle at specific slot and counting & indication of the empty slot. Highly user-friendly automatic remote controlled parking solution to increase the revenue from parking management industry.
            </p>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Real-time parking availability</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Automated slot monitoring</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Increased parking efficiency</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <span>Reduced manual intervention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
