import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";

export type ButtonVariant = "ink" | "marigold" | "cream" | "outline";

type AccentButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
  onClick?: () => void;
};

const VARIANTS: Record<ButtonVariant, string> = {
  ink: "border-ink bg-ink text-cream",
  marigold: "border-ink bg-marigold text-ink",
  cream: "border-ink bg-cream text-ink",
  outline: "border-current bg-transparent text-current shadow-none hover:shadow-none hover:bg-white/10",
};

function isHttpHref(href: string): boolean {
  return href.startsWith("http");
}

function isExternalHref(href: string): boolean {
  return (
    isHttpHref(href) || href.startsWith("mailto:") || href.endsWith(".pdf")
  );
}

/**
 * Primary pill CTA — chunky "sticker" button that lifts toward the
 * pointer and presses flat when clicked.
 */
export function AccentButton({
  href,
  children,
  className = "",
  showArrow = true,
  variant = "ink",
  onClick,
}: AccentButtonProps) {
  const classes = `group/btn inline-flex h-12 items-center gap-2.5 rounded-full border-2 px-6 text-[16px] font-medium leading-none shadow-sticker-sm transition-[translate,rotate,box-shadow,background-color] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      <span className="relative top-px">{children}</span>
      {showArrow ? (
        <Icon
          icon={ArrowRight01Icon}
          size={16}
          strokeWidth={2}
          className="relative top-px shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={classes}
        target={isHttpHref(href) ? "_blank" : undefined}
        rel={isHttpHref(href) ? "noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
