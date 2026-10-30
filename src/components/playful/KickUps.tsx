"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleSoccer } from "@/components/playful/Doodles";

/** How long the ball stays up before it drops and the streak resets. */
const DROP_AFTER_MS = 1800;

const MESSAGES: { at: number; text: string }[] = [
  { at: 0, text: "Tap the ball to keep it up" },
  { at: 1, text: "Keep it going!" },
  { at: 4, text: "Nice touch. Saving works the same way: small, steady touches add up." },
  { at: 8, text: "That’s a habit forming. Habits beat one big kick every time." },
  { at: 12, text: "Pro level. Now set a savings goal like it’s a match target." },
];

function messageFor(streak: number) {
  return [...MESSAGES].reverse().find((m) => streak >= m.at)?.text ?? "";
}

/**
 * Soccer keep-ups mini game. Each tap bounces the ball; wait too long
 * and it drops, resetting the streak (best score is kept).
 */
export function KickUps() {
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [kicks, setKicks] = useState(0);
  const [dropped, setDropped] = useState(false);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (dropTimer.current) clearTimeout(dropTimer.current);
    },
    [],
  );

  function kick() {
    const next = streak + 1;
    setStreak(next);
    setBest((b) => Math.max(b, next));
    setKicks((k) => k + 1);
    setDropped(false);

    if (dropTimer.current) clearTimeout(dropTimer.current);
    dropTimer.current = setTimeout(() => {
      setStreak(0);
      setDropped(true);
    }, DROP_AFTER_MS);
  }

  return (
    <div className="grain relative overflow-hidden rounded-[32px] border-2 border-ink bg-forest p-6 text-cream shadow-sticker sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-cream/75">
            Keep-ups
          </p>
          <p className="font-display mt-1 text-[56px] leading-none" aria-live="polite">
            {streak}
          </p>
        </div>
        <p className="rounded-full border-2 border-cream/40 px-3 py-1 text-[13px] font-medium uppercase tracking-[0.12em] text-cream/80">
          Best {best}
        </p>
      </div>

      {/* Pitch */}
      <div className="relative mt-4 h-[230px]">
        <div
          className="absolute inset-x-0 bottom-6 h-0.5 bg-cream/30"
          aria-hidden
        />
        <div
          key={`shadow-${kicks}`}
          className={`absolute bottom-4 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-ink/40 ${kicks ? "kick-shadow" : ""}`}
          aria-hidden
        />
        <button
          type="button"
          onClick={kick}
          aria-label={`Kick the ball. Current streak ${streak}`}
          className="absolute bottom-7 left-1/2 -ml-[44px] rounded-full focus-visible:outline-offset-4"
        >
          <span
            key={`ball-${kicks}`}
            className={`flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-ink bg-cream text-ink transition-transform hover:scale-105 ${kicks ? "kick-up" : ""}`}
          >
            <DoodleSoccer size={84} strokeWidth={2.8} />
          </span>
        </button>
      </div>

      <p className="min-h-[56px] font-hand text-[26px] leading-tight text-marigold">
        {dropped && best > 0
          ? `Dropped it! Best so far: ${best}. Go again?`
          : messageFor(streak)}
      </p>
    </div>
  );
}
