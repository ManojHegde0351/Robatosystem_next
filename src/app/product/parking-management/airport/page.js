import HeroContent from './components/HeroContent';
import AirportParkingIntro from './components/AirportParkingIntro';
import Navbar from '@/components/Navbar';
import ParkingGuidance from './components/ParkingGuidance';
import AnimateOnScroll from '@/components/AnimateOnScroll';

import WhiteCTASection from '@/components/WhiteCTASection';
import AirportParkingFAQ from '../AirportParkingFAQ';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: "Airport Parking | Robato System",
  description: "Advanced Airport Parking Management Solutions with real-time guidance, sensor-based tracking, and efficient traffic flow systems",
};

const AirportParkingPage = () => {
  return (
    <>
      <HeroContent />
      <Navbar/>
      <AnimateOnScroll>
        <AirportParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll >
        <ParkingGuidance />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AirportParkingFAQ/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </>
  );
};

export default AirportParkingPage;
