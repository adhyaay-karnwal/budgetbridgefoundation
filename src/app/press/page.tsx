import type { CSSProperties } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { PageHero, PageSection } from "@/components/PageChrome";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { PRESS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { TONES } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Press",
  description: `${PRESS.description} News coverage of Budget Bridge Foundation's financial literacy work in Parsippany, Randolph, and New Jersey schools.`,
  path: "/press",
  keywords: ["Budget Bridge Foundation news", "financial literacy press", "Parsippany schools"],
});

const CARD_DOODLES: DoodleName[] = ["megaphone", "book", "scale"];
const CARD_TILTS = [-2, 1.5, -1];

export default function PressPage() {
  return (
    <main>
      <PageHero
        label={PRESS.label}
        title={PRESS.title}
        description={PRESS.description}
        tone="marigold"
        doodle="megaphone"
      />

      <PageSection>
        <div className="grid gap-8 md:grid-cols-3">
          {PRESS.articles.map((card, index) => {
            const external = card.href.startsWith("http");
            const t = TONES[card.tone];
            const Doodle = DOODLES[CARD_DOODLES[index % CARD_DOODLES.length]];

            return (
              <Reveal key={card.outlet} delay={index * 100}>
                <a
                  href={card.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={`hover-wiggle grain group flex h-full min-h-[380px] flex-col justify-between rounded-[30px] border-2 border-ink p-8 shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] duration-300 hover:-translate-y-1.5 rotate-[var(--tilt)] hover:rotate-0 hover:shadow-sticker ${t.bg} ${t.text}`}
                  style={{ "--tilt": `${CARD_TILTS[index % CARD_TILTS.length]}deg` } as CSSProperties}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border-2 border-current px-3 py-1 text-[13px] font-medium">
                      {card.outlet}
                    </span>
                    <Doodle size={56} className="wiggle-target shrink-0" />
                  </div>
                  <p className="font-display mt-10 text-[24px] leading-snug">
                    {card.title}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium">
                    Read
                    <Icon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </PageSection>
    </main>
  );
}
