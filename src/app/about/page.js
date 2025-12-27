


import AboutHero from './AboutHero';
import OurStory from './OurStory';
import OurValues from './OurValues';
import OurTeam from './OurTeam';
import AboutCompany from './AboutCompany';
import StatsSection from './StatsSection';
import Partners from '@/app/homepage/Partners';
import Sustainability from '@/app/homepage/Sustainability';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: "About | Robato System",
  description: "Learn about Robato System - Leading provider of Industry 4.0 Automation & Secure Access Solutions with innovative technology and expert team",
};

export default function AboutPage() {

  return (
    <main className="about-page">
      <AboutHero />
      
      <AnimateOnScroll >
        <AboutCompany />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <StatsSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <OurStory />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <Sustainability />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <OurValues />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <OurTeam />
      </AnimateOnScroll>
      
      <AnimateOnScroll >
        <Partners />
      </AnimateOnScroll>
    </main>
  );
}
