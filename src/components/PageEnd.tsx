import { CtaRow } from "@/components/PageChrome";
import { DoodleArrow, Highlight } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { TiltCard } from "@/components/playful/TiltCard";
import { MEDIA } from "@/lib/media";
import { HOME, SITE } from "@/lib/site";
import type { Tone } from "@/lib/tones";

const CARDS: {
  word: string;
  note: string;
  href: string;
  tone: Tone;
  rotate: number;
  image: { src: string; alt: string };
}[] = [
  {
    word: "volunteer",
    note: "Join a department",
    href: "/get-involved",
    tone: "marigold",
    rotate: -5,
    image: MEDIA.highlights.volunteer,
  },
  {
    word: "partner",
    note: "Bring BBF to your community",
    href: "/contact",
    tone: "teal",
    rotate: 2,
    image: MEDIA.advocacy.photos[2],
  },
  {
    word: "follow",
    note: SITE.instagramHandle,
    href: SITE.instagram,
    tone: "coral",
    rotate: 6,
    image: MEDIA.highlights.story,
  },
];

/** Closing call to action — on every page, above the footer */
export function PageEnd() {
  return (
    <section className="content-gutter-x overflow-hidden pb-28 pt-20">
      <div className="text-center">
        <p className="font-hand text-[28px] text-ink-soft">
          {HOME.closing.kicker}
        </p>
        <h2 className="font-display mx-auto mt-2 max-w-4xl text-[44px] leading-[1.02] text-ink sm:text-[72px]">
          {HOME.closing.headlineBefore}{" "}
          <span className="whitespace-nowrap">
            <Highlight>{HOME.closing.headlineHighlight}</Highlight>,
          </span>{" "}
          {HOME.closing.headlineAfter}
        </h2>
        <CtaRow
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
          primary={HOME.closing.primaryCta}
          primaryVariant="marigold"
          secondary={HOME.closing.secondaryCta}
        />
      </div>

      <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-6">
        <DoodleArrow
          size={90}
          className="absolute -left-24 -top-10 hidden rotate-[8deg] text-ink-faint xl:block"
        />
        {CARDS.map((card, index) => (
          <Reveal key={card.word} delay={index * 110} rotate={card.rotate * 1.6}>
            <TiltCard
              href={card.href}
              src={card.image.src}
              alt={card.image.alt}
              tone={card.tone}
              rotate={card.rotate}
              aspect="aspect-[5/4]"
              sizes="(max-width: 640px) 90vw, 30vw"
              caption={
                <span className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-[34px] leading-none">
                    {card.word}
                  </span>
                  <span className="text-right text-[13px] font-medium leading-4 opacity-80">
                    {card.note}
                  </span>
                </span>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
