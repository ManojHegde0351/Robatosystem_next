'use client';

import { motion } from 'framer-motion';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import styles from '@/styles/Product/product.module.css';

export default function HeroAnimatedProductText() {
  const { itemVariants } = useHeroAnimation();

  return (
    <motion.h1 className={styles.heroTitle}>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Our
      </motion.span>
      <motion.span className={styles.titleWord} variants={itemVariants} style={{ fontWeight: 'normal' }}>
        Services
      </motion.span>
    </motion.h1>
  );
}
