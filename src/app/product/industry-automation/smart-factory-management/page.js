import React from 'react';
import HeroContent from './components/HeroContent';
import IntroContent from './components/IntroContent';
import SmartFactoryFAQ from './SmartFactoryFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';


export const metadata = {
  title: 'Smart Factory Management | Robato Systems',
  description: 'Advanced management solutions for modern manufacturing with Robato Systems',
};

const SmartFactoryManagement = () => {
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
        <SmartFactoryFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default SmartFactoryManagement;
