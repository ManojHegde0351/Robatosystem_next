// src/app/contact/OfficeCard.jsx


import React from "react";

import styles from "@/styles/Contact/contact.module.css";

export default function OfficeCard({ office }) {

  const mapUrl = office.id === "india" 
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5216831338626!2d77.42270266151706!3d28.619853590940398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef680df5f2df%3A0xa631c7d2721f6e8!2sRobato%20Systems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765347000397!5m2!1sen!2sin"
    : `https://maps.google.com/maps?q=${encodeURIComponent(office.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed&language=en&region=US`;

  return (
    
    <div className={styles.officePair}>
      <div className={styles.officeInfo}>
        <h3>{office.name}</h3>
        <div className={styles.officeDetails}>
          <div className={styles.officeRow}>
            <span className={styles.label}>Address:</span>
            <span className={styles.value}>{office.address}</span>
          </div>
          <div className={styles.officeRow}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>{office.phone}</span>
          </div>
          <div className={styles.officeRow}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{office.email}</span>
          </div>
          <button className={styles.appointmentBtn} suppressHydrationWarning>
            Get Appointment
          </button>
        </div>
      </div>
      
      {/* Map Container with black and white effect */}
      <div className={styles.mapContainer}>
        <div className={styles.mapWrapper}>
          <iframe
            src={mapUrl}
            className={styles.mapFrame}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing location of ${office.name}`}
          />
        </div>
      </div>
    </div>
  );
}
