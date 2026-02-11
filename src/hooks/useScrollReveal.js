import { useEffect, useRef } from 'react';

const defaultOptions = {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1,
  once: true,
};

/**
 * Reveal element when it scrolls into view. Add ref to element and
 * className "reveal-item" (and optional "reveal-delay-1", "reveal-delay-2", ...).
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (opts.once) observer.unobserve(entry.target);
          } else if (!opts.once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { rootMargin: opts.rootMargin, threshold: opts.threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.rootMargin, opts.threshold, opts.once]);

  return ref;
}

/**
 * Reveal multiple children with stagger. Use on a container; add "reveal-item" to each child
 * and optionally "reveal-stagger" on the container for staggered delays.
 */
export function useScrollRevealStagger(options = {}) {
  const ref = useRef(null);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.reveal-item, .reveal-left, .reveal-right, .reveal-top');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (opts.once) observer.unobserve(entry.target);
          } else if (!opts.once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { rootMargin: opts.rootMargin, threshold: opts.threshold }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [opts.rootMargin, opts.threshold, opts.once]);

  return ref;
}
