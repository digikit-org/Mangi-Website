import { useEffect, useRef } from 'react';

/**
 * Adds "is-visible" to elements with the "reveal-card" class inside the
 * returned ref once they enter the viewport. Uses IntersectionObserver
 * with a scroll/resize fallback so cards always reveal.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll('.reveal-card'));
    if (!targets.length) return;

    const reveal = (el) => {
      el.classList.add('is-visible');
      el.style.transitionDelay = '';
    };

    const check = () => {
      let remaining = false;
      targets.forEach((t) => {
        if (t.classList.contains('is-visible')) return;
        const rect = t.getBoundingClientRect();
        // Trigger slightly before fully in view for a nicer entrance
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          reveal(t);
        } else {
          remaining = true;
        }
      });
      return remaining;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));

    // Fallback polling on scroll/resize in case the observer misses events
    const onScroll = () => {
      if (!check()) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Initial sweep for anything already on screen
    check();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
