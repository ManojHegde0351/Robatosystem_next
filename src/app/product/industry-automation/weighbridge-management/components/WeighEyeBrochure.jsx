'use client';

import Image from 'next/image';
import styles from '@/styles/industry/weighbridge-management/WeighEyeBrochure.module.css';

const DownloadButton = ({ onDownload }) => (
  <button 
    onClick={onDownload} 
    className={styles.downloadButton}
    aria-label="Download WeighEYE Management Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </button>
);

const WeighEyeBrochure = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/brochures/weigheye-management.pdf';
    link.download = 'Robato-WeighEYE-Management.pdf';
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
                alt="WeighEYE Management - Advanced Weighbridge Solutions"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>WeighEYE</p>
                <p>Management</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>WeighEYE Management</span>
            </h2>
            <div className={styles.description}>
              <p>
                Our WeighEYE Management system revolutionizes weighbridge operations with advanced 
                automation and real-time data processing. Eliminate manual errors and optimize 
                throughput with our cutting-edge weighing technology.
              </p>
              <p>
                Transform your weighing operations with intelligent automation that provides 
                accurate measurements, seamless integration, and comprehensive reporting for 
                industrial efficiency.
              </p>
              <DownloadButton onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeighEyeBrochure;
