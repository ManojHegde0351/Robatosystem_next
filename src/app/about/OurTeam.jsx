import Image from 'next/image';
import styles from '@/styles/About/OurTeam.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: '/images/testimonials/alice.webp',
    bio: 'Visionary leader with over 15 years of experience in industrial automation.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'CTO',
    image: '/images/testimonials/alice.webp',
    bio: 'Technology expert specializing in AI and machine learning applications.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Head of Engineering',
    image: '/images/testimonials/alice.webp',
    bio: 'Engineering leader with a passion for innovative solutions.'
  },
  {
    id: 4,
    name: 'Emma Davis',
    role: 'Operations Director',
    image: '/images/testimonials/alice.webp',
    bio: 'Ensuring operational excellence across all our projects.'
  }
];

export default function OurTeam() {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Our Team</h2>
          <p>Passionate professionals dedicated to excellence</p>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
