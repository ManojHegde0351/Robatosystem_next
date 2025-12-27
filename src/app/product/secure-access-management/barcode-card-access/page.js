import React from 'react';
import HeroContent from './components/HeroContent';
import BarcodeCardIntro from './components/BarcodeCardIntro';
import Navbar from '@/components/Navbar';
import BenefitsSection from './components/BenefitsSection';
import ProductSpecifications from './components/ProductSpecifications';
import TouchlessSolution from './components/TouchlessSolution';
import QrCodeAccessSystem from './components/QrCodeAccessSystem';
import TestimonialAndSoftware from './components/TestimonialAndSoftware';
import QRCodeBrochure from './components/QRCodeBrochure';
import BarcodeCardFAQ from './BarcodeCardFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTASection from '@/components/CTASection';
import WhiteCTASection from '@/components/WhiteCTASection';
import Blogs from '@/app/homepage/Blogs';
export const metadata = {
  title: 'Barcode & Card Access System | Robato Systems',
  description: 'Advanced Barcode & Card Access Control System for secure and controlled access to facilities and restricted areas.',
};

const BarcodeCardAccessPage = () => {
  return (
    <div className="barcode-card-access-page">
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
        <QRCodeBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BarcodeCardFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
};

export default BarcodeCardAccessPage;
