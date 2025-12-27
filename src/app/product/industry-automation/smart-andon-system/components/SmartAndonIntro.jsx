'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/industry/smart-andon/SmartAndonIntro.module.css';

const SmartAndonIntro = () => {
  return (
    <section className={styles.andonIntro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px 0px -100px 0px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={styles.textContent}
          >
            <h2 className={styles.title}>Smart ANDON System: Empower your production floor</h2>
            <p className={`${styles.paragraph} ${styles.firstParagraph}`}>
              Real time data to make faster and smarter decisions. A fully automatic cloud based monitoring system and AndonLogix software connect to all machines for visualization of real time data.
            </p>
            <p className={styles.paragraph}>
              Our Smart Andon system brings a cloud based monitoring on your production floors to provide real time manufacturing information. It ensures constant identification of production bottlenecks to minimize down time and efficiently improves product manufacturing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartAndonIntro;
