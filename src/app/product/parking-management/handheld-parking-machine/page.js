

import Navbar from '@/components/Navbar';
import HeroContent from './components/HeroContent';
import HandheldParkingIntro from './components/HandheldParkingIntro';
import ParkingManagement from './components/ParkingManagement';
import DashboardSection from './components/DashboardSection';
import ParkLogixSolutions from './components/ParkLogixSolutions';
import ParkLogixFeatures from './components/ParkLogixFeatures';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import HandheldParkingFAQ from './HandheldParkingFAQ'
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Handheld Parking Machine | Robato Systems',
  description: 'Professional handheld parking machines for efficient parking management. Mobile parking enforcement solutions with real-time data synchronization and automated ticketing.',
  keywords: 'handheld parking machine, mobile parking enforcement, parking ticket machine, handheld parking device, parking management system, parking enforcement tools, ParkLogix, Robato Systems',
  openGraph: {
    title: 'Handheld Parking Machine | Robato Systems',
    description: 'Professional handheld parking machines for efficient parking management. Mobile parking enforcement solutions with real-time data synchronization.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/handheld-parking-machine',
    images: [
      {
        url: '/images/ParkingManagement/handheld-parking-machine/handheld-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Handheld Parking Machine by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handheld Parking Machine | Robato Systems',
    description: 'Professional handheld parking machines for efficient parking management with mobile parking enforcement solutions.',
    images: ['/images/ParkingManagement/handheld-parking-machine/handheld-parking-hero.jpg'],
  },
};

const HandheldParkingPage = () => {
  return (
    <main>
      <HeroContent/>
      <Navbar />  
      <AnimateOnScroll>
        <HandheldParkingIntro  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingManagement  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnimateOnScroll>
          <CTASection/>
        </AnimateOnScroll>
        <DashboardSection  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkLogixSolutions  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkLogixFeatures  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HandheldParkingFAQ/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default HandheldParkingPage;
