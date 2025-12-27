
import Image from 'next/image';
import styles from '@/styles/parking/rfid/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div
          className={styles.sectionHeader}
         
        >
          <h2>Working of RFID based Automatic Parking System</h2>
        </div>

        <div className={styles.workingContent}>
          <div
            className={styles.workingText}
           
          >
            <p>The RFID is the wireless transmit data by making use of radio frequency waves. Tagging vehicle with the RFID tag helps the users to identify them uniquely, automatically and quickly.</p>
            
            <p>The RFID reader emits radio frequency waves that detected by the RFID tag and in return, it transfers tag id and data to the reader. Reader than transfers the tag data to the control panel and the data verified by it or it can verified at connected computer system by parking management system software. If the data is accurate, control panel sends signals to the boom barrier to open. RFID tags contain integrated circuit and antenna that transmits the data to the RFID Reader. The reader then uses tag data and transforms it into an operational form. RFID technology has changed the pace of parking industry completely and has made life a lot simpler.</p>
            
            <p>The RFID readers, RFID tags and Boom barriers controls the check-in and check-out of vehicles from parking lots. If the parking lots are running out of vacant space, the RFID based automatic parking system does not open the boom barrier for the entry of vehicle. The VMS parking signage boards show the real-time parking lots availability, if parking is full then its displays Parking full on it else its shows available parking lots. At the end, RFID readers automatically collects the parking charges at the exit without stopping the vehicle.</p>

            <div className={styles.componentsSection}>
              <h3>At simple level, RFID system in automatic parking industry consists of five components:</h3>
              <div className={styles.componentsGrid}>
                <div className={styles.componentCard}>
                  <div className={styles.componentImage}>
                    <Image
                      src="/images/products/RFID-Tag.webp"
                      alt="RFID Tags"
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                  </div>
                  <h4>RFID Tags</h4>
                </div>
                <div className={styles.componentCard}>
                  <div className={styles.componentImage}>
                    <Image
                      src="/images/products/RFID-Reader.webp"
                      alt="RFID Readers"
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                  </div>
                  <h4>RFID Readers</h4>
                </div>
                <div className={styles.componentCard}>
                  <div className={styles.componentImage}>
                    <Image
                      src="/images/products/Control-panel.webp"
                      alt="Control Panel"
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                  </div>
                  <h4>Control Panel</h4>
                </div>
                <div className={styles.componentCard}>
                  <div className={styles.componentImage}>
                    <Image
                      src="/images/products/boom-barrier2.webp"
                      alt="Boom Barriers"
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                  </div>
                  <h4>Boom Barriers</h4>
                </div>
                <div className={styles.componentCard}>
                  <div className={styles.componentImage}>
                    <Image
                      src="/images/products/PM-Software.webp"
                      alt="PM Software"
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                  </div>
                  <h4>PM Software</h4>
                </div>
              </div>
              <p className={styles.installationNote}>
                Installed at entry and exit points of the parking facility. The readers read the signals being broadcasted by the RFID Tags displayed on each vehicle when the vehicle approaches near to entry/exit.
              </p>
            </div>

            <div className={styles.specsSection}>
              <div className={styles.specsContent}>
                <h3>Long Range RFID Reader</h3>
                <ul className={styles.specsList}>
                  <li><strong>Receiving frequency:</strong> 433MHZ</li>
                  <li><strong>Send frequency:</strong> 38K</li>
                  <li><strong>Reader angle:</strong> 90°</li>
                  <li><strong>Means of communication:</strong> RS485, Veigand26, Veigand34</li>
                  <li><strong>Data rate:</strong> 9600bps (RS232)</li>
                  <li><strong>Operating voltage:</strong> DC9V ~ 18V</li>
                  <li><strong>Reading distance:</strong> 15 meters</li>
                  <li><strong>Operating Humidity:</strong> 10% to 90%</li>
                  <li><strong>Operating Temperature:</strong> -40°C to 80°C</li>
                  <li><strong>Weight / Size:</strong> 4Kg/250mm * 260mm * 65mm (W * H * D)</li>
                </ul>
              </div>
              <div className={styles.specsImage}>
                <Image
                  src="/images/products/Long-range-RFID-reader.webp"
                  alt="Long Range RFID Reader"
                  width={400}
                  height={300}
                  className={styles.readerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;