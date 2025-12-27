'use client';

import { useEffect } from 'react';
import { useEnquiryForm } from '@/hooks/useEnquiryForm';
import styles from '@/styles/enquiry/EnquiryForm.module.css';

const EnquiryForm = ({ onClose }) => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useEnquiryForm();


  const handleFormSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result?.success) {
   
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.loginContainer}>
        {onClose && (
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            ×
          </button>
        )}
        
        <div className={styles.loginHeader}>
          <h2>Contact Us</h2>
          <p>Fill out the form below and we&aposs;ll get back to you soon</p>
        </div>

        {submitStatus.message && (
          <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleFormSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              <option value="parking">Parking Management</option>
              <option value="industry">Industry 4.0 Automation</option>
              <option value="visitors">Visitors Management</option>
              <option value="secure">Secure Access Management</option>
              <option value="agile">Agile Software Development</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              disabled={isSubmitting}
              rows="4"
              className={styles.textarea}
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>

       
          
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📧</span>
            <a href="mailto:info@robatosystem.com">info@robatosystem.com</a>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📱</span>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>123 Tech Park, Bangalore, India</span>
            </div>
          
        </div>
      </div>
  
  );
};

export default EnquiryForm;
