

import Image from 'next/image';
import styles from '@/styles/parking/ParkingSolutionsOverview.module.css';

const ParkingSolutionsOverview = () => {
  return (
    <section id="parklogix-comprehensive" className={styles.overviewSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              ParkLogix: Comprehensive Parking Management Solution
            </h2>
            <p className={styles.description}>
              ParkLogix is a comprehensive park management software in one package used by commercial parking operators, airports, municipalities, hospitals, service agencies, enterprises, and government operators. Organizations can use the ParkLogix suite of tools to operate a thousand stall garages, as it is adaptable to any size business.
            </p>
            
            <div className={styles.expandableContent}>
              <p>
                The ParkLogix suite offers end-to-end solutions designed for Windows. This online parking management system software provides access controls, event management, and revenue management, all in one place. It provides guard accountability through real-time reporting, on-site accountability, ensuring immediate, instant alerts of critical issues for fast response times and efficient parking lot management.
              </p>
            <p>
                ParkLogix software manages the ticket machine, ANPR camera, parking slot sensors, Parking Signage Boards and boom barrier. It also shares information with Parking Guidance Server about vehicle in transit and exit verifier about vehicle exit details. Also contain details of proximity cards and their access rights along with new issue & recharge options. It will open the barrier and give command to ticket dispenser to print ticket depending upon access rights or card use classification of vehicle detected and corresponding button pressed at ticket machine.
              </p>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <Image
              src="/images/products/ParkLogix-Suite.webp"
              alt="ParkLogix Parking Management System"
              width={300}
              height={200}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingSolutionsOverview;
