import type { Metadata } from "next";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import {
  MediaPlaceholder,
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { PARTNERS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import {
  PARTNER_COUNTRY_COUNT,
  partnerCountriesByLetter,
} from "@/lib/partners";

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
    <main className="bg-white">
      <PageHero
        label={PARTNERS.label}
        title={PARTNERS.title}
        description={PARTNERS.intro}
      />

      <PageSection>
        <SectionLabel>{PARTNERS.comingSoon.label}</SectionLabel>
        <SectionHeading>{PARTNERS.comingSoon.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-[15px] leading-6 text-[#717071]">
          {PARTNERS.comingSoon.body}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <MediaPlaceholder
              key={index}
              label="Partner"
              className="aspect-[4/3]"
            />
          ))}
        </div>

        <CtaRow
          primary={{ label: "Become a partner", href: "/contact" }}
          secondary={{ label: "Volunteer with us", href: "/get-involved" }}
        />
      </PageSection>

      <PageSection
        id="countries"
        className="content-gutter-x scroll-mt-24 pb-24 pt-8"
      >
        <SectionLabel>{PARTNER_COUNTRY_COUNT} countries</SectionLabel>
        <SectionHeading>{PARTNERS.countries.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-[15px] leading-6 text-[#717071]">
          {PARTNERS.countries.body}
        </p>

        <div className="mt-14 border-b border-[#ececec]">
          {grouped.map(([letter, countries]) => (
            <div
              key={letter}
              className="grid grid-cols-[2.5rem_1fr] gap-6 border-t border-[#ececec] py-6 md:grid-cols-[3rem_1fr]"
            >
              <p className="text-[17px] font-medium text-[#a3a3a3]">{letter}</p>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map((country) => (
                  <li
                    key={country.id}
                    className="text-[15px] leading-6 text-[#161514]"
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[15px] leading-6 text-[#717071]">
          {PARTNERS.countries.updating}
        </p>
      </PageSection>
    </main>
  );
}
