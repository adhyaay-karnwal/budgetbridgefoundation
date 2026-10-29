import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import type { DoodleName } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { DoodleTile } from "@/components/playful/Stickers";
import { TiltCard } from "@/components/playful/TiltCard";
import { GET_INVOLVED } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { toneAt } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Get Involved",
  description: `${GET_INVOLVED.why} Volunteer with Budget Bridge Foundation — a financial education nonprofit with roles in outreach, curriculum, policy, research, social media, and tech.`,
  path: "/get-involved",
  keywords: ["volunteer financial literacy", "nonprofit volunteer", "financial education volunteer"],
});

const DEPARTMENT_DOODLES: Record<(typeof GET_INVOLVED.departments)[number], DoodleName> = {
  "Social Media": "megaphone",
  Outreach: "people",
  "Curriculum Development": "book",
  Research: "magnifier",
  "Public Policy": "scale",
  Tech: "code",
};

const STEPS = [
  {
    title: "Say hello",
    body: `Email ${SITE.email} or DM ${SITE.instagramHandle} on Instagram.`,
  },
  { title: "Schedule an interview", body: "We will find a time to chat." },
  { title: "Join a department", body: "Pick the team where you can help most." },
];

export default function GetInvolvedPage() {
  return (
    <main>
      <PageHero
        label={GET_INVOLVED.label}
        title={GET_INVOLVED.title}
        description={GET_INVOLVED.why}
        tone="teal"
        doodle="people"
        media={
          <TiltCard
            src={MEDIA.highlights.volunteer.src}
            alt={MEDIA.highlights.volunteer.alt}
            tone="cream"
            rotate={4}
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 40vw"
            preload
          />
        }
      />

      <PageSection>
        <SectionLabel>Departments</SectionLabel>
        <SectionHeading>Find your team</SectionHeading>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GET_INVOLVED.departments.map((department, index) => (
            <Reveal as="li" key={department} delay={(index % 3) * 80}>
              <DoodleTile
                label={department}
                doodle={DEPARTMENT_DOODLES[department]}
                tone={toneAt(index)}
              />
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-6">
        <div className="grain rounded-[36px] bg-paper px-6 py-14 sm:px-12 sm:py-16">
          <SectionLabel>Join</SectionLabel>
          <SectionHeading>Interested in joining Budget Bridge Foundation?</SectionHeading>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 100}>
                <span className="font-display flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-marigold text-[28px] leading-none shadow-sticker-sm">
                  {index + 1}
                </span>
                <p className="font-display mt-5 text-[26px] leading-tight text-ink">
                  {step.title}
                </p>
                <p className="mt-2 text-[16px] leading-7 text-ink-soft">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <CtaRow
            primary={{ label: "Email us", href: `mailto:${SITE.email}` }}
            primaryVariant="marigold"
            secondary={{ label: "Instagram", href: SITE.instagram }}
            secondaryVariant="instagram"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4"
          />
        </div>
      </PageSection>
    </main>
  );
}
