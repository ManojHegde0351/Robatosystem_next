import RFIDParkingFAQClient from './RFIDParkingFAQClient';
import '@/styles/RFIDParkingFAQ.css';

const rfidParkingFaqs = [
  {
    question: 'How does RFID parking technology work?',
    answer: 'RFID parking uses radio frequency identification tags embedded in parking passes or cards. When a vehicle approaches, RFID readers detect the tag automatically, opening gates without manual intervention. The system records entry/exit times and calculates parking fees seamlessly.'
  },
  {
    question: 'What are the advantages of RFID over traditional parking systems?',
    answer: 'RFID offers hands-free operation, faster entry/exit processing, reduced labor costs, enhanced security through unique tag identification, real-time data collection, and integration with payment and management systems for superior efficiency.'
  },
  {
    question: 'Can RFID parking integrate with existing access control systems?',
    answer: 'Yes, our RFID system integrates seamlessly with existing access control, building management, and security systems. It supports multiple card formats and can work alongside barcode, magnetic stripe, and biometric systems for comprehensive access management.'
  },
  {
    question: 'What types of RFID tags are available for parking?',
    answer: 'We offer various RFID options including passive UHF tags for vehicles, active RFID cards for staff, windshield-mounted tags for convenience, and handheld RFID devices for mobile enforcement. Each type is optimized for specific parking scenarios and read ranges.'
  },
  {
    question: 'How secure is RFID parking technology?',
    answer: 'RFID parking includes multiple security layers such as encrypted tag data, anti-collision protocols to prevent tag interference, unique identification codes, secure authentication, and real-time monitoring to prevent unauthorized access and cloning attempts.'
  },
  {
    question: 'What is the read range and accuracy of RFID parking readers?',
    answer: 'Our RFID readers offer read ranges from 3-30 feet depending on the tag type and installation. The system achieves 99.9% accuracy in tag detection with advanced anti-interference technology to ensure reliable performance in all weather conditions.'
  },
  {
    question: 'How does RFID parking handle payment and billing?',
    answer: 'RFID integrates with automated payment systems to link tags to user accounts, enabling seamless billing based on duration, prepaid credit systems, corporate account management, and mobile app integration for real-time balance tracking and payment processing.'
  }
];

export default function RFIDParkingFAQ() {
  return (
    <section className="rfid-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>RFID Parking Management</h3>
            <p>Advanced RFID technology for automated parking with hands-free access, enhanced security, and seamless integration with existing infrastructure</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {rfidParkingFaqs.map((faq, index) => (
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
          <RFIDParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
