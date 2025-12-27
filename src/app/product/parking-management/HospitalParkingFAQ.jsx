import HospitalParkingFAQClient from './HospitalParkingFAQClient';
import '@/styles/HospitalParkingFAQ.css';

const hospitalParkingFaqs = [
  {
    question: 'How does your hospital parking system handle emergency vehicle access?',
    answer: 'Our system includes priority access for emergency vehicles with automatic gate opening, dedicated emergency lanes, and real-time clearance protocols. Emergency vehicles are identified through RFID tags, license plate recognition, or manual override for immediate access.'
  },
  {
    question: 'Can the parking system integrate with hospital management systems?',
    answer: 'Yes, our parking system integrates seamlessly with HIS (Hospital Information Systems), EMR (Electronic Medical Records), and patient management systems to provide automated parking for patients, staff, and visitors based on appointments and roles.'
  },
  {
    question: 'What accessibility features are available for patients with disabilities?',
    answer: 'We provide ADA-compliant accessible parking spaces with real-time availability monitoring, wheelchair-friendly pathways, proximity alerts to entrances, and automated reservation systems for patients with mobility challenges.'
  },
  {
    question: 'How does the system manage patient vs. visitor parking?',
    answer: 'The system uses smart zoning to separate patient, visitor, and staff parking areas. Patients can pre-book parking based on appointments, while visitors use dynamic pricing and availability guidance. Staff parking is managed through credential-based access.'
  },
  {
    question: 'What security measures are in place for hospital parking?',
    answer: 'Our system includes 24/7 CCTV surveillance, emergency call boxes, well-lit areas, license plate recognition for entry logs, security patrol integration, and real-time monitoring to ensure a safe environment for patients and visitors.'
  },
  {
    question: 'How does the system handle peak hours and visitor surges?',
    answer: 'The system uses predictive analytics to anticipate peak times, dynamic pricing to manage demand, overflow parking coordination, and real-time capacity management with mobile app notifications for availability updates.'
  },
  {
    question: 'What payment options are available for hospital parking?',
    answer: 'We offer multiple payment options including mobile app payments, credit/debit cards, cash, hospital billing integration for patients, staff payroll deduction, and validation systems for hospital visitors and patients.'
  }
];

export default function HospitalParkingFAQ() {
  return (
    <section className="hospital-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Hospital Parking Management</h3>
            <p>Comprehensive parking solutions designed specifically for healthcare facilities with patient-centric features and emergency preparedness</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {hospitalParkingFaqs.map((faq, index) => (
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
          <HospitalParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
