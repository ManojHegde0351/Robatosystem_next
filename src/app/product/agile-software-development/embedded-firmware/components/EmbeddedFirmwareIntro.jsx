
import Image from 'next/image';
import styles from '@/styles/Agile-software-development/EmbaddedFirmware/embeddedFirmware.module.css';

const EmbeddedFirmwareIntro = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
        
     
             <div className={styles.textContent}
          >
            <h2 className={styles.title}>Embedded Firmware for the Internet Of Things</h2>
            <p className={styles.paragraph}>
              An embedded system is an electronic or computer system that is designed to control, access the data in electronics based systems. Embedded system comprises a single chip microcontroller. In the present times, the usage of embedded systems is widespread.
            </p>
            <p className={styles.paragraph}>
              But the software which is programmed into the microcontroller is capable of solving only a limited range of problems. Embedded-system based projects are capable of doing multitasks, and are also capable of interfacing with the other networks and devices.
            </p>
            <p className={styles.paragraph}>
              Applications of embedded systems are applicable in areas like communication, transportation, robotic systems, home appliances etc. This article is intended to give information about the embedded system applications. Based on the performance requirements, these systems are categorized into four types such as stand alone, networked, mobile and real time embedded systems.
            </p>
        </div>
          
   
          <div className={styles.imageContainer}
       
          >
            <Image 
              src="/images/AgileSoftwareDevelopment/Embeddedfirmware/Embedded_Application_Development.webp" 
              alt="Embedded Firmware Development"
              fill
              className={styles.image}
              priority
            />
   </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedFirmwareIntro;
