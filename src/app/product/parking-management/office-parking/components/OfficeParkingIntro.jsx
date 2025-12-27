


import styles from '@/styles/parking/office/OfficeParkingIntro.module.css';

const OfficeParkingIntro = () => {
  return (
    <section className={styles.officeParkingIntro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div
            
            className={styles.textContent}
          >
            <h2 className={styles.title}>Councils and Municipalities</h2>
            <p className={`${styles.paragraph} ${styles.largeText}`}>
              Robatos Smart Parking System has extensive experience to deal with the parking management requirements of councils and municipalities, most of which are linked with the smart city initiatives incorporated with smart parking system.
            </p>
            <p className={styles.paragraph}>
              Smart cities. Urban reality of the current time across the globe recognizing the need to provide a world of convenience, social responsibility and efficiency for communities to thrive.
            </p>
            <p className={styles.paragraph}>
              Smart Parking has been providing an extraordinary parking experience and huge revenues to the clients from last many years. We have embraced a strategy that focus on the continual innovation, value added services and special prominence on smart city integration technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeParkingIntro;
