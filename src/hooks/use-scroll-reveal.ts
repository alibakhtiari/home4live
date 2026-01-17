
import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook that uses Intersection Observer to detect when an element is in view.
 * Useful for triggering entrance animations without Framer Motion.
 */
export function useScrollReveal(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, we can stop observing if we only want one-time animation
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            }
        }, options);

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, isVisible };
}
