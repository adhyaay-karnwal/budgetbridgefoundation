import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import { SectionHeading, SectionLabel } from "@/components/home/primitives";
import { DoodleArrow } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { DoodleTile } from "@/components/playful/Stickers";
import { TiltCard } from "@/components/playful/TiltCard";
import { SEMINARS } from "@/lib/content";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Seminars",
  description: `${SEMINARS.body} Free elementary and middle school financial literacy seminars from Budget Bridge Foundation, a student-led nonprofit.`,
  path: "/programs/seminars",
  keywords: ["school financial literacy seminars", "elementary money skills", "middle school personal finance"],
});

const TOPICS = [
  { label: "Budgeting", doodle: "chart", tone: "marigold" },
  { label: "Saving", doodle: "piggy", tone: "teal" },
  { label: "Credit", doodle: "coin", tone: "coral" },
  { label: "Planning", doodle: "bulb", tone: "lilac" },
] as const;

export default function SeminarsPage() {
  return (
    <main>
      <PageHero
        label={SEMINARS.label}
        title={SEMINARS.title}
        description={SEMINARS.body}
        tone="coral"
        doodle="piggy"
      />

      <PageSection>
        <Split>
          <Reveal>
            <SectionLabel>Free for schools</SectionLabel>
            <SectionHeading>Money skills, early and easy</SectionHeading>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-ink-soft">
              Free seminars for elementary and middle school students that
              introduce basic personal finance skills early.
            </p>
            <CtaRow
              primary={{ label: "Contact us", href: "/contact" }}
              primaryVariant="marigold"
              secondary={{
                label: "Education & tutoring",
                href: "/programs/education",
              }}
            />
          </Reveal>
          <Reveal delay={120} rotate={6} className="relative mx-auto w-full max-w-[480px]">
            <TiltCard
              src={MEDIA.highlights.story.src}
              alt="Budget Bridge team outside Randolph Middle School"
              tone="marigold"
              rotate={3}
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <p className="absolute -bottom-12 right-0 flex items-end gap-1 font-hand text-[26px] text-ink-soft">
              <DoodleArrow size={48} className="rotate-[200deg] text-ink-faint" />
              Randolph Middle School
            </p>
          </Reveal>
        </Split>
      </PageSection>

      <PageSection className="content-gutter-x pb-24 pt-14">
        <SectionLabel>What students learn</SectionLabel>
        <SectionHeading>The basics, made friendly</SectionHeading>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {TOPICS.map((topic, index) => (
            <Reveal key={topic.label} delay={index * 80}>
              <DoodleTile {...topic} />
            </Reveal>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
