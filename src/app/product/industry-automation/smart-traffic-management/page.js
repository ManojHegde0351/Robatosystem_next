import React from 'react';
import HeroContent from './components/HeroContent';
import IntroContent from './components/IntroContent';
import SmartTrafficFAQ from './SmartTrafficFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Smart Traffic Management | Robato Systems',
  description: 'Advanced traffic management solutions for modern cities with Robato Systems',
};

const SmartTrafficManagement = () => {
  return (
    <main>
      <HeroContent />
<Navbar/>
      <AnimateOnScroll>
        <IntroContent />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartTrafficFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default SmartTrafficManagement;
