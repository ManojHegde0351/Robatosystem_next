import React from 'react';
import HeroContent from './components/HeroContent';
import BarcodeRfidIntro from './components/BarcodeRfidIntro';
import BarcodeRfidFAQ from './BarcodeRfidFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';

import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Barcode & RFID Access Control | Robato Systems',
  description: 'Advanced Barcode & RFID Access Control solutions for secure and efficient facility management.'
};

export default function BarcodeRfidAccessPage() {
  return (
    <main>
      <HeroContent />
     <Navbar/>
      <AnimateOnScroll>
        <BarcodeRfidIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BarcodeRfidFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
}
