import type { CSSProperties } from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/content";
import { TONES, type Tone } from "@/lib/tones";

type TeamMemberCardProps = TeamMember & {
  bio?: string;
  tone?: Tone;
  /** Resting tilt in degrees; straightens on hover */
  tilt?: number;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Polaroid-style team card. Members without a photo get a color initial tile. */
export function TeamMemberCard({
  name,
  role,
  image,
  bio,
  tone = "marigold",
  tilt = 0,
}: TeamMemberCardProps) {
  const t = TONES[tone];

  return (
    <article className="group">
      <div
        className={`rounded-[22px] border-[8px] ${t.border} ${t.bg} shadow-[0_16px_34px_-18px_rgba(29,26,22,0.45)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 rotate-[var(--tilt)] group-hover:rotate-0`}
        style={{ "--tilt": `${tilt}deg` } as CSSProperties}
      >
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-[14px] ${image ? "bg-cream" : t.bg}`}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 90vw, 25vw"
            />
          ) : (
            <div
              className={`grain flex h-full w-full items-center justify-center ${t.bg}`}
              aria-hidden
            >
              <span
                className={`font-display text-[72px] leading-none ${t.text} transition-transform duration-500 group-hover:scale-110`}
              >
                {initials(name)}
              </span>
            </div>
          )}
        </div>
      </div>
      <h3 className="font-display mt-6 text-[24px] leading-tight text-ink">{name}</h3>
      <p className="mt-1 text-[14px] font-medium uppercase leading-5 tracking-[0.1em] text-ink-soft">
        {role}
      </p>
      {bio ? (
        <p className="mt-3 text-[16px] leading-7 text-ink-soft">{bio}</p>
      ) : null}
    </article>
  );
}
