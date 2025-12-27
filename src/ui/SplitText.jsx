"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text,
  className = '',
  delay = 340, // Increased default delay for smoother animation
  duration = 0.8, // Increased default duration for smoother animation
  ease = 'power2.out', // Changed to power2.out for smoother easing
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'p',
  href,
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const checkFonts = async () => {
      try {
        await document.fonts.ready;
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        // Fallback in case fonts fail to load
        setFontsLoaded(true);
      }
    };

    checkFonts();
  }, []);

  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded || hasAnimated) return;

    const el = ref.current;

    // Clear any existing content first
    el.innerHTML = '';

    // Split text into words for smoother animation
    const words = text.split(' ');

    // Create wrapper for all words
    const wordsWrapper = document.createElement('div');
    wordsWrapper.style.display = 'inline-block';

    // Create individual span elements for each word
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'split-word';
      wordSpan.style.display = 'inline-block';
      wordSpan.style.marginRight = '0.25rem';
      wordSpan.style.willChange = 'transform, opacity';
      wordSpan.textContent = word;

      // Add space after each word except the last
      if (index < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.textContent = ' ';
        spaceSpan.style.display = 'inline';
        wordsWrapper.appendChild(wordSpan);
        wordsWrapper.appendChild(spaceSpan);
      } else {
        wordsWrapper.appendChild(wordSpan);
      }
    });

    el.appendChild(wordsWrapper);
    const wordElements = el.querySelectorAll('.split-word');

    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Animate words with improved stagger timing
    const staggerDelay = Math.max(delay / 1000, 0.05); // Minimum 0.05s stagger

    animationRef.current = gsap.fromTo(
      wordElements,
      {
        ...from,
        transformOrigin: 'center bottom'
      },
      {
        ...to,
        duration: duration,
        ease: ease,
        stagger: staggerDelay,
        delay: 0.2, // Small initial delay
        onComplete: () => {
          setHasAnimated(true);
          onLetterAnimationComplete?.();
        }
      }
    );

    return () => {
      // Only cleanup animation, don't clear DOM elements
      // The text should remain visible after animation completes
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
    };
  }, [text, delay, duration, ease, from, to, fontsLoaded, hasAnimated, onLetterAnimationComplete]);

  const renderTag = () => {
    const style = {
      textAlign,
      overflow: 'hidden',
      display: 'block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      position: 'relative'
    };

    const classes = `split-parent ${className}`;

    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref} style={style} className={classes}>
            {text}
          </h6>
        );
      case 'a':
        return (
          <a ref={ref} href={href || '#'} style={style} className={classes}>
            {text}
          </a>
        );
      default:
        return (
          <p ref={ref} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };

  return renderTag();
};

export default SplitText;
