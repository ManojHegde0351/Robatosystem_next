import React from 'react';

import PartnerHero from './PartnerHero';
import PartnerForm from './PartnerForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';

import styles from '@/styles/Partner/partner.module.css';

export const metadata = {
  title: "Become a Partner | Robato System",
  description: "Join Robato System as a partner and offer Industry 4.0 Automation & Secure Access Solutions with premium support and competitive margins",
};

const BecomeAPartner = () => {
  return (
    <div className={styles.partnerPage}>
      <PartnerHero />
      
   
        <div className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.formSection}>
                <PartnerForm />
              </div>
              <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/become-partner.webp"
                    alt="Become a Partner"
                    fill
                    sizes="(max-width: 1000px) 150vw, 100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default BecomeAPartner;