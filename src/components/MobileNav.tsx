"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { Icon } from "@/components/Icon";
import { NAV, type NavItem } from "@/lib/site";

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
        className="flex w-full items-center justify-between py-4 text-left text-[15px] leading-6 text-[#161514]"
      >
        <span>{label}</span>
        <Icon
          icon={ArrowDown01Icon}
          size={18}
          className={`shrink-0 text-[#161514] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
          <ul className="mb-1 ml-3 space-y-0 border-l border-[#e8e8e8] pl-4">
            {items.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  onClick={onNavigate}
                  className="block py-2.5 text-[15px] leading-6 text-[#717071] transition-colors hover:text-[#161514]"
                >
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
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      document.body.style.overflow = "hidden";
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    document.body.style.overflow = "";
    const timer = setTimeout(() => setMounted(false), 320);
    return () => clearTimeout(timer);
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
      className="fixed inset-0 z-[100] sm:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className={`flex h-full w-full flex-col bg-white transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center content-gutter-x">
          <Link
            href="/"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Image
              src="/bbf-black.svg"
              alt="Budget Bridge Foundation"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex items-center justify-center"
            aria-label="Close menu"
          >
            <Icon
              icon={Cancel01Icon}
              size={20}
              className="text-foreground"
              aria-hidden
            />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto content-gutter-x pb-8"
          aria-label="Primary"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.label}>
                {item.kind === "link" ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-[15px] leading-6 text-[#161514]"
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

          <div className="mt-8 border-t border-[#f0f0f0] pt-8">
            <AccentButton href="/get-involved" onClick={onClose}>
              Volunteer
            </AccentButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
