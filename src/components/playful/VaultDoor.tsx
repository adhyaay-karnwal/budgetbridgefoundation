"use client";

import { useState } from "react";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import { TONES, type Tone } from "@/lib/tones";

const SHELF: { label: string; doodle: DoodleName; tone: Tone }[] = [
  { label: "Lessons", doodle: "book", tone: "marigold" },
  { label: "Slides", doodle: "chart", tone: "teal" },
  { label: "Activities", doodle: "bulb", tone: "coral" },
  { label: "Soccer kit", doodle: "soccer", tone: "lilac" },
];

const BOLTS = Array.from({ length: 8 }, (_, i) => (i * 360) / 8);

/**
 * Round vault door: tap to spin the wheel and swing it open on its hinge,
 * revealing the shelves of materials inside.
 */
export function VaultDoor() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[360px] lg:mr-0">
      <div className="relative aspect-square [perspective:2000px]">
        {/* Frame + interior */}
        <div className="absolute inset-0 rounded-[36px] border-2 border-ink bg-ink p-4 shadow-sticker">
          <div className="grain grid h-full grid-cols-2 gap-3 rounded-[26px] bg-cream p-4">
            {SHELF.map((item) => {
              const Doodle = DOODLES[item.doodle];
              const t = TONES[item.tone];
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center gap-2 rounded-[18px] border-2 border-ink ${t.bg} ${t.text}`}
                >
                  <Doodle size={48} />
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Door */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-pressed={open}
          aria-label={open ? "Close the vault" : "Open the vault"}
          className="group absolute inset-4 origin-left rounded-[26px] border-2 border-ink bg-marigold transition-transform duration-[900ms] ease-[cubic-bezier(0.5,0,0.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none"
          style={{
            transform: open ? "rotateY(-95deg)" : "rotateY(0deg)",
            transitionDelay: open ? "450ms" : "0ms",
          }}
        >
          <span className="grain absolute inset-0 rounded-[24px]" aria-hidden />
          {/* Hinges */}
          <span className="absolute -left-2 top-[18%] h-10 w-4 rounded-full border-2 border-ink bg-ink-soft" aria-hidden />
          <span className="absolute -left-2 bottom-[18%] h-10 w-4 rounded-full border-2 border-ink bg-ink-soft" aria-hidden />

          <svg viewBox="0 0 200 200" className="absolute inset-[8%] text-ink" aria-hidden>
            <circle cx="100" cy="100" r="92" fill="var(--marigold-deep)" stroke="currentColor" strokeWidth="3" />
            <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 7" opacity=".55" />
            {BOLTS.map((angle) => (
              <circle
                key={angle}
                cx={100 + 83 * Math.cos((angle * Math.PI) / 180)}
                cy={100 + 83 * Math.sin((angle * Math.PI) / 180)}
                r="4.5"
                fill="currentColor"
              />
            ))}
            {/* Wheel — spins before the door swings */}
            <g
              className="transition-transform duration-[600ms] ease-out motion-reduce:transition-none"
              style={{
                transformOrigin: "100px 100px",
                transform: open ? "rotate(300deg)" : "rotate(0deg)",
              }}
            >
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
              {[0, 120, 240].map((a) => (
                <g key={a} transform={`rotate(${a} 100 100)`}>
                  <path d="M100 100V44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="100" cy="40" r="8" fill="var(--cream)" stroke="currentColor" strokeWidth="3" />
                </g>
              ))}
              <circle cx="100" cy="100" r="13" fill="var(--cream)" stroke="currentColor" strokeWidth="3" />
            </g>
          </svg>
        </button>
      </div>
      <p className="mt-5 text-center font-hand text-[26px] leading-none">
        {open ? "tap the door to close it" : "tap the door to open the vault"}
      </p>
    </div>
  );
}
