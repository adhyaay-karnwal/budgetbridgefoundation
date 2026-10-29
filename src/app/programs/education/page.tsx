import { OutboundLink } from "@/components/OutboundLink";
import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { BudgetJars } from "@/components/playful/BudgetJars";
import { Reveal } from "@/components/playful/Reveal";
import { StickerRow } from "@/components/playful/Stickers";
import { TiltCard } from "@/components/playful/TiltCard";
import { EDUCATION } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Education",
  description: `${EDUCATION.body} Budget Bridge Foundation offers free financial literacy tutoring and workshops for students ages 10–16 worldwide.`,
  path: "/programs/education",
  keywords: ["financial literacy tutoring", "youth money education", "personal finance workshops"],
});

const TOPICS = [
  { label: "Budgeting", doodle: "chart" },
  { label: "Saving", doodle: "piggy" },
  { label: "Investing", doodle: "sprout" },
  { label: "Money management", doodle: "coin" },
] as const;

const REGIONS = [
  { label: "Latin America", tone: "marigold" },
  { label: "Africa", tone: "coral" },
  { label: "Asia", tone: "teal" },
] as const;

export default function EducationPage() {
  const { gameclass } = EDUCATION;

  return (
    <main>
      <PageHero
        label={EDUCATION.label}
        title={EDUCATION.title}
        description={EDUCATION.body}
        tone="teal"
        doodle="globe"
        media={
          <TiltCard
            src={MEDIA.events.conference.src}
            alt={MEDIA.events.conference.alt}
            tone="cream"
            rotate={-4}
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 40vw"
            preload
          />
        }
      />

      <PageSection>
        <Split>
          <Reveal>
            <SectionLabel>Tutoring</SectionLabel>
            <SectionHeading>
              Live sessions for ages <span className="whitespace-nowrap">10–16</span>
            </SectionHeading>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-ink-soft">
              Teaching budgeting, saving, investing, and money management with
              trusted local NGO partners across Latin America, Africa, and Asia.
            </p>
            <CtaRow
              primary={{ label: "Volunteer", href: "/get-involved" }}
              primaryVariant="marigold"
              secondary={{
                label: "School seminars",
                href: "/programs/seminars",
              }}
            />
          </Reveal>
          <Reveal delay={120} className="space-y-10">
            <div>
              <p className="mb-4 font-hand text-[26px] text-ink-soft">What we cover</p>
              <StickerRow items={TOPICS} />
            </div>
            <div>
              <p className="mb-4 font-hand text-[26px] text-ink-soft">Where we teach</p>
              <StickerRow items={REGIONS} />
            </div>
          </Reveal>
        </Split>
      </PageSection>

      <PageSection id="gameclass" className="content-gutter-x scroll-mt-24 pb-24 pt-10">
        <Split>
          <Reveal rotate={-6} className="mx-auto w-full max-w-[560px]">
            <TiltCard
              src={MEDIA.programs.gameclass.src}
              alt={MEDIA.programs.gameclass.alt}
              tone="lilac"
              rotate={-2}
              aspect="aspect-[16/10]"
              imageClassName="object-left-top"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>Partners</SectionLabel>
            <SectionHeading>{gameclass.heading}</SectionHeading>
            <p className="mt-6 text-[18px] leading-8 text-ink-soft">
              {gameclass.bodyBefore}
              <OutboundLink href={gameclass.link.href}>
                {gameclass.link.label}
              </OutboundLink>
              {gameclass.bodyAfter}
            </p>
          </Reveal>
        </Split>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-4">
        <div className="grain rounded-[36px] bg-paper px-5 py-14 sm:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionLabel>Mini lesson</SectionLabel>
              <SectionHeading>Practice makes habits</SectionHeading>
              <p className="mt-6 max-w-md text-[18px] leading-8 text-ink-soft">
                Short exercises with instant feedback help money skills stick.
                Try splitting a $20 allowance and see what your choices say.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <BudgetJars />
            </Reveal>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
