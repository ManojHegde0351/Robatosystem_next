'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/ESD-Access-Control/ESDBrochure.module.css';

const DownloadButton = ({ onDownload }) => (
  <button 
    onClick={onDownload} 
    className={styles.downloadButton}
    aria-label="Download ESD Access Control Solution Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </button>
);

const ESDBrochure = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/brochures/esd-access-control-solution.pdf';
    link.download = 'Robato-ESD-Access-Control-Solution.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.brochureSection} id="brochure">
      <div className={styles.container}>
        <div className={styles.brochureWrapper}>
          <div className={styles.brochureImageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/products/Brochure.webp"
                alt="ESD Access Control Solution - Secure Area Protection"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>ESD Access</p>
                <p>Control</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>ESD Access Control Solution</span>
            </h2>
            <div className={styles.description}>
              <p>
                Our ESD Access Control Solution provides advanced electrostatic discharge protection 
                for sensitive areas. Ensure complete security and safety with cutting-edge access 
                management technology designed for high-security environments.
              </p>
              <p>
                Protect critical infrastructure and sensitive equipment with intelligent access 
                control that combines ESD safety protocols with comprehensive security monitoring 
                for complete facility protection.
              </p>
              <DownloadButton onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export as a dynamic component with SSR disabled to prevent hydration issues
export default dynamic(() => Promise.resolve(ESDBrochure), { ssr: false });
