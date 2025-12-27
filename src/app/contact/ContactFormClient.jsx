'use client';

import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/Contact/contact.module.css";

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const form = document.querySelector(`.${styles.contactForm}`);
    if (!form) return;

   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
   
            const contactWrapper = document.querySelector(`.${styles.contactFormWrapper}`);
            const contactContainer = document.querySelector(`.${styles.contactFormContainer}`);
            const imageSection = document.querySelector(`.${styles.contactImageSection}`);
            const formSection = document.querySelector(`.${styles.contactFormSection}`);
            const imageOverlay = document.querySelector(`.${styles.imageOverlay}`);
            const formHeader = document.querySelector(`.${styles.formHeader}`);
            
            if (contactWrapper) {
              contactWrapper.style.opacity = '1';
              contactWrapper.style.transform = 'translateY(0)';
            }
            if (contactContainer) {
              contactContainer.style.opacity = '1';
              contactContainer.style.transform = 'translateY(0)';
            }
            if (imageSection) {
              imageSection.style.opacity = '1';
              imageSection.style.transform = 'translateX(0)';
            }
            if (formSection) {
              formSection.style.opacity = '1';
              formSection.style.transform = 'translateX(0)';
            }
            
     
            if (imageOverlay) {
              imageOverlay.style.animationPlayState = 'running';
            }
            if (formHeader) {
              formHeader.style.animationPlayState = 'running';
              formHeader.style.zIndex = '1';
            }
            
   
            const formElements = form.querySelectorAll(`.${styles.formField}, .${styles.formTextarea}`);
            formElements.forEach((el, index) => {
              setTimeout(() => {
                el.style.animationPlayState = 'running';
                el.style.zIndex = '10';
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );


    const contactSection = document.querySelector(`.${styles.contactFormWrapper}`);
    if (contactSection) {
      observer.observe(contactSection);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Form submitted:", data);

    
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);

      const submitBtn = e.target.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "MESSAGE SENT!";
        submitBtn.style.background = "#10b981";
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "";
          setIsSubmitted(false);
          e.target.reset();
        }, 3000);
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
      observer.disconnect();
    };
  }, []);

  return (
    <button 
      type="submit" 
      ref={formRef}
      className={`${styles.submitBtn} ${isInView ? styles.buttonVisible : styles.buttonHidden}`}
      disabled={isSubmitting || isSubmitted}
    >
      {isSubmitting ? (
        <span className={styles.buttonContent}>
          <span className={styles.spinner}></span>
          SENDING...
        </span>
      ) : isSubmitted ? (
        <span className={styles.buttonContent}>
          ✓ SENT
        </span>
      ) : (
        <span className={styles.buttonContent}>
          SEND MESSAGE
        </span>
      )}
    </button>
  );
}
