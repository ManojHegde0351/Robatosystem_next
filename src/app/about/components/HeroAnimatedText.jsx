
'use client';

import { motion } from 'framer-motion';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import styles from '@/styles/About/AboutHero.module.css';

export default function HeroAnimatedText() {
  const { itemVariants } = useHeroAnimation();

  return (
    <motion.h1 className={styles.title}>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        About
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Our
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Company
      </motion.span>
    </motion.h1>
  );
}
