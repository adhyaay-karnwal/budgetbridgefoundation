import type { ReactNode } from "react";
import { OutboundLink } from "@/components/OutboundLink";

type WithChildren = {
  children: ReactNode;
};

type MediaPlaceholderProps = {
  className?: string;
  label?: string;
};

/** Light gray media block — Natural style: 2px radius, no border */
export function MediaPlaceholder({
  className = "",
  label,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[2px] bg-[#ececec] ${className}`}
      aria-hidden={label ? undefined : true}
    >
      {label ? (
        <span className="text-[13px] text-[#a3a3a3]">{label}</span>
      ) : null}
    </div>
  );
}

export function SectionLabel({ children }: WithChildren) {
  return (
    <p className="mb-4 text-[15px] leading-6 text-[#a3a3a3]">{children}</p>
  );
}

export function SectionHeading({ children }: WithChildren) {
  return (
    <h2 className="max-w-3xl text-[40px] font-medium leading-[1.15] tracking-tight text-[#111400]">
      {children}
    </h2>
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
      <h3 className="text-[17px] font-medium leading-6 text-[#161514]">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-6 text-[#717071]">{description}</p>
    </article>
  );
}
