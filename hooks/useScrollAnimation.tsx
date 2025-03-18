import { MutableRefObject, useCallback, useEffect, useState } from "react";

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
};

/**
 * A hook to handle scroll animations with optimized performance.
 * 
 * @param ref Reference to the element to observe
 * @param options Configuration options
 * @returns An object containing the visible state
 */
export function useScrollAnimation<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  options: ScrollAnimationOptions = {}
) {
  const { 
    threshold = 0.1, 
    rootMargin = "0px", 
    once = false,
    delay = 0
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        });
        
        if (once && entry.isIntersecting) {
          observer?.disconnect();
        }
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once, delay]
  );

  // Create the observer with reduced updates for better performance
  const observer = new IntersectionObserver(callbackFunction, {
    root: null,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    // Use passive listener for better scroll performance
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observer]);

  return { isVisible };
}

// Animation variants for optimized scroll animations
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother motion
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
