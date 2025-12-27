 
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Product/ProductService.module.css';

const ProductService = () => {
 const services = [
    {
      id: 1,
      title: "Parking Management",
      description: "Intelligent parking solutions that maximize space usage and improve user experience",
      image: "/images/services/parking.webp",
      link: "/product/parking-management",
      subSections: [
        { name: "Parking Managment System", path: "/product/parking-management" },
        { name: "RFID Based Parking", path: "/product/parking-management/rfid-parking" },
        { name: "LED Parking signage", path: "/product/parking-management/led-parking-signage" },
        { name: "Handle Parking Machine", path: "/product/parking-management/handheld-parking-machine" }
      ]
    },
    {
      id: 2,
      title: "Industry 4.0 Automation",
      description: "Smart factory automation and IoT solutions boost productivity and efficiency",
      image: "/images/services/automation.webp",
      link: "/product/industry-automation/smart-andon-system",
      subSections: [
        { name: "Smart ANDON System", path: "/product/industry-automation/smart-andon-system" },
        { name: "Smart City Waste Management", path: "/product/industry-automation/smart-city-waste-management" },
        { name: "Weightbridge Management", path: "/product/industry-automation/weighbridge-management" },
        { name: "Smart Factory Management", path: "/product/industry-automation/smart-factory-management" },
        { name: "Smart Traffic Management", path: "/product/industry-automation/smart-traffic-management" }
      ]
    },
    {
      id: 3,
      title: "Visitors Management",
      description: "Streamlined visitor registration and tracking systems for enhanced security",
      image: "/images/services/access-control.webp",
      link: "/product/visitor-management",
      subSections: [
        { name: "Smart Visitor Management", path: "/product/visitor-management" },
        { name: "Smart Queue Management", path: "/product/queue-management" }
      ]
    },
    {
      id: 4,
      title: "Secure Access Management",
      description: "Advanced access control systems with RFID, biometric, and barcode technologies",
      image: "/images/services/secure-access.webp",
      link: "/product/secure-access-management/esd-access-control-system",
      subSections: [
        { name: "ESD Access Control System", path: "/product/secure-access-management/esd-access-control-system" },
        { name: "Barcode & Card Access System", path: "/product/secure-access-management/barcode-card-access" },
        { name: "RFID Card Access System", path: "/product/secure-access-management/rfid-card-access" },
        {name:"Barcode & RFID Access System",path:"/product/secure-access-management/barcode-rfid-access"},
        { name: "Gym Access Control System", path: "/product/secure-access-management/gym-access-control" }
      ]
    },
    {
      id: 5,
      title: "Agile Software Development",
      description: "Custom software solutions using agile methodologies for rapid development and delivery",
      image: "/images/services/agile-software.webp",
      link: "/product/agile-software-development/mobile-development",
      subSections: [
        { name: "Mobile Applications", path: "/product/agile-software-development/mobile-development" },
        { name: "Web Applications", path: "/product/agile-software-development/web-development" },
        { name: "Embedded Firmware", path: "/product/agile-software-development/embedded-firmware" },
        { name: "Desktop Softwares", path: "#" }
      ]
    }
  ];


  const rows = [services];

  const renderServiceCard = (service) => (
    <div key={service.id} className={styles.serviceColumn}>
      <div className={styles.serviceCard}>
        <div className={styles.cardWrapper}>
          <div 
            className={styles.cardImage}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.subSections && (
                <div className={styles.subSections}>
                  <ul>
                    {service.subSections.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.path || '#'} className={styles.subSectionLink}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href={service.link || '#'} className={styles.navigationButton}>
                Explore Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.row}>
        {services.map(service => renderServiceCard(service))}
      </div>
    </div>
  );
};

export default ProductService;
