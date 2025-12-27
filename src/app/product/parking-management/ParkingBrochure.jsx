import Image from 'next/image';
import styles from '@/styles/parking/ParkingBrochure.module.css';

const DownloadButton = () => (
  <a 
    href="/brochures/smart-parking-solutions.pdf"
    download="Robato-Smart-Parking-Solutions.pdf"
    className={styles.downloadButton}
    aria-label="Download Smart Parking Solutions Brochure"
  >
    <div className={styles.downloadIcon}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    </div>
    DOWNLOAD PDF
  </a>
);

const ParkingBrochure = () => {
  return (
    <section className={styles.brochureSection} id="brochure">
      <div className={styles.container}>
        <div className={styles.brochureWrapper}>
          <div className={styles.brochureImageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/products/Brochure.webp"
                alt="Reinventing the automation experience"
                fill
                className={styles.brochureImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlayText}>
                <p>Reinventing the</p>
                <p>automation experience</p>
              </div>
            </div>
          </div>

          <div className={styles.brochureContent}>
            <h2 className={styles.title}>
              Brochure - <span>Smart Parking Solutions</span>
            </h2>
            <div className={styles.description}>
              <p>
                Robatos ParkLogix system fully integrates parking guidance, payment, and analytics, 
                as well as a host of other complementary services and choices. This makes the complete 
                ParkLogix solution truly a sum of its parts, and an industry leader in the technology 
                and parking sector.
              </p>
              <p>
                To find out more, download our company profile.
              </p>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingBrochure;