import { useEffect, useRef } from 'react';

export const useStaggeredAnimation = (options = {}) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            itemRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add(options.animationClass || 'animate-slide-in');
                }, index * (options.delay || 200));
              }
            });
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.once === false) {
            // Reset animation when element goes out of view if not set to run once
            itemRefs.current.forEach(ref => {
              if (ref) {
                ref.classList.remove(options.animationClass || 'animate-slide-in');
              }
            });
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.once, options.animationClass, options.delay]);

  const registerItem = (ref, index) => {
    if (ref && !itemRefs.current.includes(ref)) {
      itemRefs.current[index] = ref;
    }
  };

  return [containerRef, registerItem];
};
