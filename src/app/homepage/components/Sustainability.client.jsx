'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function SustainabilityClient({ side, children }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref}
      className={`sustainability-${side} ${visible ? 'animate-in' : ''}`}
    >
      {children}
    </div>
  );
}
