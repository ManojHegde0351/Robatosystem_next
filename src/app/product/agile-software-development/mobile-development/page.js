import React from 'react';
import MobileDevelopmentHero from './components/MobileDevelopmentHero';
import MobileDevelopmentIntro from './components/MobileDevelopmentIntro';
import MobileDevelopmentFAQ from './MobileDevelopmentFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Navbar from '@/components/Navbar';
import Blogs from '@/app/homepage/Blogs';
import WhiteCTASection from '@/components/WhiteCTASection';

export const metadata = {
  title: 'Mobile App Development | Robato Systems',
  description: 'Professional mobile app development services for iOS and Android. Custom mobile applications with native performance and modern UI/UX design.',
  keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, mobile applications, app development services, Robato Systems',
  openGraph: {
    title: 'Mobile App Development | Robato Systems',
    description: 'Professional mobile app development services for iOS and Android. Custom mobile applications with native performance and modern UI/UX design.',
    type: 'website',
    url: 'https://robatosystem.com/product/agile-software-development/mobile-development',
    images: [
      {
        url: '/images/AgileSoftwareDevelopment/mobile-development/mobile-app-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development | Robato Systems',
    description: 'Professional mobile app development services for iOS and Android. Custom mobile applications with native performance.',
    images: ['/images/AgileSoftwareDevelopment/mobile-development/mobile-app-hero.jpg'],
  },
};


export default function MobileDevelopment() {
  return (
    <>
      <MobileDevelopmentHero />
      <Navbar/>    
      <AnimateOnScroll>
        <MobileDevelopmentIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MobileDevelopmentFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
   
    </>
  );
}
