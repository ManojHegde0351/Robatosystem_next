
'use client';

import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import styles from '@/styles/About/StatsSection.module.css';

export default function AnimatedNumber({ target, suffix = '' }) {
  const { ref, displayValue } = useAnimatedNumber(target, suffix);

  return (
    <span ref={ref} className={styles.number}>
      {displayValue}
    </span>
  );
}
