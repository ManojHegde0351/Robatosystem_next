'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/parking/airport/AirportParkingHero.module.css';

const HeroContentClient = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const titleWords = ["Airport", "Parking", "Solutions"];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.heroTitle}>
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className={styles.titleWord}
                variants={itemVariants}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            variants={itemVariants}
          >
            Efficient, secure, and hassle-free parking solutions for busy airports
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContentClient;
