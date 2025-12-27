'use client';

import { useStaggeredAnimation } from '@/hooks/useStaggeredAnimation';

export default function OfficesClient({ offices }) {
  const [containerRef, registerItem] = useStaggeredAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    delay: 200,
    animationClass: 'animate-slide-in',
  });

  return (
    <div className="relative" ref={containerRef}>
      <div className="offices-container">
        {offices.map((office, index) => (
          <div
            key={office.id}
            ref={(el) => registerItem(el, index)}
            className="office-card shrink-0 w-72"
          >
            <div className="h-full p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0B1A33] mb-4">
                {office.title}
              </h3>
              <p className="text-gray-600 mb-6">{office.address}</p>

              <div className="flex items-center">
                <span className="text-[#0B1A33] font-medium mr-2">
                  Get Directions
                </span>
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B1A33] hover:text-[#f4b942] transition-colors flex items-center"
                >
                  <span className="arrow-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
