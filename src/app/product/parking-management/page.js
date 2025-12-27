
import ParkingHero from './ParkingHero';
import ParkingBenefits from './ParkingBenefits';
import ProductsSection from './ProductsSection';
import CTASection from "@/components/CTASection";
import ParkingManagement from './parkingmanagement';
import Navbar from '@/components/Navbar'; 
import ParkingSolutionsOverview from './ParkingSolutionsOverview';
import ParkingBrochure from './ParkingBrochure';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhiteCTASection from '@/components/WhiteCTASection';
import ParkingFAQ from './ParkingFAQ';
import Blogs from '@/app/homepage/Blogs';


export const metadata = {
  title: 'Parking Management System | Robato Systems',
  description: 'Intelligent parking solutions designed to maximize space utilization, enhance user experience, and streamline operations for modern parking facilities.',
  keywords: 'parking management, smart parking, parking guidance system, automated parking, parking solutions, Robato Systems',
  openGraph: {
    title: 'Parking Management System | Robato Systems',
    description: 'Intelligent parking solutions designed to maximize space utilization and enhance user experience.',
    url: 'https://robatosystem.com/product/parking-management',
    siteName: 'Robato Systems',
    images: [
      {
        url: 'https://robatosystem.com/images/services/parking-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Robato Parking Management System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parking Management System | Robato Systems',
    description: 'Intelligent parking solutions for modern facilities.',
    images: ['https://robatosystem.com/images/services/parking-og.jpg'],
  },
};

export default function ParkingManagementPage() {
  return (
    <>
      <main>
        <Navbar/>
        <ParkingHero />
        <AnimateOnScroll>
         <ParkingManagement />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ProductsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CTASection/>
          </AnimateOnScroll> 
        <AnimateOnScroll>
          <ParkingBenefits />
        </AnimateOnScroll>
        <AnimateOnScroll >
          <ParkingSolutionsOverview />
        </AnimateOnScroll>
        <AnimateOnScroll >
          <ParkingBrochure />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhiteCTASection/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ParkingFAQ/>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Blogs/>
        </AnimateOnScroll>
      </main>
    </>
  );
}
