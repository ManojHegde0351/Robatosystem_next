import HeroContent from './components/HeroContent';
import LEDParkingIntro from './components/LEDParkingIntro';
import ParkingGuidance from './components/ParkingGuidance';
import IntelligentSignage from './components/IntelligentSignage';
import styles from '@/styles/parking/led/LEDParkingHero.module.css';
import ParkingSignageInfo from './components/ParkingSignageInfo';
import RoadsideVMS from './components/RoadsideVMS';
import SpecificationsTable from './components/SpecificationsTable';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import LEDParkingFAQ from './LEDParkingFAQ';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'LED Parking Signage Solutions | Robato Systems',
  description: 'Advanced LED parking signage solutions for efficient parking management and guidance systems. Real-time parking availability and direction display.',
};

export default function LEDParkingPage() {
  return (
    <div className={styles.ledParkingPage}>
      <HeroContent />
 <Navbar/>
      <AnimateOnScroll>
        <LEDParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingGuidance />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <IntelligentSignage />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingSignageInfo />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <RoadsideVMS />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SpecificationsTable />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <LEDParkingFAQ/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
}
