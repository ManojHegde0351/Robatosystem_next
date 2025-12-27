


import styles from '@/styles/parking/malls/MallsParkingIntro.module.css';

const MallsParkingIntro = () => {
  return (
    <section className={styles.mallsParkingIntro}>
      <div className={styles.container}>
        <div
          
          className={styles.textContent}
        >
          <h2 className={styles.title}>Shopping Centres & Retail</h2>
          <p className={styles.paragraph}>
            In the modern and competitive world, parking is an essential service to get right and to decrease footfall and congestion due to poor parking experiences.
          </p>
          <p className={styles.paragraph}>
            Smart Parking Systems are the major requirement of the start and end of the customers shopping at any place.
          </p>
          <p className={styles.paragraph}>
            Positive Parking experience draws more customer attention and attracts them to the premises, puts a huge impact on the footfall and store taking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MallsParkingIntro;
