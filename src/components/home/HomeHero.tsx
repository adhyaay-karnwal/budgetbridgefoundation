"use client";

import Link from "next/link";
import { useLayoutEffect, type CSSProperties } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import { HeroGalleryCluster } from "@/components/home/HeroGalleryCluster";
import { HeroMark } from "@/components/home/HeroMark";
import { TextLink } from "@/components/home/primitives";
import { Icon } from "@/components/Icon";
import { useIntro } from "@/components/intro/IntroProvider";
import { HERO } from "@/lib/site";

const LOGO_PHASE_MS = 700;
const GALLERY_PHASE_MS = 1100;
const HERO_TO_CHROME_MS = 520;
const HERO_TO_CHROME_RETURN_MS = 380;
const CHROME_TO_DONE_MS = 700;
const CHROME_TO_DONE_RETURN_MS = 480;

function delayStyle(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function HomeHero() {
  const { phase, setPhase, returnHome } = useIntro();
  const skipIntro = phase === "done";
  const animateLines =
    phase === "hero" || phase === "chrome" || phase === "done";
  const revealChrome = phase === "chrome" || phase === "done";
  const heroToChrome = returnHome
    ? HERO_TO_CHROME_RETURN_MS
    : HERO_TO_CHROME_MS;
  const chromeToDone = returnHome
    ? CHROME_TO_DONE_RETURN_MS
    : CHROME_TO_DONE_MS;

  useLayoutEffect(() => {
    if (phase === "logo") {
      const t = window.setTimeout(() => setPhase("gallery"), LOGO_PHASE_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === "gallery") {
      const t = window.setTimeout(() => setPhase("hero"), GALLERY_PHASE_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === "hero") {
      const t = window.setTimeout(() => setPhase("chrome"), heroToChrome);
      return () => window.clearTimeout(t);
    }
    if (phase === "chrome") {
      const t = window.setTimeout(() => setPhase("done"), chromeToDone);
      return () => window.clearTimeout(t);
    }
  }, [phase, setPhase, heroToChrome, chromeToDone]);

  let lines = "opacity-0";
  if (skipIntro) lines = "";
  else if (animateLines) lines = "home-hero-line";
  else if (phase === "logo" || phase === "gallery") lines = "opacity-0";

  let chrome = "opacity-0";
  if (skipIntro) chrome = "";
  else if (revealChrome) chrome = "home-hero-chrome";

  function lineDelay(ms: number): CSSProperties | undefined {
    if (skipIntro || !animateLines) return undefined;
    const offset = returnHome ? -40 : 0;
    return delayStyle(Math.max(0, ms + offset));
  }

  function chromeDelay(ms: number): CSSProperties | undefined {
    if (skipIntro || !revealChrome) return undefined;
    const offset = returnHome ? -30 : 0;
    return delayStyle(Math.max(0, ms + offset));
  }

  return (
    <section className="-mt-20 flex min-h-dvh flex-col pt-20">
      <div className="mt-20 content-gutter-x">
        <Link
          href={HERO.announcement.href}
          className={`group inline-flex items-center gap-3 rounded px-2 py-0.5 text-[15px] leading-7 text-[#161514] bg-[#f6f6f6] transition-colors duration-200 hover:bg-[#ececec] ${lines}`}
          style={lineDelay(0)}
        >
          <span>{HERO.announcement.title}</span>
          <span className="text-[#717071]">{HERO.announcement.date}</span>
          <Icon
            icon={ArrowRight01Icon}
            size={25}
            className="shrink-0 text-[#161514] transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <div className="flex min-h-[min(52vh,420px)] flex-1 items-center justify-center content-gutter-x pb-[74px]">
        {returnHome ? (
          <HeroMark />
        ) : (
          <HeroGalleryCluster phase={phase} returnHome={returnHome} />
        )}
      </div>

      <div className="content-gutter-x pb-[80px]">
        <h1 className="w-full max-w-none text-[40px] font-normal leading-[56px] text-[#111400]">
          <span className={`inline ${lines}`} style={lineDelay(120)}>
            {HERO.headline}{" "}
          </span>
          <span
            className={`inline text-[#d7d6d4] ${lines}`}
            style={lineDelay(220)}
          >
            {HERO.muted}
          </span>
        </h1>
        <div className={`mt-10 flex flex-wrap items-center gap-3 ${chrome}`}>
          <span className={chrome} style={chromeDelay(40)}>
            <AccentButton href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
            </AccentButton>
          </span>
          <span className={chrome} style={chromeDelay(120)}>
            <TextLink href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </TextLink>
          </span>
        </div>
      </div>
    </section>
  );
}
