



import styles from '@/styles/parking/hospital/HospitalParkingIntro.module.css';

const HospitalParkingIntro = () => {
  return (
    <section className={styles.hospitalParkingIntro}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
       
           
            <div className={styles.textContent}>
         
            <h2 className={styles.title}>Hospitals and Medical Centers</h2>
            <div className={styles.paragraphs}>
              <p className={styles.paragraph}>
                Hospitals and medical facilities are required to provide a range of parking options. Without proper car park management, parking spaces can be severely underutilized.
              </p>
              <p className={styles.paragraph}>
                Robatos Smart Parking system delivers working solutions to hospitals and medical centers that fulfill the needs of patients, staff, and visitors.
              </p>
              </div>
            </div>
          
    
        </div>
      </div>
    </section>
  );
};

export default HospitalParkingIntro;
