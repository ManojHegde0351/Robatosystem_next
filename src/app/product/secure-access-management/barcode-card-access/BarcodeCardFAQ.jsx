import BarcodeCardFAQClient from './BarcodeCardFAQClient';
import '@/styles/BarcodeCardFAQ.css';

const barcodeCardFaqs = [
  {
    question: 'What is Barcode & Card Access System?',
    answer: 'Our Barcode & Card Access System is a versatile security solution that combines barcode scanning and card-based authentication for facility access control. It supports various credential types including proximity cards, magnetic stripe cards, QR codes, and barcode badges for flexible, secure access management.'
  },
  {
    question: 'What types of cards and credentials are supported?',
    answer: 'The system supports multiple credential types including RFID proximity cards (125kHz and 13.56MHz), magnetic stripe cards, smart cards, QR codes, barcodes, and mobile credentials. It can work with existing card formats and supports custom credential designs.'
  },
  {
    question: 'How does the barcode scanning work for access control?',
    answer: 'Barcode scanning works through dedicated scanners at access points that read printed or digital barcodes from badges, mobile devices, or printed tickets. The system validates the barcode against the database and grants or denies access based on authorization rules and time schedules.'
  },
  {
    question: 'Can the system integrate with existing access control infrastructure?',
    answer: 'Yes, our system integrates seamlessly with existing access control panels, door locks, turnstiles, and security systems. It supports standard protocols like Wiegand, OSDP, and TCP/IP, allowing for gradual migration and hybrid implementations.'
  },
  {
    question: 'What security features are included?',
    answer: 'Security features include encrypted communications, anti-passback protection, credential cloning detection, real-time monitoring, audit trails, and multi-factor authentication options. The system also supports biometric integration for enhanced security.'
  },
  {
    question: 'How does the system manage visitor and temporary access?',
    answer: 'The system provides visitor management with temporary credentials, time-limited access, pre-registration capabilities, and automatic credential expiration. It supports self-service kiosks for visitor check-in and can generate QR codes for one-time access.'
  },
  {
    question: 'What types of access control hardware are supported?',
    answer: 'The system supports various hardware including door readers, turnstiles, speed gates, elevator controls, parking barriers, and wireless locks. All hardware is designed for both indoor and outdoor use with weather-resistant options available.'
  },
  {
    question: 'How does the system handle emergency situations?',
    answer: 'In emergencies, the system provides immediate override capabilities, integrates with fire alarm systems for automatic egress, maintains detailed access logs for incident investigation, and ensures rapid evacuation while maintaining security for non-affected areas.'
  }
];

export default function BarcodeCardFAQ() {
  return (
    <section className="barcode-card-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Barcode & Card Access System</h3>
            <p>Comprehensive access control solution with barcode scanning, card authentication, and credential management for secure facility access</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {barcodeCardFaqs.map((faq, index) => (
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
          <BarcodeCardFAQClient />
        </div>
      </div>
    </section>
  );
}
