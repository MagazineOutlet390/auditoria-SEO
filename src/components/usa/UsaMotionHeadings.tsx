import React, { useEffect, useRef, useState } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3';

export function useFadeInLeft<T extends HTMLElement>(enabled: boolean = true) {
  const ref = useRef<T | null>(null);
  // Start visible in SSR HTML and initial hydration frame so JS-disabled / slow devices never hide text
  const [revealState, setRevealState] = useState<'visible' | 'pending' | 'revealed'>('visible');

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof window.IntersectionObserver === 'undefined') {
      setRevealState('revealed');
      return;
    }

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94) {
      setRevealState('revealed');
      return;
    }

    setRevealState('pending');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealState('revealed');
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -36px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  const fadeClass = enabled
    ? revealState === 'pending'
      ? 'usa-fade-left-pending'
      : 'usa-fade-left-visible'
    : '';

  return { ref, fadeClass };
}

interface ShimmerHeadingProps {
  as?: HeadingTag;
  id?: string;
  className?: string;
  isDark?: boolean;
  fadeInLeft?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable semantic heading component for the US Market Landing Page.
 * Separates outer Fade-in Left layer (opacity + translateX triggered once via IntersectionObserver)
 * from inner US-flag palette Shimmer span (#0A3161, #B31942, #FFFFFF) so animations never conflict.
 */
export const ShimmerHeading: React.FC<ShimmerHeadingProps> = ({
  as = 'h2',
  id,
  className = '',
  isDark = false,
  fadeInLeft = false,
  children,
}) => {
  const { ref, fadeClass } = useFadeInLeft<HTMLHeadingElement>(fadeInLeft);

  const shimmerClass = isDark
    ? 'usa-american-shimmer usa-american-shimmer--dark'
    : 'usa-american-shimmer';

  const Tag = as;

  return (
    <Tag ref={ref} id={id} className={`${className} ${fadeClass}`.trim()}>
      <span className={shimmerClass}>{children}</span>
    </Tag>
  );
};
