import { useState, useEffect, useRef, RefObject } from 'react';

type UseScrollAnimationReturn = [RefObject<HTMLDivElement>, boolean];

export const useScrollAnimation = (threshold = 0.1): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element's intersection status changes
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after it becomes visible to prevent re-triggering
          observer.unobserve(element);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};