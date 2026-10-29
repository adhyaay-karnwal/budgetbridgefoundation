import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { Globe } from "@/components/Globe";
import { Icon } from "@/components/Icon";
import { CtaRow } from "@/components/PageChrome";
import {
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/home/primitives";
import { BridgeLine } from "@/components/playful/BridgeLine";
import { BudgetJars } from "@/components/playful/BudgetJars";
import { ColorCard } from "@/components/playful/ColorCard";
import { CountUp } from "@/components/playful/CountUp";
import {
  DOODLES,
  DoodleArrow,
  DoodleCoin,
  DoodleSparkle,
  DoodleStar,
  Highlight,
  type DoodleName,
} from "@/components/playful/Doodles";
import { Marquee } from "@/components/playful/Marquee";
import { Reveal } from "@/components/playful/Reveal";
import { TiltCard } from "@/components/playful/TiltCard";
import { getBlogPostsSorted } from "@/lib/content";
import { homeMetadata } from "@/lib/metadata";
import { MEDIA } from "@/lib/media";
import { PARTNER_COUNTRIES } from "@/lib/partners";
import { HERO, HOME, SITE } from "@/lib/site";
import { TONES, type Tone } from "@/lib/tones";

export const metadata = homeMetadata();

const HERO_PHOTOS: {
  image: { src: string; alt: string };
  tone: Tone;
  rotate: number;
  position?: string;
}[] = [
  { image: MEDIA.highlights.story, tone: "teal", rotate: -6 },
  { image: MEDIA.highlights.volunteer, tone: "marigold", rotate: 4, position: "50% 40%" },
  { image: MEDIA.advocacy.photos[2], tone: "coral", rotate: -3 },
  { image: MEDIA.advocacy.photos[3], tone: "lilac", rotate: 6 },
];

const STATS: { value: string; text: string; color: string }[] = [
  { value: `${SITE.impact.students}+`, text: "students reached, with partners in", color: "text-coral" },
  { value: SITE.impact.countries, text: "countries, a partner network of", color: "text-teal" },
  { value: SITE.impact.partnerReach, text: "people, and", color: "text-marigold-deep" },
  { value: SITE.impact.grants, text: "in partner grants.", color: "text-[#8a6cd1]" },
];

const PROGRAM_ROWS: {
  title: string;
  description: string;
  href: string;
  doodle: DoodleName;
  color: string;
}[] = [
  {
    title: HOME.benefits.cards[0].title,
    description: HOME.benefits.cards[0].description,
    href: "/programs/seminars",
    doodle: "book",
    color: "text-marigold",
  },
  {
    title: HOME.benefits.cards[1].title,
    description: HOME.benefits.cards[1].description,
    href: "/programs/education",
    doodle: "globe",
    color: "text-sky",
  },
  {
    title: HOME.benefits.cards[2].title,
    description: `${HOME.benefits.cards[2].descriptionBefore}${HOME.benefits.cards[2].descriptionLink.label}${HOME.benefits.cards[2].descriptionAfter}`,
    href: "/programs/education#gameclass",
    doodle: "bulb",
    color: "text-lilac",
  },
  {
    title: HOME.programs.tabs[2].label,
    description: HOME.programs.tabs[2].description,
    href: "/advocacy",
    doodle: "megaphone",
    color: "text-coral",
  },
];

const EXPLORE: {
  title: string;
  subtitle: string;
  href: string;
  tone: Tone;
  image: { src: string; alt: string };
}[] = [
  {
    title: "Explore our programs",
    subtitle: "Learning beyond the classroom",
    href: "/programs",
    tone: "lilac",
    image: MEDIA.events.conference,
  },
  {
    title: "Meet the team",
    subtitle: "The students behind the mission",
    href: "/about#team",
    tone: "coral",
    image: MEDIA.founders.group,
  },
  {
    title: "Policy & advocacy",
    subtitle: "Turning policy into progress",
    href: "/advocacy",
    tone: "forest",
    image: MEDIA.advocacy.photos[0],
  },
  {
    title: "Join the movement",
    subtitle: "Ways to get involved",
    href: "/get-involved",
    tone: "teal",
    image: MEDIA.advocacy.photos[4],
  },
];

function Hero() {
  return (
    <section className="relative">
      <div className="content-gutter-x relative pb-10 pt-8 sm:pt-12">
        <DoodleCoin
          size={70}
          className="animate-float absolute right-[6%] top-6 hidden text-marigold-deep md:block"
          style={{ "--r": "12deg" } as CSSProperties}
        />
        <DoodleSparkle
          size={40}
          className="animate-float absolute left-[46%] top-2 hidden text-coral lg:block"
          style={{ animationDelay: "1.2s" }}
        />

        <Link
          href={HERO.announcement.href}
          className="page-enter-text group inline-flex items-center gap-3 rounded-full border-2 border-ink bg-cream py-1 pl-1 pr-4 text-[14px] text-ink transition-colors hover:bg-paper"
        >
          <span className="rounded-full bg-marigold px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em]">
            New
          </span>
          <span className="line-clamp-1">{HERO.announcement.title}</span>
          <Icon
            icon={ArrowRight01Icon}
            size={16}
            strokeWidth={2}
            className="shrink-0 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <h1 className="font-display page-enter-text-delay text-[54px] font-normal leading-[0.98] text-ink sm:text-[84px] xl:text-[100px]">
            {HERO.headlineBefore}{" "}
            <span className="whitespace-nowrap">
              <Highlight>{HERO.headlineHighlight}</Highlight>,
            </span>{" "}
            {HERO.headlineAfter}
          </h1>
          <div className="page-enter-body lg:pb-3">
            <p className="text-[19px] leading-8 text-ink-soft">{HERO.body}</p>
            <CtaRow
              primary={HERO.primaryCta}
              primaryVariant="marigold"
              secondary={HERO.secondaryCta}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            />
          </div>
        </div>
      </div>

      {/* Photo prints straddle the cream → paper seam, TEEEM-style */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-paper" aria-hidden />
        <div className="content-gutter-x relative grid grid-cols-2 gap-5 pb-6 pt-6 md:grid-cols-4 md:gap-7">
          {HERO_PHOTOS.map((photo, index) => (
            <div
              key={photo.image.src}
              className="page-enter-body"
              style={{ animationDelay: `${200 + index * 90}ms` }}
            >
              <TiltCard
                src={photo.image.src}
                alt={photo.image.alt}
                tone={photo.tone}
                rotate={photo.rotate}
                objectPosition={photo.position}
                preload={index < 2}
                sizes="(max-width: 768px) 45vw, 23vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSentence() {
  return (
    <section className="grain bg-paper">
      <div className="content-gutter-x py-20 text-center sm:py-24">
        <Reveal>
          <p className="mx-auto max-w-5xl text-balance text-[15px] font-medium uppercase leading-[2.6] tracking-[0.14em] text-ink sm:text-[17px]">
            {STATS.map((stat) => (
              <span key={stat.text}>
                <CountUp
                  value={stat.value}
                  className={`font-display mx-2 inline-block align-[-0.12em] text-[44px] normal-case leading-none tracking-normal sm:text-[62px] ${stat.color}`}
                />{" "}
                {stat.text}{" "}
              </span>
            ))}
          </p>
          <p className="mt-10 text-[13px] font-medium uppercase tracking-[0.2em] text-ink-soft">
            Seminars · Tutoring · Workshops · Competitions · Advocacy · Curriculum
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="content-gutter-x py-24 sm:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <Reveal>
          <SectionLabel>{HOME.mission.heading}</SectionLabel>
          <p className="font-display text-[34px] leading-[1.15] text-ink sm:text-[46px]">
            We bridge the financial literacy gap, so the next generation can{" "}
            <span className="italic text-teal">thrive</span> in a global
            economy.
          </p>
          <p className="mt-8 max-w-xl text-[18px] leading-8 text-ink-soft">
            {HOME.mission.body}
          </p>
          <CtaRow
            primary={{ label: "Our story", href: "/about" }}
            secondary={{ label: "Meet the founders", href: "/about#team" }}
          />
        </Reveal>

        <Reveal delay={120} rotate={6} className="relative mx-auto w-full max-w-[460px]">
          <TiltCard
            src={MEDIA.founders.group.src}
            alt={MEDIA.founders.group.alt}
            tone="marigold"
            rotate={3}
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
          <p className="absolute -bottom-14 -left-2 flex items-end gap-1 font-hand text-[28px] leading-none text-ink-soft sm:-left-14">
            <DoodleArrow size={56} className="-scale-x-100 rotate-[200deg] text-ink-faint" />
            where it all began
          </p>
          <DoodleStar
            size={54}
            className="animate-float absolute -right-6 -top-8 text-coral"
            style={{ "--r": "-10deg" } as CSSProperties}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="grain bg-forest text-cream">
      <div className="content-gutter-x grid gap-14 py-24 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel className="text-cream/80">{HOME.programs.label}</SectionLabel>
          <SectionHeading className="text-cream">
            {HOME.programs.heading}
          </SectionHeading>
          <div className="mt-10">
            <AccentButton href="/programs" variant="cream">
              Discover all programs
            </AccentButton>
          </div>
        </Reveal>

        <ul>
          {PROGRAM_ROWS.map((row, index) => {
            const Doodle = DOODLES[row.doodle];
            return (
              <Reveal as="li" key={row.title} delay={index * 80}>
                <Link
                  href={row.href}
                  className="hover-wiggle group grid grid-cols-[1fr_auto] gap-6 border-b border-cream/25 py-8 first:pt-0"
                >
                  <div>
                    <h3 className="font-display flex items-center gap-3 text-[28px] leading-tight sm:text-[32px]">
                      {row.title}
                      <Icon
                        icon={ArrowRight01Icon}
                        size={22}
                        strokeWidth={2}
                        className="opacity-0 transition-[opacity,translate,scale] duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        aria-hidden
                      />
                    </h3>
                    <p className="mt-3 max-w-lg text-[17px] leading-7 text-cream/75">
                      {row.description}
                    </p>
                  </div>
                  <Doodle size={68} className={`wiggle-target ${row.color}`} />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TryIt() {
  return (
    <section className="content-gutter-x py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionLabel>Try it yourself</SectionLabel>
          <SectionHeading>
            Every dollar needs a <Highlight color="var(--coral)">job</Highlight>.
          </SectionHeading>
          <p className="mt-8 max-w-md text-[18px] leading-8 text-ink-soft">
            We make money skills hands-on. Students practice budgeting, saving,
            and planning with short, interactive lessons, not lectures. Here is
            a taste: split a $20 allowance across three jars.
          </p>
          <p className="mt-8 hidden items-center gap-2 font-hand text-[28px] text-ink-soft lg:flex">
            go on, give it a try
            <DoodleArrow size={64} className="-rotate-[40deg] text-ink-faint" />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <BudgetJars />
        </Reveal>
      </div>

      <div className="mt-24">
        <BridgeLine />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="pb-24">
      <div className="content-gutter-x">
        <div className="grain relative overflow-hidden rounded-[36px] bg-sky px-6 py-14 sm:px-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>{HOME.globe.label}</SectionLabel>
              <SectionHeading>{HOME.globe.heading}</SectionHeading>
              <p className="mt-7 max-w-lg text-[18px] leading-8 text-ink/75">
                {HOME.globe.body}
              </p>
              <CtaRow
                primary={HOME.globe.primaryCta}
                secondary={HOME.globe.secondaryCta}
              />
              <p className="mt-8 font-hand text-[24px] text-ink/70">
                psst… you can spin the globe
              </p>
            </Reveal>
            <div className="mx-auto w-full max-w-[520px]">
              <Globe />
            </div>
          </div>
        </div>
      </div>

      <Marquee
        label="Partner countries"
        className="mt-10 border-y-2 border-ink bg-marigold py-4"
        duration={110}
        items={PARTNER_COUNTRIES.map((country) => (
          <span key={country.id} className="font-display px-5 text-[26px] text-ink">
            {country.name}
          </span>
        ))}
        separator={<DoodleSparkle size={18} strokeWidth={3} className="text-ink" />}
      />
    </section>
  );
}

function Explore() {
  return (
    <section className="content-gutter-x pb-28">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-10">
        {EXPLORE.map((card, index) => (
          <Reveal key={card.title} delay={(index % 2) * 120}>
            <ColorCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stories() {
  const posts = getBlogPostsSorted().slice(0, 3);

  return (
    <section className="grain bg-paper">
      <div className="content-gutter-x py-24 sm:py-28">
        <div className="flex items-center gap-8">
          <h2 className="font-display shrink-0 text-[38px] leading-none text-ink sm:text-[52px]">
            Top stories
          </h2>
          <span className="h-0.5 flex-1 bg-ink" aria-hidden />
          <TextLink href="/blog" className="shrink-0 text-[16px]">
            All posts
          </TextLink>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 100}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border-2 border-ink bg-cream">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display mt-5 text-[24px] leading-tight text-ink transition-colors group-hover:text-teal">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                  <span>Blog · {post.author}</span>
                  <span>{post.dateShort}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionLabel>{HOME.press.heading}</SectionLabel>
          <ul className="border-t-2 border-ink">
            {HOME.press.cards.map((card) => {
              const external = card.href.startsWith("http");
              const tone = TONES[card.tone];
              return (
                <li key={card.outlet} className="border-b-2 border-ink">
                  <a
                    href={card.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group grid items-center gap-3 py-6 transition-colors sm:grid-cols-[220px_1fr_auto] sm:gap-8"
                  >
                    <span
                      className={`inline-flex w-fit rounded-full border-2 border-ink px-3 py-1 text-[13px] font-medium ${tone.bg} ${tone.text}`}
                    >
                      {card.outlet}
                    </span>
                    <span className="font-display text-[20px] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-[22px]">
                      {card.title}
                    </span>
                    <Icon
                      icon={ArrowRight01Icon}
                      size={22}
                      strokeWidth={2}
                      className="hidden text-ink transition-transform group-hover:translate-x-1 sm:block"
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactSentence />
      <Mission />
      <Programs />
      <TryIt />
      <Partners />
      <Explore />
      <Stories />
    </main>
  );
}
