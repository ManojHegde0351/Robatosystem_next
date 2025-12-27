import HeroAnimation from '@/app/about/components/HeroAnimation';
import HeroAnimatedProductText from './HeroAnimatedProductText';
import Image from 'next/image';
import styles from '@/styles/Product/product.module.css';

const ProductHero = () => {
  return (
    <section className={styles.productHero}>
      {/* Background Image with Overlay */}
      <div className={styles.heroBg}>
        <Image
          src="/images/background-product.webp"
          alt="Robato System Products"
          fill
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Hero Content */}
      <HeroAnimation className={styles.heroContent}>
        <HeroAnimatedProductText />
        
        <div className={styles.heroDescription}>
          <p>
            We provide cutting-edge solutions that transform businesses and drive growth
          </p>
        </div>
      </HeroAnimation>
    </section>
  );
};

export default ProductHero;