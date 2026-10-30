import { CtaRow, PageHero, PageSection, Split } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/home/primitives";
import { DoodleCamera } from "@/components/playful/Doodles";
import { KickUps } from "@/components/playful/KickUps";
import { Reveal } from "@/components/playful/Reveal";
import { DoodleTile, StickerRow } from "@/components/playful/Stickers";
import { SOCCER_MEDIA } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Soccer & Media",
  description: `${SOCCER_MEDIA.description} Budget Bridge Foundation uses soccer and student media to teach budgeting, saving, and planning.`,
  path: "/programs/soccer-and-media",
  keywords: [
    "soccer financial literacy",
    "sports money lessons",
    "financial literacy media",
    "youth soccer nonprofit",
  ],
});

export default function SoccerMediaPage() {
  const { soccer, media } = SOCCER_MEDIA;

  return (
    <main>
      <PageHero
        label={SOCCER_MEDIA.label}
        title={SOCCER_MEDIA.title}
        description={SOCCER_MEDIA.description}
        tone="forest"
        doodle="soccer"
      >
        <StickerRow
          className="mt-8"
          items={[
            { label: "Soccer", doodle: "soccer", tone: "marigold" },
            { label: "Media", doodle: "camera", tone: "coral" },
            { label: "Education", doodle: "book", tone: "sky" },
            { label: "Financial literacy", doodle: "coin", tone: "cream" },
          ]}
        />
      </PageHero>

      <PageSection id="soccer" className="content-gutter-x scroll-mt-24 pb-24 pt-10">
        <Split>
          <Reveal>
            <SectionLabel>{soccer.label}</SectionLabel>
            <SectionHeading>{soccer.heading}</SectionHeading>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-ink-soft">
              {soccer.body}
            </p>
            <CtaRow
              primary={{ label: "Get the soccer money kit", href: "/vault#soccer-kit" }}
              primaryVariant="marigold"
              secondary={{ label: "Bring it to your school", href: "/contact" }}
            />
          </Reveal>
          <Reveal delay={120} className="mx-auto w-full max-w-[460px]">
            <KickUps />
          </Reveal>
        </Split>

        <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {soccer.topics.map((topic, index) => (
            <Reveal key={topic.label} delay={index * 80}>
              <DoodleTile {...topic} />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection id="media" className="content-gutter-x scroll-mt-24 pb-24">
        <Reveal className="grain relative overflow-hidden rounded-[36px] bg-coral px-6 py-16 text-ink sm:px-14 sm:py-20">
          <DoodleCamera
            size={200}
            strokeWidth={1.6}
            className="animate-float absolute -right-4 -top-6 opacity-30 sm:right-10 sm:top-8"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionLabel className="text-ink/80">{media.label}</SectionLabel>
              <SectionHeading>{media.heading}</SectionHeading>
              <p className="mt-6 max-w-xl text-[18px] leading-8 text-ink/75">
                {media.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <TextLink href={SITE.instagram} variant="ink" className="text-[16px]">
                  Follow {SITE.instagramHandle}
                </TextLink>
                <TextLink href="/blog" variant="ink" className="text-[16px]">
                  Read the blog
                </TextLink>
              </div>
            </div>
            <StickerRow items={media.formats} className="lg:justify-end" />
          </div>
        </Reveal>
      </PageSection>
    </main>
  );
}
