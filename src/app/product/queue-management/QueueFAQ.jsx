import QueueFAQClient from './QueueFAQClient';
import '@/styles/QueueFAQ.css';

const queueFaqs = [
  {
    question: 'What is Smart Queue Management System?',
    answer: 'Our Smart Queue Management System is an intelligent solution that optimizes customer flow, reduces wait times, and enhances service efficiency. It uses digital ticketing, real-time monitoring, and analytics to manage queues in banks, hospitals, retail stores, government offices, and service centers.'
  },
  {
    question: 'How does the kiosk-based queue system work?',
    answer: 'Customers use self-service kiosks to select services, receive ticket numbers, and join virtual queues. The system displays real-time queue status, estimated wait times, and calls customers to service counters via digital displays and SMS notifications.'
  },
  {
    question: 'Can the system integrate with existing infrastructure?',
    answer: 'Yes, our system integrates seamlessly with existing ticket dispensers, digital displays, mobile apps, and management software. We support various hardware configurations and can work with your current IT infrastructure for smooth implementation.'
  },
  {
    question: 'What types of analytics and reporting are available?',
    answer: 'The system provides comprehensive analytics including peak hour analysis, service time metrics, customer flow patterns, staff performance reports, and predictive insights. Custom dashboards help managers optimize resource allocation and improve service quality.'
  },
  {
    question: 'How does mobile queue management work?',
    answer: 'Customers can join queues remotely using mobile apps, receive real-time updates, and get notified when their turn approaches. This reduces physical crowding and allows customers to wait comfortably while maintaining social distancing.'
  },
  {
    question: 'Can the system manage multiple service counters and departments?',
    answer: 'Yes, our system supports multi-counter management with intelligent load balancing, priority queue handling, and cross-department ticket transfers. It optimizes staff allocation based on real-time demand and service complexity.'
  },
  {
    question: 'What security and privacy features are included?',
    answer: 'The system includes secure data encryption, GDPR compliance, access control for staff, audit trails, and anonymized customer data. It ensures privacy while providing valuable insights for service improvement.'
  },
  {
    question: 'How does the system improve customer satisfaction?',
    answer: 'The system reduces perceived wait times through transparency, provides comfortable waiting experiences, enables appointment scheduling, and offers personalized service. Organizations typically see 40-60% improvement in customer satisfaction scores.'
  }
];

export default function QueueFAQ() {
  return (
    <section className="queue-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Smart Queue Management</h3>
            <p>Intelligent queue management solution with digital ticketing, real-time monitoring, mobile integration, and comprehensive analytics for enhanced customer experience</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {queueFaqs.map((faq, index) => (
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
          <QueueFAQClient />
        </div>
      </div>
    </section>
  );
}
