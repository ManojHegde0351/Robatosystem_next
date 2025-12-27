
import Image from 'next/image';
import styles from '@/styles/parking/rfid/ParkingBenefits.module.css';

const SectorParkingSolutions = () => {
  return (
    <div className={styles.sectorSolutions}>
      {/* Society & Apartments Section */}
      <div className={styles.sectorSection}>
        <div className={styles.sectorContent}>
          <div className={styles.sectorText}>
            <h2>Automatic Parking System for Societies & Apartments</h2>
            <p>Robato Systems RFID based Automatic parking system is a smart, secure solution for the housing societies, apartments, and gated communities. The automatic parking solution ensures hassle free entry and exits of the vehicles of the residents with stopping them for logbook entries. It adds an additional layer of security to the residential areas.</p>
            <p>Our RFID based Automatic parking solution is an automatic and an efficient monitoring system, which allows access of only RFID tagged and registered cars in the premises and helps in managing easy in/out access. The parking solution is also imbedded with our application to manage, maintain, update and share all the records related to RFID data fetched on different user interfaces like mobile and web dashboards.</p>
            
            <div className={styles.benefitsList}>
              <h3>Benefits of RFID based Automatic Parking System to residents</h3>
              <ul>
                <li>It assures tracking of movement of every vehicle in the Residential premises.</li>
                <li>It enhances security of the residential societies by preventing entry of non-registered vehicles.</li>
                <li>It provides visitor management by allowing entry after proper verification.</li>
                <li>It enhances the comfort of residents by ensuring seamless entry and exit of the vehicles.</li>
              </ul>
            </div>
          </div>
          <div className={styles.sectorImage}>
            <Image
              src="/images/products/default-parking.webp"
              alt="Apartment Parking Solution"
              width={500}
              height={400}
              className={styles.solutionImage}
            />
          </div>
        </div>
      </div>

      {/* School, College & Universities Section */}
      <div className={`${styles.sectorSection} ${styles.educationSection}`}>
        <div className={styles.sectorContent}>
          <div className={styles.sectorImage}>
            <Image
              src="/images/products/Automatic-parking-system-school-collage.webp"
              alt="Education Institution Parking Solution"
              width={500}
              height={400}
              className={styles.solutionImage}
            />
          </div>
          <div className={styles.sectorText}>
            <h2>Automatic Parking System for School, College & Universities</h2>
            <p>Robato Systems RFID based Automatic parking system for schools, colleges and universities is an automatic and secure system to allow entry/exit of students, faculties and visitors. It ensures hassle-free in/out of the vehicles and avoids traffics especially during the peak times of opening and closing of the academic institutions.</p>
            <p>The RFID based Automatic parking solution provides RFID tags to the registered vehicles of students, faculties and other administration staffs. The RFID readers read the tags and allow the entry/exit of the vehicles through boom barriers. It is the best solution to the parking problems on any campus.</p>
            <p>With the growth of population, the number of enrollments in the campuses is increasing and more students own and drive a car as compared to the past. So, parking is becoming the most widespread problem in the colleges and universities. In addition, when drivers go around looking for a parking space it adds to worries and may also add to pollution in the campuses.</p>
            <p>Hence, Automated-parking system is the best solution to parking problems on any campus. It provides smooth entry/exit of vehicles and by lowering the time spent for parking, makes the campus a safer and healthier place for the students. It also ensures safety and security of vehicles inside the campus premises by preventing parking at illegal places by students. It also enhances the security of campuses by avoiding the entry of any outsider vehicle inside the premises, improves the quality of life, and enhances the image of institutions and universities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorParkingSolutions;
