import SensorParkingFAQClient from './SensorParkingFAQClient';
import '@/styles/SensorParkingFAQ.css';

const sensorParkingFaqs = [
  {
    question: 'What types of sensors are used in your parking system?',
    answer: 'We utilize ultrasonic sensors, infrared sensors, magnetic field sensors, and computer vision cameras to detect vehicle presence accurately and provide real-time parking availability data.'
  },
  {
    question: 'How accurate are the sensor-based parking detections?',
    answer: 'Our sensor systems achieve 99.5% accuracy in vehicle detection with minimal false positives. The sensors are calibrated to detect vehicles of all sizes and can distinguish between occupied and empty spaces reliably.'
  },
  {
    question: 'Can the sensors work in all weather conditions?',
    answer: 'Yes, our sensors are designed to operate reliably in all weather conditions including rain, snow, fog, and extreme temperatures. They have IP67 weatherproof ratings and built-in temperature compensation.'
  },
  {
    question: 'How is the sensor data transmitted and processed?',
    answer: 'Sensor data is transmitted via wireless protocols (LoRaWAN, NB-IoT) or wired connections to our central management system. Data is processed in real-time using AI algorithms for optimal parking guidance.'
  },
  {
    question: 'What is the installation process for sensor-based parking?',
    answer: 'Installation involves mounting sensors in each parking space, connecting them to the network gateway, and configuring the central management system. Typical installation takes 3-5 days for a 100-space parking facility.'
  },
  {
    question: 'How do sensors integrate with parking payment systems?',
    answer: 'Our sensors seamlessly integrate with payment gateways, automatically detecting entry/exit times and calculating parking fees. They can link to mobile apps, payment kiosks, and automated payment systems.'
  },
  {
    question: 'What maintenance is required for the parking sensors?',
    answer: 'Sensors require minimal maintenance - typically just periodic cleaning and battery replacement (for wireless sensors) every 3-5 years. Our system includes automated health monitoring and maintenance alerts.'
  }
];

export default function SensorParkingFAQ() {
  return (
    <section className="sensor-parking-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Sensor-Based Parking System</h3>
            <p>Discover how advanced sensor technology revolutionizes parking management with real-time monitoring and automated guidance</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {sensorParkingFaqs.map((faq, index) => (
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
          <SensorParkingFAQClient />
        </div>
      </div>
    </section>
  );
}
