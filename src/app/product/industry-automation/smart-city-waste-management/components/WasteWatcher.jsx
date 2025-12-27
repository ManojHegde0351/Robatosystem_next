


import styles from '@/styles/industry/smart-city-waste/WasteWatcher.module.css';

const WasteWatcher = () => {
 

  return (
    <section className={styles.wasteWatcherSection}>
      <div className={styles.container}>

          <div className={styles.header}>
          
      
          <span className={styles.subtitle}>Smart Solid Waste Management</span>
          <h2 className={styles.title}>New Generation Waste Watcher</h2>
          <p className={styles.lead}>
            We have developed a smart solid waste management system which enables seamless options to monitor all the work done 
            from solid waste collection from societies to solid waste recycling plant.
          </p>
     </div>

        <div className={styles.content}>
         
           <div className={styles.description}>
            <p>
              Smart Solid Waste Management, an end-to-end solution, offers automatic GPS tracking of garbage trucks, 
              automatic entry and exit at transfer stations, and automatic garbage weight calculation on connected 
              weighing bridges. All data of solid waste management is available on an Online Dashboard to generate 
              various types of reports for administrative purposes.
            </p>
            <p>
              Smart Cameras remotely monitor real-time activities at transfer stations along with audio control 
              facilities to give instructions to staff at any time via an IoT-based announcement system.
            </p>
          </div>

          

          {/* Vital Benefits Section */}
     
            <div className={styles.vitalBenefits}>
            <h3 className={styles.vitalTitle}>VITAL BENEFITS</h3>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>100%</div>
                <div className={styles.benefitLabel}>Real Time</div>
                <div className={styles.benefitTitle}>Work Traceability</div>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>Upto 100%</div>
                <div className={styles.benefitLabel}>Accuracy</div>
                <div className={styles.benefitTitle}>True Utilization of Funds</div>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>Transparent</div>
                <div className={styles.benefitValue}>Upto 99%</div>
                <div className={styles.benefitTitle}>Work Visibility</div>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>100%</div>
                <div className={styles.benefitLabel}>Availability</div>
                <div className={styles.benefitTitle}>Data History</div>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>Centralized</div>
                <div className={styles.benefitValue}>99.99%</div>
                <div className={styles.benefitTitle}>Track of Workdone</div>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitValue}>100%</div>
                <div className={styles.benefitLabel}>Automatic</div>
                <div className={styles.benefitTitle}>Real Data Entries</div>
              </div>
            </div>
       </div>
        </div>
      </div>
    </section>
  );
};

export default WasteWatcher;
