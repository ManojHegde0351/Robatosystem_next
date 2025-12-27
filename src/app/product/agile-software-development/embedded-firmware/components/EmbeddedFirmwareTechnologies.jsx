
import Image from 'next/image';
import styles from '@/styles/Agile-software-development/EmbaddedFirmware/embeddedFirmware.module.css';

const technologies = [
  { 
    name: 'Embedded C', 
    description: 'Core language for embedded systems development',
    icon: '/images/AgileSoftwareDevelopment/Embeddedfirmware/embedded_c.webp' 
  },
  { 
    name: 'Embedded C++', 
    description: 'Object-oriented programming for embedded systems',
    icon: '/images/AgileSoftwareDevelopment/Embeddedfirmware/embedded_c++.webp' 
  },
  { 
    name: 'Python', 
    description: 'Scripting and automation for embedded systems',
    icon: '/images/AgileSoftwareDevelopment/Embeddedfirmware/python_logo.webp' 
  }
];

const EmbeddedFirmwareTechnologies = () => {
  return (
    <section className={styles.technologiesSection}>
      <div className={styles.container}>
        <h3>Technologies We Use</h3>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.techIcon}>
                <Image 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  width={40} 
                  height={40}
                  className={styles.techImage}
                />
              </div>
              <h4>{tech.name}</h4>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmbeddedFirmwareTechnologies;