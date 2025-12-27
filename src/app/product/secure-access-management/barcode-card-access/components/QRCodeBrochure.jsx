'use client';


import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/BarcodeCardAccess/QRCodeBrochure.module.css';

const DownloadButton = ({ onDownload }) => (
  <button 
    onClick={onDownload} 
    className={styles.downloadButton}
    aria-label="Download QRcode Access Control Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </button>
);

const QRCodeBrochure = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/brochures/qrcode-access-control.pdf';
    link.download = 'Robato-QRcode-Access-Control.pdf';
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
                alt="QRcode Access Control - Modern Digital Access Solutions"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>QRcode</p>
                <p>Access Control</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>QRcode Access Control</span>
            </h2>
            <div className={styles.description}>
              <p>
                Our QRcode Access Control system revolutionizes facility entry with modern digital 
                authentication. Enable seamless, touchless access management with advanced QR 
                code technology for enhanced security and user convenience.
              </p>
              <p>
                Transform your access control with intelligent QR solutions that provide instant 
                verification, flexible access permissions, and comprehensive monitoring for 
                modern facility management.
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
export default dynamic(() => Promise.resolve(QRCodeBrochure), { ssr: false });
