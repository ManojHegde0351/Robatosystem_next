import OfficeParkingFAQClient from './OfficeParkingFAQClient';
import '@/styles/OfficeParkingFAQ.css';

const officeParkingFaqs = [
  {
    question: 'How does your office parking system manage employee parking allocation?',
    answer: 'Our system provides automated parking allocation based on employee roles, departments, and schedules. It includes permit management, assigned parking spaces, carpool coordination, and dynamic allocation for flexible work arrangements.'
  },
  {
    question: 'Can the system integrate with employee access cards and building security?',
    answer: 'Yes, our parking system integrates seamlessly with existing access control systems, employee ID cards, and building security protocols. It provides unified access management and real-time parking validation.'
  },
  {
    question: 'What visitor parking management features are available?',
    answer: 'We offer comprehensive visitor management including pre-registration, QR code access, temporary permits, automated notifications to hosts, and visitor tracking with integration to building reception systems.'
  },
  {
    question: 'How does the system handle electric vehicle charging stations?',
    answer: 'Our system manages EV charging stations with real-time availability monitoring, reservation systems, usage tracking, billing integration, and smart charging schedules to optimize energy consumption and costs.'
  },
  {
    question: 'Can the parking system accommodate hybrid work schedules?',
    answer: 'Yes, our system supports flexible work arrangements with dynamic space allocation, hot-desking integration, schedule-based parking reservations, and mobile app adjustments for changing work patterns.'
  },
  {
    question: 'What reporting and analytics features are available for office management?',
    answer: 'We provide detailed analytics including occupancy rates, peak usage times, employee parking patterns, visitor statistics, revenue tracking, and sustainability metrics for carbon footprint reduction.'
  },
  {
    question: 'How does the system handle carpool and ride-sharing programs?',
    answer: 'Our system includes carpool matching services, priority parking for carpoolers, ride-sharing integration, incentive programs, and automated tracking for sustainability initiatives and commuter benefits.'
  }
];

export default function OfficeParkingFAQ() {
  return (
    <section className="office-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Office Parking Management</h3>
            <p>Smart parking solutions designed for modern offices with employee management, visitor coordination, and sustainable commuting features</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {officeParkingFaqs.map((faq, index) => (
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
          <OfficeParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
