import type { Metadata } from "next";
import { AccentButton, type ButtonVariant } from "@/components/AccentButton";
import { OutboundLink } from "@/components/OutboundLink";
import { PageHero, PageSection } from "@/components/PageChrome";
import { SectionHeading, SectionLabel } from "@/components/home/primitives";
import { BudgetJars } from "@/components/playful/BudgetJars";
import { CountUp } from "@/components/playful/CountUp";
import { DOODLES, Highlight, type DoodleName } from "@/components/playful/Doodles";
import { DoodleTile, StickerRow } from "@/components/playful/Stickers";
import { TiltCard } from "@/components/playful/TiltCard";
import { MEDIA } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { TONES, type Tone } from "@/lib/tones";

export const metadata: Metadata = pageMetadata({
  title: "Design System",
  description: "Internal design system reference.",
  path: "/design-system",
  noIndex: true,
});

const BUTTONS: ButtonVariant[] = ["marigold", "ink", "cream"];

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <PageSection className="content-gutter-x pb-20 pt-4">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display mb-10 text-[34px] leading-tight text-ink">{title}</h2>
      {children}
    </PageSection>
  );
}

export default function DesignSystemPage() {
  return (
    <main>
      <PageHero
        label="Internal"
        title="Budget Bridge design system"
        description="Warm paper, bold color blocks, a soft serif, and hand-drawn doodles. Everything here is a live component used across the site."
        tone="marigold"
        doodle="sparkle"
      />

      <Block label="Color" title="Palette & tones">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {(Object.keys(TONES) as Tone[]).map((tone) => (
            <div
              key={tone}
              className={`rounded-[22px] border-2 border-ink p-5 shadow-sticker-sm ${TONES[tone].bg} ${TONES[tone].text}`}
            >
              <p className="font-display text-[24px] capitalize">{tone}</p>
              <p className={`mt-6 font-mono text-[13px] ${TONES[tone].muted}`}>
                {TONES[tone].hex}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block label="Type" title="Typography">
        <div className="space-y-8">
          <div>
            <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Display · Fraunces (SOFT 100, WONK 1)
            </p>
            <p className="font-display text-[64px] leading-none text-ink">
              Money skills for <Highlight>every student</Highlight>
            </p>
          </div>
          <SectionHeading>Section heading · 52px</SectionHeading>
          <div>
            <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Body · Acumin Pro
            </p>
            <p className="max-w-2xl text-[18px] leading-8 text-ink-soft">
              We bridge the financial literacy gap by empowering students
              through local seminars, school presentations, workshops,
              competitions, and live tutoring.
            </p>
          </div>
          <p className="font-hand text-[30px] text-ink-soft">Handwritten notes · Caveat</p>
        </div>
      </Block>

      <Block label="Actions" title="Buttons & links">
        <div className="flex flex-wrap items-center gap-6">
          {BUTTONS.map((variant) => (
            <AccentButton key={variant} href="/design-system" variant={variant}>
              {variant}
            </AccentButton>
          ))}
          <OutboundLink href="/design-system">Text link</OutboundLink>
          <OutboundLink href="https://www.instagram.com/budgetbridgefoundation/" variant="instagram">
            Instagram
          </OutboundLink>
        </div>
      </Block>

      <Block label="Doodles" title="Hand-drawn icons">
        <div className="grid grid-cols-4 gap-6 text-ink sm:grid-cols-8">
          {(Object.keys(DOODLES) as DoodleName[]).map((name) => {
            const Doodle = DOODLES[name];
            return (
              <div key={name} className="flex flex-col items-center gap-2">
                <Doodle size={56} />
                <span className="text-[12px] text-ink-faint">{name}</span>
              </div>
            );
          })}
        </div>
      </Block>

      <Block label="Components" title="Cards, stickers & stats">
        <div className="grid gap-12 lg:grid-cols-3">
          <TiltCard
            src={MEDIA.highlights.story.src}
            alt={MEDIA.highlights.story.alt}
            tone="teal"
            rotate={-3}
          />
          <div className="space-y-8">
            <StickerRow
              items={[
                { label: "Budgeting", doodle: "chart" },
                { label: "Saving", doodle: "piggy" },
                { label: "Credit", doodle: "coin" },
              ]}
            />
            <DoodleTile label="Research" doodle="magnifier" tone="lilac" />
          </div>
          <div className="flex flex-col justify-center">
            <CountUp value="45,000+" className="font-display text-[72px] leading-none text-coral" />
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              CountUp stat
            </p>
          </div>
        </div>
      </Block>

      <Block label="Interactive" title="Budget jars">
        <div className="max-w-2xl">
          <BudgetJars />
        </div>
      </Block>
    </main>
  );
}
