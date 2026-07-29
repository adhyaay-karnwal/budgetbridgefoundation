import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";

type AccentButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

/**
 * Primary pill CTA — Natural optical alignment + olive hover.
 * Hover ≈ rgba(17, 20, 0, 0.75) over white → muted olive.
 */
export function AccentButton({
  href,
  children,
  className = "",
  showArrow = true,
}: AccentButtonProps) {
  return (
    <Link
      href={href}
      className={`bbf-btn-primary inline-flex h-9 items-center gap-3 rounded-[20px] bg-[#161514] px-4 text-[15px] leading-none text-white transition-colors duration-100 ease-out hover:bg-[var(--button-hover)] ${className}`}
    >
      <span className="relative top-px">{children}</span>
      {showArrow ? (
        <Icon
          icon={ArrowRight01Icon}
          size={12}
          className="relative top-px shrink-0 text-white"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
