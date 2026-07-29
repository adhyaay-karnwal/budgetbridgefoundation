import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";

type OutboundLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Instagram uses brand gradient instead of gold */
  variant?: "gold" | "instagram";
  showArrow?: boolean;
};

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf")
  );
}

/**
 * Content links — gold + diagonal arrow so they’re obviously clickable.
 * Instagram variant uses the Instagram gradient on the label.
 */
export function OutboundLink({
  href,
  children,
  className = "",
  variant = "gold",
  showArrow = true,
}: OutboundLinkProps) {
  const external = isExternalHref(href);
  const labelClass =
    variant === "instagram"
      ? "bbf-link-instagram"
      : "text-[#b8952c] transition-colors hover:text-[#9a7a24]";

  const content = (
    <span className="inline-flex items-center gap-1">
      <span className={labelClass}>{children}</span>
      {showArrow ? (
        <Icon
          icon={ArrowUpRight01Icon}
          size={13}
          className={
            variant === "instagram"
              ? "shrink-0 text-[#e1306c]"
              : "shrink-0 text-[#b8952c]"
          }
          aria-hidden
        />
      ) : null}
    </span>
  );

  const classes = `inline-flex no-underline ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** @deprecated Prefer OutboundLink — kept as alias for existing imports */
export function TextLink(props: OutboundLinkProps) {
  return <OutboundLink {...props} />;
}
