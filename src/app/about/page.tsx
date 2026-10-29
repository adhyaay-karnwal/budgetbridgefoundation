import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { DoodleSprout } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { TiltCard } from "@/components/playful/TiltCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { ABOUT, EXECUTIVE_TEAM, FOUNDERS } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { toneAt } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "About",
  description: `${ABOUT.intro} Learn about Budget Bridge Foundation, a student-led financial literacy nonprofit and 501(c)(3).`,
  path: "/about",
  keywords: ["about Budget Bridge Foundation", "student-led nonprofit", "financial literacy organization"],
});

const TILTS = [-3, 2, -2, 3];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label={ABOUT.label}
        title={ABOUT.title}
        description={ABOUT.intro}
        tone="marigold"
        doodle="bridge"
        media={
          <TiltCard
            src={MEDIA.highlights.story.src}
            alt={MEDIA.highlights.story.alt}
            tone="cream"
            rotate={4}
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 40vw"
            preload
          />
        }
      />

      <PageSection>
        <Split>
          <Reveal>
            <SectionLabel>What we do</SectionLabel>
            <p className="font-display text-[26px] leading-[1.25] text-ink sm:text-[32px]">
              {ABOUT.teach}
            </p>
            <CtaRow
              primary={{ label: "Volunteer with us", href: "/get-involved" }}
              primaryVariant="marigold"
              secondary={{ label: "Contact", href: "/contact" }}
            />
          </Reveal>
          <Reveal delay={120} rotate={-6} className="mx-auto w-full max-w-[480px]">
            <TiltCard
              src={MEDIA.founders.group.src}
              alt={MEDIA.founders.group.alt}
              tone="teal"
              rotate={-3}
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </Reveal>
        </Split>
      </PageSection>

      <PageSection className="content-gutter-x pb-24">
        <Reveal className="grain relative overflow-hidden rounded-[36px] bg-forest px-6 py-16 text-cream sm:px-14 sm:py-20">
          <DoodleSprout
            size={200}
            strokeWidth={1.6}
            className="animate-float absolute -bottom-6 right-4 text-marigold opacity-40 sm:right-12"
          />
          <SectionLabel className="text-cream/80">{ABOUT.story.label}</SectionLabel>
          <SectionHeading className="text-cream">{ABOUT.story.heading}</SectionHeading>
          <p className="relative mt-8 max-w-3xl text-[19px] leading-9 text-cream/85">
            {ABOUT.story.body}
          </p>
        </Reveal>
      </PageSection>

      <PageSection id="team" className="content-gutter-x scroll-mt-24 pb-16 pt-6">
        <SectionLabel>Team</SectionLabel>
        <SectionHeading>Meet the founders</SectionHeading>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {FOUNDERS.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 90}>
              <TeamMemberCard
                {...founder}
                tone={toneAt(index)}
                tilt={TILTS[index % TILTS.length]}
              />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-10">
        <SectionLabel>{ABOUT.executiveTeam.label}</SectionLabel>
        <SectionHeading>{ABOUT.executiveTeam.heading}</SectionHeading>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {EXECUTIVE_TEAM.map((member, index) => (
            <Reveal key={member.name} delay={(index % 4) * 90}>
              <TeamMemberCard
                {...member}
                tone={toneAt(index + 2)}
                tilt={TILTS[(index + 1) % TILTS.length]}
              />
            </Reveal>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
