import { FaLightbulb, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';
import styles from '@/styles/About/OurValues.module.css';

const values = [
  {
    icon: <FaLightbulb className={styles.icon} />,
    title: 'Innovation',
    description: 'We constantly push boundaries to develop cutting-edge solutions that drive progress.'
  },
  {
    icon: <FaHandshake className={styles.icon} />,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.'
  },
  {
    icon: <FaUsers className={styles.icon} />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and strong partnerships to achieve excellence.'
  },
  {
    icon: <FaChartLine className={styles.icon} />,
    title: 'Excellence',
    description: 'We are committed to delivering superior quality in everything we do.'
  }
];

export default function OurValues() {
  return (
    <section className={styles.ourValues}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Core Values</h2>
          <p>Guiding principles that define who we are and how we work</p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconContainer}>
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
