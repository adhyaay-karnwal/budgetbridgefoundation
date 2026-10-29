"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { TONES, type Tone } from "@/lib/tones";

type TiltCardProps = {
  src: string;
  alt: string;
  /** Resting rotation in degrees */
  rotate?: number;
  tone?: Tone;
  className?: string;
  imageClassName?: string;
  /** Tailwind aspect class for the photo */
  aspect?: string;
  sizes?: string;
  objectPosition?: string;
  href?: string;
  caption?: ReactNode;
  preload?: boolean;
};

/**
 * Photo in a thick colored frame. It rests slightly rotated and leans
 * toward the pointer on hover, like a print being picked up.
 */
export function TiltCard({
  src,
  alt,
  rotate = 0,
  tone = "marigold",
  className = "",
  imageClassName = "",
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 768px) 70vw, 25vw",
  objectPosition,
  href,
  caption,
  preload = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const base = `rotate(${rotate}deg)`;

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotate(${rotate * 0.25}deg) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
  }

  function onPointerLeave() {
    const el = ref.current;
    if (el) el.style.transform = base;
  }

  const frame = (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`rounded-[22px] border-[10px] ${TONES[tone].border} ${TONES[tone].bg} shadow-[0_18px_40px_-18px_rgba(29,26,22,0.45)] transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transform: base } as CSSProperties}
    >
      <div
        className={`relative overflow-hidden rounded-[13px] bg-paper ${aspect}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className={`object-cover ${imageClassName}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {caption ? (
        <div className={`px-2 pb-1 pt-3 ${TONES[tone].text}`}>{caption}</div>
      ) : null}
    </div>
  );

  if (!href) return frame;

  return (
    <Link href={href} className="block focus-visible:outline-none">
      {frame}
    </Link>
  );
}
