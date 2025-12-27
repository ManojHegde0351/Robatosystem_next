import React from 'react';
import HeroContent from './components/HeroContent';
import ESDAccessIntro from './components/ESDAccessIntro';
import BenefitsSection from './components/BenefitsSection';
import KeyFeatures from './components/KeyFeatures';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ESDFAQ from './ESDFAQ';
import WhiteCTASection from '@/components/WhiteCTASection';

import ESDChallenges from './components/ESDChallenges';
import ESDSolutions from './components/ESDSolutions';
import EntryExitProcedure from './components/EntryExitProcedure';
import ESDGatesOptions from './components/ESDGatesOptions';
import ESDBrochure from './components/ESDBrochure';
import CTASection from '@/components/CTASection';
import Blogs from '@/app/homepage/Blogs';

export const metadata = {
  title: 'ESD Access Control System | Robato Systems',
  description: 'Advanced ESD (Electrostatic Discharge) Access Control System for secure and controlled access to sensitive areas.',
};

const ESDAccessControlPage = () => {
  return (
    <div className="esd-access-control-page">
      <HeroContent />
      <Navbar/>
      <AnimateOnScroll>
        <ESDAccessIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ESDChallenges />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ESDSolutions />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EntryExitProcedure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BenefitsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <KeyFeatures />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ESDGatesOptions/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ESDBrochure />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll> 
      <AnimateOnScroll>
        <ESDFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    </div>
  );
};

export default ESDAccessControlPage;

