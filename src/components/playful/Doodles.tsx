import type { ReactNode, SVGProps } from "react";

/**
 * Hand-drawn line doodles — single-stroke icons on a 64×64 grid.
 * They inherit `currentColor`, so color them with a text-* class.
 */
type DoodleProps = SVGProps<SVGSVGElement> & { size?: number };

function Doodle({
  size = 64,
  children,
  strokeWidth = 2.5,
  ...props
}: DoodleProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function DoodleCoin(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 9c12.5-.4 23 9.6 23 22.6S45 55.4 32.4 55 9 45 9.2 32.2 19.6 9.4 32 9z" />
      <path d="M32 15.5c9-.2 16.6 7 16.5 16.4-.1 9.3-7.6 16.6-16.8 16.4-9-.2-16-7.6-15.8-16.6.2-8.8 7.3-16 16.1-16.2z" opacity=".55" />
      <path d="M37 25.5c-1.6-2.2-8.6-3-9.6.6-1.2 4.4 9.8 3.6 9.5 8.7-.3 4.4-8 4.2-10.2 1.4" />
      <path d="M32.2 21.5v21" />
    </Doodle>
  );
}

export function DoodlePiggy(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M13 35c-.4-9.6 8.2-16 19.5-16 6.6 0 11.8 2 15 5.6l5.2-1.6-1.1 6.3c1.8 1.8 3 3.8 3.2 5.8l-4.1 1.2c-1 2.8-3.2 5-6.2 6.4v5.6h-5.2v-3.6c-3.2.8-7 .9-10.3.1v3.5h-5.2v-5.3C17.4 46.9 13.3 41.6 13 35z" />
      <path d="M22.5 22.5 20 15.8l7.2 3.6" />
      <path d="M29.5 19.5h7" />
      <path d="M13.4 33.5c-3.4.4-5.6-1.7-4.4-4.2" />
      <circle cx="44" cy="30.5" r="1.2" fill="currentColor" stroke="none" />
    </Doodle>
  );
}

export function DoodleBook(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 19c-6.2-4.2-14-5.2-22.5-4v31.5c8.4-1.2 16.3-.2 22.5 4 6.2-4.2 14.1-5.2 22.5-4V15c-8.5-1.2-16.3-.2-22.5 4z" />
      <path d="M32 19.2v31" />
      <path d="M15.5 23.5c3.8-.4 7.4.2 10.5 1.6M15.5 30.5c3.8-.4 7.4.2 10.5 1.6M38 25c3.1-1.4 6.7-2 10.5-1.6" opacity=".6" />
    </Doodle>
  );
}

export function DoodleGlobe(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 9.5c12.6-.2 22.6 10 22.4 22.6C54.2 44.6 44 54.6 31.6 54.4 19.2 54.2 9.4 44 9.6 31.6 9.8 19.6 19.8 9.7 32 9.5z" />
      <path d="M32 9.8c-7.6 6.4-8 37.6-.2 44.4M32 9.8c7.4 6.6 7.6 37.8 0 44.4" />
      <path d="M10 32c14-1.4 30-1.4 44 0M14.5 20.5c11.2 1.4 23.8 1.4 35 0M14.5 43.5c11.2-1.4 23.8-1.4 35 0" opacity=".7" />
    </Doodle>
  );
}

export function DoodleBridge(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M5 42.5c18 .6 36 .6 54 0" />
      <path d="M9 42c5.2-14.2 13.4-22.4 23-22.4S49.8 27.8 55 42" />
      <path d="M17 41.8v-10M24.4 42v-16M32 42V19.8M39.6 42V26M47 41.8v-10" />
      <path d="M6 51.5c3.4-2.2 6.6 2.2 10 0s6.6 2.2 10 0 6.6 2.2 10 0 6.6 2.2 10 0 6.6 2.2 10 0" opacity=".6" />
    </Doodle>
  );
}

export function DoodleHeart(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 51.5C15.5 41 8.6 31.4 11.8 22.6c3.4-8.8 14.8-9.6 20.2-1.4 5.4-8.2 16.8-7.4 20.2 1.4 3.2 8.8-3.7 18.4-20.2 28.9z" />
      <path d="M19.5 22.5c1.6-2 4-2.6 6-1.8" opacity=".6" />
    </Doodle>
  );
}

export function DoodleSprout(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 54.5V30" />
      <path d="M31.8 35C21.6 35.4 15.4 29.4 15.6 20.4c10.2-.2 16.4 5.6 16.2 14.6z" />
      <path d="M32.2 30.5c-.2-9.6 6-15.8 16.2-16 .2 9.4-6 15.8-16.2 16z" />
      <path d="M20 54.5c8-.8 16-.8 24 0" />
    </Doodle>
  );
}

