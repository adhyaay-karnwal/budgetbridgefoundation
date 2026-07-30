import type { Metadata } from "next";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { GET_INVOLVED } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Get Involved",
  description: `${GET_INVOLVED.why} Volunteer with Budget Bridge Foundation — a financial education nonprofit with roles in outreach, curriculum, policy, research, social media, and tech.`,
  path: "/get-involved",
  keywords: ["volunteer financial literacy", "nonprofit volunteer", "financial education volunteer"],
});

export default function GetInvolvedPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={GET_INVOLVED.label}
        title={GET_INVOLVED.title}
        description={GET_INVOLVED.why}
      />

      <PageSection>
        <SectionLabel>Departments</SectionLabel>
        <SectionHeading>Our departments</SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GET_INVOLVED.departments.map((department) => (
            <li
              key={department}
              className="rounded-[2px] bg-[#ececec] px-5 py-6 text-[17px] font-medium text-[#161514]"
            >
              {department}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <SectionLabel>Join</SectionLabel>
        <SectionHeading>Interested in joining Budget Bridge Foundation?</SectionHeading>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-[#717071]">
          {GET_INVOLVED.join}
        </p>
        <CtaRow
          primary={{ label: "Email us", href: `mailto:${SITE.email}` }}
          secondary={{ label: "Instagram", href: SITE.instagram }}
          secondaryVariant="instagram"
        />
      </PageSection>
    </main>
  );
}
