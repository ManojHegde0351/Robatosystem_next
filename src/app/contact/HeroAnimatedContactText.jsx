'use client';

import { motion } from 'framer-motion';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import styles from '@/styles/Contact/contact.module.css';

export default function HeroAnimatedContactText() {
  const { itemVariants } = useHeroAnimation();

  return (
    <motion.h1 className={styles.heroTitle}>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Contact
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Us
      </motion.span>
    </motion.h1>
  );
}
