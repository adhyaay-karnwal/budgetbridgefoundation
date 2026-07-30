import type { Metadata } from "next";
import Image from "next/image";
import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { ABOUT, EXECUTIVE_TEAM, FOUNDERS } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: `${ABOUT.intro} Learn about Budget Bridge Foundation, a student-led financial literacy nonprofit and 501(c)(3).`,
  path: "/about",
  keywords: ["about Budget Bridge Foundation", "student-led nonprofit", "financial literacy organization"],
});

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={ABOUT.label}
        title={ABOUT.title}
        description={ABOUT.intro}
      />

      <PageSection>
        <Split>
          <div>
            <p className="text-[17px] leading-7 text-[#717071]">{ABOUT.teach}</p>
            <CtaRow
              primary={{ label: "Volunteer with us", href: "/get-involved" }}
              secondary={{ label: "Contact", href: "/contact" }}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[#ececec]">
            <Image
              src={MEDIA.founders.group.src}
              alt={MEDIA.founders.group.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Split>
      </PageSection>

      <PageSection>
        <SectionLabel>{ABOUT.story.label}</SectionLabel>
        <SectionHeading>{ABOUT.story.heading}</SectionHeading>
        <p className="mt-8 max-w-2xl text-[17px] leading-7 text-[#717071]">
          {ABOUT.story.body}
        </p>
      </PageSection>

      <PageSection id="team" className="content-gutter-x pb-8 pt-8">
        <SectionLabel>Team</SectionLabel>
        <SectionHeading>Meet the founders</SectionHeading>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDERS.map((founder) => (
            <TeamMemberCard key={founder.name} {...founder} />
          ))}
        </div>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-4">
        <SectionLabel>{ABOUT.executiveTeam.label}</SectionLabel>
        <SectionHeading>{ABOUT.executiveTeam.heading}</SectionHeading>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {EXECUTIVE_TEAM.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
