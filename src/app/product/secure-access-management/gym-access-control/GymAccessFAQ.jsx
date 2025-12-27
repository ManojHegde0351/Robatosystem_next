import GymAccessFAQClient from './GymAccessFAQClient';
import '@/styles/GymAccessFAQ.css';

const gymAccessFaqs = [
  {
    question: 'What is Gym Access Control System?',
    answer: 'Our Gym Access Control System is a specialized solution designed for fitness centers and gyms that provides secure member access, attendance tracking, and facility management. It supports multiple authentication methods including RFID cards, barcode scanning, biometric verification, and mobile credentials for seamless gym entry.'
  },
  {
    question: 'How does the system manage gym memberships?',
    answer: 'The system integrates with gym management software to track membership status, automate access based on subscription validity, and provide real-time attendance data. Members can access facilities only with active memberships, and expired memberships are automatically blocked from entry.'
  },
  {
    question: 'What authentication methods are available for gym members?',
    answer: 'Gym members can use RFID membership cards, QR codes on mobile apps, barcode keytags, fingerprint biometrics, and facial recognition. The system supports multiple credential types simultaneously, allowing gyms to offer flexible options for different member preferences.'
  },
  {
    question: 'Can the system handle different membership tiers and access levels?',
    answer: 'Yes, the system supports tiered access control with different membership levels (basic, premium, VIP), time-based restrictions (off-peak, peak hours), and zone-specific access (gym floor, pool, spa, locker rooms). Each tier can have customized access rules and schedules.'
  },
  {
    question: 'How does the system track gym attendance and usage?',
    answer: 'The system provides comprehensive attendance tracking with entry/exit timestamps, visit frequency analysis, peak hour monitoring, and member engagement metrics. Administrators can access detailed reports on facility usage patterns and member activity trends.'
  },
  {
    question: 'What happens if a member loses their access card?',
    answer: 'Lost cards can be immediately deactivated through the admin dashboard to prevent unauthorized access. New cards can be issued instantly, and the system maintains audit trails of all access attempts. Temporary credentials can be provided while replacement cards are processed.'
  },
  {
    question: 'Can the system integrate with gym management software?',
    answer: 'Yes, our system integrates seamlessly with popular gym management platforms, membership databases, billing systems, and class booking software. It supports API integration and can sync membership data in real-time for unified facility management.'
  },
  {
    question: 'How does the system enhance gym security and safety?',
    answer: 'The system enhances security through controlled access, visitor management, emergency lockdown capabilities, and real-time monitoring. It maintains detailed access logs, supports CCTV integration, and can automatically alert staff to unauthorized access attempts or security incidents.'
  }
];

export default function GymAccessFAQ() {
  return (
    <section className="gym-access-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Gym Access Control System</h3>
            <p>Comprehensive access control solution for fitness centers with member management, attendance tracking, and multi-authentication support</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {gymAccessFaqs.map((faq, index) => (
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
          <GymAccessFAQClient />
        </div>
      </div>
    </section>
  );
}
