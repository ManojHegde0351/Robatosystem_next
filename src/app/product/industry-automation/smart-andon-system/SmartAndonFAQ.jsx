import SmartAndonFAQClient from './SmartAndonFAQClient';
import '@/styles/SmartAndonFAQ.css';

const smartAndonFaqs = [
  {
    question: 'What is a SMART ANDON System and how does it work?',
    answer: 'A SMART ANDON System is a visual communication tool that provides real-time production status information. It uses digital displays, lights, and alerts to notify teams about production issues, quality problems, or maintenance needs, enabling quick response and continuous improvement in manufacturing environments.'
  },
  {
    question: 'How does the ANDON System integrate with existing manufacturing equipment?',
    answer: 'Our SMART ANDON System integrates seamlessly with PLCs, SCADA systems, MES, and ERP platforms through standard industrial protocols like Modbus, OPC-UA, and MQTT. It can connect to sensors, machines, and production lines to collect real-time data and display actionable insights.'
  },
  {
    question: 'What types of alerts can the ANDON System display?',
    answer: 'The system can display various alert types including production stoppages, quality defects, maintenance requests, material shortages, safety incidents, and performance deviations. Each alert type can be color-coded and prioritized for immediate visual recognition.'
  },
  {
    question: 'Can the ANDON System be customized for different manufacturing environments?',
    answer: 'Yes, our SMART ANDON System is fully customizable to suit specific industry needs including automotive, electronics, pharmaceuticals, food processing, and general manufacturing. We can adapt the interface, alert types, and integration protocols to match your production requirements.'
  },
  {
    question: 'How does the system help reduce downtime and improve productivity?',
    answer: 'The ANDON System reduces downtime by providing immediate visibility to production issues, enabling faster response times. It helps identify bottlenecks, track problem resolution, and provides analytics for continuous improvement, ultimately increasing overall equipment effectiveness (OEE) and productivity.'
  },
  {
    question: 'What mobile capabilities does the SMART ANDON System offer?',
    answer: 'Our system includes mobile apps for supervisors and managers to receive real-time alerts, view production status, and respond to issues remotely. It supports push notifications, remote acknowledgment, and mobile dashboard access for comprehensive monitoring from anywhere.'
  },
  {
    question: 'How does the ANDON System support lean manufacturing initiatives?',
    answer: 'The system supports lean manufacturing by enabling visual management, facilitating quick problem detection, supporting continuous improvement (Kaizen), reducing waste, and empowering frontline workers to stop production and address issues immediately, aligning with lean principles.'
  },
  {
    question: 'What analytics and reporting features are included?',
    answer: 'Our SMART ANDON System provides comprehensive analytics including downtime analysis, mean time to repair (MTTR), mean time between failures (MTBF), OEE tracking, trend analysis, and customizable reports for management review and continuous improvement initiatives.'
  }
];

export default function SmartAndonFAQ() {
  return (
    <section className="smart-andon-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>SMART ANDON System</h3>
            <p>Advanced visual management system for real-time production monitoring, quality control, and operational excellence in manufacturing environments</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {smartAndonFaqs.map((faq, index) => (
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
          <SmartAndonFAQClient />
        </div>
      </div>
    </section>
  );
}
