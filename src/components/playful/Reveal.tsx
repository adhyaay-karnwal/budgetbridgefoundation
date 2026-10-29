"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger in milliseconds */
  delay?: number;
  /** Start slightly rotated, settle flat on reveal */
  rotate?: number;
  style?: CSSProperties;
  id?: string;
};

/**
 * Fades + lifts content in when it scrolls into view.
 * Server markup stays visible; only off-screen content is hidden after mount,
 * so nothing disappears without JavaScript or above the fold.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  rotate = 0,
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
          "--reveal-rotate": `${rotate}deg`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
