'use client';

import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
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
        message: '✅ Message Sent! Your message has been submitted successfully. We will get back to you soon.'
      });
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="icon-container">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <h2>Message</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        {submitStatus.message && (
          <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number *</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
