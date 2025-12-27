'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/parking/handheld/HandheldParkingIntro.module.css';

export default function HandheldParkingIntroClient() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const extra = document.getElementById('handheld-extra-content');
    if (!extra) return;

    if (expanded) {
      extra.style.display = 'block';
    } else {
      extra.style.display = 'none';
    }
  }, [expanded]);

  return (
    <button
      onClick={() => setExpanded(prev => !prev)}
      className={styles.readMoreBtn}
    >
      {expanded ? 'Read Less' : 'Read More'}
    </button>
  );
}
