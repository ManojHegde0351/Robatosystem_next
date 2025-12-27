import HeroAnimation from '@/app/about/components/HeroAnimation';
import HeroAnimatedContactText from './HeroAnimatedContactText';
import styles from "@/styles/Contact/contact.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <HeroAnimation className={styles.heroInner}>
        <HeroAnimatedContactText />
      </HeroAnimation>
    </section>
  );
}
