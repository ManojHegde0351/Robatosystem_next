import React from 'react';
import HeroContent from './components/HeroContent';
import RfidCardIntro from './components/RfidCardIntro';
import RfidCardFAQ from './RfidCardFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';

import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'RFID Card Access Control System | Robato Systems',
  description: 'Advanced RFID Card Access Control System for secure and controlled access to facilities and restricted areas.',
};

const RfidCardAccessPage = () => {
  return (
    <div className="rfid-card-access-page">
      <HeroContent />
      <Navbar/>
      <AnimateOnScroll>
        <RfidCardIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <RfidCardFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
};

export default RfidCardAccessPage;
