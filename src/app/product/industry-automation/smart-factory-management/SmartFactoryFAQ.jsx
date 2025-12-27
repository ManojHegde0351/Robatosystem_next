import SmartFactoryFAQClient from './SmartFactoryFAQClient';
import '@/styles/SmartFactoryFAQ.css';

const smartFactoryFaqs = [
  {
    question: 'What is Smart Factory Management System?',
    answer: 'Our Smart Factory Management System is an integrated Industry 4.0 solution that combines IoT sensors, AI analytics, and automation to optimize manufacturing processes. It provides real-time monitoring, predictive maintenance, quality control, and production scheduling for modern factories.'
  },
  {
    question: 'How does the system improve production efficiency?',
    answer: 'The system increases efficiency by 25-40% through real-time production monitoring, automated workflow optimization, predictive maintenance scheduling, and AI-driven quality control. It identifies bottlenecks, reduces downtime, and optimizes resource allocation.'
  },
  {
    question: 'Can the system integrate with existing manufacturing equipment?',
    answer: 'Yes, our system integrates seamlessly with existing machinery, PLCs, SCADA systems, and MES platforms. We support industrial protocols like Modbus, OPC-UA, and MQTT to connect with legacy equipment and modern smart machines.'
  },
  {
    question: 'What types of manufacturing analytics are available?',
    answer: 'Our system provides comprehensive analytics including OEE (Overall Equipment Effectiveness), production yield analysis, quality metrics, predictive maintenance alerts, energy consumption monitoring, and real-time performance dashboards for factory managers.'
  },
  {
    question: 'How does predictive maintenance work?',
    answer: 'AI algorithms analyze sensor data from equipment to detect patterns that indicate potential failures. The system provides early warnings for maintenance needs, reducing unplanned downtime by up to 60% and extending equipment lifespan through proactive servicing.'
  },
  {
    question: 'Can the system manage quality control processes?',
    answer: 'Yes, our system includes automated quality control with computer vision, real-time defect detection, statistical process control, and quality analytics. It ensures consistent product quality while reducing inspection costs and improving first-pass yield.'
  },
  {
    question: 'How does the system handle inventory and supply chain management?',
    answer: 'The system provides real-time inventory tracking, automated reordering, supply chain visibility, and demand forecasting. It integrates with ERP systems to optimize inventory levels, reduce stockouts, and improve supply chain efficiency.'
  },
  {
    question: 'What security features are included for industrial environments?',
    answer: 'Our system includes industrial-grade security with encrypted communications, role-based access control, audit trails, network segmentation, and compliance with industrial security standards like IEC 62443 to protect against cyber threats.'
  }
];

export default function SmartFactoryFAQ() {
  return (
    <section className="smart-factory-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Smart Factory Management</h3>
            <p>Industry 4.0 manufacturing solution with real-time monitoring, predictive maintenance, quality control, and intelligent production optimization</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {smartFactoryFaqs.map((faq, index) => (
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
          <SmartFactoryFAQClient />
        </div>
      </div>
    </section>
  );
}
