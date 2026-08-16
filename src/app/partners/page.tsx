import type { Metadata } from "next";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import {
  MediaPlaceholder,
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { PARTNERS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description: `${PARTNERS.intro} Budget Bridge Foundation partners with NGOs, schools, and companies. The full partner list and data are coming soon.`,
  path: "/partners",
  keywords: [
    "financial literacy partners",
    "financial education partners",
    "nonprofit partners",
    "Budget Bridge partners",
  ],
});

export default function PartnersPage() {
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
    </main>
  );
}
