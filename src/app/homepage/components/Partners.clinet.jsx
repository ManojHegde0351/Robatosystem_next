'use client';

import Image from 'next/image';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';

export default function PartnersClient({ logos }) {
  const [sectionRef, isVisible] = useScrollVisibility({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
  });

  return (
    <div ref={sectionRef} className="partners-grid">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`partner-item ${isVisible ? 'animate-in' : ''}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="partner-logo"
            priority={logo.priority}
          />
        </div>
      ))}
    </div>
  );
}
