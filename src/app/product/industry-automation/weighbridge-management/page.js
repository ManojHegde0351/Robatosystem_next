import React from 'react';
import HeroContent from './components/HeroContent';
import ProblemsSection from './components/ProblemsSection';
import WhyUpgrade from './components/WhyUpgrade';
import WeighEyeIntro from './components/WeighEyeIntro';
import Navbar from '@/components/Navbar';
import HowItWorks from './components/HowItWorks';
import HardwareComponents from './components/HardwareComponents';
import SuccessStories from './components/SuccessStories';
import WeighEyeBrochure from './components/WeighEyeBrochure';
import WeighbridgeFAQ from './WeighbridgeFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Weighbridge Management System | Robato Systems',
  description: 'Advanced weighbridge management solutions with automated weight measurement, real-time data processing, and seamless ERP integration for industrial weighing operations.',
  keywords: 'weighbridge management, weighbridge system, industrial weighing, automated weighing, weight management software, weighbridge automation, ERP integration, weighing solutions, Robato Systems',
  openGraph: {
    title: 'Weighbridge Management System | Robato Systems',
    description: 'Advanced weighbridge management solutions with automated weight measurement, real-time data processing, and seamless ERP integration.',
    type: 'website',
    url: 'https://robatosystem.com/product/industry-automation/weighbridge-management',
    images: [
      {
        url: '/images/industry4.0/weighbridge/weighbridge-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Weighbridge Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weighbridge Management System | Robato Systems',
    description: 'Advanced weighbridge management solutions with automated weight measurement and real-time data processing.',
    images: ['/images/industry4.0/weighbridge/weighbridge-hero.jpg'],
  },
};

const WeighbridgeManagement = () => {
  return (
    <main>
      <HeroContent />
          <Navbar/>
      <AnimateOnScroll>
        <ProblemsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyUpgrade />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WeighEyeIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HardwareComponents />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SuccessStories />
      </AnimateOnScroll>
      <AnimateOnScroll>
         <WeighEyeBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WeighbridgeFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default WeighbridgeManagement;
