
import Image from 'next/image';
import styles from '@/styles/Agile-software-development/WebDevelopment/webDevelopment.module.css';

const WebDevelopmentIntro = () => {
  return (
    <section className={styles.universityParkingIntro}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
    
      
          <div  className={styles.textContent}
          >
            <h2 className={styles.title}>Web Application Development Company</h2>
            <p className={styles.paragraph}>
              Web Applications are dynamic web sites combined with server side programming which provide functionalities 
              such as interacting with users, connecting to back-end databases, and generating results to browsers.
            </p>
            <p className={styles.paragraph}>
              With the help of our highly qualified and skilled IT professionals, we have been able to serve our clients with 
              valuable Web Application Development Services. Our web application development and custom programming services 
              include everything from a simple Content Management System enabled website to the Online Banking, Social Networking, 
              Online Reservations, eCommerce / Shopping Cart Applications, Interactive Games, Online Training, Online Polls, 
              Blogs, Online Forums, Content Management Systems, and more.
            </p>
    </div>
          
        
           <div className={styles.imageContainer}>
           
 
            <Image 
              src="/images/AgileSoftwareDevelopment/webapplication/Web development.webp" 
              alt="Web Development Services"
              width={500}
              height={400}
              className={styles.image}
              priority
            />
        </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentIntro;
