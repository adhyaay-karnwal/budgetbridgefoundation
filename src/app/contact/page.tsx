import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { PageHero, PageSection } from "@/components/PageChrome";
import { SectionLabel } from "@/components/home/primitives";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import { Reveal } from "@/components/playful/Reveal";
import { CONTACT } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { TONES, type Tone } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Contact",
  description: `${CONTACT.description} Email Budget Bridge Foundation or connect on Instagram to volunteer, partner, or learn about our financial literacy programs.`,
  path: "/contact",
});

const CHANNELS: {
  label: string;
  value: string;
  href: string;
  note: string;
  tone: Tone;
  doodle: DoodleName;
  tilt: number;
}[] = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Partnerships, schools, volunteering, press",
    tone: "marigold",
    doodle: "heart",
    tilt: -1.5,
  },
  {
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    note: "DMs open — say hi",
    tone: "coral",
    doodle: "sparkle",
    tilt: 1.5,
  },
];

const REASONS = [
  { label: "Volunteer", href: "/get-involved", tone: "teal" },
  { label: "Book a seminar", href: `mailto:${CONTACT.email}?subject=Seminar%20request`, tone: "lilac" },
  { label: "Become a partner", href: `mailto:${CONTACT.email}?subject=Partnership`, tone: "marigold" },
] as const satisfies readonly { label: string; href: string; tone: Tone }[];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label={CONTACT.label}
        title={CONTACT.title}
        description={CONTACT.description}
        tone="sky"
        doodle="heart"
      />

      <PageSection>
        <div className="grid gap-8 md:grid-cols-2">
          {CHANNELS.map((channel, index) => {
            const t = TONES[channel.tone];
            const Doodle = DOODLES[channel.doodle];
            const external = channel.href.startsWith("http");
            return (
              <Reveal key={channel.label} delay={index * 120}>
                <a
                  href={channel.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`hover-wiggle grain group flex min-h-[280px] flex-col justify-between rounded-[30px] border-2 border-ink p-8 shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] duration-300 hover:-translate-y-1.5 rotate-[var(--tilt)] hover:rotate-0 hover:shadow-sticker sm:p-10 ${t.bg} ${t.text}`}
                  style={{ "--tilt": `${channel.tilt}deg` } as CSSProperties}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border-2 border-current px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.16em]">
                      {channel.label}
                    </span>
                    <Doodle size={64} className="wiggle-target" />
                  </div>
                  <div>
                    <p className="font-display flex items-center gap-3 text-[22px] leading-tight sm:text-[32px]">
                      {/* Let long emails break at the @ rather than mid-word */}
                      <span className="[overflow-wrap:anywhere]">
                        {channel.value.replace(/(.)@/, "$1\u200b@")}
                      </span>
                      <Icon
                        icon={ArrowUpRight01Icon}
                        size={28}
                        strokeWidth={2}
                        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </p>
                    <p className={`mt-2 text-[16px] ${t.muted}`}>{channel.note}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionLabel>Reaching out about…</SectionLabel>
          <div className="flex flex-wrap gap-4">
            {REASONS.map((reason) => (
              <Link
                key={reason.label}
                href={reason.href}
                className={`font-display rounded-full border-2 border-ink px-6 py-3 text-[22px] shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] hover:-translate-y-0.5 hover:shadow-sticker ${TONES[reason.tone].bg} ${TONES[reason.tone].text}`}
              >
                {reason.label} →
              </Link>
            ))}
          </div>
        </div>
      </PageSection>
    </main>
  );
}
