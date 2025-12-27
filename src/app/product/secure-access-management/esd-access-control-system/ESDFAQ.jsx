import ESDFAQClient from './ESDFAQClient';
import '@/styles/ESDFAQ.css';

const esdFaqs = [
  {
    question: 'What is ESD Access Control System?',
    answer: 'Our ESD (Electrostatic Discharge) Access Control System is a specialized security solution that combines traditional access control with electrostatic discharge protection for sensitive environments like electronics manufacturing, clean rooms, and data centers. It prevents unauthorized access while protecting equipment from static damage.'
  },
  {
    question: 'How does ESD protection work in access control?',
    answer: 'The system integrates ESD-safe materials, grounding mechanisms, and static detection sensors into access points. Personnel must discharge static electricity through grounding devices before gaining access, ensuring zero electrostatic risk to sensitive equipment and environments.'
  },
  {
    question: 'What types of authentication methods are supported?',
    answer: 'Our system supports multiple authentication methods including RFID cards, biometric scanners (fingerprint, facial recognition), PIN codes, and mobile credentials. All authentication points are ESD-safe and can be configured for multi-factor authentication.'
  },
  {
    question: 'Can the system integrate with existing security infrastructure?',
    answer: 'Yes, our ESD Access Control System integrates seamlessly with existing CCTV, alarm systems, building management systems, and enterprise security platforms. It supports standard protocols like Wiegand, OSDP, and TCP/IP for comprehensive security management.'
  },
  {
    question: 'What industries benefit from ESD access control?',
    answer: 'Industries including electronics manufacturing, semiconductor fabrication, pharmaceutical production, aerospace, data centers, research laboratories, and clean room facilities benefit from ESD access control to protect sensitive equipment and maintain compliance with industry standards.'
  },
  {
    question: 'How does the system monitor and report ESD compliance?',
    answer: 'The system provides real-time monitoring of ESD events, access attempts, and compliance metrics. It generates detailed reports for audit trails, regulatory compliance, and continuous improvement. Alerts are sent for any ESD violations or security breaches.'
  },
  {
    question: 'What types of ESD gates and barriers are available?',
    answer: 'We offer various ESD-safe access solutions including turnstiles with grounding plates, speed gates with static discharge systems, mantraps with ESD verification, and custom-designed gates for specific clean room requirements. All options maintain ESD protection while controlling access.'
  },
  {
    question: 'How does the system handle emergency situations?',
    answer: 'In emergencies, the system provides immediate access through override mechanisms, integrates with fire alarm systems for automatic egress, maintains audit trails of emergency access, and ensures rapid evacuation while preserving ESD protection for non-emergency areas.'
  }
];

export default function ESDFAQ() {
  return (
    <section className="esd-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>ESD Access Control System</h3>
            <p>Advanced electrostatic discharge protection combined with secure access control for sensitive environments and clean room facilities</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {esdFaqs.map((faq, index) => (
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
          <ESDFAQClient />
        </div>
      </div>
    </section>
  );
}
