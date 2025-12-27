import RfidCardFAQClient from './RfidCardFAQClient';
import '@/styles/RfidCardFAQ.css';

const rfidCardFaqs = [
  {
    question: 'What is RFID Card Access Control System?',
    answer: 'Our RFID Card Access Control System is a sophisticated security solution that uses radio frequency identification technology for secure facility access. It provides fast, contactless authentication through RFID cards, enabling efficient access management for offices, industrial facilities, and secure areas.'
  },
  {
    question: 'What types of RFID cards are supported?',
    answer: 'The system supports various RFID card types including Low Frequency (125kHz) proximity cards, High Frequency (13.56MHz) smart cards, MIFARE cards, DESFire cards, and custom RFID credentials. All cards are compatible with existing infrastructure and can be programmed for different access levels.'
  },
  {
    question: 'What is the read range for RFID cards?',
    answer: 'Read ranges vary by frequency: Low Frequency cards typically have 2-5 inches, High Frequency cards offer 2-4 inches, while UHF cards can provide up to 15 feet. The system can be configured with appropriate readers for optimal performance based on security requirements.'
  },
  {
    question: 'How secure are RFID cards against cloning?',
    answer: 'Our system uses advanced security features including encrypted communications, unique card identifiers, rolling code technology, and anti-cloning algorithms. High-frequency smart cards with cryptographic chips provide the highest security level, making cloning virtually impossible.'
  },
  {
    question: 'Can the system integrate with existing access control infrastructure?',
    answer: 'Yes, the system integrates seamlessly with existing access control panels, door locks, turnstiles, and security systems. It supports standard protocols like Wiegand, OSDP, and TCP/IP, allowing for gradual migration and hybrid implementations with legacy systems.'
  },
  {
    question: 'How does the system manage access levels and permissions?',
    answer: 'The system provides granular access control with multiple permission levels, time-based access schedules, zone restrictions, and temporary credentials. Administrators can easily manage user permissions through a centralized dashboard with real-time updates and audit trails.'
  },
  {
    question: 'What happens if a card is lost or stolen?',
    answer: 'Lost or stolen cards can be immediately deactivated through the management system, preventing unauthorized access. New cards can be issued instantly, and the system maintains detailed logs of all access attempts for security monitoring and incident investigation.'
  },
  {
    question: 'Can the system handle multiple locations or buildings?',
    answer: 'Yes, our RFID system supports multi-location management with centralized administration, location-specific access rules, card transfer capabilities between sites, and consolidated reporting. Perfect for corporate campuses, distributed facilities, and multi-building operations.'
  }
];

export default function RfidCardFAQ() {
  return (
    <section className="rfid-card-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>RFID Card Access Control</h3>
            <p>Advanced RFID-based access control system with secure card authentication, multi-frequency support, and comprehensive access management</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {rfidCardFaqs.map((faq, index) => (
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
          <RfidCardFAQClient />
        </div>
      </div>
    </section>
  );
}
