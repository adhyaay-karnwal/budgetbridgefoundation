import type { Metadata } from "next";
import Image from "next/image";
import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { ABOUT, FOUNDERS } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `About · ${SITE.name}`,
  description: ABOUT.intro,
};

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
            <article key={founder.name}>
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[2px] bg-[#ececec]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <h3 className="text-[17px] font-medium text-[#161514]">
                {founder.name}
              </h3>
              <p className="mt-1 text-[14px] text-[#a3a3a3]">{founder.role}</p>
              <p className="mt-3 text-[15px] leading-6 text-[#717071]">
                {founder.bio}
              </p>
            </article>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
