'use client';

import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import Link from 'next/link';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import styles from '@/styles/Partner/partner.module.css';

const PartnerFormClient = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  } = usePartnerForm();

  if (submitStatus === 'success') {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>
          <Check size={48} />
        </div>
        <h2>Thank You!</h2>
        <p>Your application has been submitted successfully. We&apos;ll get back to you soon.</p>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          <X size={20} />
          <span>Error submitting the form. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company Name *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aboutBusiness">About Your Business *</label>
            <textarea
              id="aboutBusiness"
              name="aboutBusiness"
              rows="4"
              value={formData.aboutBusiness}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Select Solutions in Which You Are Interested *</label>
            <div className={styles.checkboxGroup}>
              {[
                'Parking Management System',
                'Industry 4.0 Automation',
                'Visitor Management',
                'Secure Access Management',
                'Smart City Solutions',
                'Traffic Management',
                'Queue Management',
                'Andon Management'
              ].map((solution) => (
                <label key={solution} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="solutions"
                    value={solution}
                    checked={formData.solutions.includes(solution)}
                    onChange={handleCheckboxChange}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkmark}></span>
                  {solution}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.submitRow}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </div>
      </form>
    </>
  );
};

export default PartnerFormClient;
