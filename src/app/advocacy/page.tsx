import type { Metadata } from "next";
import Image from "next/image";
import { OutboundLink } from "@/components/OutboundLink";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import { LocalVideo } from "@/components/LocalVideo";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/home/primitives";
import { ADVOCACY } from "@/lib/content";
import { MEDIA, type AdvocacyVideo } from "@/lib/media";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Advocacy · ${SITE.name}`,
  description: ADVOCACY.body,
};

function Testimony({ video }: { video: AdvocacyVideo }) {
  return (
    <article>
      <LocalVideo src={video.src} aspect={video.aspect} />
      <h3 className="mt-4 text-[15px] font-medium text-[#161514]">
        {video.title}
      </h3>
      <p className="mt-1 text-[14px] text-[#a3a3a3]">
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
}: {
  id: string;
  label: string;
  heading: string;
  body: string;
  videos: readonly AdvocacyVideo[];
  gridClassName: string;
}) {
  return (
    <PageSection id={id}>
      <SectionLabel>{label}</SectionLabel>
      <SectionHeading>{heading}</SectionHeading>
      <p className="mt-6 max-w-2xl text-[15px] leading-6 text-[#717071]">
        {body}
      </p>
      <div className={`mt-12 grid gap-8 ${gridClassName}`}>
        {videos.map((video) => (
          <Testimony key={video.id} video={video} />
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
    <main className="bg-white">
      <PageHero
        label={ADVOCACY.label}
        title={ADVOCACY.title}
        description={ADVOCACY.body}
      />

      <PageSection>
        <SectionLabel>Gallery</SectionLabel>
        <SectionHeading>From Board of Education meetings</SectionHeading>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[#ececec]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </PageSection>

      <TownSection
        id="randolph"
        label="Randolph"
        heading={randolph.heading}
        body={randolph.body}
        videos={randolphVideos}
        gridClassName="sm:grid-cols-3"
      />

      <TownSection
        id="parsippany"
        label="Parsippany"
        heading={parsippany.heading}
        body={parsippany.body}
        videos={parsippanyVideos}
        gridClassName="lg:grid-cols-2"
      />

      <PageSection id="legislation">
        <SectionLabel>Legislation</SectionLabel>
        <SectionHeading>{legislation.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-[15px] leading-6 text-[#717071]">
          {legislation.body}
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {Object.values(bills).map((bill) => (
            <article key={bill.pdf}>
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[2px] bg-[#ececec]">
                <Image
                  src={bill.screenshot}
                  alt={bill.label}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <OutboundLink href={bill.pdf} className="text-[17px] font-medium">
                {bill.label}
              </OutboundLink>
            </article>
          ))}
        </div>
        <CtaRow
          primary={{
            label: "Volunteer in Public Policy",
            href: "/get-involved",
          }}
          secondary={{ label: "Talk to the team", href: "/contact" }}
        />
      </PageSection>
    </main>
  );
}
