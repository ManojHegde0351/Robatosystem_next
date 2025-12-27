

import React from 'react';
import Image from 'next/image';
import '@/styles/home/testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Aaron',
      role: 'Technology manager',
      image: '/images/testimonials/alice.webp',
      content: "Robato's Parking has given us complete visibility into car park usage, enabling smarter daily operations and informed long-term planning. The system is used actively by our team, and the open API with multi-sensor SmartSpots clearly set Robato apart from other providers."
    },
    {
      id: 2,
      name: 'Clark Johnson',
      role: 'Parking Manager',
      image: '/images/testimonials/nathan.webp',
      content: "With real-time utilisation data and reliable SmartSpot sensors, Robato's Parking has significantly improved how we manage our parking facilities. The flexibility of the open API and the consistent performance of the system made Robato the right choice for us."
    },
    {
      id: 3,
      name: 'Antonio',
      role: 'Administration Officer',
      image: '/images/testimonials/ema.webp',
      content: "Robato's Parking solution supports our operational decisions every day by providing accurate, actionable data on car park utilisation. The technology, combined with excellent support throughout installation and beyond, has exceeded our expectations."
    },
    {
      id: 4,
      name: 'Steffan',
      role: 'Technology Manager',
      image: '/images/testimonials/joe.webp',
      content: "From deployment to daily use, Robato's Parking has been a dependable solution for optimising car park utilisation. The open API, multi-sensor SmartSpots, and highly responsive support team made the entire experience seamless and effective."
    }
  ];

 
  const displayedTestimonials = testimonials.slice(0, 4);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <h3>Testimonials</h3>
        </div>

        <div className="testimonials-grid">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-avatar">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
              <div className="testimonial-text">
                {testimonial.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
