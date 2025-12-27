import React from 'react';
import HeroContent from './components/HeroContent';
import VisitorManagementIntro from './components/VisitorManagementIntro';
import BenefitsSection from './components/BenefitsSection';
import KeyFeatures from './components/KeyFeatures';
import Navbar from '@/components/Navbar';
import VisitorJourney from './components/VisitorJourney';
import ParkingBrochure from '../parking-management/ParkingBrochure';
import VisitorFAQ from './VisitorFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Smart Visitor Management System | Robato Systems',
  description: 'Advanced visitor management solutions for enhanced security and efficient visitor tracking in offices, schools, and facilities.',
};

const VisitorManagementPage = () => {
  return (
    <div className="visitor-management-page">
      <HeroContent />
<Navbar/>
      <AnimateOnScroll>
        <VisitorManagementIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BenefitsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <KeyFeatures />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <VisitorJourney />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ParkingBrochure/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <VisitorFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
};

export default VisitorManagementPage;
