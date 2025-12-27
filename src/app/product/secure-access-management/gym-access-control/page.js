import React from 'react';
import HeroContent from '../gym-access-control/components/HeroContent';
import BarcodeCardIntro from '../barcode-card-access/components/BarcodeCardIntro';
import GymAccessFAQ from './GymAccessFAQ';
import Navbar from '@/components/Navbar';
import BenefitsSection from '../barcode-card-access/components/BenefitsSection';
import ProductSpecifications from '../barcode-card-access/components/ProductSpecifications';
import TouchlessSolution from '../barcode-card-access/components/TouchlessSolution';
import QrCodeAccessSystem from '../barcode-card-access/components/QrCodeAccessSystem';
import TestimonialAndSoftware from '../barcode-card-access/components/TestimonialAndSoftware';
import QRCodeBrochure from '../barcode-card-access/components/QRCodeBrochure';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'Gym Access Control System | Robato Systems',
  description: 'Advanced access control solutions for fitness centers and gyms. Secure, efficient, and user-friendly access management for your fitness facility.',
};

const GymAccessControlPage = () => {
  return (
    <main>
      <HeroContent />
     <Navbar/>
      <AnimateOnScroll>
        <BarcodeCardIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BenefitsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
       <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProductSpecifications />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <TouchlessSolution />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <QrCodeAccessSystem />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <TestimonialAndSoftware />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <GymAccessFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <QRCodeBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </main>
  );
};

export default GymAccessControlPage;
