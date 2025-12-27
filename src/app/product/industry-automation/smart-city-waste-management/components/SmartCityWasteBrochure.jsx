'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SmartCityWasteBrochure.module.css';

const DownloadButton = ({ onDownload }) => (
  <button 
    onClick={onDownload} 
    className={styles.downloadButton}
    aria-label="Download Smart City Waste Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </button>
);

const SmartCityWasteBrochure = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/brochures/smart-city-waste-management.pdf';
    link.download = 'Robato-Smart-City-Waste-Management.pdf';
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
                alt="Smart City Waste Management - Sustainable Solutions"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>Smart City</p>
                <p>Waste</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>Smart City Waste</span>
            </h2>
            <div className={styles.description}>
              <p>
                Our Smart City Waste Management system revolutionizes urban waste handling with IoT-enabled 
                sensors and AI-powered analytics. Optimize collection routes and reduce costs while 
                promoting environmental sustainability.
              </p>
              <p>
                Transform traditional waste management into an efficient, data-driven process that 
                makes cities cleaner and more sustainable.
              </p>
              <DownloadButton onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCityWasteBrochure;
