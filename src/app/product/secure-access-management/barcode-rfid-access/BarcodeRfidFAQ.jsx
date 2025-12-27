import BarcodeRfidFAQClient from './BarcodeRfidFAQClient';
import '@/styles/BarcodeRfidFAQ.css';

const barcodeRfidFaqs = [
  {
    question: 'What is Barcode & RFID Access Control System?',
    answer: 'Our Barcode & RFID Access Control System is an advanced security solution that combines barcode scanning and RFID technology for seamless access management. It supports multiple credential types including RFID cards, barcode badges, QR codes, and mobile credentials for flexible, secure facility access.'
  },
  {
    question: 'What RFID frequencies are supported?',
    answer: 'The system supports multiple RFID frequencies including Low Frequency (125kHz), High Frequency (13.56MHz), and Ultra-High Frequency (860-960MHz). This ensures compatibility with various RFID card types and provides optimal read range for different access control scenarios.'
  },
  {
    question: 'How does dual authentication work with barcode and RFID?',
    answer: 'Dual authentication combines barcode scanning with RFID verification for enhanced security. Users can present both credentials simultaneously or sequentially, providing multi-factor authentication that prevents unauthorized access even if one credential is compromised.'
  },
  {
    question: 'Can the system read both barcode and RFID simultaneously?',
    answer: 'Yes, our integrated readers can detect and process both barcode and RFID credentials simultaneously. The system automatically identifies the credential type and processes it according to predefined access rules, ensuring fast and efficient access control.'
  },
  {
    question: 'What types of RFID cards are compatible?',
    answer: 'The system is compatible with various RFID card types including proximity cards, smart cards, MIFARE cards, DESFire cards, and custom RFID tags. It also supports passive and active RFID tags for different read range requirements and security levels.'
  },
  {
    question: 'How does the system handle mobile credentials?',
    answer: 'Mobile credentials are supported through QR codes, NFC-enabled smartphones, and Bluetooth Low Energy (BLE) technology. Users can store digital credentials in mobile apps and present them for access, eliminating the need for physical cards while maintaining security.'
  },
  {
    question: 'What security features prevent credential cloning?',
    answer: 'Security features include encrypted RFID communications, rolling code technology, anti-cloning algorithms, secure key storage, and real-time credential validation. The system also detects suspicious access patterns and can automatically disable compromised credentials.'
  },
  {
    question: 'Can the system integrate with existing security infrastructure?',
    answer: 'Yes, the system integrates seamlessly with existing access control panels, CCTV systems, alarm systems, and building management platforms. It supports standard protocols like Wiegand, OSDP, TCP/IP, and can work with legacy systems for gradual migration.'
  }
];

export default function BarcodeRfidFAQ() {
  return (
    <section className="barcode-rfid-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Barcode & RFID Access Control</h3>
            <p>Advanced dual-technology access control combining barcode scanning and RFID for comprehensive security and flexible credential management</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {barcodeRfidFaqs.map((faq, index) => (
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
          <BarcodeRfidFAQClient />
        </div>
      </div>
    </section>
  );
}
