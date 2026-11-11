"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The bento grid wrapper. Delays the entrance animation of any `[data-reveal]`
 * that starts below the fold until it scrolls into view (see globals.css).
 *
 * Progressive enhancement: without JavaScript the animation simply plays on
 * load and nothing is ever hidden. Only this effect opts an element in to
 * waiting (`data-wait`), then releases it (`data-in`).
 */
export default function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    grid.querySelectorAll("[data-reveal]").forEach((element) => {
      // Already on screen (or scrolled past): the on-load animation is fine.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.setAttribute("data-wait", "");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
