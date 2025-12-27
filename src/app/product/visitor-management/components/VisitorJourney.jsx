


import styles from '@/styles/Visitor-Managment/VisitorJourney.module.css';
import Image from 'next/image';


const VisitorJourney = () => {
  


  return (
    <section className={styles.visitorJourney}>
      <div className="container">
        <div className={styles.header}>
          <h2>Smart Visitor Management System with Kiosk & Mobility</h2>
          <p>Experience a seamless visitor journey with our comprehensive solution</p>
        </div>
        
        <div className={styles.imageContainer}>
          <Image
            src="/images/VisitorsManagment/visitor_management_work_flow.webp"
            alt="Visitor Management Journey Overview"
            width={1000}
            height={600}
            className={styles.journeyImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default VisitorJourney;
