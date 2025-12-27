import WebDevelopmentFAQClient from './WebDevelopmentFAQClient';
import '@/styles/WebDevelopmentFAQ.css';

const webDevelopmentFaqs = [
  {
    question: 'What web development services do you offer?',
    answer: 'We offer comprehensive web development services including custom web applications, e-commerce platforms, enterprise software solutions, responsive web design, progressive web apps, API development, and full-stack development using modern frameworks and technologies.'
  },
  {
    question: 'What technologies and frameworks do you specialize in?',
    answer: 'We specialize in modern web technologies including React, Next.js, Angular, Vue.js for frontend; Node.js, Python, PHP, Java for backend; and databases like MongoDB, PostgreSQL, MySQL. We also work with cloud platforms like AWS, Google Cloud, and Azure for scalable deployments.'
  },
  {
    question: 'How long does it take to develop a custom web application?',
    answer: 'Development timelines vary based on complexity: simple websites take 4-8 weeks, web applications 2-4 months, e-commerce platforms 3-6 months, and enterprise solutions 6-12 months. We follow agile development with regular milestones and transparent progress tracking.'
  },
  {
    question: 'Do you provide e-commerce development services?',
    answer: 'Yes, we specialize in e-commerce development using platforms like Shopify, Magento, WooCommerce, and custom solutions. We provide payment gateway integration, inventory management, order processing, shipping solutions, and comprehensive admin dashboards for online businesses.'
  },
  {
    question: 'What is your approach to web application security?',
    answer: 'We implement robust security measures including HTTPS encryption, secure authentication, data validation, SQL injection prevention, XSS protection, CSRF protection, regular security audits, and compliance with standards like GDPR, PCI-DSS, and HIPAA for sensitive applications.'
  },
  {
    question: 'Can you help with website maintenance and support?',
    answer: 'We provide comprehensive maintenance services including bug fixes, performance optimization, security updates, feature enhancements, server management, backup solutions, and 24/7 technical support. We offer flexible maintenance plans tailored to your application requirements.'
  },
  {
    question: 'Do you work with startups and enterprise clients?',
    answer: 'Yes, we serve both startups and enterprises with scalable solutions. For startups, we offer MVP development, rapid prototyping, and cost-effective solutions. For enterprises, we provide complex integrations, legacy system modernization, and enterprise-grade architecture and security.'
  },
  {
    question: 'What is your web development process?',
    answer: 'Our process includes discovery and planning, UI/UX design, frontend development, backend development, testing, deployment, and maintenance. We follow agile methodologies with sprints, regular demos, continuous integration, and maintain transparent communication throughout the project lifecycle.'
  }
];

export default function WebDevelopmentFAQ() {
  return (
    <section className="web-development-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Web Development Services</h3>
            <p>Professional web development with custom applications, e-commerce solutions, and enterprise software using modern technologies and best practices</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {webDevelopmentFaqs.map((faq, index) => (
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
          <WebDevelopmentFAQClient />
        </div>
      </div>
    </section>
  );
}
