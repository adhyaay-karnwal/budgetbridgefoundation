import type { CSSProperties } from "react";
import Link from "next/link";
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
import { TONES, toneAt } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "About",
  description: `${ABOUT.intro} Learn about Budget Bridge Foundation, a student-led financial literacy nonprofit and 501(c)(3).`,
  path: "/about",
  keywords: ["about Budget Bridge Foundation", "student-led nonprofit", "financial literacy organization"],
});

const TILTS = [-3, 2, -2, 3];

const TEAM_LINKS = [
  { label: "Founders", href: "#founders" },
  { label: "Executive team", href: "#executive-team" },
  ...ABOUT.groups.map((group) => ({ label: group.label, href: `#${group.id}` })),
];

/** Empty seat shown until a group's members are announced. */
function EmptySeat({ tilt }: { tilt: number }) {
  return (
    <div
      className="flex aspect-[4/5] items-center justify-center rounded-[22px] border-2 border-dashed border-current/40 rotate-[var(--tilt)]"
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
      aria-hidden
    >
      <span className="font-display text-[56px] leading-none opacity-40">?</span>
    </div>
  );
}

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
        <nav aria-label="Team sections" className="mb-16 flex flex-wrap gap-2">
          {TEAM_LINKS.map((link, index) => {
            const t = TONES[toneAt(index)];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full border-2 border-ink px-4 py-2 text-[15px] font-medium shadow-sticker-sm transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sticker ${t.bg} ${t.text}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div id="founders" className="scroll-mt-28">
          <SectionLabel>Team</SectionLabel>
          <SectionHeading>Meet the founders</SectionHeading>
        </div>
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

      <PageSection id="executive-team" className="content-gutter-x scroll-mt-24 pb-16 pt-10">
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

      {ABOUT.groups.map((group, groupIndex) => {
        const t = TONES[group.tone];
        return (
          <PageSection
            key={group.id}
            id={group.id}
            className="content-gutter-x scroll-mt-24 pb-10 pt-6 last:pb-24"
          >
            <Reveal
              className={`grain relative overflow-hidden rounded-[36px] px-6 py-12 sm:px-12 sm:py-14 ${t.bg} ${t.text}`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <SectionLabel className={t.muted}>{group.label}</SectionLabel>
                  <SectionHeading className="text-inherit">{group.heading}</SectionHeading>
                  <p className={`mt-5 max-w-md text-[18px] leading-8 ${t.muted}`}>
                    {group.body}
                  </p>
                  {group.members.length === 0 ? (
                    <p className="mt-6 font-hand text-[28px] leading-none">
                      announcing soon!
                    </p>
                  ) : null}
                </div>
                {group.members.length > 0 ? (
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {group.members.map((member, index) => (
                      <TeamMemberCard
                        key={member.name}
                        {...member}
                        tone="cream"
                        tilt={TILTS[index % TILTS.length]}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    {[0, 1, 2].map((seat) => (
                      <EmptySeat
                        key={seat}
                        tilt={TILTS[(seat + groupIndex) % TILTS.length]}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </PageSection>
        );
      })}
    </main>
  );
}
