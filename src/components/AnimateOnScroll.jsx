'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimateOnScroll({ 
  children, 
  delay = 0.5, 
  duration = 0.6,
  yDistance = 20,
  xDistance = 0,
  scaleOnHover = false,
  scaleAmount = 1.05,
  rotateOnHover = false,
  rotateAmount = 2,
  className = "",
  threshold = 0.1,
  once = true
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: once
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { 
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Custom easing for smoother animation
          staggerChildren: 0.1
        }
      });
    }
  }, [isInView, controls, delay, duration]);

  const hoverAnimation = {
    scale: scaleOnHover ? scaleAmount : 1,
    rotate: rotateOnHover ? rotateAmount : 0,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: yDistance,
        x: xDistance
      }}
      animate={controls}
      whileHover={hoverAnimation}
      viewport={{ 
        once: true,
        amount: threshold
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
