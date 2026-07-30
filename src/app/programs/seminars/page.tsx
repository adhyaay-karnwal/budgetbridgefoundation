import type { Metadata } from "next";
import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import { GraphicCurriculum } from "@/components/home/graphics";
import { SEMINARS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Seminars",
  description: `${SEMINARS.body} Free elementary and middle school financial literacy seminars from Budget Bridge Foundation, a student-led nonprofit.`,
  path: "/programs/seminars",
  keywords: ["school financial literacy seminars", "elementary money skills", "middle school personal finance"],
});

export default function SeminarsPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={SEMINARS.label}
        title={SEMINARS.title}
        description={SEMINARS.body}
      />

      <PageSection>
        <Split>
          <div>
            <p className="text-[17px] leading-7 text-[#717071]">
              Free seminars for elementary and middle school students that
              introduce basic personal finance skills early.
            </p>
            <CtaRow
              primary={{ label: "Contact us", href: "/contact" }}
              secondary={{
                label: "Education & tutoring",
                href: "/programs/education",
              }}
            />
          </div>
          <GraphicCurriculum />
        </Split>
      </PageSection>
    </main>
  );
}
