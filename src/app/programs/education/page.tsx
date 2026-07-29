import type { Metadata } from "next";
import { OutboundLink } from "@/components/OutboundLink";
import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  GraphicGameClass,
  GraphicTutoring,
} from "@/components/home/graphics";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { EDUCATION } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Education · ${SITE.name}`,
  description: EDUCATION.body,
};

export default function EducationPage() {
  const { gameclass } = EDUCATION;

  return (
    <main className="bg-white">
      <PageHero
        label={EDUCATION.label}
        title={EDUCATION.title}
        description={EDUCATION.body}
      />

      <PageSection>
        <Split>
          <div>
            <SectionLabel>Tutoring</SectionLabel>
            <SectionHeading>Live sessions for ages 10–16</SectionHeading>
            <p className="mt-6 text-[15px] leading-6 text-[#717071]">
              Teaching budgeting, saving, investing, and money management with
              trusted local NGO partners across Latin America, Africa, and Asia.
            </p>
            <CtaRow
              primary={{ label: "Volunteer", href: "/get-involved" }}
              secondary={{
                label: "School seminars",
                href: "/programs/seminars",
              }}
            />
          </div>
          <GraphicTutoring />
        </Split>
      </PageSection>

      <PageSection>
        <Split>
          <GraphicGameClass />
          <div>
            <SectionLabel>Partners</SectionLabel>
            <SectionHeading>{gameclass.heading}</SectionHeading>
            <p className="mt-6 text-[15px] leading-6 text-[#717071]">
              {gameclass.bodyBefore}
              <OutboundLink href={gameclass.link.href}>
                {gameclass.link.label}
              </OutboundLink>
              {gameclass.bodyAfter}
            </p>
          </div>
        </Split>
      </PageSection>
    </main>
  );
}
