
import Image from 'next/image';
import styles from '@/styles/parking/office/SmartParkingSystem.module.css';

const SmartParkingSystem = () => {
  return (
    <section className={styles.smartParkingSystem}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div
         
            className={styles.textContent}
          >
            <h2 className={styles.title}>Smart Parking System for Smart City</h2>
            <p className={styles.paragraph}>
              Technology is the leading requisite of the smart cities. Our smart parking system is incorporated with all the modernized technologies which not only offers a real time view of events, but also provides ample amount of data analysis to sort the insights into behaviour and trends i.e. the city operators can make plans for future accordingly.
            </p>
            <p className={styles.paragraph}>
              Innovative designs of our Parking guidance system offer advanced opportunities to the owners and parkers such as parking information at the smartphones and rich information to smart cities via Smart cloud.
            </p>
            <p className={styles.paragraph}>
              Smart Parking System plays many major roles by providing eco structure to smart cities, convenience to the users, urban mobility, lower costs, enhanced revenues and delivery of particular information, intelligence and security.
            </p>
          </div>
          
          <div 
            
            className={styles.imageContainer}
          >
            <Image 
              src="/images/products/office-parking.webp" 
              alt="Smart Parking System for Smart City"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        <div className={`${styles.contentWrapper} ${styles.reverse}`}>
          <div
            
            className={styles.imageContainer}
          >
            <Image 
              src="/images/products/office-Parking2.webp" 
              alt="Office Parking"
              width={600}
              height={400}
            />
          </div>

          <div 
           
            className={styles.textContent}
          >
            <h2 className={styles.title}>Power of Smart Cloud</h2>
            <p className={styles.paragraph}>
              Installation of Smart Parking System in the cities and municipalities across the globe provides access to collect and analyze parking data with the help of integrated Smart Cloud system- that provides connection with other sensors of the system.
            </p>
            <p className={styles.paragraph}>
              The Smart cloud based Smart parking systems helps the city operators in managing a tranche of smart city services such as Public Wi-Fi, surveillance, air quality, digital displays and many more, all through the same intelligence platform.
            </p>
            <p className={styles.paragraph}>
              Our vision and mission is to provide an innovative ultra-modernized Smart Parking system with embedded Smart Cloud technology for extraordinary parking experience in the smart cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartParkingSystem;
