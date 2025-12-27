import '@/styles/home/partners.css';
import PartnersClient from '@/app/homepage/components/Partners.clinet.jsx';

const brandLogos = [
  { src: '/images/brands/adani.webp', alt: 'Adani', width: 120, height: 60, priority: true },
  { src: '/images/brands/Honeywell.webp', alt: 'Honeywell', width: 150, height: 60 },
  { src: '/images/brands/DENSO.webp', alt: 'DENSO', width: 120, height: 60 },
  { src: '/images/brands/BARCO.webp', alt: 'BARCO', width: 120, height: 60 },
  { src: '/images/brands/LANCO.webp', alt: 'LANCO', width: 120, height: 60 },
  { src: '/images/brands/SECURITY-SYSTEM.webp', alt: 'Security System', width: 150, height: 60 },
  { src: "/images/brands/V-4'S-GYMS.webp", alt: 'V4 Gyms', width: 120, height: 60 },
  { src: '/images/brands/CK-BIRLA-GROUP.webp', alt: 'CK Birla Group', width: 150, height: 60 },
  { src: '/images/brands/ADHAAR.webp', alt: 'Aadhaar', width: 120, height: 60 },
  { src: '/images/brands/GYMSHIM.webp', alt: 'GYMSHIM', width: 120, height: 60 },
  { src: '/images/brands/Logo11.webp', alt: 'Logo11', width: 120, height: 60 },
  { src: '/images/brands/Logo12.webp', alt: 'Logo12', width: 180, height: 60 },
  { src: '/images/brands/FIA.webp', alt: 'FIA', width: 120, height: 60 },
  { src: '/images/brands/Logo14.webp', alt: 'Logo14', width: 120, height: 60 },
  { src: '/images/brands/GOLD-CINEMA.webp', alt: 'Gold Cinema', width: 150, height: 100 },
  { src: '/images/brands/HEG.webp', alt: 'HEG', width: 120, height: 60 },
  { src: '/images/brands/ISS.webp', alt: 'Johnson Controls', width: 100, height: 60 },
  { src: '/images/brands/PHOTON-PLAY.webp', alt: 'Photon Play', width: 150, height: 60 },
  { src: '/images/brands/SMART-CITY-BHOPAL.webp', alt: 'Smart City Bhopal', width: 150, height: 60 },
  { src: '/images/brands/SHOUSYS.webp', alt: 'Shousys', width: 120, height: 60 },
  { src: '/images/brands/GSEC.webp', alt: 'GSEC', width: 120, height: 60 },
  { src: "/images/brands/GOLD'S-GYM.webp", alt: "Gold's Gym", width: 150, height: 60 },
  { src: '/images/brands/PVR-CINEMAS.webp', alt: 'PVR Cinemas', width: 150, height: 60 }
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-section-header">
          <h2>Our Partners</h2>
          <p>Trusted by industry leaders worldwide</p>
        </div>

        {/* Client-side animation only */}
        <PartnersClient logos={brandLogos} />
      </div>
    </section>
  );
}
