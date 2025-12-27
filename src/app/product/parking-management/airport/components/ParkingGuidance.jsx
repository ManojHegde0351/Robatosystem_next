import Image from 'next/image';
import styles from '@/styles/parking/airport/ParkingGuidance.module.css';

const ParkingGuidance = () => {
  return (
    <section className={styles.parkingGuidance}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.title}>Parking Guidance at Airports</h2>
            <p className={styles.paragraph}>
              Airports are always busy with vehicles and highly vehicle operating areas. So, airports have an outmost requirement of parking management.
            </p>
            <p className={styles.paragraph}>
              Airports are usually associated with long term parking, short stay drop off, pick up and everything in between; require smart parking systems to manage the traffic flow and congestion which is usually a sprawling parking footprint.
            </p>
            <p className={styles.paragraph}>
              Safety of vehicles is another important concern to be solved at the airport premises as millions of people pass through these sites every day. This can be fixed with the incorporation of smart parking systems.
            </p>
            <p className={styles.paragraph}>
              Robato Systems has far-reaching experience in dealing parking areas, have full suite of parking hardware and software to fulfill any requirement as well as customizable software solutions to integrate with the current site management software.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/products/airport-parking.webp"
              alt="Airport Parking Guidance System"
              width={600}
              height={500}
              className={styles.image}
            />
          </div>
        </div>

        <div className={`${styles.section} ${styles.endToEndSection}`}>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>A complete end-to-end smart parking system</h3>
            <p className={styles.paragraph}>
              Our wide range of vehicle detection sensors are developed to suit any climate and environment. We have different sensor options such as robust outdoor sensors, dual action sensors for multilevel parkings. These act as cove of guiding light with the help of colorful LED lights and allow parkers to see bay availability before they turn down the lanes.
            </p>
            <p className={styles.paragraph}>
              Our Smart parking systems provide LED signage that displays live parking lots availability in the lanes and levels, give directions to the parkers to get away from the congested areas and allow them to find a suitable vacant parking space without wandering in the parking premises.
            </p>
            <p className={styles.paragraph}>
              The Smart cloud platform provided along with our smart parking systems feed all the events captured by the sensors via smart spot gateways. Smart cloud processes millions of parking interactions per day and provides access of real time site activity as well as generation of reports and identifies trends.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/products/airport-Parking2.webp"
              alt="End-to-End Smart Parking System"
              width={600}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingGuidance;
