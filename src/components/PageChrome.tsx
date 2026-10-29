import type { ReactNode } from "react";
import { AccentButton, type ButtonVariant } from "@/components/AccentButton";
import { TextLink } from "@/components/home/primitives";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import type { CtaLink } from "@/lib/site";
import { TONES, type Tone } from "@/lib/tones";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageSection({
  children,
  className = "content-gutter-x pb-24 pt-10",
  id,
}: PageSectionProps) {
  return (
    <section id={id} className={`page-enter-body ${className}`.trim()}>
      {children}
    </section>
  );
}

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  tone?: Tone;
  /** Big doodle floating in the corner of the panel */
  doodle?: DoodleName;
  /** Optional visual on the right (e.g. a TiltCard) */
  media?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/**
 * Inner-page header — a rounded color block with a serif title,
 * floating doodle, and optional photo on the right.
 */
export function PageHero({
  label,
  title,
  description,
  tone = "marigold",
  doodle = "sparkle",
  media,
  className = "content-gutter-x pt-6 pb-16",
  children,
}: PageHeroProps) {
  const t = TONES[tone];
  const Doodle = DOODLES[doodle];

  return (
    <section className={className}>
      <div
        className={`grain relative overflow-hidden rounded-[36px] px-6 py-14 sm:px-12 sm:py-20 ${t.bg} ${t.text}`}
      >
        <Doodle
          size={180}
          strokeWidth={1.6}
          className={`animate-float pointer-events-none absolute opacity-25 ${
            media
              ? "-bottom-14 left-[38%] hidden lg:block"
              : "-right-6 -top-8 sm:right-6 sm:top-6"
          }`}
        />
        <div
          className={`relative grid items-center gap-12 ${media ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}
        >
          <div>
            <p
              className={`page-enter-text mb-6 inline-flex items-center rounded-full border-2 border-current px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.16em]`}
            >
              {label}
            </p>
            <h1 className="font-display page-enter-text-delay max-w-3xl text-[44px] font-normal leading-[1.02] sm:text-[68px]">
              {title}
            </h1>
            {description ? (
              <p
                className={`page-enter-body mt-7 max-w-2xl text-[18px] leading-8 ${t.muted}`}
              >
                {description}
              </p>
            ) : null}
            {children ? <div className="page-enter-body">{children}</div> : null}
          </div>
          {media ? <div className="page-enter-body">{media}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Rest of page after hero — enters shortly after title */
export function PageBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`page-enter-body ${className}`.trim()}>{children}</div>
  );
}

type SplitProps = {
  children: ReactNode;
};

/** Two-column content + media layout used across program/about pages */
export function Split({ children }: SplitProps) {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {children}
    </div>
  );
}

type CtaRowProps = {
  primary: CtaLink;
  secondary?: CtaLink;
  primaryVariant?: ButtonVariant;
  secondaryVariant?: "gold" | "light" | "ink" | "instagram";
  className?: string;
};

export function CtaRow({
  primary,
  secondary,
  primaryVariant = "ink",
  secondaryVariant = "gold",
  className = "mt-10 flex flex-wrap items-center gap-x-6 gap-y-4",
}: CtaRowProps) {
  return (
    <div className={className}>
      <AccentButton href={primary.href} variant={primaryVariant}>
        {primary.label}
      </AccentButton>
      {secondary ? (
        <TextLink
          href={secondary.href}
          variant={secondaryVariant}
          className="text-[16px]"
        >
          {secondary.label}
        </TextLink>
      ) : null}
    </div>
  );
}
