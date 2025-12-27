import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { unstable_batchedUpdates } from 'react-dom';

const useFadeInAnimation = (lines, options = {}) => {
  const {
    viewportOptions = {
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: '0px 0px -20% 0px'
    },
    staggerDelay = 0.1
  } = options;

  const [animationStates, setAnimationStates] = useState(() => 
    lines.map((_, index) => ({
      isVisible: false,
      style: {
        opacity: 0,
        transform: 'translateX(-20px)',
        transition: `opacity 0.6s ease-out ${index * staggerDelay}s, transform 0.6s ease-out ${index * staggerDelay}s`
      }
    }))
  );

  const [ref, inView] = useInView(viewportOptions);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      // Use unstable_batchedUpdates to batch state updates
      unstable_batchedUpdates(() => {
        setAnimationStates(prevStates => 
          prevStates.map(state => ({
            ...state,
            isVisible: true,
            style: {
              ...state.style,
              opacity: 1,
              transform: 'translateX(0)'
            }
          }))
        );
        setHasAnimated(true);
      });
    }
  }, [inView, hasAnimated]);

  return {
    ref,
    animationStates,
    isAnimating: hasAnimated
  };
};

export const useAnimationVariants = (options = {}) => {
  const {
    staggerChildren = 0.1,
    initialX = -20,
    duration = 0.6,
    ease = [0.2, 0.8, 0.2, 1]
  } = options;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        when: "beforeChildren"
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      x: initialX,
      transition: {
        duration: duration * 0.8,
        ease
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        ease
      }
    }
  };

  return { container, item };
};

export default useFadeInAnimation;