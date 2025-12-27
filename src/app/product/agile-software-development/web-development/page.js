import React from 'react';
import WebDevelopmentHero from './components/WebDevelopmentHero';
import WebDevelopmentIntro from './components/WebDevelopmentIntro';
import WebDevelopmentServices from './components/WebDevelopmentServices';
import WebDevelopmentFAQ from './WebDevelopmentFAQ';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Navbar from '@/components/Navbar';
import Blogs from '@/app/homepage/Blogs';

import WhiteCTASection from '@/components/WhiteCTASection';

export const metadata = {
  title: 'Web Development Services | Robato Systems',
  description: 'Professional web development services including custom web applications, e-commerce solutions, and enterprise software development. Transform your business with our expert web development team.',
  keywords: 'web development, custom web applications, e-commerce solutions, enterprise software, responsive web design, Robato Systems',
  openGraph: {
    title: 'Web Development Services | Robato Systems',
    description: 'Professional web development services including custom web applications, e-commerce solutions, and enterprise software development.',
    type: 'website',
    url: 'https://robatosystem.com/product/agile-software-development/web-development',
    images: [
      {
        url: '/images/AgileSoftwareDevelopment/webapplication/Web-development-Background image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Services by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | Robato Systems',
    description: 'Professional web development services including custom web applications, e-commerce solutions, and enterprise software development.',
    images: ['/images/AgileSoftwareDevelopment/webapplication/Web-development-Background image.jpg'],
  },
};

export default function WebDevelopment() {
  return (
    <>
      <WebDevelopmentHero />
      <Navbar />
      <AnimateOnScroll >
        <WebDevelopmentIntro />
      </AnimateOnScroll>
      <AnimateOnScroll  >
        <WebDevelopmentServices />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WebDevelopmentFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
    
    </>
  );
}
