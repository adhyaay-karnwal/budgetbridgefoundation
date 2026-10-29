"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/Icon";
import { DoodleBridge } from "@/components/playful/Doodles";
import { NAV, type NavItem } from "@/lib/site";
import { TONES, toneAt } from "@/lib/tones";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

function MobileNavAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: Extract<NavItem, { kind: "menu" }>["items"];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="font-display flex w-full items-center justify-between py-3 text-left text-[34px] leading-tight text-ink"
      >
        <span>{label}</span>
        <Icon
          icon={ArrowDown01Icon}
          size={24}
          strokeWidth={2}
          className={`shrink-0 text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mb-3 space-y-1 pl-1">
            {items.map((sub, index) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  onClick={onNavigate}
                  tabIndex={expanded ? undefined : -1}
                  className="flex items-center gap-3 py-2 text-[17px] leading-6 text-ink-soft transition-colors hover:text-ink"
                >
                  <span
                    className={`h-3 w-3 rounded-full border-2 border-ink ${TONES[toneAt(index)].bg}`}
                    aria-hidden
                  />
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const frame = requestAnimationFrame(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      });
      document.body.style.overflow = "hidden";
      return () => cancelAnimationFrame(frame);
    }

    const frame = requestAnimationFrame(() => setVisible(false));
    document.body.style.overflow = "";
    const timer = setTimeout(() => setMounted(false), 320);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className={`grain flex h-full w-full flex-col bg-cream transition-[translate,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center content-gutter-x">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <BrandMark />
            <span className="font-display text-[22px] leading-none text-ink">
              Budget Bridge
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-marigold"
            aria-label="Close menu"
          >
            <Icon
              icon={Cancel01Icon}
              size={20}
              strokeWidth={2}
              className="text-ink"
              aria-hidden
            />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto content-gutter-x pb-8 pt-4"
          aria-label="Primary"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.label} className="border-b-2 border-dashed border-line">
                {item.kind === "link" ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-display block py-3 text-[34px] leading-tight text-ink"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <MobileNavAccordion
                    key={`${item.label}-${open}`}
                    label={item.label}
                    items={item.items}
                    onNavigate={onClose}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center justify-between gap-4">
            <AccentButton href="/get-involved" variant="marigold" onClick={onClose}>
              Volunteer
            </AccentButton>
            <DoodleBridge size={72} className="text-marigold-deep" />
          </div>
        </nav>
      </div>
    </div>
  );
}
