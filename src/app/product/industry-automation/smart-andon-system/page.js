import HeroContent from './components/HeroContent';
import SmartAndonIntro from './components/SmartAndonIntro';
import QualityControl from './components/QualityControl';
import HeroWithText from './components/HeroWithText';
import NeedOfTheHour from './components/NeedOfTheHour';
import Benefits from './components/Benefits';
import AndonBenefits from './components/AndonBenefits';
import AndonFeatures from './components/AndonFeatures';
import AndonFeaturesList from './components/AndonFeaturesList';
import WhyAndonSystem from './components/WhyAndonSystem';
import SmartParkingBrochure from './components/SmartParkingBrochure';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import SmartAndonFAQ from './SmartAndonFAQ';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Smart ANDON System | Robato Systems',
  description: 'Advanced Smart ANDON system for manufacturing and industrial automation. Real-time visual management, production monitoring, and quality control solutions for modern factories.',
  keywords: 'smart ANDON system, ANDON manufacturing, industrial automation, production monitoring, quality control system, visual management, factory automation, lean manufacturing, Robato Systems',
  openGraph: {
    title: 'Smart ANDON System | Robato Systems',
    description: 'Advanced Smart ANDON system for manufacturing and industrial automation. Real-time visual management and production monitoring solutions.',
    type: 'website',
    url: 'https://robatosystem.com/product/industry-automation/smart-andon-system',
    images: [
      {
        url: '/images/industry4.0/andon-system/smart-andon-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart ANDON System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart ANDON System | Robato Systems',
    description: 'Advanced Smart ANDON system for manufacturing with real-time visual management and production monitoring.',
    images: ['/images/industry4.0/andon-system/smart-andon-hero.jpg'],
  },
};

const SmartAndonPage = () => {
  return (
    <div className="smart-andon-page">
      
      <HeroContent />
      <Navbar/>
      <AnimateOnScroll>
        <SmartAndonIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <QualityControl />
      </AnimateOnScroll>
  
      <AnimateOnScroll>
        <HeroWithText />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <NeedOfTheHour />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Benefits />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AndonBenefits />
      </AnimateOnScroll>
       <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AndonFeatures />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AndonFeaturesList />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyAndonSystem />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartParkingBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartAndonFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
      
    </div>
  );
};

export default SmartAndonPage;
