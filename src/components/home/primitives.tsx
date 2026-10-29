import type { ReactNode } from "react";
import { OutboundLink } from "@/components/OutboundLink";
import { DoodleSparkle } from "@/components/playful/Doodles";

type WithChildren = {
  children: ReactNode;
};

type MediaPlaceholderProps = {
  className?: string;
  label?: string;
};

/** Dashed "coming soon" block */
export function MediaPlaceholder({
  className = "",
  label,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[22px] border-2 border-dashed border-line bg-paper/60 ${className}`}
      aria-hidden={label ? undefined : true}
    >
      {label ? (
        <span className="font-hand text-[22px] text-ink-faint">{label}</span>
      ) : null}
    </div>
  );
}

/** Small uppercase eyebrow with a sparkle */
export function SectionLabel({
  children,
  className = "text-ink-soft",
}: WithChildren & { className?: string }) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] ${className}`}
    >
      <DoodleSparkle size={16} strokeWidth={3} className="text-marigold-deep" />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "text-ink",
  as: Tag = "h2",
}: WithChildren & { className?: string; as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag
      className={`font-display max-w-3xl text-balance text-[38px] font-normal leading-[1.05] sm:text-[52px] ${className}`}
    >
      {children}
    </Tag>
  );
}

export { OutboundLink as TextLink };

type FeatureCardProps = {
  title: string;
  description: ReactNode;
  graphic: ReactNode;
};

export function FeatureCard({ title, description, graphic }: FeatureCardProps) {
  return (
    <article>
      <div className="mb-6">{graphic}</div>
      <h3 className="font-display text-[24px] leading-tight text-ink">{title}</h3>
      <p className="mt-2 text-[16px] leading-7 text-ink-soft">{description}</p>
    </article>
  );
}
