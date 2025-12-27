import Image from 'next/image';
import Link from 'next/link';
import '@/styles/home/services.css';
import ServicesClient from '@/app/homepage/components/ServicesClient';

const services = [
  {
    title: 'Parking Management',
    description: 'Advanced parking automation solutions with ANPR, RFID, and real-time monitoring.',
    image: '/images/services/parking.webp',
    link: 'product/parking-management'
  },
  {
    title: 'Automation Solutions',
    description: 'Industry 4.0 automation with Andon systems and smart waste solutions.',
    image: '/images/services/automation.webp',
    link: '/product/industry-automation/smart-andon-system'
  },
  {
    title: 'Visitor Management',
    description: 'Streamlined visitor registration and tracking systems for enhanced security',
    image: '/images/services/access-control.webp',
    link: '/product/visitor-management'
  },
  {
    title: 'Secure Access Solutions',
    description: 'Comprehensive security systems integrating multiple authentication methods.',
    image: '/images/services/secure-access.webp',
    link: '/product/secure-access-management/esd-access-control-system'
  },
  {
    title: 'Agile Software Development',
    description: 'Custom software development with mobile apps, web applications, and embedded firmware.',
    image: '/images/services/agile-software.webp',
    link: '/product/agile-software-development/mobile-development'
  },
  {
    title: 'Web portals',
    description: 'Login and registration portals for secure access to your applications.',
    image: '/images/services/website.webp',
    link: '#'
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive automation and technology solutions tailored for your business needs.
        </p>

        <ServicesClient services={services} />
      </div>
    </section>
  );
}
