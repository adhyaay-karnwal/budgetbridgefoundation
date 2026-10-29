import type { CSSProperties } from "react";
import { PageHero, PageSection } from "@/components/PageChrome";
import { SectionHeading, SectionLabel } from "@/components/home/primitives";
import { ColorCard } from "@/components/playful/ColorCard";
import { CountUp } from "@/components/playful/CountUp";
import { Reveal } from "@/components/playful/Reveal";
import { PROGRAMS } from "@/lib/content";
import { MEDIA, type MediaImage } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { TONES, type Tone } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Programs",
  description: `${PROGRAMS.description} Budget Bridge Foundation programs include live tutoring, school seminars, workshops, and financial literacy advocacy for students worldwide.`,
  path: "/programs",
  keywords: ["financial literacy programs", "student financial education", "nonprofit education programs"],
});

const CARD_STYLE = {
  "/programs/education": { image: MEDIA.programs.gameclass, tone: "teal" },
  "/programs/seminars": { image: MEDIA.highlights.story, tone: "coral" },
  "/advocacy": { image: MEDIA.advocacy.photos[0], tone: "forest" },
} as const satisfies Record<
  (typeof PROGRAMS.cards)[number]["href"],
  { image: MediaImage; tone: Tone }
>;

const IMPACT: { value: string; label: string; tone: Tone; tilt: number }[] = [
  { value: `${SITE.impact.students}+`, label: "students reached", tone: "marigold", tilt: -3 },
  { value: SITE.impact.partnerReach, label: "partner reach", tone: "teal", tilt: 2 },
  { value: SITE.impact.grants, label: "in partner grants", tone: "coral", tilt: -2 },
  { value: SITE.impact.countries, label: "partner countries", tone: "lilac", tilt: 3 },
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        label={PROGRAMS.label}
        title={PROGRAMS.title}
        description={PROGRAMS.description}
        tone="lilac"
        doodle="book"
      />

      <PageSection>
        <div className="grid gap-8 md:grid-cols-3">
          {PROGRAMS.cards.map((card, index) => {
            const style = CARD_STYLE[card.href];
            return (
              <Reveal key={card.href} delay={index * 100}>
                <ColorCard
                  title={card.title}
                  subtitle={card.description}
                  href={card.href}
                  tone={style.tone}
                  image={style.image}
                  aspect="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-6">
        <SectionLabel>Impact</SectionLabel>
        <SectionHeading>What our programs add up to</SectionHeading>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {IMPACT.map((stat, index) => {
            const t = TONES[stat.tone];
            return (
              <Reveal key={stat.label} delay={index * 90} rotate={stat.tilt * 2}>
                <div
                  className={`grain flex aspect-square flex-col items-center justify-center rounded-full border-2 border-ink p-6 text-center shadow-sticker transition-transform duration-300 rotate-[var(--tilt)] hover:rotate-0 hover:scale-105 ${t.bg} ${t.text}`}
                  style={{ "--tilt": `${stat.tilt}deg` } as CSSProperties}
                >
                  <CountUp
                    value={stat.value}
                    className="font-display text-[clamp(34px,5vw,58px)] leading-none"
                  />
                  <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-10 max-w-xl text-[16px] leading-7 text-ink-soft">
          Impact from Budget Bridge programs and partners worldwide.
        </p>
      </PageSection>
    </main>
  );
}
