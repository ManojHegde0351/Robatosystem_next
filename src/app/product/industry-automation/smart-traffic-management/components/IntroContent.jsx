import React from 'react';
import Image from 'next/image';
import styles from '@/styles/industry/SmartTrafficManagement/IntroContent.module.css';

const IntroContent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
   
        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Traffic Management System</h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionText}>
              Traffic Management is a system where centrally-controlled traffic signals and sensors regulate the flow of traffic through the city in response to demand. Upgrading and integrating all the signals on the main roads in the city will reduce everyday congestion markedly, by smoothing traffic flows and prioritizing traffic in response to demand in real time. It will also reduce pollution throughout the city as stop-start driving is inefficient and polluting.
            </p>
          </div>
        </div>

   
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/industry4.0/Traffic-Management/Traffic_Light.webp"
              alt="Traffic Control Center"
              width={1000}
              height={600}
              className={styles.mainImage}
              priority
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <p className={styles.sectionText}>
              It will also provide a perfect opportunity to install monitoring equipment to collect much more detailed traffic and journey data than we have now. Each set of traffic lights will have communication equipment that can be used to transmit (anonymous) vehicle data, either from ANPR cameras or Bluetooth detectors, and CCTV feeds (where appropriate).
            </p>
            
            <h3 className={styles.subsectionTitle}>ANPR Technology</h3>
            <p className={styles.sectionText}>
              ANPR (Automatic Number Plate Recognition) software uses OCR (Optical Character Recognition) capabilities for automatic recognition of vehicles number plates. ANPR allows you to reliably identify vehicles with restrictions (stolen car, not licensed, unpaid fines, etc.), alerting the authorities when they have passed through inspection, allowing immediate action such as seizure of the vehicle, surrender of passengers and any other action.
            </p>
            
            <p className={styles.sectionText}>
              When passing by the camera, ANPR gets a photo of the vehicles number plate, registering it on an images database, with date, hour and camera information, allowing a lot of consults and a more effective traffic management.
            </p>
            
            <p className={styles.sectionText}>
              Systems commonly use InfraRed (IR) lighting to allow the camera to take the picture at any time of the day. ANPR technology tends to be region-specific, owing to plate variation from place to place. Traffic control systems use ANPR units which provide details about the movement and flow of vehicles around the road network. These details can highlight the problem areas and help to make incident management decisions. The photograph of the car and the driver can be stored and retrieved if there is a need for evidence in disputes or crime situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
