


import Image from 'next/image';
import styles from '@/styles/parking/led/LEDParkingSignage.module.css';

const ParkingSignageInfo = () => {
  return (
    <section className={styles.signageInfo}>
      <div className={styles.container}>
        <div className={styles.signageGrid}>
          {/* Main Entrance Signage */}
          <div 
            className={styles.signageCard}
           
          >
            <div className={styles.signageContent}>
              <h2 className={styles.signageTitle}>Main Entrance Parking Signage</h2>
              <div className={styles.signageText}>
                <p>
                  One of the best ways to increase your parking sales is by providing accurate parking information to drivers. 
                  Digital Parking Count Boards display real-time information about vacant lots on each parking floor. 
                  With the assistance of the main entry parking count display, drivers save precious time that might otherwise 
                  be spent searching for an empty spot in a large parking facility.
                </p>
                <p>
                  The main entry parking display receives real-time parking lot information directly from the 
                  Master Controller or ParkLogix management software, ensuring up-to-date accuracy.
                </p>
              </div>
            </div>
            <div className={styles.signageImage}>
              <Image
                src="/images/products/LEDParking/Parking_Signage_main_entrance.webp"
                alt="Main Entrance Parking Signage"
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          </div>

          {/* Zone Information Signage */}
          <div 
            className={`${styles.signageCard} ${styles.reverse}`}
            
          >
            <div className={styles.signageContent}>
              <h2 className={styles.signageTitle}>Zone Information Parking Signage</h2>
              <div className={styles.signageText}>
                <p>
                  There can be multiple parking zones on a floor, with each zone containing 32 or more parking spaces. 
                  The Zone Digital Sign Board is used to show the status of vacant spaces in a particular zone.
                </p>
                <p>
                  The parking zone display board receives its dynamic content from Robato&apos;s Zone Controller. 
                  When no vacant spaces are available in a zone, the digital sign board automatically displays a 
                  &ldquo;Cross Sign (X)&rdquo; and &ldquo;Parking Full&rdquo; text, providing clear visual indicators to drivers.
                </p>
              </div>
            </div>
            <div className={styles.signageImage}>
              <Image
                src="/images/products/indoor-parking-guidence.webp"
                alt="Zone Information Parking Signage"
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingSignageInfo;