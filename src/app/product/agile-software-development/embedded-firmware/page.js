import React from 'react';
import EmbeddedFirmwareHero from './components/EmbeddedFirmwareHero';
import EmbeddedFirmwareIntro from './components/EmbeddedFirmwareIntro';
import EmbeddedFirmwareTechnologies from './components/EmbeddedFirmwareTechnologies';
import EmbeddedFirmwareFAQ from './EmbeddedFirmwareFAQ';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Blogs from '@/app/homepage/Blogs';

import WhiteCTASection from '@/components/WhiteCTASection';

export const metadata = {
  title: 'Embedded Firmware Development | Robato Systems',
  description: 'Expert embedded firmware development services for IoT, industrial automation, and smart devices. Custom firmware solutions for optimal performance and reliability.',
  keywords: 'embedded firmware, firmware development, IoT firmware, embedded systems, firmware programming, RTOS, microcontroller programming, Robato Systems',
  openGraph: {
    title: 'Embedded Firmware Development | Robato Systems',
    description: 'Expert embedded firmware development services for IoT, industrial automation, and smart devices. Custom firmware solutions for optimal performance and reliability.',
    type: 'website',
    url: 'https://robatosystem.com/product/agile-software-development/embedded-firmware',
    images: [
      {
        url: '/images/AgileSoftwareDevelopment/embedded-firmware/embedded-firmware-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Embedded Firmware Development by Robato Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embedded Firmware Development | Robato Systems',
    description: 'Expert embedded firmware development services for IoT, industrial automation, and smart devices.',
    images: ['/images/AgileSoftwareDevelopment/embedded-firmware/embedded-firmware-hero.jpg'],
  },
};

export default function EmbeddedFirmware() {
  return (
    <>
      <EmbeddedFirmwareHero />
      <Navbar />
      <AnimateOnScroll>
        <EmbeddedFirmwareIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EmbeddedFirmwareTechnologies />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhiteCTASection/>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EmbeddedFirmwareFAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blogs/>
      </AnimateOnScroll>
     
    </>
  );
}