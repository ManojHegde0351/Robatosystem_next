


import Navbar from '@/components/Navbar';
import HowItWorks from './components/HowItWorks';
import HeroContent from  './components/HeroContent';
import RFIDParkingIntro from './components/RFIDParkingIntro';
import ParkingBenefits from './components/ParkingBenefits';
import SectorParkingSolutions from './components/SectorParkingSolutions';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import RFIDParkingFAQ from '../RFIDParkingFAQ';
import Blogs from '@/app/homepage/Blogs';
export const metadata = {
  title: 'RFID Parking Management System | Robato Systems',
  description: 'Advanced RFID-based parking solutions with automated access control, real-time monitoring, and seamless vehicle identification. Secure and efficient parking management for modern facilities.',
  keywords: 'RFID parking, RFID parking system, automated parking access, vehicle identification, RFID parking management, secure parking solutions, RFID parking control, Robato Systems',
  openGraph: {
    title: 'RFID Parking Management System | Robato Systems',
    description: 'Advanced RFID-based parking solutions with automated access control, real-time monitoring, and seamless vehicle identification.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/rfid-parking',
    images: [
      {
        url: '/images/ParkingManagement/rfid-parking/rfid-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'RFID Parking Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RFID Parking Management System | Robato Systems',
    description: 'Advanced RFID-based parking solutions with automated access control and real-time monitoring.',
    images: ['/images/ParkingManagement/rfid-parking/rfid-parking-hero.jpg'],
  },
};

const RFIDParkingPage = () => {
  return (
    <main>
      <HeroContent /> 
<Navbar/>
      <AnimateOnScroll>
        <RFIDParkingIntro  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingBenefits />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SectorParkingSolutions />
        <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks/>
      </AnimateOnScroll>
<AnimateOnScroll>
  <WhiteCTASection/>
  </AnimateOnScroll>
  <AnimateOnScroll>
    <RFIDParkingFAQ/>
  </AnimateOnScroll>
  <AnimateOnScroll>
    <Blogs/>
  </AnimateOnScroll>
    </main>
  );
};

export default RFIDParkingPage;
