'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/enquiry/EnquiryForm.module.css';

const EnquiryModal = ({ isOpen, onClose, clickPosition }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus({
        success: true,
        message: '✅ Message Sent! Your enquiry has been submitted successfully. We will get back to you soon.'
      });
      // Clear form on success
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        service: '',
        message: ''
      });
      
      // Close the modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to submit enquiry. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className={styles.loginHeader}>
          <h2>Contact Us</h2>
          <p>Fill out the form below and we&apos;ll get back to you soon</p>
        </div>

        {submitStatus.message && (
          <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
            {submitStatus.message}
          </div>
        )}

        <div className={styles.formWrapper}>
          {/* Left Column - Form */}
          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
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
          </div>

          {/* Right Column - Image with Contact Info Overlay */}
          <div className={styles.contactColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/Enquiry-background-image.jpg"
                alt="Contact Us"
                width={500}
                height={300}
                className={styles.contactImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Contact Info Overlay on Image */}
              <div className={styles.contactOverlay}>
                <div className={styles.overlayContactItem}>
                  <span className={styles.overlayContactIcon}>📧</span>
                  <div>
                    <div className={styles.overlayContactLabel}>Email Us</div>
                    <a href="mailto:sales@robatosystems.com" className={styles.overlayContactValue}>info@robatosystem.com</a>
                  </div>
                </div>
                
                <div className={styles.overlayContactItem}>
                  <span className={styles.overlayContactIcon}>📱</span>
                  <div>
                    <div className={styles.overlayContactLabel}>Call Us</div>
                    <a href="Phone:+91 7888711383" className={styles.overlayContactValue}>+91 78887 11383</a>
                  </div>
                </div>
                
                <div className={styles.overlayContactItem}>
                  <span className={styles.overlayContactIcon}>📍</span>
                  <div>
                    <div className={styles.overlayContactLabel}>Visit Us</div>
                    <div className={styles.overlayContactValue}>Address:11 avenue, GH-03, Gaurcity 2, sector-16c, Greater Noida west, Noida, 201318</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
  );
};

export default EnquiryModal;
