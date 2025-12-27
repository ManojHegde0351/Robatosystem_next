'use client';

import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SmartSolutionsGrid.module.css';

const SmartSolutionsGrid = () => {
  const solutions = [
    {
      id: 1,
      title: 'Vehicle Tracking System (VTS)',
      description: 'Vehicle Tracking Systems employing GSM/GPS/GIS technology to monitor movement of garbage trucks across the city premises with built-in route planning and vehicle rostering features.',
      icon: '🚛',
      image: '/images/industry4.0/smart-waste-city/Gps-Vehicle-tracking.webp',
   
    },
    {
      id: 2,
      title: 'RFID Technology',
      description: 'RFID Readers to identify vehicles from fixed unique TAGs at transfer stations/process plants during waste dumping operations.',
      icon: '🏷️',
      image: '/images/industry4.0/smart-waste-city/automatic-rfid-boom-barrier-solid-waste-management.webp',
   
    },
    {
      id: 3,
      title: 'Boom Barrier System',
      description: 'Automatic and secure entry & exit of trucks at transfer stations/process plants controlled by Boom Barrier machines.',
      icon: '🚧',
      image: '/images/industry4.0/smart-waste-city/Automatic_RFID_Boom_Barrier_waste-management.webp',
    
    },
    {
      id: 4,
      title: 'Smart Traffic Light System',
      description: 'Traffic lights to guide drivers at transfer stations, indicating weight collection status and weighting machine availability (RED/GREEN).',
      icon: '🚦',
      image: '/images/industry4.0/smart-waste-city/Automatic_Traffic_Light.webp',
      
    },
    {
      id: 5,
      title: 'Weighing Bridge System',
      description: 'Weight Bridge to measure truck weight before and after garbage dumping, ensuring accurate tracking of waste collection and disposal.',
      icon: '⚖️',
      image: '/images/industry4.0/smart-waste-city/automatic_weighing_bridge_system.webp',
     
    },
    {
      id: 6,
      title: 'IoT Integration',
      description: 'Seamless data transmission from trucks and dumping yards to Central Control System using LTE, 4G, 3G, and GPRS technologies.',
      icon: '🌐',
      image: '/images/industry4.0/smart-waste-city/IoTSmartCitiesSolidWasteManagement.webp',
      
    },
    {
      id: 7,
      title: 'Smart Camera System',
      description: 'Smart and connected cameras installed at transfer stations for real-time monitoring from Central Control Office.',
      icon: '📹',
      image: '/images/industry4.0/smart-waste-city/solidwastemanagementsmart_camera.webp',
      
    },
    {
      id: 8,
      title: 'Announcement System',
      description: 'Internet-connected, remotely controlled audio announcement system for vehicle management from Central Control Office.',
      icon: '📢',
        image: '/images/industry4.0/smart-waste-city/Transfer_Station_Remote_Announcement_System.webp',  
    },
    {
      id: 9,
      title: 'Management Information System',
      description: 'Cloud-based web server and application for Central Control Team to monitor system health, generate reports, and perform analytics.',
      icon: '💻',
      image: '/images/industry4.0/smart-waste-city/solid_waste_management_information_system.webp',
     
    }
  ];

  return (
    <section className={styles.solutionsSection} id="solutions">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Smart Solid Waste Management Solutions: Employing Technologies
          </h2>
          <p className={styles.subtitle}>
            A host of latest technologies can solve different problems in SWM system. Smart Solid Waste Management includes:
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={styles.solutionCard}
            >
              <div className={styles.solutionImageContainer}>
                <Image 
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className={styles.solutionImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div 
                  className={styles.imageOverlay}
                 
                >
                  <div className={styles.overlayContent}>
                    <h3 className={styles.overlayTitle}>{solution.title}</h3>
                    <p className={styles.overlayDescription}>{solution.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSolutionsGrid;
