import React from 'react';
import Image from 'next/image';
import styles from '../../../../../styles/industry/weighbridge-management/WeighEyeIntro.module.css';

const WeighEyeIntro = () => {
  return (
    <section className={styles.weighEyeIntro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is WeighEYE?</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            WeighEYE is a comprehensive weighbridge software solution that includes truck weighbridge management, 
            weighbridge indicator, weighbridge specification, electronic & digital weighbridge design, software 
            for weighbridge construction, and automation.
          </p>
          <p className={styles.description}>
            The weighbridge machine software helps to give total control of weighing operations. With complete 
            reporting and automated managing, it helps in easy performing on-site. Our truck weighbridge 
            management software helps to monitor the costings along with improving the site security.
          </p>
          <p className={styles.description}>
            WeighEYE is a perfect solution for you if weighment accuracy, visibility & traceability are 
            prerequisites for your business.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/industry4.0/weighbridge/introduction-weighteye.webp" 
              alt="WeighEYE Dashboard"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeighEyeIntro;
