import VisitorFAQClient from './VisitorFAQClient';
import '@/styles/VisitorFAQ.css';

const visitorFaqs = [
  {
    question: 'What is Smart Visitor Management System?',
    answer: 'Our Smart Visitor Management System is a digital solution that modernizes visitor check-in processes, enhances security, and provides comprehensive visitor tracking. It replaces traditional paper logs with automated registration, ID verification, badge printing, and real-time monitoring for offices, schools, and facilities.'
  },
  {
    question: 'How does the visitor check-in process work?',
    answer: 'Visitors can check-in through self-service kiosks, mobile apps, or reception desks. The system captures visitor information, verifies identity, prints visitor badges, notifies hosts, and logs all activities. The entire process takes less than 2 minutes compared to manual registration.'
  },
  {
    question: 'Can the system integrate with existing access control systems?',
    answer: 'Yes, our system integrates seamlessly with existing access control systems, door locks, turnstiles, and elevator controls. It supports various protocols including RFID, NFC, biometric scanners, and can work with your current security infrastructure.'
  },
  {
    question: 'What security features are included?',
    answer: 'The system includes ID verification, background checks, watchlist screening, photo capture, badge expiration, access level control, and audit trails. It provides real-time security alerts and maintains comprehensive logs for compliance and incident investigation.'
  },
  {
    question: 'How does pre-registration work for visitors?',
    answer: 'Hosts can pre-register visitors through the web portal or mobile app, sending invitation emails with QR codes. Pre-registered visitors enjoy expedited check-in, automatic badge printing, and instant host notifications upon arrival.'
  },
  {
    question: 'Can the system manage multiple locations or buildings?',
    answer: 'Yes, our system supports multi-location management with centralized administration, location-specific access rules, visitor transfer capabilities, and consolidated reporting. Perfect for corporate campuses, schools, and distributed facilities.'
  },
  {
    question: 'What types of reports and analytics are available?',
    answer: 'The system provides comprehensive analytics including visitor traffic patterns, peak visit times, host visitation reports, compliance dashboards, security incident logs, and custom reporting for management decisions and regulatory requirements.'
  },
  {
    question: 'How does the system handle emergency situations?',
    answer: 'In emergencies, the system provides real-time visitor counts, evacuation lists, mustering reports, and emergency notifications. It helps ensure all visitors are accounted for and can communicate critical information to everyone on-site.'
  }
];

export default function VisitorFAQ() {
  return (
    <section className="visitor-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Smart Visitor Management</h3>
            <p>Digital visitor management solution with automated check-in, enhanced security, real-time monitoring, and seamless access control integration</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {visitorFaqs.map((faq, index) => (
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
          <VisitorFAQClient />
        </div>
      </div>
    </section>
  );
}
