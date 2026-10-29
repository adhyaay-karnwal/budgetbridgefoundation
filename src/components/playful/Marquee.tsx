import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  items: readonly ReactNode[];
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  separator?: ReactNode;
  reverse?: boolean;
  label?: string;
};

/** Endless horizontal ticker. Pauses on hover; static for reduced motion. */
export function Marquee({
  items,
  className = "",
  duration = 60,
  separator,
  reverse = false,
  label,
}: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, index) => (
        <li key={index} className="flex shrink-0 items-center">
          {item}
          {separator}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee overflow-hidden ${className}`}
      aria-label={label}
      role={label ? "region" : undefined}
    >
      <div
        className="marquee-track flex w-max"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : undefined,
          } as CSSProperties
        }
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
