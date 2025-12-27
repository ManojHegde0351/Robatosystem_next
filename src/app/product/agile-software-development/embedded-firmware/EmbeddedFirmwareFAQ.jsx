import EmbeddedFirmwareFAQClient from './EmbeddedFirmwareFAQClient';
import '@/styles/EmbeddedFirmwareFAQ.css';

const embeddedFirmwareFaqs = [
  {
    question: 'What embedded firmware development services do you offer?',
    answer: 'We offer comprehensive embedded firmware development services including custom firmware design, RTOS integration, device driver development, bootloader programming, IoT connectivity solutions, firmware optimization, and maintenance for microcontrollers, processors, and embedded systems across various industries.'
  },
  {
    question: 'What microcontrollers and platforms do you work with?',
    answer: 'We work with a wide range of microcontrollers including ARM Cortex-M series, AVR, PIC, STM32, ESP32, Nordic nRF series, and specialized processors. We support platforms from manufacturers like STMicroelectronics, Microchip, NXP, Texas Instruments, and Espressif with various development toolchains.'
  },
  {
    question: 'Do you provide IoT firmware development services?',
    answer: 'Yes, we specialize in IoT firmware development including wireless connectivity (WiFi, Bluetooth, LoRa, Zigbee), cloud integration, OTA updates, sensor integration, power management, and secure communication protocols. We develop firmware for smart devices, industrial IoT, and consumer IoT products.'
  },
  {
    question: 'What real-time operating systems (RTOS) do you support?',
    answer: 'We support various RTOS including FreeRTOS, Zephyr, ThreadX, NuttX, and custom RTOS solutions. Our expertise includes task scheduling, inter-process communication, memory management, and real-time performance optimization for time-critical applications.'
  },
  {
    question: 'How do you ensure firmware security and reliability?',
    answer: 'We implement comprehensive security measures including secure boot, encrypted firmware, authentication mechanisms, secure OTA updates, memory protection, and vulnerability testing. We follow industry standards for embedded security and conduct thorough testing for reliability and robustness.'
  },
  {
    question: 'Can you help with firmware optimization and performance tuning?',
    answer: 'Yes, we provide firmware optimization services including code optimization, memory usage optimization, power consumption reduction, real-time performance tuning, and algorithm optimization. We use profiling tools and performance analysis to achieve optimal resource utilization.'
  },
  {
    question: 'What is your firmware development process?',
    answer: 'Our process includes requirements analysis, hardware abstraction layer design, firmware architecture, module development, unit testing, integration testing, hardware-in-the-loop testing, and deployment. We follow agile methodologies with regular builds and testing throughout development.'
  },
  {
    question: 'Do you provide firmware maintenance and support services?',
    answer: 'We provide comprehensive maintenance services including bug fixes, feature enhancements, security patches, performance optimization, and technical support. We offer flexible support plans and can handle firmware updates, troubleshooting, and system upgrades for deployed products.'
  }
];

export default function EmbeddedFirmwareFAQ() {
  return (
    <section className="embedded-firmware-faq montserrat">
      <div className="container">
        <div className="faq-container">
          {/* Static SEO Content */}
          <div className="faq-header">
            <h2>Learn More About</h2>
            <h3>Embedded Firmware Development</h3>
            <p>Expert embedded firmware development for IoT, industrial automation, and smart devices with RTOS integration and comprehensive security</p>
          </div>

          {/* FAQ - SEO visible with client interactions */}
          <div className="faq-content">
            <div className="faq-list">
              {embeddedFirmwareFaqs.map((faq, index) => (
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
          <EmbeddedFirmwareFAQClient />
        </div>
      </div>
    </section>
  );
}
