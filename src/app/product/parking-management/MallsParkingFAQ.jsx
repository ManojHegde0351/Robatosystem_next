import MallsParkingFAQClient from './MallsParkingFAQClient';
import '@/styles/MallsParkingFAQ.css';

const mallsParkingFaqs = [
  {
    question: 'How does your mall parking system handle weekend and holiday peak hours?',
    answer: 'Our system uses predictive analytics to anticipate peak shopping periods, dynamic pricing to manage demand, real-time capacity monitoring, and mobile app notifications for available spaces. It also coordinates with mall events and promotions for optimal traffic flow.'
  },
  {
    question: 'Can the parking system integrate with mall loyalty programs?',
    answer: 'Yes, our system integrates seamlessly with mall loyalty programs, offering parking rewards, validation for premium members, points accumulation for parking fees, and special discounts based on shopping patterns and membership tiers.'
  },
  {
    question: 'What shopper-friendly features are included in the system?',
    answer: 'We provide features like parking space finders with store proximity guidance, indoor navigation to mall entrances, car locator services, and mobile app integration with store directories and shopping lists.'
  },
  {
    question: 'How does the system manage valet parking services?',
    answer: 'Our valet parking management includes automated ticketing, digital vehicle tracking, SMS notifications for car retrieval, payment integration, and performance analytics for valet staff efficiency and customer satisfaction.'
  },
  {
    question: 'Can the system handle movie theater and restaurant validation?',
    answer: 'Yes, our system supports automated validation for movie tickets, restaurant receipts, and entertainment venues. It includes QR code scanning, receipt validation, and integration with point-of-sale systems for seamless customer experience.'
  },
  {
    question: 'What security measures are in place for mall parking?',
    answer: 'We implement comprehensive security including 24/7 CCTV surveillance, license plate recognition, emergency call boxes, well-lit parking areas, security patrol coordination, and real-time monitoring with instant alert systems.'
  },
  {
    question: 'How does the system accommodate delivery and service vehicles?',
    answer: 'Our system includes dedicated service vehicle entrances, loading zone management, delivery scheduling, time-limited parking for vendors, and integration with mall management for maintenance and service vehicle coordination.'
  }
];

export default function MallsParkingFAQ() {
  return (
    <section className="malls-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Mall Parking Management</h3>
            <p>Comprehensive parking solutions designed for shopping malls with shopper experience focus, loyalty integration, and peak hour management</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {mallsParkingFaqs.map((faq, index) => (
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
          <MallsParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
