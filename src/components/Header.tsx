"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown01Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/Icon";
import { MobileNav } from "@/components/MobileNav";
import { NAV } from "@/lib/site";
import { TONES, toneAt } from "@/lib/tones";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }

  // Close menus on route change (state adjusted during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu]);

  useEffect(() => () => clearClose(), []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_0_var(--line)] backdrop-blur-md"
          : "bg-cream"
      }`}
    >
      <div className="relative flex h-20 items-center content-gutter-x">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Budget Bridge Foundation home"
        >
          <BrandMark className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
          <span className="font-display hidden text-[22px] leading-none text-ink sm:block">
            Budget Bridge
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium leading-6 text-ink transition-colors hover:bg-paper aria-[current=page]:bg-marigold xl:px-4"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;
            const menuId = `menu-${item.label.toLowerCase()}`;
            const sectionActive = item.items.some((sub) => isActive(sub.href));

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  clearClose();
                  setOpenMenu(item.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium leading-6 text-ink transition-colors hover:bg-paper xl:px-4 ${
                    sectionActive ? "bg-marigold hover:bg-marigold" : ""
                  }`}
                >
                  {item.label}
                  <Icon
                    icon={ArrowDown01Icon}
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                <div
                  id={menuId}
                  className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3 transition-[opacity,translate,scale] duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="rounded-[22px] border-2 border-ink bg-cream p-2 shadow-sticker">
                    {item.items.map((link, index) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          tabIndex={isOpen ? undefined : -1}
                          className="group flex items-start gap-3 rounded-[14px] p-3 transition-colors hover:bg-paper"
                        >
                          <span
                            className={`mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-ink transition-transform group-hover:scale-125 ${TONES[toneAt(index)].bg}`}
                            aria-hidden
                          />
                          <span>
                            <span className="block text-[15px] font-medium leading-6 text-ink">
                              {link.title}
                            </span>
                            <span className="block text-[14px] leading-5 text-ink-soft">
                              {link.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center lg:flex">
          <AccentButton href="/get-involved" variant="marigold" className="h-11 px-5">
            Volunteer
          </AccentButton>
        </div>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-marigold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <Icon
            icon={mobileOpen ? Cancel01Icon : Menu01Icon}
            size={20}
            strokeWidth={2}
            className="text-ink"
            aria-hidden
          />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
