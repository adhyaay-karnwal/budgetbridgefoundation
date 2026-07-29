import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import {
  InvolvedShowcase,
  ProgramsShowcase,
} from "@/components/home/Interactive";
import {
  GraphicAdvocacy,
  GraphicCurriculum,
  GraphicFounders,
  GraphicGameClass,
  GraphicStatCountries,
  GraphicStatStudents,
  GraphicStatVolunteers,
  GraphicTutoring,
} from "@/components/home/graphics";
import {
  FeatureCard,
  MediaPlaceholder,
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/home/primitives";
import { Icon } from "@/components/Icon";
import { HERO, HOME } from "@/lib/site";

const BENEFIT_GRAPHICS = {
  curriculum: <GraphicCurriculum />,
  tutoring: <GraphicTutoring />,
  gameclass: <GraphicGameClass />,
} as const;

const IMPACT_GRAPHICS = {
  students: <GraphicStatStudents />,
  countries: <GraphicStatCountries />,
  volunteers: <GraphicStatVolunteers />,
} as const;

function HomeSection({
  children,
  className = "content-gutter-x pb-32 pt-8",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={className}>{children}</section>;
}

function CtaRow({
  primary,
  secondary,
  className = "mt-10 flex flex-wrap items-center gap-3",
}: {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={className}>
      <AccentButton href={primary.href}>{primary.label}</AccentButton>
      <TextLink href={secondary.href}>{secondary.label}</TextLink>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* 01 Hero */}
      <section className="-mt-20 flex min-h-dvh flex-col pt-20">
        <div className="mt-20 content-gutter-x">
          <Link
            href={HERO.announcement.href}
            className="inline-flex items-center gap-3 rounded px-2 py-0.5 text-[15px] leading-7 text-[#161514] bg-[#f6f6f6]"
          >
            <span>{HERO.announcement.title}</span>
            <span className="text-[#717071]">{HERO.announcement.date}</span>
            <Icon
              icon={ArrowRight01Icon}
              size={25}
              className="shrink-0 text-[#161514]"
              aria-hidden
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center content-gutter-x pb-[74px]">
          <div className="flex h-12 w-12 items-center justify-center bg-[#e8e8e8]">
            <Image
              src="/bbf-black.svg"
              alt="Budget Bridge Foundation"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>
        </div>

        <div className="content-gutter-x pb-[80px]">
          <h1 className="w-full max-w-none text-[40px] font-normal leading-[56px] text-[#111400]">
            <span>{HERO.headline} </span>
            <span className="text-[#d7d6d4]">{HERO.muted}</span>
          </h1>
          <CtaRow
            primary={HERO.primaryCta}
            secondary={HERO.secondaryCta}
          />
        </div>
      </section>

      {/* 02 Mission + founders */}
      <HomeSection className="content-gutter-x pb-32 pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>{HOME.mission.label}</SectionLabel>
            <SectionHeading>{HOME.mission.heading}</SectionHeading>
            <p className="mt-8 max-w-xl text-[17px] leading-7 text-[#717071]">
              {HOME.mission.body}
            </p>
          </div>
          <GraphicFounders />
        </div>
      </HomeSection>

      {/* 03 How we teach */}
      <HomeSection>
        <SectionLabel>{HOME.benefits.label}</SectionLabel>
        <SectionHeading>{HOME.benefits.heading}</SectionHeading>
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOME.benefits.cards.map((card) => {
            const description =
              card.id === "gameclass" ? (
                <>
                  {card.descriptionBefore}
                  <a
                    href={card.descriptionLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#161514] no-underline transition-colors hover:text-[#717071]"
                  >
                    {card.descriptionLink.label}
                  </a>
                  {card.descriptionAfter}
                </>
              ) : (
                card.description
              );

            return (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={description}
                graphic={BENEFIT_GRAPHICS[card.id]}
              />
            );
          })}
        </div>
      </HomeSection>

      {/* 04 Programs showcase */}
      <HomeSection>
        <SectionHeading>{HOME.programs.heading}</SectionHeading>
        <div className="mt-14">
          <ProgramsShowcase tabs={HOME.programs.tabs} />
        </div>
      </HomeSection>

      {/* 05 Advocacy */}
      <HomeSection>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>{HOME.approach.label}</SectionLabel>
            <SectionHeading>{HOME.approach.heading}</SectionHeading>
            <ul className="mt-10 space-y-5">
              {HOME.approach.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ececec]">
                    <Icon
                      icon={Tick02Icon}
                      size={12}
                      className="text-[#161514]"
                      aria-hidden
                    />
                  </span>
                  <span className="text-[15px] leading-6 text-[#161514]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <CtaRow
              primary={HOME.approach.primaryCta}
              secondary={HOME.approach.secondaryCta}
              className="mt-10 flex flex-wrap items-center gap-4"
            />
          </div>
          <GraphicAdvocacy />
        </div>
      </HomeSection>

      {/* 06 Get involved */}
      <HomeSection>
        <SectionLabel>{HOME.involved.label}</SectionLabel>
        <SectionHeading>{HOME.involved.heading}</SectionHeading>
        <div className="mt-14">
          <InvolvedShowcase
            tabs={HOME.involved.tabs}
            intro={HOME.involved.intro}
          />
        </div>
      </HomeSection>

      {/* 07 Impact */}
      <HomeSection>
        <SectionLabel>{HOME.impact.label}</SectionLabel>
        <SectionHeading>{HOME.impact.heading}</SectionHeading>
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOME.impact.cards.map((card) => (
            <FeatureCard
              key={card.id}
              title={card.title}
              description={card.description}
              graphic={IMPACT_GRAPHICS[card.id]}
            />
          ))}
        </div>
      </HomeSection>

      {/* 08 Press */}
      <HomeSection>
        <SectionLabel>{HOME.press.label}</SectionLabel>
        <SectionHeading>{HOME.press.heading}</SectionHeading>
        <div className="mt-14 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {HOME.press.cards.map((card) => {
            const external = card.href.startsWith("http");

            return (
              <a
                key={card.outlet}
                href={card.href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`flex min-h-[340px] min-w-[260px] flex-col justify-between rounded-[2px] p-7 text-white md:min-w-0 ${card.tone}`}
              >
                <p className="text-[13px] text-white/70">{card.outlet}</p>
                <p className="text-[18px] font-medium leading-7 text-white">
                  {card.title}
                </p>
                <span className="text-[13px] text-white/70">Read →</span>
              </a>
            );
          })}
        </div>
      </HomeSection>

      {/* 09 Featured blog */}
      <HomeSection className="content-gutter-x pb-24 pt-8">
        <SectionLabel>{HOME.blog.label}</SectionLabel>
        <Link href={HOME.blog.href} className="group block">
          <SectionHeading>{HOME.blog.heading}</SectionHeading>
          <MediaPlaceholder className="mt-12 aspect-[21/9] w-full min-h-[240px]" />
          <p className="mt-4 text-[15px] text-[#717071] group-hover:text-[#161514]">
            {HOME.blog.date}
          </p>
        </Link>
      </HomeSection>

      {/* 10 Highlight cards — photo placeholders for now */}
      <HomeSection>
        <div className="grid gap-8 md:grid-cols-3">
          {HOME.highlights.items.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <MediaPlaceholder className="aspect-[5/4] w-full" />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-[15px] text-[#161514] transition-colors group-hover:text-[#717071]">
                  {item.title}
                </span>
                <span className="text-[15px] text-[#a3a3a3]">{item.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </HomeSection>

      {/* 11 Closing CTA */}
      <HomeSection className="content-gutter-x pb-36 pt-16 text-center">
        <h2 className="text-[40px] font-medium leading-[1.15] tracking-tight text-[#111400]">
          {HOME.closing.line1}
          <br />
          {HOME.closing.line2}
        </h2>
        <CtaRow
          primary={HOME.closing.primaryCta}
          secondary={HOME.closing.secondaryCta}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        />
      </HomeSection>
    </main>
  );
}
