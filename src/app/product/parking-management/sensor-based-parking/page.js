



import HeroContent from './components/HeroContent';
import UtilizeSlots from './components/UtilizeSlots';
import ParkingBenefits from './components/ParkingBenefits';
import ParkingGuidanceSystems from './components/ParkingGuidanceSystems';
import ParkingSolutionsOverview from '@/app/product/parking-management/ParkingSolutionsOverview.jsx';
import ParkingBrochure from '@/app/product/parking-management/ParkingBrochure.jsx';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import SensorParkingFAQ from '@/app/product/parking-management/SensorParkingFAQ';
import Blogs from '@/app/homepage/Blogs';
export const metadata = {
  title: 'Sensor-Based Parking System | Robato Systems',
  description: 'Advanced sensor-based parking management solutions with ultrasonic sensors, real-time monitoring, and automated parking guidance for efficient space utilization.',
  keywords: 'sensor-based parking, ultrasonic parking sensors, parking management system, automated parking, parking guidance, vehicle detection, parking occupancy, Robato Systems',
  openGraph: {
    title: 'Sensor-Based Parking System | Robato Systems',
    description: 'Advanced sensor-based parking management solutions with ultrasonic sensors, real-time monitoring, and automated parking guidance for efficient space utilization.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/sensor-based-parking',
    images: [
      {
        url: '/images/ParkingManagement/sensor-based-parking/sensor-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Sensor-Based Parking System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sensor-Based Parking System | Robato Systems',
    description: 'Advanced sensor-based parking management solutions with ultrasonic sensors and real-time monitoring.',
    images: ['/images/ParkingManagement/sensor-based-parking/sensor-parking-hero.jpg'],
  },
};

export default function SensorParkingPage() {
  return (
    <>

      <HeroContent />
       <Navbar/>
      <main>
        <AnimateOnScroll>
          <UtilizeSlots  />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ParkingBenefits  />
        </AnimateOnScroll> 
        <AnimateOnScroll>
          <CTASection/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ParkingGuidanceSystems  />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ParkingSolutionsOverview  />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ParkingBrochure  />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhiteCTASection/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <SensorParkingFAQ/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Blogs/>
        </AnimateOnScroll>
      </main>
    </>
  );
}
