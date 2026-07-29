import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { PageHero, PageSection } from "@/components/PageChrome";
import { SectionHeading } from "@/components/home/primitives";
import { PROGRAMS } from "@/lib/content";
import { MEDIA, type MediaImage } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: `Programs · ${SITE.name}`,
  description: PROGRAMS.description,
});

const CARD_IMAGES = {
  "/programs/education": MEDIA.programs.gameclass,
  "/programs/seminars": MEDIA.events.conference,
  "/advocacy": MEDIA.advocacy.photos[0],
} as const satisfies Record<
  (typeof PROGRAMS.cards)[number]["href"],
  MediaImage
>;

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={PROGRAMS.label}
        title={PROGRAMS.title}
        description={PROGRAMS.description}
      />

      <PageSection>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {PROGRAMS.cards.map((card) => {
            const image = CARD_IMAGES[card.href];

            return (
              <Link key={card.href} href={card.href} className="group block">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[2px] bg-[#ececec]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="flex items-center gap-2 text-[17px] font-medium text-[#161514] transition-colors group-hover:text-[#717071]">
                  {card.title}
                  <Icon
                    icon={ArrowRight01Icon}
                    size={14}
                    className="shrink-0"
                    aria-hidden
                  />
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#717071]">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading>
          {SITE.impact.students} students · {SITE.impact.countries} countries ·{" "}
          {SITE.impact.volunteers} volunteers
        </SectionHeading>
        <p className="mt-4 max-w-xl text-[15px] leading-6 text-[#717071]">
          Impact from Budget Bridge programs worldwide.
        </p>
      </PageSection>
    </main>
  );
}
