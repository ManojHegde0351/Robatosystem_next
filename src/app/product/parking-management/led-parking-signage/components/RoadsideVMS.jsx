


import Image from 'next/image';
import styles from '@/styles/parking/led/RoadsideVMS.module.css';

const RoadsideVMS = () => {
  return (
    <section className={styles.roadsideVMS}>
      <div className={styles.container}>
        {/* Roadside VMS Section */}
        <div 
          className={styles.section}
          
        >
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Roadside - VMS Parking Signage</h2>
            <div className={styles.textContent}>
              <p>
  Variable Message Sign Boards mounted at road side to inform the motorist about your parking lots 
  status &ldquo;How many empty lots are available?&rdquo; so that they can come and park the vehicle in your parking. 
  Robato&apos;s VMS collects the real-time parking information wirelessly from parking master controller or 
  it can pull the information directly from online parking server if required. 
  Key to increase your parking sale to parker from different places.
</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/products/LEDParking/vms_parking_signage.webp"
              alt="Roadside VMS Parking Signage"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>

        {/* Static Text & Direction Signage */}
{/* Static Text & Direction Signage */}
<div className={styles.staticSignage}>
  <div className={styles.staticSignageContent}>
    <h3 className={styles.subsectionTitle}>Static Text & Direction Signage</h3>
    <div className={styles.signageGrid}>
      {[
        'Exit Sign Board',
        'Pay Station Sign Board',
        'Floor Number Sign Board',
        'Parking Assistance Sign Board',
        'Zone Information Board',
        'Cross Sign',
        'Up Arrow Sign',
        'Down Arrow Sign',
        'Left Arrow Sign',
        'Right Arrow Sign'
      ].map((item, index) => (
        <div key={index} className={styles.signageItem}>
          <span className={styles.checkIcon}>✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
  <div className={styles.staticSignageImage}>
    <Image
      src="/images/products/LEDParking/parking_direction_signage2.webp"
      alt="Static Direction Signs Examples"
      width={500}
      height={400}
      className={styles.image}
    />
  </div>
</div>
        {/* Floor Information Section */}
        <div 
          className={`${styles.section} ${styles.reverse}`}
          
        >
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Floor Information Parking Signage</h2>
            <div className={styles.textContent}>
              <p>
                Floor level Digital Sign Board to show the count of empty lots in a floor so that user can get the 
                real-time information. If vehicles occupy all the parking lots of floor then the digital sign board 
                can automatically show &ldquo;Cross Sign X&rdquo; and &ldquo;Parking Full&rdquo; text.
              </p>
              <>
  Floor information counting display board takes dynamic parking information data from Robato&apos;s Floor Controller.
</>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/products/LEDParking/floor_information_parking_signage.webp"
              alt="Floor Information Parking Signage"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadsideVMS;