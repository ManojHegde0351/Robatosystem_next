import WeighbridgeFAQClient from './WeighbridgeFAQClient';
import '@/styles/WeighbridgeFAQ.css';

const weighbridgeFaqs = [
  {
    question: 'What is Weighbridge Management System?',
    answer: 'Our Weighbridge Management System is an automated weighing solution that provides accurate weight measurement, real-time data processing, vehicle identification, and seamless integration with ERP systems. It eliminates manual processes, reduces fraud, and streamlines weighing operations for industries like mining, logistics, agriculture, and manufacturing.'
  },
  {
    question: 'How does the system prevent weighing fraud?',
    answer: 'The system prevents fraud through multiple security measures including RFID vehicle identification, automated weight capture, CCTV integration, weight validation algorithms, and tamper-proof data logging. It ensures 100% accurate weight measurements and eliminates manual manipulation.'
  },
  {
    question: 'Can the system integrate with existing ERP and accounting systems?',
    answer: 'Yes, our system integrates seamlessly with major ERP systems like SAP, Oracle, Tally, and custom accounting platforms. It provides real-time data synchronization, automated invoicing, inventory management, and comprehensive reporting for seamless business operations.'
  },
  {
    question: 'What types of vehicles can the system handle?',
    answer: 'The system handles all vehicle types including trucks, trailers, tankers, bulk carriers, and specialized vehicles. It supports multi-axle weighing, overload detection, and can be configured for various vehicle classes and weight limits as per regulatory requirements.'
  },
  {
    question: 'How does the RFID vehicle identification work?',
    answer: 'RFID tags are installed on vehicles that are automatically detected when entering the weighbridge. The system identifies the vehicle, retrieves relevant data, and initiates the weighing process without manual intervention, reducing processing time by 70%.'
  },
  {
    question: 'What reporting and analytics features are available?',
    answer: 'Our system provides comprehensive analytics including weight transaction reports, vehicle throughput analysis, overload statistics, revenue tracking, material movement reports, and custom dashboards for management decision-making and regulatory compliance.'
  },
  {
    question: 'Can the system operate in harsh industrial environments?',
    answer: 'Yes, our system is built for industrial environments with weather-proof hardware, dust and water resistance, temperature tolerance, and robust construction. It operates reliably in mining sites, ports, factories, and outdoor weighing facilities.'
  },
  {
    question: 'What hardware components are included in the system?',
    answer: 'The system includes high-precision load cells, digital weight indicators, RFID readers, barrier gates, traffic lights, CCTV cameras, display boards, industrial computers, and backup power systems. All components are industrial-grade and built for continuous operation.'
  }
];

export default function WeighbridgeFAQ() {
  return (
    <section className="weighbridge-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Weighbridge Management System</h3>
            <p>Automated weighing solution with RFID vehicle identification, fraud prevention, real-time data processing, and seamless ERP integration for industrial operations</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {weighbridgeFaqs.map((faq, index) => (
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
          <WeighbridgeFAQClient />
        </div>
      </div>
    </section>
  );
}
