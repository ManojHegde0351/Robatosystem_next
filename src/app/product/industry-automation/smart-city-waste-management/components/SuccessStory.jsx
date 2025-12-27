
import Image from 'next/image';
import styles from '@/styles/industry/smart-city-waste/SuccessStory.module.css';

const SuccessStory = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story1.webp',
      alt: 'Bhopal Smart City Waste Management System',
      title: 'Central Control Room'
    },
    {
      id: 2,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story2.webp',
      alt: 'GPS Tracked Waste Collection Vehicles',
      title: 'Vehicle Tracking'
    },
    {
      id: 3,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story3.webp',
      alt: 'Smart Waste Collection',
      title: 'Smart Collection'
    },
    {
      id: 4,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story4.webp',
      alt: 'Waste Segregation Center',
      title: 'Waste Segregation'
    },
    {
      id: 5,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story5.jpg',
      alt: 'Smart Transfer Station',
      title: 'Transfer Station'
    },
    {
      id: 6,
      src: '/images/industry4.0/smart-waste-city/solidwastemanagement_success_story6.jpg',
      alt: 'Waste Processing Plant',
      title: 'Processing Plant'
    }
  ];

 

  return (
    <section className={styles.successStory} id="success-story">
      <div className={styles.container}>
        <div 
          className={styles.header}
         
        >
          <h2 className={styles.title}>Our Success Story</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Bhopal Smart City has successfully implemented the Smart Solid Waste Management system. Real-time GPS-tracked vehicles information, 
            collected waste (Dry/Wet) at different sites are tracked by MIS, and live video recording is available at the Central Control Office.
          </p>
          <p className={styles.subtitle}>
            The Smart Announcement System efficiently manages traffic control at transfer stations through real-time audio from the Central Control System.
          </p>
        </div>

        <div className={styles.gallerySection}>
          <h3 className={styles.galleryTitle}>Project Gallery</h3>
          <div 
            className={styles.galleryGrid}
          
          >
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={styles.galleryItem}
                
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg=="
                  />
                  <div className={styles.imageOverlay}>
                    <h4 className={styles.imageTitle}>{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
