import SmartTrafficFAQClient from './SmartTrafficFAQClient';
import '@/styles/SmartTrafficFAQ.css';

const smartTrafficFaqs = [
  {
    question: 'What is Smart Traffic Management System?',
    answer: 'Our Smart Traffic Management System is an intelligent urban mobility solution that uses AI, IoT sensors, and real-time data analytics to optimize traffic flow, reduce congestion, and enhance road safety. It integrates with traffic signals, surveillance cameras, and vehicle detection systems for comprehensive traffic control.'
  },
  {
    question: 'How does the system reduce traffic congestion?',
    answer: 'The system reduces congestion by 30-50% through adaptive traffic signal timing, real-time traffic flow optimization, predictive congestion analysis, and dynamic route guidance. It continuously monitors traffic patterns and adjusts signal timings to maximize throughput.'
  },
  {
    question: 'Can the system integrate with existing traffic infrastructure?',
    answer: 'Yes, our system integrates seamlessly with existing traffic lights, road sensors, CCTV cameras, and traffic control centers. We support various communication protocols and can work with legacy equipment while providing modern AI-powered analytics.'
  },
  {
    question: 'What types of traffic analytics are available?',
    answer: 'Our system provides comprehensive analytics including traffic volume analysis, speed monitoring, congestion heatmaps, accident detection, pedestrian flow analysis, parking availability, and emissions tracking for urban planning decisions.'
  },
  {
    question: 'How does the system handle emergency vehicle prioritization?',
    answer: 'The system automatically detects emergency vehicles through acoustic sensors, GPS integration, or visual recognition and provides green wave corridors. It pre-clears traffic signals along emergency routes, reducing response times by up to 40%.'
  },
  {
    question: 'Can the system improve pedestrian safety?',
    answer: 'Yes, our system includes pedestrian detection at crosswalks, smart crossing signals, collision warning systems, and adaptive crossing times. It provides real-time safety alerts and optimizes signal timing for pedestrian safety while maintaining traffic flow.'
  },
  {
    question: 'How does the system support public transportation?',
    answer: 'The system provides bus priority lanes, real-time transit signal priority, passenger flow monitoring, and integrated transit scheduling. It optimizes traffic signals for public transport efficiency while minimizing impact on general traffic.'
  },
  {
    question: 'What mobile and citizen engagement features are included?',
    answer: 'Citizens can access real-time traffic information through mobile apps, receive congestion alerts, plan optimal routes, report traffic incidents, and get parking availability updates. The system also provides public dashboards for traffic transparency.'
  }
];

export default function SmartTrafficFAQ() {
  return (
    <section className="smart-traffic-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Smart Traffic Management</h3>
            <p>Intelligent urban mobility solution with AI-powered traffic optimization, congestion reduction, and enhanced road safety for modern cities</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {smartTrafficFaqs.map((faq, index) => (
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
          <SmartTrafficFAQClient />
        </div>
      </div>
    </section>
  );
}
