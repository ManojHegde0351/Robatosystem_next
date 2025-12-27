import HeroAnimation from '@/app/about/components/HeroAnimation';
import HeroAnimatedPartnerText from './HeroAnimatedPartnerText';
import Image from 'next/image';
import styles from '@/styles/Partner/partner.module.css';


const PartnerHero = () => {
  return (
    <section className={styles.partnerHero}>
      {/* Background Image with Overlay */}
      <div className={styles.heroBg}>
        <Image
          src="/images/background-becomeAPartner.webp"
          alt="Become a Partner with Robato Systems"
          fill
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Hero Content */}
      <HeroAnimation className={styles.heroContent}>
        <HeroAnimatedPartnerText />
        
        <div className={styles.heroDescription}>
          <p>
            Join our partner network and grow your business with our innovative industrial automation and security solutions.
          </p>
        </div>
      </HeroAnimation>
    </section>
  );
};

export default PartnerHero;
