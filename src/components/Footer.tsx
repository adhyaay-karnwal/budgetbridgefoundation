import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DoodleBridge, DoodleSparkle } from "@/components/playful/Doodles";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";

const WORDMARK = "Budget Bridge";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Footer() {
  return (
    <footer className="grain overflow-hidden bg-forest text-cream">
      <div className="content-gutter-x pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandMark className="h-12 w-12" />
              <span className="font-display text-[26px] leading-none">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[17px] leading-7 text-cream/75">
              {SITE.tagline} A student-led nonprofit bridging the financial
              literacy gap, one classroom at a time.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-block font-hand text-[26px] text-marigold underline decoration-2 underline-offset-4 transition-colors hover:text-cream"
            >
              {SITE.email}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.16em] text-marigold">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => {
                    const className =
                      "text-[16px] leading-6 text-cream/85 transition-colors hover:text-marigold";
                    return (
                      <li key={link.href}>
                        {isExternal(link.href) ? (
                          <a
                            href={link.href}
                            className={className}
                            {...(link.href.startsWith("http")
                              ? { target: "_blank", rel: "noreferrer" }
                              : {})}
                          >
                            {link.label} ↗
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark — letters hop when you hover them */}
        <p
          className="font-display mt-16 flex select-none flex-wrap items-end justify-between gap-x-[0.02em] pb-[0.18em] text-[clamp(64px,14.5vw,210px)] leading-[1] text-cream"
          aria-hidden
        >
          {WORDMARK.split(" ").map((word) => (
            <span key={word} className="flex whitespace-nowrap">
              {word.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-[translate,rotate,color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[0.12em] hover:-rotate-6 hover:text-marigold"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/20 pt-8 text-[13px] leading-5 text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.name} is a 501(c)(3)
            non-profit organization. EIN #{SITE.ein}.
          </p>
          <p className="flex items-center gap-2">
            <DoodleSparkle size={14} strokeWidth={3} className="text-marigold" />
            Student-led, from New Jersey to the world
            <DoodleBridge size={28} className="text-marigold" />
          </p>
        </div>
      </div>
    </footer>
  );
}
