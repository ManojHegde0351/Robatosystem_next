import React from 'react';
import HeroContent from './components/HeroContent';
import UniversityParkingIntro from './components/UniversityParkingIntro';
import ParkingGuidance from './components/ParkingGuidance';
import Navbar from '@/components/Navbar';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhiteCTASection from '@/components/WhiteCTASection';
import UniversityParkingFAQ from '../UniversityParkingFAQ';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'University Parking Management System | Robato Systems',
  description: 'Comprehensive parking solutions for educational institutions and university campuses. Smart parking management for students, faculty, and visitors with automated access control.',
  keywords: 'university parking, campus parking management, educational parking solutions, student parking, faculty parking, university parking system, campus parking control, Robato Systems',
  openGraph: {
    title: 'University Parking Management System | Robato Systems',
    description: 'Comprehensive parking solutions for educational institutions and university campuses. Smart parking management for students, faculty, and visitors.',
    type: 'website',
    url: 'https://robatosystem.com/product/parking-management/university-parking',
    images: [
      {
        url: '/images/ParkingManagement/university-parking/university-parking-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'University Parking Management System by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University Parking Management System | Robato Systems',
    description: 'Comprehensive parking solutions for educational institutions with smart parking management for students and faculty.',
    images: ['/images/ParkingManagement/university-parking/university-parking-hero.jpg'],
  },
};

const UniversityParkingPage = () => {
  return (
    <>
      <HeroContent /> 
      <Navbar/>
      <AnimateOnScroll>
      <UniversityParkingIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <ParkingGuidance />
      </AnimateOnScroll>
  <AnimateOnScroll>
    <WhiteCTASection/>
  </AnimateOnScroll>
  <AnimateOnScroll>
    <UniversityParkingFAQ/>
  </AnimateOnScroll>
  <AnimateOnScroll>
    <Blogs/>
  </AnimateOnScroll>
    </>
  );
};

export default UniversityParkingPage;
