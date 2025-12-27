
import styles from '@/styles/parking/university/UniversityParkingIntro.module.css';

const UniversityParkingIntro = () => {
  return (
    <section className={styles.universityParkingIntro}>
      <div className={styles.container}>
        <div
          
          className={styles.textContent}
        >
          <h2 className={styles.title}>Universities & Education Facilities</h2>
          <p className={styles.paragraph}>
            University campuses and educational institutes provide a unique challenge with regard to the parking as they tend to lodge multiple car parks on the sprawling footpaths that satisfy the different needs of students, faculties and visitors.
          </p>
          <p className={styles.paragraph}>
            Smart Parking Systems can help manage car park usage and monitor trends such as peak hours and driver behaviour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniversityParkingIntro;
