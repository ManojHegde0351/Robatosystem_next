import MobileDevelopmentFAQClient from './MobileDevelopmentFAQClient';
import '@/styles/MobileDevelopmentFAQ.css';

const mobileDevelopmentFaqs = [
  {
    question: 'What mobile app development services do you offer?',
    answer: 'We offer comprehensive mobile app development services including native iOS and Android development, cross-platform solutions using React Native and Flutter, app modernization, UI/UX design, API integration, and ongoing maintenance and support for enterprise and consumer applications.'
  },
  {
    question: 'What platforms and technologies do you work with?',
    answer: 'We specialize in native development using Swift/Objective-C for iOS and Kotlin/Java for Android, as well as cross-platform frameworks like React Native, Flutter, and Xamarin. We also work with backend technologies including Node.js, Python, and cloud services like AWS and Firebase.'
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Development timelines vary based on complexity: simple apps take 2-4 months, moderately complex apps 4-8 months, and enterprise-level applications 6-12 months. We follow agile methodologies with regular sprints and deliverables to ensure transparency and timely delivery.'
  },
  {
    question: 'Do you provide app store submission and deployment services?',
    answer: 'Yes, we handle the complete app deployment process including App Store and Google Play Store submission, compliance with guidelines, metadata optimization, screenshots and descriptions, and ongoing updates. We also support enterprise distribution and private app stores.'
  },
  {
    question: 'What is your approach to mobile app security?',
    answer: 'We implement comprehensive security measures including data encryption, secure authentication, API security, code obfuscation, penetration testing, and compliance with regulations like GDPR and HIPAA. We follow OWASP mobile security guidelines and implement best practices for secure mobile development.'
  },
  {
    question: 'Can you help with app maintenance and updates?',
    answer: 'We provide ongoing maintenance services including bug fixes, performance optimization, OS compatibility updates, feature enhancements, security patches, and 24/7 support. We offer flexible maintenance plans tailored to your app requirements and user base.'
  },
  {
    question: 'Do you work with startups and enterprises?',
    answer: 'Yes, we serve both startups and enterprises with scalable solutions. For startups, we offer MVP development and rapid prototyping. For enterprises, we provide complex integrations, legacy system modernization, and enterprise-grade security and compliance features.'
  },
  {
    question: 'What is your development process and methodology?',
    answer: 'We follow agile development methodology with sprints, regular demos, and continuous integration. Our process includes discovery and planning, UI/UX design, development, testing, deployment, and maintenance. We maintain transparent communication through project management tools and regular status updates.'
  }
];

export default function MobileDevelopmentFAQ() {
  return (
    <section className="mobile-development-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Mobile App Development</h3>
            <p>Professional mobile app development services with native performance, cross-platform solutions, and comprehensive app lifecycle management</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {mobileDevelopmentFaqs.map((faq, index) => (
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
          <MobileDevelopmentFAQClient />
        </div>
      </div>
    </section>
  );
}
