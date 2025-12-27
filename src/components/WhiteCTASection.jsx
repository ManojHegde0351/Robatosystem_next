"use client";

import { useState, useEffect, useRef } from "react";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import BookDemoModal from './BookDemoModal';
import "@/styles/WhiteCTASection.css";

const WhiteCTASection = ({ 
  title = "Ready to Transform Your Business?",
  paragraph = "Take the next step towards operational excellence with our comprehensive solutions. Our team of experts is ready to help you streamline processes, enhance productivity, and achieve your business goals. Schedule a free demo today and discover how we can make a difference for your organization.",
  showParagraph = true 
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
    <section className={`white-cta-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="white-cta-container">
        {/* Big Title */}
        <div className={`cta-title ${isVisible ? 'animate-title' : ''}`}>
          <h2>{title}</h2>
        </div>

        {/* Paragraph Section */}
        {showParagraph && (
          <div className={`cta-paragraph ${isVisible ? 'animate-paragraph' : ''}`}>
            <p>{paragraph}</p>
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
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default WhiteCTASection;
