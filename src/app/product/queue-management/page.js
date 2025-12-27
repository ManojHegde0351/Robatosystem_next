import React from 'react';
import HeroContent from './components/HeroContent';
import QueueManagementIntro from './components/QueueManagementIntro';
import KioskBasedQueueManagement from './components/KioskBasedQueueManagement';
import ApplicationAreas from './components/ApplicationAreas';
import QueueFAQ from './QueueFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: "Queue Management | Robato System",
  description: "Smart Queue Management System with kiosk-based solutions for efficient customer flow and reduced wait times",
};

const QueueManagement = () => {
  return (
    <div>
      <HeroContent />
      <Navbar/>
      
      <AnimateOnScroll>
        <QueueManagementIntro />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <KioskBasedQueueManagement />
      </AnimateOnScroll>
      
      
      <AnimateOnScroll>
        <ApplicationAreas />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <QueueFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
};

export default QueueManagement;
