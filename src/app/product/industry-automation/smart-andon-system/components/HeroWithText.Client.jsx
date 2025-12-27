'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useFadeInAnimation from '@/hooks/useFadeInAnimation';
import styles from '@/styles/industry/smart-andon/HeroWithText.module.css';

export default function HeroWithTextAnimation({ lines }) {
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  const { ref, animationStates } = useFadeInAnimation(lines, {
    staggerDelay: 0.1,
    delayBetweenLines: 500,
    viewportOptions: {
      threshold: 0.1,
      rootMargin: '0px 0px -20% 0px',
      triggerOnce: true
    }
  });

  // Animate container when text starts animating
  useEffect(() => {
    if (animationStates.some(state => state.isVisible) && !hasAnimated.current) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      });
      hasAnimated.current = true;
    }
  }, [animationStates, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.heroContainer} ref={ref}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {lines.map((line, index) => (
            <motion.div 
              key={index}
              style={{
                overflow: 'hidden',
                width: '100%'
              }}
            >
              <motion.h1
                className={`${styles.mainText} ${index === lines.length - 1 ? styles.highlightText : ''}`}
                initial={{ opacity: 0, x: -50 }}
                animate={animationStates[index]?.isVisible ? { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: index * 0.1
                  }
                } : { opacity: 0, x: -50 }}
              >
                {line}
              </motion.h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}