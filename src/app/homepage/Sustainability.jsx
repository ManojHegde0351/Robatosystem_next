import SustainabilityClient from '@/app/homepage/components/Sustainability.client';
import '@/styles/home/sustainability.css';

export default function Sustainability() {
  return (
    <section className="sustainability-section">
      <div className="sustainability-container">

        {/* Left Column */}
        <SustainabilityClient side="left">
          <div className="sustainability-content">
            <h2 className="sustainability-title">Sustainability</h2>
            <h3 className="sustainability-subtitle">
              Smart Solutions for a Greener Tomorrow
            </h3>
            <p className="sustainability-description">
              At Robato System, we&apos;re committed to sustainable smart city solutions that reduce environmental impact.
              Our parking systems minimize congestion and emissions, while smart waste management optimizes routes.
              Through Industry 4.0 and IoT integration, we deliver eco-friendly, cost-effective technology.
            </p>
            <a href="/contact" className="sustainability-button">
              View Our Office
            </a>
          </div>
        </SustainabilityClient>

        {/* Right Column */}
        <SustainabilityClient side="right">
          <div className="best-practices-content">
            <h2 className="best-practices-title">We Follow Best Practices</h2>
            <p className="best-practices-description">
              Robato System adheres to industry-leading standards and best practices in every project we undertake.
              Our commitment to excellence ensures reliable, scalable, and future-proof solutions for our clients.
            </p>
            <ul className="practices-list">
              {[
                'Smart Parking Solutions',
                'IoT Integration',
                'Industry 4.0 Standards',
                'Sustainable Technology'
              ].map((item, index) => (
                <li key={index} className="practice-item">
                  <span className="bullet-point"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SustainabilityClient>

      </div>
    </section>
  );
}
