
import React from 'react';
import styles from '@/styles/ESD-Access-Control/ESDAccessIntro.module.css';

import ReadMoreClient from './ReadMoreClient'



// Server component
export default function ESDAccessIntro() {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.introContent}>
          <h2>Revolutionary Solution to Kill ESD Ghost</h2>
          <p>
            Our ESD access control system is established to control ESD damages on production floor to improve your product&apos;s quality, raise profits and boost your brand image. Our ESD control system is customizable and can be integrated with your existing turnstile gates, flap barrier gates, and magnetic gates.
          </p>
          
          <ReadMoreClient>
            <p>
              In today&apos;s modern technology production environment, ESD has become one of the essential needs to deliberate in the overall product quality control. Robato system is developing ESD access control devices with verification system via Turnstile gates, to diminish the static charge of workers and verify their identity before entry to the production area.
            </p>
            <p>
              Each constituent present in ESD protected area (EPA) plays an important part against ESD. Our Turnstile gates verify workers and prevent any type of electronic discharge. The turnstile gates allow only those personnel who discharge their charge using ESD access control device. Moreover, these turnstile gates are associated with in-built software which is used to store the data of registered users only.
            </p>
          </ReadMoreClient>
        </div>
      </div>
    </section>
  );
}