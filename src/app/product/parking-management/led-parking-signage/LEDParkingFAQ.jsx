import React from 'react';
import LEDParkingFAQClient from './LEDParkingFAQClient';
import '@/styles/LEDParkingFAQ.css';

const LEDParkingFAQ = () => {
  const faqs = [
    {
      question: 'How do LED parking guidance systems work?',
      answer: 'LED parking guidance systems use sensors to detect vehicle presence in parking spaces and display real-time availability on overhead LED signs, directing drivers to open spots efficiently.'
    },
    {
      question: 'What are the key benefits of LED parking signage?',
      answer: 'LED parking signs offer high visibility, energy efficiency, long lifespan, real-time updates, reduced driver search time, and improved traffic flow within parking facilities.'
    },
    {
      question: 'Can LED parking signs be customized for different parking layouts?',
      answer: 'Yes, our LED parking signs can be fully customized to match various parking layouts, including multi-level structures, open lots, and complex parking environments with different zones.'
    },
    {
      question: 'How are the LED signs powered and maintained?',
      answer: 'LED signs can be hardwired or solar-powered, with low energy consumption. They require minimal maintenance, typically just periodic cleaning and occasional LED module replacement after many years of use.'
    },
    {
      question: 'Can the system integrate with mobile apps?',
      answer: 'Yes, our LED parking guidance system can integrate with mobile applications to provide real-time parking availability to users before they arrive at the facility.'
    },
    {
      question: 'What is the typical lifespan of LED parking signs?',
      answer: 'LED parking signs typically last 50,000 to 100,000 hours of operation, with some high-quality LEDs lasting even longer. This translates to 10-15 years of normal usage.'
    },
    {
      question: 'How is the system installed?',
      answer: 'Installation involves mounting the LED signs at strategic locations, connecting them to the central control system, and configuring the software. Our team handles the entire process with minimal disruption to your operations.'
    }
  ];

  return (
    <section className="led-parking-faq">
      <div className="container">
        <div className="faq-container">
          <div className="faq-header">
            <h2>LED Parking Signage</h2>
            <h3>Frequently Asked Questions</h3>
            <p>Find answers to common questions about our LED parking guidance solutions</p>
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
      <LEDParkingFAQClient faqs={faqs} />
    </section>
  );
};

export default LEDParkingFAQ;
