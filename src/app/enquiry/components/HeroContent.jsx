'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/enquiry/EnquiryHero.module.css';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}></div>
      <motion.div 
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.logoContainer} variants={itemVariants}>
          <Image
            src="/images/logo.png"
            alt="Robato Systems"
            width={200}
            height={80}
            className={styles.logo}
            priority
          />
        </motion.div>
        <motion.h1 className={styles.title} variants={itemVariants}>
          Get In Touch
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroContent;
