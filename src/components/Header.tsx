"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Design System", href: "/design-system" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/bbf-black.svg"
            alt="BBF"
            width={22}
            height={22}
            className="shrink-0"
          />
          <span className="text-sm font-medium text-foreground">BBF</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center sm:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-4 text-sm transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground"
          >
            {menuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path
                d="M3 5h14M3 10h14M3 15h14"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border sm:hidden">
          <div className="mx-auto max-w-6xl px-6 py-3">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-[2px] px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-100 font-medium text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
