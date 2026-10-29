import Image from "next/image";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import { LocalVideo } from "@/components/LocalVideo";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { Reveal } from "@/components/playful/Reveal";
import { TiltCard } from "@/components/playful/TiltCard";
import { ADVOCACY } from "@/lib/content";
import { MEDIA, type AdvocacyVideo } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { TONES, toneAt, type Tone } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Advocacy",
  description: `${ADVOCACY.body} Budget Bridge Foundation advocates for financial literacy policy and legislation in New Jersey and nationwide.`,
  path: "/advocacy",
  keywords: [
    "financial literacy advocacy",
    "financial literacy legislation",
    "New Jersey financial literacy",
    "Senate Bill 3497",
    "Assembly Bill A4764",
  ],
});

const GALLERY_TILTS = [-4, 3, -2, 5, -3, 2];

function Testimony({ video, tone }: { video: AdvocacyVideo; tone: Tone }) {
  const t = TONES[tone];
  const portrait = video.aspect === "portrait";
  return (
    <article className={portrait ? "text-center" : undefined}>
      <div
        className={`rounded-[22px] border-[8px] ${t.border} ${t.bg} ${portrait ? "mx-auto max-w-[310px]" : ""}`}
      >
        <LocalVideo src={video.src} aspect={video.aspect} className="rounded-[14px]" />
      </div>
      <h3 className="font-display mt-5 text-[24px] leading-tight text-ink">
        {video.title}
      </h3>
      <p className="mt-1 text-[14px] font-medium uppercase tracking-[0.1em] text-ink-soft">
        {video.speaker} · {video.duration}
      </p>
    </article>
  );
}

function TownSection({
  id,
  label,
  heading,
  body,
  videos,
  gridClassName,
  toneOffset,
}: {
  id: string;
  label: string;
  heading: string;
  body: string;
  videos: readonly AdvocacyVideo[];
  gridClassName: string;
  toneOffset: number;
}) {
  return (
    <PageSection id={id} className="content-gutter-x scroll-mt-24 pb-24 pt-10">
      <SectionLabel>{label}</SectionLabel>
      <SectionHeading>{heading}</SectionHeading>
      <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink-soft">{body}</p>
      <div className={`mt-12 grid gap-10 ${gridClassName}`}>
        {videos.map((video, index) => (
          <Reveal key={video.id} delay={index * 100}>
            <Testimony video={video} tone={toneAt(index + toneOffset)} />
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}

export default function AdvocacyPage() {
  const { legislation, randolph, parsippany } = ADVOCACY;
  const { photos, bills, videos } = MEDIA.advocacy;
  const randolphVideos = videos.filter((v) => v.id.startsWith("randolph-"));
  const parsippanyVideos = videos.filter((v) =>
    v.id.startsWith("parsippany-"),
  );

  return (
    <main>
      <PageHero
        label={ADVOCACY.label}
        title={ADVOCACY.title}
        description={ADVOCACY.body}
        tone="forest"
        doodle="megaphone"
      />

      <PageSection>
        <SectionLabel>Gallery</SectionLabel>
        <SectionHeading>From Board of Education meetings</SectionHeading>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={(index % 3) * 90} rotate={GALLERY_TILTS[index] * 1.5}>
              <TiltCard
                src={photo.src}
                alt={photo.alt}
                tone={toneAt(index)}
                rotate={GALLERY_TILTS[index % GALLERY_TILTS.length]}
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 45vw, 30vw"
              />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <span id="testimony" className="block scroll-mt-24" aria-hidden />
      <TownSection
        id="randolph"
        label="Randolph"
        heading={randolph.heading}
        body={randolph.body}
        videos={randolphVideos}
        gridClassName="sm:grid-cols-3"
        toneOffset={0}
      />

      <TownSection
        id="parsippany"
        label="Parsippany"
        heading={parsippany.heading}
        body={parsippany.body}
        videos={parsippanyVideos}
        gridClassName="lg:grid-cols-[1.4fr_1fr]"
        toneOffset={3}
      />

      <PageSection id="legislation" className="content-gutter-x scroll-mt-24 pb-24 pt-6">
        <div className="grain rounded-[36px] bg-marigold px-6 py-14 sm:px-12 sm:py-16">
          <SectionLabel className="text-ink/75">Legislation</SectionLabel>
          <SectionHeading>{legislation.heading}</SectionHeading>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink/75">
            {legislation.body}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {Object.values(bills).map((bill, index) => (
              <a
                key={bill.pdf}
                href={bill.pdf}
                className="group block rounded-[24px] border-2 border-ink bg-cream p-4 shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-sticker"
                style={{ rotate: `${index === 0 ? -1.5 : 1.5}deg` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white">
                  <Image
                    src={bill.screenshot}
                    alt={bill.label}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4">
                  <span className="font-display text-[24px] text-ink">{bill.label}</span>
                  <span className="rounded-full border-2 border-ink px-3 py-1 text-[13px] font-medium">
                    PDF ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
          <CtaRow
            primary={{
              label: "Volunteer in Public Policy",
              href: "/get-involved",
            }}
            secondary={{ label: "Talk to the team", href: "/contact" }}
            secondaryVariant="ink"
          />
        </div>
      </PageSection>
    </main>
  );
}
