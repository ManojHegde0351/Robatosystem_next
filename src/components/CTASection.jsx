"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import BookDemoModal from './BookDemoModal';
import styles from '@/styles/CTASection.css';

const CTASection = ({ 
  quote = "Transform your business with our innovative solutions. Take the first step towards excellence today.",
  showQuote = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+91 7888711383';
  };

  return (
    <section className={`cta-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="cta-container">
        {/* Left Content */}
        <div className="cta-content">
          {/* Company Name */}
          <div className={`company-name ${isVisible ? 'animate-company' : ''}`}>
            <h2>Robato Systems</h2>
          </div>

          {/* Quote Section */}
          {showQuote && (
            <div className={`cta-quote ${isVisible ? 'animate-quote' : ''}`}>
              <blockquote>
                {quote}
              </blockquote>
            </div>
          )}

          {/* CTA Buttons */}
          <div className={`cta-buttons ${isVisible ? 'animate-buttons' : ''}`}>
            <button 
              className="cta-button demo-button"
              onClick={handleBookDemo}
            >
              <FaCalendarAlt className="button-icon" />
              Book Free Demo
            </button>

            <button 
              className="cta-button call-button"
              onClick={handleCallNow}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaPhone className={`button-icon ${isHovered ? 'shake' : 'shake-always'}`} />
              Call Now
            </button>
          </div>
        </div>

        {/* Right Visual Area */}
        <div className={`cta-visual ${isVisible ? 'animate-visual' : ''}`}>
          <div className="cta-image-container">
            <Image 
              src="/images/CTA-Section-Background.webp" 
              alt="Robato Systems Mobile Solution" 
              className="cta-image"
              width={600}
              height={500}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default CTASection;