export function DoodleBulb(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M24.5 40.5c-5.4-4-8.4-9.6-7.4-15.8C18.4 16.4 25 10.6 32 10.6s13.6 5.8 14.9 14.1c1 6.2-2 11.8-7.4 15.8v5.8h-15v-5.8z" />
      <path d="M26 51.5h12M28.5 56h7" />
      <path d="M28 33c1.6-4 6.4-4 8 0" opacity=".6" />
    </Doodle>
  );
}

export function DoodleMegaphone(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M10 27.5v10.2h8.5l22.5 10.6V17l-22.5 10.5H10z" />
      <path d="M18.5 37.8 22.6 50h6l-3.2-11.4" />
      <path d="M46.5 26c2.8 2.4 2.8 9.6 0 12M51 21.5c5.8 4.8 5.8 16.2 0 21" opacity=".7" />
    </Doodle>
  );
}

export function DoodleChart(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M10 10.5v42.5c14.6.6 29.4.6 44 0" />
      <path d="m15.5 44 10.8-11.2 8.4 6.4 15.6-18" />
      <path d="M43 21.2h7.5v7.6" />
    </Doodle>
  );
}

export function DoodleSparkle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 7.5c1.8 13.6 6.8 19 20.5 21-13.7 2-18.7 7.4-20.5 21-1.8-13.6-6.8-19-20.5-21 13.7-2 18.7-7.4 20.5-21z" />
    </Doodle>
  );
}

export function DoodleStar(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="m32 9.5 6.6 14.2 15.4 1.8-11.4 10.6 3 15.4L32 43.6l-13.6 7.9 3-15.4L10 25.5l15.4-1.8z" />
    </Doodle>
  );
}

export function DoodleCode(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M22.5 21.5 11 32.4l11.5 10.4M41.5 21.5 53 32.4 41.5 42.8M36.2 15.5l-8.6 33" />
    </Doodle>
  );
}

export function DoodleMagnifier(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M27.5 11.5c8.8-.2 16 6.8 16 15.6S36.6 43 27.8 43 11.6 36 11.6 27.2s7-15.6 15.9-15.7z" />
      <path d="m39.5 39 13.5 13.8" />
      <path d="M20 24c1.4-3.6 4.2-5.4 7.8-5.6" opacity=".6" />
    </Doodle>
  );
}

export function DoodleScale(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M32 10v42M20 53h24M14 17.5c12 2 24 2 36 0" />
      <path d="m14 18-7 15c3.8 4.2 10.2 4.2 14 0l-7-15zM50 18l-7 15c3.8 4.2 10.2 4.2 14 0l-7-15z" />
    </Doodle>
  );
}

export function DoodlePeople(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M23 13.5c4.4 0 7.6 3.4 7.6 7.6S27.2 28.8 23 28.8s-7.6-3.4-7.6-7.6 3.2-7.7 7.6-7.7zM42.5 17.5c3.6 0 6.2 2.8 6.2 6.2S46 29.8 42.5 29.8 36.3 27 36.3 23.7s2.6-6.2 6.2-6.2z" />
      <path d="M9.5 50c.6-10.6 6.2-16.6 13.6-16.6S36 39.4 36.6 50M36 36.2c1.8-1.4 4-2.2 6.5-2.2 6.2 0 10.8 5 11.4 13.6" />
    </Doodle>
  );
}

/** Curly hand-drawn arrow for annotations */
export function DoodleArrow({
  size = 64,
  ...props
}: DoodleProps) {
  return (
    <Doodle size={size} strokeWidth={2.2} {...props}>
      <path d="M8 10c18.4 1.4 31 11.8 35.4 30.6" />
      <path d="m35.6 34.4 8 7.6 5.6-9.6" />
    </Doodle>
  );
}

/** Wavy underline that sits under a highlighted word */
export function Squiggle({
  className = "",
  color = "var(--marigold)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 9.5c16-6 28 3.4 46-1.6s30-6.2 48-.4 30 5.2 48-.6 30-5.2 52 .4"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Inline text with a marigold squiggle underline */
export function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <Squiggle
        color={color}
        className="absolute -bottom-[0.12em] left-[-2%] z-0 h-[0.32em] w-[104%]"
      />
    </span>
  );
}

export const DOODLES = {
  coin: DoodleCoin,
  piggy: DoodlePiggy,
  book: DoodleBook,
  globe: DoodleGlobe,
  bridge: DoodleBridge,
  heart: DoodleHeart,
  sprout: DoodleSprout,
  bulb: DoodleBulb,
  megaphone: DoodleMegaphone,
  chart: DoodleChart,
  sparkle: DoodleSparkle,
  star: DoodleStar,
  code: DoodleCode,
  magnifier: DoodleMagnifier,
  scale: DoodleScale,
  people: DoodlePeople,
} as const;

export type DoodleName = keyof typeof DOODLES;
