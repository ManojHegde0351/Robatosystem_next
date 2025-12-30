
import Image from 'next/image';
import styles from '@/styles/About/AboutHero.module.css';
import HeroAnimation from '@/app/about/components/HeroAnimation';
import HeroAnimatedText from '@/app/about/components/HeroAnimatedText';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      {/* Background Image (SSR) */}
      <div className={styles.heroBg}>
        <Image
          src="/images/About-background.webp"
          alt="About Robato System"
          fill
 
          sizes="100vw"
          className={styles.heroBgImage}
        />
      </div>

      <HeroAnimation className={styles.container}>
        <HeroAnimatedText />
      </HeroAnimation>
    </section>
  );
}
