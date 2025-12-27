'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '@/styles/parking/led/LEDParkingGuidance.module.css';

const ParkingGuidanceClient = ({ benefits, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  };

  return (
    <section className={styles.parkingGuidance}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Why You Need Parking Signage?</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className={styles.imageGallery}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.carouselContainer}>
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className={styles.carouselSlide}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Parking Signage ${currentIndex + 1}`}
                  width={500}
                  height={350}
                  className={styles.mainImage}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
                setIsAutoPlaying(false);
              }}
              aria-label="Previous image"
              suppressHydrationWarning
            >
              {"<"}
            </button>
            
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
                setIsAutoPlaying(false);
              }}
              aria-label="Next image"
              suppressHydrationWarning
            >
              {">"}
            </button>

            <div className={styles.slideIndicators}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.slideIndicator} ${
                    currentIndex === index ? styles.activeIndicator : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParkingGuidanceClient;
