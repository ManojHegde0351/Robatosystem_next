'use client';

import { motion } from 'framer-motion';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import styles from '@/styles/Partner/partner.module.css';

export default function HeroAnimatedPartnerText() {
  const { itemVariants } = useHeroAnimation();

  return (
    <motion.h1 className={styles.heroTitle}>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Become
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        A
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Partner
      </motion.span>
    </motion.h1>
  );
}
