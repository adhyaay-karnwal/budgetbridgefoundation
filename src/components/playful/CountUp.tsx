"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Display value such as "45,000", "$200k+", or "101" */
  value: string;
  className?: string;
  durationMs?: number;
};

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix, target, suffix, grouped: digits.includes(",") };
}

function format(n: number, grouped: boolean) {
  const rounded = Math.round(n);
  return grouped ? rounded.toLocaleString("en-US") : String(rounded);
}

/** Counts a stat up from zero the first time it scrolls into view. */
export function CountUp({ value, className, durationMs = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const parsed = parseValue(value);
    if (!el || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { prefix, target, suffix, grouped } = parsed;
    let frame = 0;

    // Only animate stats that start off-screen; visible ones stay put.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    frame = requestAnimationFrame(() =>
      setDisplay(`${prefix}${format(0, grouped)}${suffix}`),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${prefix}${format(target * eased, grouped)}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
