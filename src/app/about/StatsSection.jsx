
import dynamic from 'next/dynamic';
import styles from '@/styles/About/StatsSection.module.css';

const AnimatedNumber = dynamic(() => import('@/app/about/components/AnimatedNumber'), {

});

export default function StatsSection() {
  const stats = [
    { value: 1250, label: 'Successful Projects', suffix: '+' },
    { value: 450, label: 'Happy Clients', suffix: '+' },
    { value: 13, label: 'Awards Won', suffix: '+' },
    { value: 2000000, label: 'Social Followers', suffix: '+' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <h3 className={styles.statTitle}>{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
