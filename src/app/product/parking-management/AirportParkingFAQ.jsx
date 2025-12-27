import AirportParkingFAQClient from './AirportParkingFAQClient';
import '@/styles/AirportParkingFAQ.css';

const airportParkingFaqs = [
  {
    question: 'How does your airport parking system handle flight schedule integration?',
    answer: 'Our system integrates directly with airline flight data through APIs to provide real-time parking recommendations based on departure/arrival times, automated check-in reminders, and dynamic pricing based on flight schedules and seasonal demand.'
  },
  {
    question: 'What security measures are in place for airport parking?',
    answer: 'We implement TSA-compliant security including 24/7 CCTV surveillance, license plate recognition linked to flight manifests, secure perimeter fencing, random vehicle inspections, and integration with airport security systems for comprehensive monitoring.'
  },
  {
    question: 'Can the system manage long-term vs. short-term parking efficiently?',
    answer: 'Yes, our system uses automated zoning to separate long-term, short-term, economy, and premium parking areas with dynamic pricing, shuttle service coordination, and real-time availability monitoring for each parking type.'
  },
  {
    question: 'How does the system handle passenger pickup and drop-off zones?',
    answer: 'Our system manages dedicated pickup/drop-off zones with time-limited parking, automated license plate tracking, mobile app notifications for waiting passengers, and integration with ride-sharing services for efficient traffic flow.'
  },
  {
    question: 'What payment options are available for airport parking?',
    answer: 'We offer multiple payment methods including credit/debit cards, mobile payments, prepaid parking passes, airline loyalty program integration, corporate billing, and automated payment kiosks with multilingual support.'
  },
  {
    question: 'How does the system handle oversized vehicles and special parking needs?',
    answer: 'Our system includes designated oversized vehicle areas, valet parking services, electric vehicle charging stations, accessible parking for disabled passengers, and automated space allocation based on vehicle specifications.'
  },
  {
    question: 'Can the parking system integrate with airport shuttle services?',
    answer: 'Yes, our system coordinates with shuttle services through real-time tracking, automated dispatch based on parking demand, passenger counting, and mobile app integration for shuttle arrival times and route optimization.'
  }
];

export default function AirportParkingFAQ() {
  return (
    <section className="airport-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Airport Parking Management</h3>
            <p>Advanced parking solutions designed for airports with flight integration, enhanced security, and seamless passenger experience management</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {airportParkingFaqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h4 className="faq-question">
                    {faq.question}
                  </h4>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client-side interactions */}
          <AirportParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
