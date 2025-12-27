import styles from '@/styles/parking/handheld/HandheldParkingIntro.module.css';
import HandheldParkingIntroClient from './HandheldParkingIntro.client';

export default function HandheldParkingIntro() {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.fullWidthContent}>
          <h2 className={styles.sectionTitle}>
            Low Cost Tracking Anytime Anyplace
          </h2>

          {/* SSR CONTENT */}
          <div
            id="handheld-intro-content"
            className={styles.description}
          >
            <p>
              Everything in a single package, giving you unprecedented access to
              the data of how your lot performs. Robato&apos;s SaaS platform and
              Parking Application offers bundle of services, which helps parking
              owner to analyze parking sales data at any time from any place.
            </p>

            <p>
              Handheld ticket machines are mostly used in parking facilities for
              the payment collection, to maintain huge parking premises with
              limited manpower. With the help of handheld ticketing machine,
              there is no need to stand in the long queues, as the parking
              operators go near to the driver, fill all the details, take payment
              and give the printed receipt.
            </p>

            {/* Hidden by default, revealed by CSR */}
            <div
              id="handheld-extra-content"
              className={styles.additionalContent}
            >
              <p>
                At the entry of parking, POS machine records incoming vehicle
                number, time and date of entry, type of vehicle, and name of
                operator.
              </p>
              <p>
                POS terminal and SaaS platform summarize all parking data as
                operator wise report, vehicle wise report, total collection
                report and unbilled reports.
              </p>
            </div>
          </div>


          <HandheldParkingIntroClient />
        </div>
      </div>
    </section>
  );
}
