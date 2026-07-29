import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";

type AccentButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
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
 * Primary pill CTA — Natural optical alignment + olive hover.
 * Hover ≈ rgba(17, 20, 0, 0.75) over white → muted olive.
 */
export function AccentButton({
  href,
  children,
  className = "",
  showArrow = true,
  onClick,
}: AccentButtonProps) {
  const classes = `bbf-btn-primary inline-flex h-9 items-center gap-3 rounded-[20px] bg-[#161514] px-4 text-[15px] leading-none text-white transition-colors duration-100 ease-out hover:bg-[var(--button-hover)] ${className}`;

  const content = (
    <>
      <span className="relative top-px">{children}</span>
      {showArrow ? (
        <Icon
          icon={ArrowRight01Icon}
          size={12}
          className="relative top-px shrink-0 text-white"
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
