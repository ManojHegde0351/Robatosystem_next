


import styles from '@/styles/About/AboutCompany.module.css';

export default function AboutCompany() {
  return (
    <section className={styles.aboutCompany}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>We Provide High Quality Customer Service</h2>
          <p className={styles.sectionText}>
            We are the world leaders in Automations, LED Display solutions and Security Access Control 
            Systems for residential, industrial and commercial use. We are focused on quality, 
            technical excellence and innovative development, which translates to trustworthy, 
            robust products and solutions. Our professional ethics, global market experience 
            and focus on quality are the main components that help us to build intuitive, 
            reliable and economical products.
          </p>
          
          <div className={styles.whoWeAre}>
            <h3 className={styles.sectionSubtitle}>Who We Are</h3>
            <p className={styles.sectionText}>
              We are the leaders in Industrial Automations, Parking Management Solutions and 
              Security Access Control Systems for residential, industrial and commercial use. 
              We are focused on quality, technical excellence and innovative development, 
              which translates to trustworthy, robust products and solutions. Our professional 
              ethics, global market experience and focus on quality are the main components 
              that help us build intuitive, reliable and economical products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}