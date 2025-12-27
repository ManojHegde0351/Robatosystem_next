import styles from '@/styles/parking/Parkingguidence.module.css';

const IntelligenceGuidanceSystem = () => {
  const fullContent = `
    <p>ParkLogix is an intelligent parking solution designed to maximize the motorists' experience, providing a way to utilize parking space efficiently without manual intervention. This user-friendly, automatic remote-controlled parking solution helps increase revenue for the parking management industry. In today's world, the inadequacy of parking spaces creates problems for every motorist. The lack of parking places leads to traffic congestion, wastage of time, and financial losses for drivers.</p>
    
    <p>Traffic congestion inside parking areas is primarily due to the absence of an effective parking guidance system. Consumers often spend significant time searching for parking spaces, leading to increased vehicle emissions, time wastage, and dissatisfaction. Robato Parking Guidance System offers a simple yet robust automatic solution that provides real-time information about actual vehicle availability in parking facilities.</p>
    
    <p>Our advanced Parking Guidance System helps guide drivers about space availability in parking areas, saving them time and reducing fuel consumption. The system features:</p>
    
    <ul>
      <li>LED displays showing slot availability on each floor</li>
      <li>Real-time visual guidance for end-user convenience</li>
      <li>Automatic boom barrier gates that activate when parking spaces are full</li>
      <li>Smart sensors to detect and indicate vacant spaces</li>
    </ul>
  `;

  return (
    <>
      <section className={styles.intelligenceSection}>
        <div className={styles.container} id="parklogix">
          <h2 className={styles.sectionTitle}>
            Intelligent Parking Solutions for everyone
          </h2>
          
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div
                className={styles.contentInner}
                dangerouslySetInnerHTML={{ 
                  __html: fullContent
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntelligenceGuidanceSystem;
