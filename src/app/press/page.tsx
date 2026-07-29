import type { Metadata } from "next";
import { PageHero, PageSection } from "@/components/PageChrome";
import { PRESS } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: `Press · ${SITE.name}`,
  description: PRESS.description,
});

export default function PressPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={PRESS.label}
        title={PRESS.title}
        description={PRESS.description}
      />

      <PageSection>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {PRESS.articles.map((card) => {
            const external = card.href.startsWith("http");

            return (
              <a
                key={card.outlet}
                href={card.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`group flex min-h-[340px] min-w-[260px] flex-col justify-between rounded-[2px] p-7 text-white transition-[transform,filter] duration-300 ease-out hover:-translate-y-1 hover:brightness-110 md:min-w-0 ${card.tone}`}
              >
                <p className="text-[13px] text-white/70">{card.outlet}</p>
                <p className="text-[18px] font-medium leading-7 text-white">
                  {card.title}
                </p>
                <span className="text-[13px] text-white/70 transition-transform duration-300 group-hover:translate-x-1">
                  Read →
                </span>
              </a>
            );
          })}
        </div>
      </PageSection>
    </main>
  );
}
