// src/app/product/industry-automation/smart-city-waste-management/components/WasteManagementIntro.jsx


import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/WasteManagementIntro.module.css';

const WasteManagementIntro = () => {
  return (
    <section className={styles.introSection} id="overview">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Do you have a Solid Waste Management Problem?</h2>
            <div className={styles.textContent}>
              <p className={styles.description}>
                Waste management is a significant challenge currently facing India. While the SWACHH BHARAT initiative is widely followed, effective waste management remains elusive. Despite the construction of numerous waste management plants across the country, several critical issues persist:
              </p>
              
              <ul className={styles.problemList}>
                <li>Lack of control over truck routes and schedule compliance</li>
                <li>Inefficient garbage collection and transportation</li>
                <li>Poor garbage dumping practices</li>
                <li>No proper record of waste collected</li>
                <li>Ineffective dumping yard management</li>
                <li>Lack of comprehensive Management Information System (MIS)</li>
              </ul>

        

              <div className={styles.solution}>
                <h3>Our Smart Solution</h3>
                <p>
                  Robato System provides an advanced Smart Solid Waste Management solution that addresses these challenges. Our system ensures:
                </p>
                <ul className={styles.solutionList}>
                  <li>Real-time vehicle tracking for waste collection</li>
                  <li>Automated waste weighing and recording</li>
                  <li>Comprehensive digital record-keeping</li>
                  <li>Live data access for management</li>
                  <li>Efficient route optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/industry4.0/smart-waste-city/Solid_Waste_Management_System.webp"
              alt="Smart Waste Management Solution"
              width={500}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.introImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteManagementIntro;