import React from 'react';
import HeroContent from './components/HeroContent';
import OfficeParkingIntro from './components/OfficeParkingIntro';
import SmartParkingSystem from './components/SmartParkingSystem';
import SmartCitiesFuture from './components/SmartCitiesFuture';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import OfficeParkingFAQ from '../OfficeParkingFAQ';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Office Parking Management System | Robato Systems',
  description: 'Intelligent parking solutions for office buildings and corporate facilities. Automated parking management with RFID access, real-time monitoring, and employee parking allocation.',
  keywords: 'office parking, corporate parking management, office building parking, employee parking, RFID parking access, corporate parking solutions, office parking system, Robato Systems',
  openGraph: {
    title: 'Office Parking Management System | Robato Systems',
    description: 'Intelligent parking solutions for office buildings and corporate facilities. Automated parking management with RFID access and real-time monitoring.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/office-parking',
    images: [
      {
        url: '/images/ParkingManagement/office-parking/office-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Office Parking Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Parking Management System | Robato Systems',
    description: 'Intelligent parking solutions for office buildings with RFID access and real-time monitoring.',
    images: ['/images/ParkingManagement/office-parking/office-parking-hero.jpg'],
  },
};

const OfficeParkingPage = () => {
  return (
    <>
      <HeroContent />
 <Navbar/>
      <AnimateOnScroll>
        <OfficeParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SmartParkingSystem />
      </AnimateOnScroll>
     
      <AnimateOnScroll>
        <SmartCitiesFuture />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OfficeParkingFAQ/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </>
  );
};

export default OfficeParkingPage;
