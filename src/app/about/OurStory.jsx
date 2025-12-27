import Image from 'next/image';
import styles from '@/styles/About/OurStory.module.css';

export default function OurStory() {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>2015</div>
              <div className={styles.details}>
                <h3 className={styles.ourStoryTimelineItemTitle}>Founded with a Vision</h3>
                <p className={styles.ourStoryTimelineItemDescription}>Robato Systems was established with a mission to revolutionize industrial automation through innovative technology solutions.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>2018</div>
              <div className={styles.details}>
                <h3 className={styles.ourStoryTimelineItemTitle}>Expansion & Growth</h3>
                <p className={styles.ourStoryTimelineItemDescription}>Expanded our operations to serve clients across multiple industries with cutting-edge automation solutions.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>2023</div>
              <div className={styles.details}>
                <h3 className={styles.ourStoryTimelineItemTitle}>Industry Recognition</h3>
                <p className={styles.ourStoryTimelineItemDescription}>Recognized as a leader in industrial automation with multiple awards for innovation and excellence.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ourStoryImageContainer}>
          <Image
            src="/images/Our-story-image.webp"
            alt="Our Story"
            width={600}
            height={400}
            className={styles.ourStoryImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
