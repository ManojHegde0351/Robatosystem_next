import React from 'react';
import Image from 'next/image';
import { Button } from "../../ui/button";
import '../../styles/home/hero.css';

function SplitText({ text, delay = 0, stagger = 0.06 }) {
  const words = text.split(' ');

  return (
    <span className="split-text" aria-label={text}>
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span
            className="split-text-part"
            style={{ animationDelay: `${delay + index * stagger}s` }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-image-wrapper">
        <Image
          src="/images/hero.webp"
          alt="Industry 4.0 Automation Solutions"
          fill
          priority
          sizes="100vw"
          quality={60}
          className="hero-bg-image"
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
        />
      </div>
      <section className="hero-content">
        <div className="hero-container">
          <div className="max-w-3xl">
            <div className="space-y-2">
              <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                <SplitText text="Next Generation Industry 4.0" delay={0} />
              </h2>

              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#f4b942] mb-4">
                <SplitText text="Automation Solutions" delay={0.18} />
              </h1>

              <div className="hero-title text-lg md:text-4xl text-white/90 font-medium mb-8">
                <SplitText text="SMART • SECURE • CONNECTED" delay={0.36} />
              </div>
            </div>

            <div className="hero-buttons">
              <Button 
                as="a"
                href="/product"
                className="hero-button bg-[#f4b942] text-[#0B1A33] hover:bg-[#e0a82a] font-medium px-8 py-3 text-sm uppercase tracking-wider animate-fade-in-up animation-delay-600"
              >
                OUR SERVICES
              </Button>
              <Button
                as="a"
                href="/pdfs/RobatoSystems-CompanyProfile.pdf"
                download="RobatoSystems-CompanyProfile.pdf"
                variant="outline"
                className="hero-button border-2 border-white/80 text-white hover:bg-[#f4b942] hover:border-[#f4b942] hover:text-[#0B1A33] font-medium px-8 py-3 text-sm uppercase animate-fade-in-up animation-delay-700 backdrop-blur-sm"
              >
                BROCHURE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
