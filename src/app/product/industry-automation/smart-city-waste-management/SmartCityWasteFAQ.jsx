import SmartCityWasteFAQClient from './SmartCityWasteFAQClient';
import '@/styles/SmartCityWasteFAQ.css';

const smartCityWasteFaqs = [
  {
    question: 'What is Smart City Waste Management System?',
    answer: 'Our Smart City Waste Management System is an integrated IoT-based solution that monitors waste levels in real-time, optimizes collection routes, and automates waste management processes. It uses sensors, data analytics, and automated systems to make waste collection more efficient and sustainable.'
  },
  {
    question: 'How do the waste level sensors work?',
    answer: 'Ultrasonic sensors installed in waste bins measure fill levels using sound waves. The data is transmitted via IoT networks to a central dashboard, providing real-time visibility into waste levels across the city. This enables predictive collection scheduling and overflow prevention.'
  },
  {
    question: 'Can the system reduce waste collection costs?',
    answer: 'Yes, our system typically reduces collection costs by 30-50% through optimized routes, reduced fuel consumption, and efficient resource allocation. It eliminates unnecessary collections by only servicing bins that actually need emptying.'
  },
  {
    question: 'How does the system handle different types of waste?',
    answer: 'The system supports multiple waste streams including general waste, recyclables, organic waste, and hazardous materials. Each type has dedicated bins with specific sensors and collection schedules, ensuring proper waste segregation and processing.'
  },
  {
    question: 'What analytics and reporting features are available?',
    answer: 'Our system provides comprehensive analytics including waste generation patterns, collection efficiency reports, recycling rates, cost analysis, and predictive insights. Custom dashboards help city managers make data-driven decisions for waste management optimization.'
  },
  {
    question: 'Can the system integrate with existing city infrastructure?',
    answer: 'Yes, our system integrates seamlessly with existing waste collection vehicles, city management platforms, and citizen engagement apps. We support various communication protocols and can work with your current fleet management systems.'
  },
  {
    question: 'How does the system support citizen engagement?',
    answer: 'Citizens can use mobile apps to report waste issues, request special collections, receive collection notifications, and access recycling information. The system also provides transparency through public dashboards showing waste management performance.'
  },
  {
    question: 'What environmental benefits does the system provide?',
    answer: 'The system reduces carbon emissions through optimized routes, increases recycling rates through better segregation, minimizes landfill usage, and supports circular economy initiatives. Cities typically see 40-60% improvement in recycling rates.'
  }
];

export default function SmartCityWasteFAQ() {
  return (
    <section className="smart-city-waste-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Smart City Waste Management</h3>
            <p>Intelligent waste management solution for smart cities with IoT monitoring, automated collection, and sustainable waste-to-wealth transformation</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {smartCityWasteFaqs.map((faq, index) => (
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
          <SmartCityWasteFAQClient />
        </div>
      </div>
    </section>
  );
}
