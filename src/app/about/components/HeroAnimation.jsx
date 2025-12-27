
'use client';

import { motion } from 'framer-motion';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';

export default function HeroAnimation({ children, className }) {
  const { containerVariants } = useHeroAnimation();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
