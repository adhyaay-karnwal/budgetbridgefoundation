"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { Icon } from "@/components/Icon";
import { MobileNav } from "@/components/MobileNav";
import { useIntro } from "@/components/intro/IntroProvider";
import { NAV, type NavItem } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const { phase, showChrome, returnHome } = useIntro();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [renderedMenu, setRenderedMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerId = useId();

  function clearClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }

  function open(label: string) {
    clearClose();
    setRenderedMenu(label);
    setOpenMenu(label);
  }

  function closeMenu() {
    clearClose();
    setOpenMenu(null);
  }

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearClose();
  }, []);

  // Keep last menu content mounted while slide-up finishes
  useEffect(() => {
    if (openMenu) {
      setRenderedMenu(openMenu);
      return;
    }
    const t = setTimeout(() => setRenderedMenu(null), 280);
    return () => clearTimeout(t);
  }, [openMenu]);

  const panelMenu = NAV.find(
    (item): item is Extract<NavItem, { kind: "menu" }> =>
      item.kind === "menu" && item.label === renderedMenu,
  );
  const isPanelOpen = openMenu !== null;

  let introChrome = "pointer-events-none opacity-0";
  if (phase === "chrome") {
    introChrome = returnHome ? "home-nav-enter-fast" : "home-nav-enter";
  } else if (showChrome) introChrome = "";

  return (
    <header
      className={`sticky top-0 z-50 ${introChrome}`}
      onMouseLeave={scheduleClose}
      data-intro-chrome={showChrome ? "visible" : "hidden"}
    >
      <div className="relative z-20 bg-white/75 backdrop-blur-[10px] supports-[backdrop-filter]:bg-white/75">
        <div className="relative flex h-20 items-center content-gutter-x">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center"
            onMouseEnter={closeMenu}
          >
            <Image
              src="/bbf-black.svg"
              alt="Budget Bridge Foundation"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
            />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center sm:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onMouseEnter={closeMenu}
                    className="rounded-[20px] px-4 py-[6px] text-[15px] leading-6 text-[#161514] transition-colors hover:text-[#717071]"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => open(item.label)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${headerId}-submenu`}
                    className="rounded-[20px] px-4 py-[6px] text-[15px] leading-6 text-[#161514] transition-colors hover:text-[#717071]"
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </nav>

          <div
            className="ml-auto hidden items-center sm:flex"
            onMouseEnter={closeMenu}
          >
            <AccentButton href="/get-involved">Volunteer</AccentButton>
          </div>

          <button
            type="button"
            className="ml-auto flex items-center justify-center sm:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <Icon
              icon={mobileOpen ? Cancel01Icon : Menu01Icon}
              size={20}
              className="text-foreground"
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* Overlay mega panel — extends below bar, does not push page */}
      <div
        id={`${headerId}-submenu`}
        className={`absolute inset-x-0 top-20 z-10 hidden overflow-hidden sm:block ${
          isPanelOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onMouseEnter={clearClose}
      >
        <div
          className={`w-full bg-[#f6f6f6] transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isPanelOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionDuration: "280ms" }}
        >
          <div className="content-gutter-x py-10">
            <ul className="mx-auto flex max-w-[720px] flex-col gap-7">
              {panelMenu?.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group grid grid-cols-[minmax(140px,200px)_1fr] items-baseline gap-x-10"
                  >
                    <span className="text-[15px] font-medium leading-6 text-[#161514] transition-colors group-hover:text-[#161514]/70">
                      {link.title}
                    </span>
                    <span className="text-[15px] leading-6 text-[#717071]">
                      {link.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
