import React from 'react';
import styles from '../../../../styles/Queue-Management/ApplicationAreas.module.css';
import Image from 'next/image';

const ApplicationAreas = () => {
  const applications = [
    {
      name: 'Banks',
      image: '/images/VisitorsManagment/QueueManagment/bank_queue_management_system.webp'
    },
    {
      name: 'Restaurants',
      image: '/images/VisitorsManagment/QueueManagment/restaurant_queue_management_system.webp'
    },
    {
      name: 'Airport & Airlines',
      image: '/images/VisitorsManagment/QueueManagment/airport_airlines_queue_management_system.webp'
    },
    {
      name: 'Hospitals',
      image: '/images/VisitorsManagment/QueueManagment/hospital_queue_management_system.webp'
    },
    {
      name: 'Hiring',
      image: '/images/VisitorsManagment/QueueManagment/hiring_queue_management_system.webp'
    },
    {
      name: 'Stock Exchange',
      image: '/images/VisitorsManagment/QueueManagment/stock_exchange_queue_management_system.webp'
    },
    {
      name: 'Service Centre',
      image: '/images/VisitorsManagment/QueueManagment/service_centre_queue_management_system.webp'
    },
    {
      name: 'Government Offices',
      image: '/images/VisitorsManagment/QueueManagment/government_municipal_queue_management_system.webp'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Area Applications of Queue Management System</h2>
        <div className={styles.grid}>
          {applications.map((app, index) => (
            <div key={index} className={styles.item}>
              <div className={`${styles.imageContainer} ${app.name === 'Airport & Airlines' ? styles.airportImage : ''}`}>
                <Image
                  src={app.image}
                  alt={app.name}
                  width={app.name === 'Airport & Airlines' ? 150 : 200}
                  height={app.name === 'Airport & Airlines' ? 100 : 150}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.appName}>{app.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationAreas;
