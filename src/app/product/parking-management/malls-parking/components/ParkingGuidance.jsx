
import Image from 'next/image';
import styles from '@/styles/parking/malls/ParkingGuidance.module.css';

const ParkingGuidance = () => {
  return (
    <section className={styles.parkingGuidance}>
      <div className={styles.container}>
        {/* Creator of positive customer experience */}
        <div className={styles.section}>
          <div 
            className={styles.contentWrapper}
           
          >
            <div className={styles.textContent}>
              <h2>Creator of positive customer experience</h2>
              <p>
                In this fast-paced world, people usually get frustrated with the traffic jams in car parks and spend of time in search of proper parking space before shopping.
              </p>
              <p>
                These frustrations lead to negative impact on how people perceive the retail outlet, and may very well be a reason they go to another location next time.
              </p>
              <p>
                Smart parking system is designed according to the requirement of the customers and is designed to be scalable and be customized for any site. We provide a complete traffic management plan, and invent the best way to direct traffic flow to suitable bays.
              </p>
              <p>
                Smart Parking System is also flexible enough to serve for busy visitors period of school holidays and seasonal holidays at retail facilities to offer hassle free parking experience.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/products/mall-parking.webp" 
                alt="Positive Customer Experience"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* More customers, greater revenues */}
        <div className={`${styles.section} ${styles.sectionAlt}`}>
          <div 
            className={`${styles.contentWrapper} ${styles.reverse}`}
            
          >
            <div className={styles.textContent}>
              <h2>More customers, greater revenues</h2>
              <p>
                Smart parking Systems caters with an outmost parking experience to the customers. We believe in providing a suitable place to parkers for parking cars without any hassle. Our whole system is designed to make this a reality, leaving customers with more time to shop and enjoy the facilities.
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* Discover our Smart Parking system */}
        <div className={styles.section}>
          <div 
            className={styles.contentWrapper}
            
          >
            <div className={styles.textContent}>
              <h2>Discover our Smart Parking system</h2>
              <p>
                Our Smart Parking system is designed according to the easiness of the customers. It is incorporated with LED sensors with different colored lights, so that parkers can easily assess the vacant lots. The LED lights also described the special purposes such as purple light for the special need people and red light for filled lot.
              </p>
              <p>
                The parking events captured by these sensors are fed into our Smart Cloud platform via a network of connected sensor gateways. The dashboard allows operators to view real time site activity as well as generating reports and identifying trends to make changes for the future.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/products/mall-Parking2.webp" 
                alt="Smart Parking System Dashboard"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default ParkingGuidance;
