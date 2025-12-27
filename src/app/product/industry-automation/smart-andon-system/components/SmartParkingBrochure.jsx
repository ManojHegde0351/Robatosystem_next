'use client';

import Image from 'next/image';
import styles from '@/styles/industry/smart-andon/SmartAndonBrochure.module.css';

const DownloadButton = ({ onDownload }) => (
  <button 
    onClick={onDownload} 
    className={styles.downloadButton}
    aria-label="Download Smart ANDON System Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </button>
);

const SmartParkingBrochure = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/brochures/smart-andon-system.pdf';
    link.download = 'Robato-Smart-ANDON-System.pdf';
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
                alt="Smart ANDON System - Industry 4.0 Solution"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>Smart</p>
                <p>ANDON System</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>Smart ANDON System</span>
            </h2>
            <div className={styles.description}>
              <p>
                Our Industry 4.0 Smart ANDON System revolutionizes manufacturing with real-time 
                monitoring, automated alerts, and comprehensive analytics. Enhance operational 
                efficiency and reduce downtime with our cutting-edge solution.
              </p>
              <p>
                Experience instant visibility into production processes and drive continuous 
                improvement through data-driven insights.
              </p>
              <DownloadButton onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartParkingBrochure;
