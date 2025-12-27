

import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SmartWasteManagement.module.css';

const SmartWasteManagement = () => {
  return (
    <section className={styles.smartWasteSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Smart Solid Waste Management System for Smart Cities
        </h2>

        <div className={styles.contentWrapper}>
          <div 
            className={styles.contentBlock}
          >
            <div className={styles.textContent}>
              <h3>Vehicle Tracking System (VTS)</h3>
              <p>
                As India moves towards Smart Cities concept under <span style={{color: 'green', fontWeight: 'bold'}}>&quot;Swachh Bharat Mission&quot;</span>, Indian cities require a marked improvement in Solid Waste Management – SWM to provide a clean and hygienic environment to city residents. By combining a host of technologies such as Internet of Things (IOT), Vehicle Tracking System (VTS), RFID, Smart Camera&apos;s, Remote Announcement Control and other sensing devices, it is possible to create an IT system for Smart Solid Waste Management, which is adaptable, sustainable and radically more efficient.
              </p>
              <p>
                These systems provide real-time tracking of waste collection vehicles, enabling better fleet management, reducing fuel consumption, 
                and ensuring timely waste collection. The integration with GIS allows for optimized route planning, reducing the carbon footprint 
                while improving service coverage and efficiency.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/industry4.0/smart-waste-city/smart-waste-management1.webp" 
                alt="Vehicle Tracking System for Waste Management"
                width={500}
                height={350}
                className={styles.featureImage}
              />
            </div>
          </div>

          <div className={`${styles.contentBlock} ${styles.reverse}`}>
            <div className={styles.textContent}>
              <h3>Solid Waste Management System for Recognition of Hidden Wealth</h3>
              <p>
                Smart Solid Waste Management System is the solution to all the above discussed problems in manual Solid Waste Management. 
                It&apos;s a smart, secure, connected and fully automatic centralized controlled system for Indian cities for better coverage of 
                door-to-door and community garbage collection.
              </p>
              <p>
                The system enables better tracking of movement of trucks collecting garbage, monitoring of garbage bins and provides 
                information about the weight of garbage collected and dumped. This comprehensive approach ensures efficient waste 
                management across urban areas.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/industry4.0/smart-waste-city/solid-waste-processing-plant.webp" 
                alt="Smart Waste Management System"
                width={500}
                height={350}
                className={styles.featureImage}
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default SmartWasteManagement;
