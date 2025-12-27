import Link from 'next/link';
import '@/styles/home/offices.css';
import OfficesClient from '@/app/homepage/components/Office.clinet.jsx';

export default function Offices() {
  const offices = [
    {
      id: 1,
      title: 'INDIA',
      address:
        '11 avenue, Gh-03, Gaurcity 2, sector-16c, Greater Noida, west Noida, 201318',
      mapLink: 'https://maps.app.goo.gl/9HSoniK5Z6thcnS67',
    },
    {
      id: 2,
      title: 'AUSTRALIA',
      address: '124 Westwood Dr, Burnside VIC 3023 Melbourne',
      mapLink: 'https://maps.app.goo.gl/KpUTS3Kt7bD6QLQBA',
    },
    {
      id: 3,
      title: 'CANADA',
      address: '23 Overstone Rd, Georgetown, ON L7G 0N5 Canada',
      mapLink: 'https://maps.app.goo.gl/4rTTQfD6rnHKZwco7',
    },
  ];

  return (
    <section className="offices-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Global Offices</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our offices worldwide to experience our commitment to excellence
            in industrial automation and security solutions.
          </p>
        </div>

        {/* Client animation wrapper */}
        <OfficesClient offices={offices} />

        <div className="view-office-button-container">
          <Link href="/contact" className="view-office-button">
            View Our Office
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
