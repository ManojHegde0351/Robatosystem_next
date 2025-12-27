'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/parking/handheld/ParkLogixFeatures.module.css';
import ExpandButton from './ExpandButton.client';

export default function ParkLogixFeaturesClient() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const content = document.getElementById('features-content');
    if (!content) return;

    if (isExpanded) {
      content.classList.add(styles.expanded);
    } else {
      content.classList.remove(styles.expanded);
    }
  }, [isExpanded]);

  return (
    <ExpandButton
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(prev => !prev)}
    />
  );
}
