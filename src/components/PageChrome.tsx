import type { ReactNode } from "react";
import { AccentButton } from "@/components/AccentButton";
import { TextLink } from "@/components/home/primitives";
import type { CtaLink } from "@/lib/site";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageSection({
  children,
  className = "content-gutter-x pb-24 pt-8",
  id,
}: PageSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function PageHero({
  label,
  title,
  description,
  className = "content-gutter-x pb-16 pt-28",
  children,
}: PageHeroProps) {
  return (
    <PageSection className={className}>
      <p className="mb-4 text-[15px] leading-6 text-[#a3a3a3]">{label}</p>
      <h1 className="max-w-3xl text-[40px] font-medium leading-[1.15] tracking-tight text-[#111400]">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-[17px] leading-7 text-[#717071]">
          {description}
        </p>
      ) : null}
      {children}
    </PageSection>
  );
}

type SplitProps = {
  children: ReactNode;
};

/** Two-column content + media layout used across program/about pages */
export function Split({ children }: SplitProps) {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      {children}
    </div>
  );
}

type CtaRowProps = {
  primary: CtaLink;
  secondary?: CtaLink;
  secondaryVariant?: "gold" | "instagram";
  className?: string;
};

export function CtaRow({
  primary,
  secondary,
  secondaryVariant = "gold",
  className = "mt-10 flex flex-wrap items-center gap-4",
}: CtaRowProps) {
  return (
    <div className={className}>
      <AccentButton href={primary.href}>{primary.label}</AccentButton>
      {secondary ? (
        <TextLink href={secondary.href} variant={secondaryVariant}>
          {secondary.label}
        </TextLink>
      ) : null}
    </div>
  );
}
