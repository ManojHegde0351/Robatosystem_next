


import HeroContent from './components/HeroContent';
import HospitalParkingIntro from './components/HospitalParkingIntro';
import SmartParkingManagement from './components/SmartParkingManagement';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';

import WhiteCTASection from '@/components/WhiteCTASection';
import HospitalParkingFAQ from '../HospitalParkingFAQ';
import Blogs from '@/app/homepage/Blogs';
 
export const metadata = { 
  title: 'Hospital Parking Management System | Robato Systems',
  description: 'Specialized parking management solutions for hospitals and healthcare facilities. Efficient parking systems for patients, visitors, and medical staff with real-time monitoring.',
  keywords: 'hospital parking, healthcare parking management, hospital parking system, medical facility parking, patient parking, visitor parking, hospital parking solutions, Robato Systems',
  openGraph: {
    title: 'Hospital Parking Management System | Robato Systems',
    description: 'Specialized parking management solutions for hospitals and healthcare facilities. Efficient parking systems for patients, visitors, and medical staff.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/hospital-parking',
    images: [
      {
        url: '/images/ParkingManagement/hospital-parking/hospital-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hospital Parking Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Parking Management System | Robato Systems',
    description: 'Specialized parking management solutions for hospitals and healthcare facilities with real-time monitoring.',
    images: ['/images/ParkingManagement/hospital-parking/hospital-parking-hero.jpg'],
  },
};

const HospitalParkingPage = () => {
  return (
    <>
      <HeroContent />
<Navbar/>
      <AnimateOnScroll>
        <HospitalParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartParkingManagement />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <HospitalParkingFAQ/>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Blogs/>
          </AnimateOnScroll>
      
    </>
  );
};

export default HospitalParkingPage;
