"use client";

import { useEffect, useRef } from "react";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";

const VIEW_W = 1200;
const VIEW_H = 170;

/** One wavy line that rises into each doodle stop along the way */
const PATH =
  "M-10 118 C 50 120, 80 86, 130 86 S 210 134, 270 124 S 320 80, 360 86 S 450 142, 530 124 S 570 80, 610 86 S 700 136, 780 124 S 820 80, 860 86 S 960 142, 1030 120 S 1060 82, 1090 86 S 1170 124, 1215 116";

const STOPS: { name: DoodleName; x: number; at: number; label: string }[] = [
  { name: "coin", x: 130, at: 0.1, label: "Earn" },
  { name: "piggy", x: 360, at: 0.3, label: "Save" },
  { name: "book", x: 610, at: 0.5, label: "Learn" },
  { name: "globe", x: 860, at: 0.71, label: "Connect" },
  { name: "heart", x: 1090, at: 0.9, label: "Give back" },
];

/**
 * Hand-drawn line that draws itself as the section scrolls through view,
 * popping each doodle in as the pen reaches it.
 */
export function BridgeLine({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stopRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const host = hostRef.current;
    const path = pathRef.current;
    if (!host || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const draw = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      // Keep a ~4px pen at any width (the SVG scales uniformly with the host)
      path.style.strokeWidth = `${(4 * VIEW_W) / Math.max(rect.width, 1)}`;
      const vh = window.innerHeight;
      const raw = reduce ? 1 : (vh * 0.95 - rect.top) / (vh * 0.75);
      const progress = Math.max(0, Math.min(1, raw));
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
      STOPS.forEach((stop, index) => {
        const el = stopRefs.current[index];
        if (el) el.dataset.on = progress >= stop.at ? "true" : "false";
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <path
          ref={pathRef}
          d={PATH}
          stroke="var(--marigold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {STOPS.map((stop, index) => {
        const Doodle = DOODLES[stop.name];
        return (
          <div
            key={stop.name}
            ref={(el) => {
              stopRefs.current[index] = el;
            }}
            data-on="true"
            className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-[opacity,translate,scale] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-[on=false]:scale-50 data-[on=false]:opacity-0"
            style={{
              left: `${(stop.x / VIEW_W) * 100}%`,
              top: `${(86 / VIEW_H) * 100}%`,
            }}
          >
            <span className="flex h-[clamp(44px,7vw,84px)] w-[clamp(44px,7vw,84px)] items-center justify-center rounded-full bg-cream text-marigold-deep">
              <Doodle className="h-[70%] w-[70%]" />
            </span>
            <span className="mt-1 hidden font-hand text-[22px] leading-none text-ink-soft sm:block">
              {stop.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
