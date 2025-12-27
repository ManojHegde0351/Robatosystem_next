import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Agile-software-development/WebDevelopment/webDevelopment.module.css';
import { FaLaptopCode, FaServer, FaShoppingCart, FaUsers, FaCogs, FaIdCard } from 'react-icons/fa';


export const services = [
  { 
    id: 1, 
    title: 'Custom Software Development', 
    icon: <FaLaptopCode className={styles.serviceIcon} />,
    description: 'Tailored software solutions designed to meet your specific business requirements and processes.'
  },
  { 
    id: 2, 
    title: 'Web Content Management System', 
    icon: <FaServer className={styles.serviceIcon} />,
    description: 'Easy-to-use CMS platforms that allow you to manage your website content effortlessly.'
  },
  { 
    id: 3, 
    title: 'E-Commerce Portal', 
    icon: <FaShoppingCart className={styles.serviceIcon} />,
    description: 'Feature-rich online stores with secure payment gateways and inventory management.'
  },
  { 
    id: 4, 
    title: 'Social Networking Development', 
    icon: <FaUsers className={styles.serviceIcon} />,
    description: 'Build engaging social platforms with real-time interactions and community features.'
  },
  { 
    id: 5, 
    title: 'Custom ERP Development', 
    icon: <FaCogs className={styles.serviceIcon} />,
    description: 'Comprehensive ERP solutions to streamline your business operations and increase efficiency.'
  },
  { 
    id: 6, 
    title: 'Smart Card Solutions', 
    icon: <FaIdCard className={styles.serviceIcon} />,
    description: 'Secure and efficient smart card systems for various business applications.'
  },
];



const WebDevelopmentServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.servicesWrapper}>
          <div className={styles.servicesContent}>
            <h2 className={styles.sectionTitle}>Web Application Development Service Offerings</h2>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    {service.icon}
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.servicesImageContainer}>
            <Image 
              src="/images/AgileSoftwareDevelopment/webapplication/WebDevelopment-Service.webp" 
              alt="Web Development Services"
              width={600}
              height={400}
              className={styles.servicesImage}
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default WebDevelopmentServices;
