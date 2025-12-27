import Image from 'next/image';
import styles from '@/styles/parking/sensorparking/ParkingBenefits.module.css';

const ParkingBenefits = () => {
  const benefits = [
    "Ultrasonic sensor to determine the presence of vehicle.",
    "Real time detection, counting & Indication of the vacant lots.",
    "Vacant lots Indicates with GREEN color LED and occupied lots with RED color.",
    "LED Display Panels to show for available lots with direction for each row.",
    "LED used to minimize power consumption & increase visibility with long maintenance-free life.",
    "Master Controller interface between Application Software & other Parking devices & Zone Controller.",
    "User Friendly Parking Guidance System Software based on SQL database with level of security.",
    "Automatic day report generation and pushes on defined emails.",
    "De-centralized payment collection software at exit points."
  ];

  const motoristBenefits = [
    "Shorter Waiting Time at Car Park Entrance",
    "Guided to Nearest Available Parking Space",
    "No Need to Search, Less Stressful",
    "Saves Fuel and Reduces Tyre Wear",
    "Gains Precious Time, More time to Shop or Dine",
    "Prevent Drivers Fighting over Parking Space",
    "Pollution Less Parking makes Good Feel",
    "Car Parking – A pleasant experience for the motorist"
  ];

  return (
    <section id="benefits" className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitsContent}>
            <h2 className={styles.sectionTitle}>
              Benefits to Parking Management Area
            </h2>
            
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/products/Benefits.webp"
              alt="Parking management benefits"
              width={600}
              height={400}
              className={styles.benefitImage}
              priority
            />
          </div>
        </div>

        <div className={styles.motoristBenefitsContainer}>
          <div className={styles.motoristContent}>
            <h3 className={styles.sectionSubtitle}>
              Reasons of Motorist Happiness
            </h3>
            
            <div className={styles.motoristGrid}>
              {motoristBenefits.map((benefit, index) => (
                <div key={index} className={styles.motoristBenefit}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.motoristImageContainer}>
            <Image
              src="/images/products/Motorist.webp"
              alt="Happy motorist with easy parking"
              width={500}
              height={400}
              className={styles.motoristImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingBenefits;
