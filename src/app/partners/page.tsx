import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Globe } from "@/components/Globe";
import { GuyanaFlag } from "@/components/GuyanaFlag";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import {
  MediaPlaceholder,
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { DoodleSparkle, DoodleStar } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { PARTNERS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import {
  PARTNER_COUNTRY_COUNT,
  partnerCountriesByLetter,
} from "@/lib/partners";
import { TONES, toneAt } from "@/lib/tones";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description: `${PARTNERS.intro} Budget Bridge Foundation partners with organizations in ${PARTNER_COUNTRY_COUNT} countries. The full partner list is coming soon.`,
  path: "/partners",
  keywords: [
    "financial literacy partners",
    "financial education partners",
    "nonprofit partners",
    "Budget Bridge partners",
  ],
});

export default function PartnersPage() {
  const grouped = partnerCountriesByLetter();

  return (
    <main>
      <PageHero
        label={PARTNERS.label}
        title={PARTNERS.title}
        description={PARTNERS.intro}
        tone="sky"
        doodle="globe"
        media={
          <div className="mx-auto w-full max-w-[440px]">
            <Globe />
          </div>
        }
      />

      <PageSection className="content-gutter-x pb-20 pt-4">
        <Reveal className="grain relative overflow-hidden rounded-[36px] border-2 border-ink bg-marigold px-6 py-12 shadow-sticker sm:px-12 sm:py-14">
          <DoodleStar
            size={70}
            className="animate-float absolute right-6 top-6 hidden text-coral sm:block"
            style={{ "--r": "12deg" } as CSSProperties}
          />
          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <div
              className="mx-auto w-[220px] overflow-hidden rounded-[14px] border-2 border-ink shadow-sticker-sm rotate-[var(--tilt)] transition-transform duration-300 hover:rotate-0 sm:w-[260px]"
              style={{ "--tilt": "-4deg" } as CSSProperties}
            >
              <GuyanaFlag className="block h-auto w-full" />
            </div>
            <div>
              <SectionLabel className="text-ink/80">{PARTNERS.newest.label}</SectionLabel>
              <SectionHeading>{PARTNERS.newest.heading}</SectionHeading>
              <p className="mt-5 max-w-xl text-[18px] leading-8 text-ink/75">
                {PARTNERS.newest.body}
              </p>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <PageSection>
        <SectionLabel>{PARTNERS.comingSoon.label}</SectionLabel>
        <SectionHeading>{PARTNERS.comingSoon.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink-soft">
          {PARTNERS.comingSoon.body}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <MediaPlaceholder
              key={index}
              label="Partner logo soon"
              className="aspect-[5/3]"
            />
          ))}
        </div>

        <CtaRow
          primary={{ label: "Become a partner", href: "/contact" }}
          primaryVariant="marigold"
          secondary={{ label: "Volunteer with us", href: "/get-involved" }}
        />
      </PageSection>

      <PageSection
        id="countries"
        className="content-gutter-x scroll-mt-24 pb-24 pt-8"
      >
        <SectionLabel>{PARTNER_COUNTRY_COUNT} countries</SectionLabel>
        <SectionHeading>{PARTNERS.countries.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink-soft">
          {PARTNERS.countries.body}
        </p>

        <div className="mt-14 grid gap-x-10 border-t-2 border-ink md:grid-cols-2">
          {grouped.map(([letter, countries], groupIndex) => {
            const t = TONES[toneAt(groupIndex)];
            return (
              <Reveal
                key={letter}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-b-2 border-dashed border-line py-6"
              >
                <span
                  className={`font-display flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink text-[24px] leading-none ${t.bg} ${t.text}`}
                >
                  {letter}
                </span>
                <ul className="flex flex-wrap content-center gap-2">
                  {countries.map((country) =>
                    country.isNew ? (
                      <li
                        key={country.id}
                        className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-marigold py-1 pl-3 pr-1.5 text-[15px] font-medium leading-6 text-ink shadow-sticker-sm"
                      >
                        <DoodleSparkle size={14} strokeWidth={3} />
                        {country.name}
                        <span className="rounded-full bg-ink px-2 text-[11px] uppercase tracking-[0.12em] text-cream">
                          New
                        </span>
                      </li>
                    ) : (
                      <li
                        key={country.id}
                        className="rounded-full border-2 border-ink/15 bg-cream px-3 py-1 text-[15px] leading-6 text-ink transition-[background-color,border-color,translate] duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-marigold"
                      >
                        {country.name}
                      </li>
                    ),
                  )}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl font-hand text-[26px] text-ink-soft">
          {PARTNERS.countries.updating}
        </p>
      </PageSection>
    </main>
  );
}
