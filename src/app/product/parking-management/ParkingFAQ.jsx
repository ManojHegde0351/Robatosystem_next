import ParkingFAQClient from './ParkingFAQClient';
import '@/styles/ParkingFAQ.css';

const parkingFaqs = [
  {
    question: 'What types of parking management systems do you offer?',
    answer: 'We offer comprehensive parking solutions including automated parking systems, mixed parking management, visitor management, and smart parking with real-time monitoring and analytics.'
  },
  {
    question: 'How does the automated parking system work?',
    answer: 'Our automated parking system uses advanced sensors and AI technology to manage vehicle entry, exit, and payment processes seamlessly, reducing manual intervention and improving efficiency.'
  },
  {
    question: 'Can the parking system integrate with existing infrastructure?',
    answer: 'Yes, our parking management solutions are designed to integrate seamlessly with your existing infrastructure, including barriers, ticketing systems, and payment gateways.'
  },
  {
    question: 'What kind of reporting and analytics do you provide?',
    answer: 'We provide real-time dashboards, occupancy reports, revenue analytics, peak hour analysis, and custom reporting features to help you optimize your parking operations.'
  },
  {
    question: 'Is mobile app access available for users and administrators?',
    answer: 'Yes, we offer mobile applications for both users (to find, book, and pay for parking) and administrators (to monitor and manage parking operations remotely).'
  },
  {
    question: 'What security features are included in the parking system?',
    answer: 'Our systems include 24/7 CCTV monitoring, automated number plate recognition (ANPR), secure payment processing, and access control to ensure maximum security.'
  },
  {
    question: 'How long does installation and setup typically take?',
    answer: 'Installation time varies based on system complexity and site requirements. Typically, basic setup takes 2-4 weeks, while comprehensive installations may take 6-8 weeks.'
  }
];

export default function ParkingFAQ() {
  return (
    <section className="parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Parking Management System</h3>
            <p>Find answers to common questions about our comprehensive parking solutions</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {parkingFaqs.map((faq, index) => (
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
          <ParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
