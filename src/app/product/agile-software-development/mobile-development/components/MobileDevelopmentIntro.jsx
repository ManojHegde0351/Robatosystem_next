import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Agile-software-development/MobileDevelopment/mobileDevelopment.module.css';

const MobileDevelopmentIntro = () => {
  const technologies = [
    { 
      name: 'Java', 
      description: 'Robust backend development for Android applications',
      icon: '/images/AgileSoftwareDevelopment/java_logo.webp' 
    },
    { 
      name: 'Android', 
      description: 'Native Android app development',
      icon: '/images/AgileSoftwareDevelopment/Android_logo.webp' 
    },
    { 
      name: 'HTML5', 
      description: 'Cross-platform mobile web applications',
      icon: '/images/AgileSoftwareDevelopment/Html_logo.webp' 
    },
    { 
      name: 'PHP', 
      description: 'Server-side scripting and backend services',
      icon: '/images/AgileSoftwareDevelopment/Php_logo.webp' 
    },
    { 
      name: 'Ionic', 
      description: 'Hybrid mobile app development',
      icon: '/images/AgileSoftwareDevelopment/Ionic_logo.webp' 
    },
    { 
      name: 'Xamarin', 
      description: 'Cross-platform mobile development with .NET',
      icon: '/images/AgileSoftwareDevelopment/Xamarin_logo.webp' 
    },
  ];

return (
    <div className={styles.pageContainer}>
      {/* Main Content Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.textContent}>
            <h2>Mobile Application Development Company</h2>
            <p>
              Technology is moving faster than ever, and keeping up with business demands for application development requires programmers with experience in everything from Java to Android. With Robato Systems application development solutions, you can quickly develop clickable prototypes and ready-to-deploy software applications for any platform. A dedicated project manager guides your project to success.
            </p>
          </div>
          
          <div className={styles.imageContainer}>
            <Image 
              src="/images/AgileSoftwareDevelopment/Mobile-App-Development.webp" 
              alt="Mobile Development"
              width={600}
              height={400}
              className={styles.introImage}
              priority
            />
          </div>
        </div>
      </section>
      
    
      
      {/* Detailed Technologies Section */}
      <section className={styles.technologies}>
        <h3>Technologies We Use</h3>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={`detailed-${index}`} className={styles.techItem}>
              <div className={styles.techIcon}>
                <Image 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  width={40} 
                  height={40}
                />
              </div>
              <h4>{tech.name}</h4>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentIntro;
