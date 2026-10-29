import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";

type OutboundLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /**
   * "gold" — ink text with a marigold underline that fills in on hover.
   * "light" — same treatment for dark color blocks.
   * "ink" — ink underline, for marigold surfaces.
   * "instagram" — Instagram brand gradient on the label.
   */
  variant?: "gold" | "light" | "ink" | "instagram";
  showArrow?: boolean;
};

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf")
  );
}

const LABEL_CLASS = {
  gold: "bg-[linear-gradient(var(--marigold),var(--marigold))] bg-[length:100%_3px] bg-bottom bg-no-repeat pb-0.5 text-ink transition-[background-size] duration-300 group-hover/link:bg-[length:100%_100%]",
  light:
    "bg-[linear-gradient(var(--marigold),var(--marigold))] bg-[length:100%_3px] bg-bottom bg-no-repeat pb-0.5 text-current transition-[background-size,color] duration-300 group-hover/link:bg-[length:100%_100%] group-hover/link:text-ink",
  ink: "bg-[linear-gradient(var(--ink),var(--ink))] bg-[length:100%_2px] bg-bottom bg-no-repeat pb-0.5 text-ink transition-[background-size,color] duration-300 group-hover/link:bg-[length:100%_100%] group-hover/link:text-marigold",
  instagram: "bbf-link-instagram",
} as const;

/** Content links — underlined in marigold so they read as clickable. */
export function OutboundLink({
  href,
  children,
  className = "",
  variant = "gold",
  showArrow = true,
}: OutboundLinkProps) {
  const external = isExternalHref(href);

  const content = (
    <span className="inline-flex items-center gap-1">
      <span className={LABEL_CLASS[variant]}>{children}</span>
      {showArrow ? (
        <Icon
          icon={ArrowUpRight01Icon}
          size={14}
          strokeWidth={2}
          className={`shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ${
            variant === "instagram" ? "text-[#e1306c]" : ""
          }`}
          aria-hidden
        />
      ) : null}
    </span>
  );

  const classes = `group/link inline-flex font-medium no-underline ${className}`;

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
