


import ContactFormClient from './ContactFormClient';
import styles from "@/styles/Contact/contact.module.css";
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className={styles.contactFormWrapper}>
      <div className={styles.contactFormContainer}>
        {/* Left side - Image */}
        <div className={styles.contactImageSection}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/Send-Message.webp" 
              alt="Contact Us" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.contactImage}
            />
            <div className={styles.imageOverlay}>
              <h2>Get In Touch</h2>
              <p>We&apos;d love to hear from you</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className={styles.contactFormSection}>
          <div className={styles.formHeader}>
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we&apos;ll get back to you</p>
          </div>
          
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your Name *" 
                  className={styles.formField} 
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email *" 
                  className={styles.formField} 
                  required 
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input 
                  name="phone" 
                  type="text" 
                  placeholder="Your Phone" 
                  className={styles.formField} 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  name="company" 
                  type="text" 
                  placeholder="Company Name" 
                  className={styles.formField} 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <input 
                name="subject" 
                type="text" 
                placeholder="Subject" 
                className={styles.formField} 
              />
            </div>

            <div className={styles.formGroup}>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Your Message *" 
                className={styles.formTextarea} 
                required
              ></textarea>
            </div>

            <div className={styles.formActions}>
              <ContactFormClient />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
