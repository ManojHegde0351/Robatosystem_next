import React from 'react';
import HandheldParkingFAQClient from './HandheldParkingFAQClient';
import '@/styles/HandheldParkingFAQ.css';

const HandheldParkingFAQ = () => {
  const faqs = [
    {
      question: 'What is a handheld parking machine?',
      answer: 'A handheld parking machine is a portable device used by parking enforcement officers to issue tickets, process payments, and manage parking violations efficiently in various parking environments.'
    },
    {
      question: 'How does the handheld parking machine improve efficiency?',
      answer: 'Our handheld parking machines streamline parking enforcement with features like license plate recognition, real-time data syncing, digital receipt generation, and wireless connectivity, reducing manual work and improving accuracy.'
    },
    {
      question: 'What payment methods are supported?',
      answer: 'Our handheld parking machines support multiple payment options including credit/debit cards, mobile payments, and integration with parking apps, providing convenience for both enforcement officers and vehicle owners.'
    },
    {
      question: 'How is the device powered and what is its battery life?',
      answer: 'The device is powered by a high-capacity rechargeable lithium-ion battery that lasts up to 12 hours on a single charge. It also supports fast charging and can be charged via USB-C or a charging dock.'
    },
    {
      question: 'Is the device weatherproof?',
      answer: 'Yes, our handheld parking machines are built to IP65 standards, making them dust-tight and protected against water jets, ensuring reliable operation in various weather conditions.'
    },
    {
      question: 'Can it integrate with existing parking management systems?',
      answer: 'Absolutely. Our devices are designed to seamlessly integrate with various parking management systems, allowing for real-time data synchronization, remote monitoring, and centralized reporting.'
    },
    {
      question: 'What security features are included?',
      answer: 'The device includes multiple security features such as user authentication, data encryption, GPS tracking of enforcement activities, and tamper-evident logging to ensure data integrity and prevent misuse.'
    }
  ];

  return (
    <section className="handheld-parking-faq">
      <div className="container">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Handheld Parking Machine</h2>
            <h3>Frequently Asked Questions</h3>
            <p>Find answers to common questions about our handheld parking enforcement solutions</p>
          </div>
          <div className="faq-content">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item" data-index={index}>
                  <button className="faq-question">
                    {faq.question}
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <HandheldParkingFAQClient faqs={faqs} />
    </section>
  );
};

export default HandheldParkingFAQ;
