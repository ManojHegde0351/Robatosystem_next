


import Image from 'next/image';
import styles from '@/styles/parking/hospital/SmartParkingManagement.module.css';

const SmartParkingManagement = () => {
  return (
    <section id="smart-parking" className={styles.smartParking}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.title}>Managing Smart Car Parking</h2>
            <p className={styles.paragraph}>
              Robatos Smart parking system has experience in providing customized and manageable car parking solutions to different hospitals and medical facilities.
            </p>
            <p className={styles.paragraph}>
              Hospitals and medical facilities are usually dealt with underutilized spaces in the car parking and overcrowding in the other areas. Other problem is the catering of staff requirement due to different schedules and shifts of hospital staffs. Order can also be brought to visitor parking, which comes with its own unique set of requirements.
            </p>
            <p className={styles.paragraph}>
              Smart Parking can deliver a solution and configure the car parking flexibly and accommodate the spaces according the parking requirement of shift workers, rostered staff and staff with regular hours.
            </p>
            <p className={styles.paragraph}>
              Smart Parking system also configure visitor parking to cater for a range of requirements including limited mobility needs, emergency parking, longer term parking and visitor hours influx, taking the stress out of finding and paying for parking.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/products/hospital-parking.webp"
              alt="Smart Parking Management System"
              width={500}
              height={600}
              className={styles.image}
            />
          </div>
        </div>

        <div className={`${styles.section} ${styles.powerSection}`}>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Power of Information</h3>
            <p className={styles.paragraph}>
              Smart Parking system is being made of up of components that all are interconnected and work with each other and provide a single solution to large sites with different requirements.
            </p>
            <p className={styles.paragraph}>
              Our Parking system is incorporated with vehicle detection sensors that are connected to a system that includes LED directional signage and overhead indicators to inform motorists about available parking spaces, all managed through our SmartCloud dashboard.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/products/hospital-Parking2.webp"
              alt="Smart Parking Dashboard"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartParkingManagement;
