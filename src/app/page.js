import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/app/homepage/Hero';
import BuildYourDream from '@/app/homepage/BuildYourDream';
import Services from '@/app/homepage/Services';
import Testimonials from '@/app/homepage/Testimonials';
import Partners from '@/app/homepage/Partners';
import Offices from '@/app/homepage/Offices';
import Sustainability from '@/app/homepage/Sustainability';
import FAQ from '@/app/homepage/FAQ';
import BackToTop from '@/components/BackToTop';
import Blogs from './homepage/Blogs';



export const metadata = {
  title: "Robato System - Home",
  description: "Robato System - Industry 4.0 Automation & Secure Access Solutions",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BuildYourDream />
      <Services />
      <Sustainability />
      <Offices />
      <div className="home-page-blogs" style={{ paddingTop: '120px' }}>
        <Blogs isHomePage={true} />
      </div>
      <Testimonials />
      <Partners />
      <FAQ />
      <BackToTop />
    </main>
  );
}
