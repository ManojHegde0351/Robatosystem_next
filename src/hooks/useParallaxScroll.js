import { useRef, useEffect, useCallback, useState } from 'react';

export const useParallaxScroll = (options = {}) => {
  const elementRef = useRef(null);
  const animationFrameId = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (!elementRef.current) return;

    const scrollY = window.scrollY;
    const currentElement = elementRef.current;

    // Throttle scroll events for better performance
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const rect = currentElement.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the element is visible
      const scrolledInElement = scrollY - elementTop;
      const elementBottom = elementTop + elementHeight;
      const isElementVisible = scrollY + viewportHeight > elementTop && scrollY < elementBottom;

      if (isElementVisible && scrolledInElement > -viewportHeight && scrolledInElement < elementHeight + viewportHeight) {
        // Simplified parallax effect for better performance
        const progressInElement = Math.max(0, Math.min(1, (scrollY - elementTop + viewportHeight) / (viewportHeight + elementHeight)));
        const parallaxOffset = (progressInElement - 0.5) * (options.parallaxIntensity || 15);

        // Apply transform for parallax effect
        currentElement.style.transform = `translateY(${parallaxOffset}px)`;
      } else {
        // Smooth return to original position
        currentElement.style.transform = 'translateY(0)';
      }

      lastScrollY.current = scrollY;
    });
  }, [options.parallaxIntensity]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  // Set up scroll listener
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.willChange = 'transform';
    }

    const throttledScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll]);

  return [elementRef, isVisible];
};
