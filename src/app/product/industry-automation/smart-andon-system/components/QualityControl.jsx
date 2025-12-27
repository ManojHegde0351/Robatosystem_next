'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import useCarousel from '@/hooks/useCarousel';
import styles from '@/styles/industry/smart-andon/QualityControl.module.css';

// Sample images - replace with actual image paths
const carouselImages = [
  '/images/industry4.0/SmartANDONSystem/smart-andon-system1.webp',
  '/images/industry4.0/SmartANDONSystem/smart-andon-system2.webp',
  '/images/industry4.0/SmartANDONSystem/smart-andon-system3.webp',
];

const QualityControl = () => {
  const { currentIndex, nextSlide, prevSlide } = useCarousel(carouselImages, 5000);

  return (
    <section className={styles.qualityControl}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.title}
            >
              Smart Andon for quality control
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.textBlock}
            >
              <p className={styles.paragraph}>
                An Andon system is one of the principal components of quality control of a production system. Andon is a manufacturing term referring to a system to notify management, maintenance, and other workers of a quality or process problem. It was first pioneered by Toyota production systems.
              </p>
              <p className={styles.paragraph}>
                It helps in providing immediate assistance to the workers when a defect is found in the production line without halting the process for longer hours.
              </p>
              <p className={styles.paragraph}>
                The main reasons behind the need of Andon system are defects created or found, tool malfunction or the existence of safety problems. These problems stopped the work until the problems get solved.
              </p>
              <p className={styles.paragraph}>
                Robato&apos;s Andon systems can include text, graphics, or audio elements and visual display system. Coded tones, music with different tunes corresponding to the various alerts and pre-recorded verbal messages can also be incorporated for the audio alerts.
              </p>
            </motion.div>
          </div>

          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={styles.carouselItem}
                >
                   <div className={styles.imageWrapper}>
                    <Image 
                      src={carouselImages[currentIndex]} 
                      alt={`Quality Control ${currentIndex + 1}`}
                      fill
                      className={styles.carouselImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <button 
                onClick={prevSlide} 
                className={`${styles.carouselButton} ${styles.prevButton}`}
                suppressHydrationWarning
              >
                &lt;
              </button>
              <button 
                onClick={nextSlide} 
                className={`${styles.carouselButton} ${styles.nextButton}`}
                suppressHydrationWarning
              >
                &gt;
              </button>
              
              <div className={styles.dots}>
                {carouselImages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
