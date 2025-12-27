import React from 'react';
import Image from 'next/image';
import styles from '@/styles/parking/sensorparking/ParkingGuidance.module.css';

function SplitText({ text }) {
  return <span>{text}</span>;
}

const ParkingGuidanceSystems = () => {
  const outdoorFeatures = [
    'Wireless Communication',
    'High Accuracy',
    'Fast Installation',
    'Work in All Weather',
    'Multi-Year Battery Life',
    'Easy to maintain'
  ];

  return (
    <section id="guidance-systems" className={styles.section}>
      <div className={styles.container}>
        {/* Indoor Parking Guidance System */}
        <div className={styles.systemContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/products/indoor-parking-guidence.webp"
              alt="Indoor Parking Guidance System"
              width={600}
              height={400}
              className={styles.systemImage}
              priority
            />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              <SplitText text="Indoor Parking Guidance System" />
            </h2>
            <div className={styles.description}>
              <p>Indoor Parking Guidance System can collect occupancy of parking lot in real time by using the Integrated Ultrasonic Sensor installed right above each parking line. When there is parking space available, the indicator light integrated by the ultrasonic parking detector will change into the red from the green.</p>
              
              <p>The Zone Controller connecting the detector will collect the information of all connected detectors according to roll poling. Parking Count and Sign Display information also updated immediately by Zone controller. Zone controller also send parking lots data to the Central Controller after compression and encoding according to certain rules.</p>
              
              <p>After completing data processing, the Central Controller will send the parking data to main parking LED display of the parking lot to display the information of unoccupied parking so that the function of guiding the cars in entering the unoccupied parking space can realized.</p>
              
              <p>Meanwhile, the Central Controller sends the data to the computer, then the computer will save the data in database server and also upload the data to online server so that the users can enquire into the real-time parking information, yearly, monthly and daily statistics data of the parking lot.</p>
            </div>
          </div>
        </div>

        {/* Outdoor Parking Guidance System */}
        <div className={`${styles.systemContainer} ${styles.reverse}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/products/outdoor-parking-guidence.webp"
              alt="Outdoor Parking Guidance System"
              width={600}
              height={400}
              className={styles.systemImage}
              priority
            />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              <SplitText text="Outdoor Parking Guidance System" />
            </h2>
            <div className={styles.description}>
              <p>ParkLogix Outdoor Parking Guidance System could drastically reduce the amount of time that drivers spend looking for parking spaces. Outdoor wireless parking spot (U-Spot) and counting (U-Flow) sensors to gather the real time parking availability of the various areas. Wireless parking sensors detected if a car is parked over it, and therefore determine whether or not the space is vacant.</p>
              
              <p>Wireless Data Collector acts as a gateway between data server and lot sensors. Wireless gateway receives parking lot information from wireless parking sensors, it communicate parking lots availability to Wireless Display Boards and Parking Management System via Ethernet or Wireless or Cellular Network to online parking platform.</p>
              
              <div className={styles.featuresGrid}>
                {outdoorFeatures.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingGuidanceSystems;
