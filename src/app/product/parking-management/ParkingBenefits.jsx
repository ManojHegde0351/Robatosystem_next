

import styles from '@/styles/parking/ParkingBenefits.module.css';
import Image from 'next/image';

const benefits = [
  {
    title: "Optimized Parking",
    description: "Optimized Solution to offer best parking spots to the users, helps in saving time, resources and efforts. Ensure efficient filling of the parking spaces to utilize all the lots properly to serve commercial and corporate clients. Ease in traffic flow decreases the number of cars driving around in search of an open parking space.",
    image: "/images/products/Optimised-Parking.webp"
  },
  {
    title: "Minimized Pollution - CO2",
    description: "This optimal parking solution significantly decreases the drive time inside the parking, reduces the daily emission of fuel from vehicles. Because around one million barrels of oil burns daily in search of parking spaces by parkers. Therefore, this solution helps in reducing the global environmental footprints.",
    image: "/images/products/Minimized-Pollution-CO2.webp"
  },
  {
    title: "Increase Revenue",
    description: "Intelligent Parking Guidance increases customer experience with unified practices, added value to your brand from corporate or commercial angle. Whether the destination is a mall, an airport or a corporate business office, visitors will assuredly be fascinated with the cutting edge technology and convenience factors.",
    image: "/images/products/Increase-Revenue.webp"
  },
  {
    title: "Decrease Management Costs",
    description: "Fully automation of the parking area and control by computers and software results in the minimization of manual activities and man-power. The decline in labor cost and resources exhaustion will significantly raise the profits to the owners.",
    image: "/images/products/Decrease-Management-Costs.webp"
  },
  {
    title: "Real-Time Data Trends",
    description: "Parking systems are incorporated with smart servers and software's to collect the real time data that uncovers the associations and trends of parkers and spaces. These trends act as the invaluable assets for the parking owners to make adjustments and improvements in future for customers.",
    image: "/images/products/Real-Time-Data-Trends.webp"
  }
];

const ParkingBenefits = () => {
  return (
    <section id="benefits" className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Benefits of Our Parking Solutions</h2>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.benefitImage}>
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParkingBenefits;
