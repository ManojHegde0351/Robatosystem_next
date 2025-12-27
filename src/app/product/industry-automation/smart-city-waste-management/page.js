import Navbar from '@/components/Navbar';
import WasteToWealth from './components/WasteToWealth';
import WasteWatcher from './components/WasteWatcher';
import SmartWasteManagement from './components/SmartWasteManagement';
import SmartWasteAdvantages from './components/SmartWasteAdvantages';
import SmartEyeSuite from './components/SmartEyeSuite';
import SmartSolutionsGrid from './components/SmartSolutionsGrid';
import SuccessStory from './components/SuccessStory';
import HeroContent from './components/HeroContent';
import WasteManagementIntro from './components/WasteManagementIntro';
import SmartCityWasteBrochure from './components/SmartCityWasteBrochure';
import SmartCityWasteFAQ from './SmartCityWasteFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Smart City Waste Management | Robato Systems',
  description: 'Intelligent waste management solutions for smart cities. IoT-enabled waste monitoring, automated collection systems, and sustainable waste-to-wealth transformation for urban environments.',
  keywords: 'smart city waste management, IoT waste monitoring, automated waste collection, waste management solutions, smart waste systems, urban waste management, waste-to-wealth, sustainable waste solutions, Robato Systems',
  openGraph: {
    title: 'Smart City Waste Management | Robato Systems',
    description: 'Intelligent waste management solutions for smart cities. IoT-enabled waste monitoring and automated collection systems for urban environments.',
    type: 'website',
    url: 'https://robatosystem.com/product/industry-automation/smart-city-waste-management',
    images: [
      {
        url: '/images/industry4.0/smart-waste/smart-waste-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart City Waste Management by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart City Waste Management | Robato Systems',
    description: 'Intelligent waste management solutions for smart cities with IoT-enabled waste monitoring and automated collection systems.',
    images: ['/images/industry4.0/smart-waste/smart-waste-hero.jpg'],
  },
};

const SmartCityWasteManagementPage = () => {
  return (
    <main>
      <HeroContent/>
     <Navbar/>
      <AnimateOnScroll>
        <WasteManagementIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WasteToWealth />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartWasteManagement />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WasteWatcher />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartWasteAdvantages  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartEyeSuite  />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartSolutionsGrid />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SuccessStory />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartCityWasteBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartCityWasteFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default SmartCityWasteManagementPage;
