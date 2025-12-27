import UniversityParkingFAQClient from './UniversityParkingFAQClient';
import '@/styles/UniversityParkingFAQ.css';

const universityParkingFaqs = [
  {
    question: 'How does your university parking system handle student vs. faculty parking allocation?',
    answer: 'Our system provides automated parking allocation based on university roles, with separate zones for students, faculty, staff, and administrators. It includes permit management, class schedule integration, and dynamic allocation for flexible campus needs.'
  },
  {
    question: 'Can the parking system integrate with student ID cards and campus access systems?',
    answer: 'Yes, our parking system integrates seamlessly with existing university ID cards, campus access control, and student information systems. It provides unified access management and real-time parking validation linked to student and staff databases.'
  },
  {
    question: 'What visitor parking management features are available for campus guests?',
    answer: 'We offer comprehensive visitor management including pre-registration for campus events, guest pass generation, automated notifications to hosts, digital payment options, and integration with campus reception and security systems.'
  },
  {
    question: 'How does the system handle peak parking during class changes and events?',
    answer: 'Our system uses predictive analytics based on class schedules, campus events, and historical data to manage peak demand. It includes dynamic pricing, overflow parking coordination, shuttle service management, and mobile app notifications for space availability.'
  },
  {
    question: 'Can the system accommodate residential student parking needs?',
    answer: 'Yes, our system manages residential student parking with assigned spaces near dormitories, 24/7 access control, guest parking for dorm visitors, and integration with residential life management systems for comprehensive campus housing support.'
  },
  {
    question: 'What sustainability features are included for green campus initiatives?',
    answer: 'We provide EV charging station management, carpool matching services, bicycle parking integration, carbon footprint tracking, and sustainability reporting to help universities achieve their environmental goals and green campus certifications.'
  },
  {
    question: 'How does the system handle parking enforcement and campus safety?',
    answer: 'Our system includes automated enforcement with license plate recognition, digital citation management, integration with campus security, emergency vehicle priority access, and real-time monitoring for campus safety and compliance.'
  }
];

export default function UniversityParkingFAQ() {
  return (
    <section className="university-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>University Parking Management</h3>
            <p>Smart parking solutions designed for educational campuses with student management, visitor coordination, and sustainable transportation features</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {universityParkingFaqs.map((faq, index) => (
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
          <UniversityParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
