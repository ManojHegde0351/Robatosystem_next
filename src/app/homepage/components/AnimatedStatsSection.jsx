'use client';

import AnimatedCounter from '@/ui/AnimatedCounter';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

export default function AnimatedStatsSection({ stats }) {
  const [ref, isVisible] = useParallaxScroll({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true
  });

  return (
    <div
      ref={ref}
      className={`stats-container fade-in-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-box">
            <h3 className="stat-number">
              <AnimatedCounter value={stat.value} duration={2000} />
              {stat.suffix && <span>{stat.suffix}</span>}
            </h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
