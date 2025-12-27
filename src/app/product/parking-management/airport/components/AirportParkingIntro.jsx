import styles from '@/styles/parking/airport/AirportParkingIntro.module.css';

const AirportParkingIntro = () => {
  return (
    <section className={styles.airportParkingIntro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Airports</h2>
            <p className={styles.paragraph}>
              Automatic Parking System has experience in fulfilling several parking needs of airports across the globe.
            </p>
            <p className={styles.paragraph}>
              Vehicles access to airports can turn into chaos if not managed properly. Automatic parking systems offers single system that provides variety of parking and pick up/drop off options.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AirportParkingIntro;
