


import HeroContent from './components/HeroContent';
import MallsParkingIntro from './components/MallsParkingIntro';
import ParkingGuidance from './components/ParkingGuidance';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import MallsParkingFAQ from '../MallsParkingFAQ';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';


export const metadata = {
  title: 'Mall Parking Management System | Robato Systems',
  description: 'Advanced parking solutions for shopping malls and commercial complexes. Smart parking management with real-time space availability, digital signage, and automated payment systems.',
  keywords: 'mall parking, shopping mall parking, commercial parking management, retail parking solutions, mall parking system, automated parking, parking guidance system, Robato Systems',
  openGraph: {
    title: 'Mall Parking Management System | Robato Systems',
    description: 'Advanced parking solutions for shopping malls and commercial complexes. Smart parking management with real-time space availability and automated payment systems.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/malls-parking',
    images: [
      {
        url: '/images/ParkingManagement/malls-parking/mall-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mall Parking Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mall Parking Management System | Robato Systems',
    description: 'Advanced parking solutions for shopping malls with real-time space availability and automated payment systems.',
    images: ['/images/ParkingManagement/malls-parking/mall-parking-hero.jpg'],
  },
};

const MallsParkingPage = () => {
  return (
    <>
      <HeroContent />
 <Navbar/>
      <AnimateOnScroll>
        <MallsParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingGuidance />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MallsParkingFAQ/>
      </AnimateOnScroll>
   <AnimateOnScroll>
    <Blogs/>
   </AnimateOnScroll>
    </>
  );
};

export default MallsParkingPage;

