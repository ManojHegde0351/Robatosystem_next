'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/ui/button';



export default function ServicesClient({ services }) {
  const [showLogin, setShowLogin] = useState(false);

  const handleServiceClick = (title) => {
    if (title === 'Web portals') {
      setShowLogin(true);
    }
  };

  return (
    <>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            onClick={() => handleServiceClick(service.title)}
          >
            <div className="service-image-container">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="service-image"
              />
              <div className="service-overlay">
                <Button
                  as={Link}
                  href={service.link}
                  className="service-button"
                  onClick={(e) => {
                    if (service.title === 'Web portals') e.preventDefault();
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Button
                as={Link}
                href={service.link}
                className="service-button"
                onClick={(e) => {
                  if (service.title === 'Web portals') e.preventDefault();
                }}
              >
                Explore Service
              </Button>
            </div>
          </div>
        ))}
      </div>

      {showLogin &&
        createPortal(
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
