import React from 'react';
import styles from '@/styles/industry/weighbridge-management/SuccessStories.module.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Chhattisgarh (KORBA), Lanco Amarkantak Power Limited',
      description: 'Successfully implemented the Weighing Management based on RFID System. Real time vehicles trips tracking with above information and live video recording available at Central Control Office. Smart Announcement System to manage the traffic control at station by real time audio from Central Control System.',
      videoId: 'ZgMVih8J5Uw'
    },
    {
      id: 2,
      title: 'Bhopal Smart City',
      description: 'Successfully implemented the Smart Solid Waste management. Real time GPS tracker vehicles information, collected waste (Dry / Wet) at different sites are tracked by MIS and live video recording available at Central Control Office. Smart Announcement System to manage the traffic control at transfer station by real time audio from Central Control System.',
      videoId: '9BxEBubQV9w'
    }
  ];

  return (
    <section className={styles.section} id="success-stories">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Success Story</h2>
        <div className={styles.storiesGrid}>
          {stories.map((story) => (
            <div key={story.id} className={styles.storyCard}>
              <div className={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${story.videoId}`}
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{story.id}. {story.title}</h3>
                <p className={styles.description}>{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
