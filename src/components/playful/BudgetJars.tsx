"use client";

import { useState } from "react";
import { TONES, type Tone } from "@/lib/tones";

const TOTAL = 20;

type JarId = "save" | "spend" | "share";

const JARS: { id: JarId; label: string; hint: string; tone: Tone }[] = [
  { id: "save", label: "Save", hint: "For later goals", tone: "teal" },
  { id: "spend", label: "Spend", hint: "For now", tone: "coral" },
  { id: "share", label: "Share", hint: "For others", tone: "lilac" },
];

type Split = Record<JarId, number>;

const EMPTY: Split = { save: 0, spend: 0, share: 0 };

function feedback(split: Split, left: number): string {
  if (left === TOTAL) return "Tap a jar (or its +) to drop in a dollar.";
  if (left > 0) return `${left} dollar${left === 1 ? "" : "s"} left to place. Keep going!`;
  if (split.spend === TOTAL) return "All spent! Fun today, but nothing set aside for tomorrow.";
  if (split.save === TOTAL) return "Super saver! Just remember that a little fun money counts too.";
  if (split.save >= 6 && split.spend > 0 && split.share > 0)
    return "Nicely balanced. Saving some, spending some, sharing some is a habit that lasts.";
  if (split.save === 0) return "Every dollar has a job, but none are saved. Can you move a few to Save?";
  return "Every dollar has a job. That is a budget!";
}

function Coin({ index }: { index: number }) {
  return (
    <span
      className="coin-drop flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-ink bg-marigold text-[11px] font-medium leading-none text-ink"
      style={{ animationDelay: `${Math.min(index, 3) * 20}ms` }}
    >
      $
    </span>
  );
}

/**
 * A tiny allowance game: split $20 across Save / Spend / Share jars.
 * Uses buttons only, so it works with keyboard and screen readers.
 */
export function BudgetJars() {
  const [split, setSplit] = useState<Split>(EMPTY);
  const placed = split.save + split.spend + split.share;
  const left = TOTAL - placed;

  function change(id: JarId, delta: 1 | -1) {
    setSplit((prev) => {
      const used = prev.save + prev.spend + prev.share;
      if (delta === 1 && used >= TOTAL) return prev;
      if (delta === -1 && prev[id] === 0) return prev;
      return { ...prev, [id]: prev[id] + delta };
    });
  }

  return (
    <div className="rounded-[28px] border-2 border-ink bg-cream p-5 shadow-sticker sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-hand text-[24px] leading-none text-ink-soft">
            Your allowance
          </p>
          <p className="font-display mt-1 text-[40px] leading-none text-ink">
            ${left}
            <span className="ml-2 text-[18px] text-ink-faint">of ${TOTAL} left</span>
          </p>
        </div>
        <div className="flex max-w-[260px] flex-wrap gap-1" aria-hidden>
          {Array.from({ length: left }).map((_, index) => (
            <span
              key={index}
              className="h-3.5 w-3.5 rounded-full border-[1.5px] border-ink bg-marigold"
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
        {JARS.map((jar) => {
          const count = split[jar.id];
          const tone = TONES[jar.tone];
          return (
            <div key={jar.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => change(jar.id, 1)}
                disabled={left === 0}
                aria-label={`Add a dollar to ${jar.label}. ${count} dollars in ${jar.label}.`}
                className="group relative w-full max-w-[150px] cursor-pointer disabled:cursor-default"
              >
                {/* lid */}
                <span
                  className={`mx-auto block h-4 w-[70%] rounded-t-[8px] border-2 border-b-0 border-ink ${tone.bg} transition-transform duration-300 group-enabled:group-hover:-translate-y-1.5 group-enabled:group-hover:-rotate-6`}
                />
                {/* glass */}
                <span className="relative flex h-[170px] w-full flex-wrap-reverse content-start items-end justify-center gap-[3px] overflow-hidden rounded-b-[26px] rounded-t-[12px] border-2 border-ink bg-white/70 p-2 sm:h-[190px]">
                  <span
                    className={`absolute inset-x-0 bottom-0 ${tone.bg} opacity-25 transition-[height] duration-500 ease-out`}
                    style={{ height: `${(count / TOTAL) * 100}%` }}
                    aria-hidden
                  />
                  {Array.from({ length: count }).map((_, index) => (
                    <Coin key={index} index={index} />
                  ))}
                  <span className="pointer-events-none absolute left-3 top-3 h-14 w-2 rounded-full bg-white/80" aria-hidden />
                </span>
              </button>

              <p className="font-display mt-3 text-[22px] leading-none text-ink">
                {jar.label}
              </p>
              <p className="mt-1 text-center text-[13px] text-ink-faint">{jar.hint}</p>

              <div className="mt-3 flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={() => change(jar.id, -1)}
                  disabled={count === 0}
                  aria-label={`Take a dollar out of ${jar.label}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-cream sm:h-8 sm:w-8 text-[18px] leading-none transition-colors hover:bg-paper disabled:opacity-30"
                >
                  −
                </button>
                <span className="w-8 text-center text-[15px] font-medium tabular-nums sm:w-9 sm:text-[17px]" aria-live="polite">
                  ${count}
                </span>
                <button
                  type="button"
                  onClick={() => change(jar.id, 1)}
                  disabled={left === 0}
                  aria-label={`Add a dollar to ${jar.label}`}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink text-[18px] sm:h-8 sm:w-8 leading-none transition-transform hover:-translate-y-0.5 disabled:opacity-30 ${tone.bg} ${tone.text}`}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-line pt-5">
        <p className="max-w-md text-[16px] leading-6 text-ink" aria-live="polite">
          {feedback(split, left)}
        </p>
        <button
          type="button"
          onClick={() => setSplit(EMPTY)}
          disabled={placed === 0}
          className="font-hand text-[22px] text-ink-soft underline decoration-marigold decoration-2 underline-offset-4 transition-colors hover:text-ink disabled:opacity-30"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
