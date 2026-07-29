"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { HeroMark } from "@/components/home/HeroMark";
import type { IntroPhase } from "@/components/intro/IntroProvider";
import {
  HERO_GALLERY_LOGO,
  HERO_GALLERY_STAGE,
  HERO_GALLERY_TILES,
} from "./heroGallery";

type HeroGalleryClusterProps = {
  phase: IntroPhase;
  /** Soft return from another page — still expand from logo, faster */
  returnHome: boolean;
};

export function HeroGalleryCluster({
  phase,
  returnHome,
}: HeroGalleryClusterProps) {
  const revealing = phase === "gallery" || (returnHome && phase === "hero");
  const settled =
    !returnHome &&
    (phase === "hero" || phase === "chrome" || phase === "done");
  const logoOnly = phase === "logo";
  const logoIntro = logoOnly ? "home-intro-logo" : "";

  const clusterClass = [
    "hero-gallery-cluster",
    revealing ? "hero-gallery-cluster--reveal" : "",
    settled ? "hero-gallery-cluster--settled" : "",
    returnHome && revealing ? "hero-gallery-cluster--return" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const logoLeftPct = (HERO_GALLERY_LOGO.left / HERO_GALLERY_STAGE.width) * 100;
  const logoTopPct = (HERO_GALLERY_LOGO.top / HERO_GALLERY_STAGE.height) * 100;
  const logoCxPct =
    ((HERO_GALLERY_LOGO.left + HERO_GALLERY_LOGO.width / 2) /
      HERO_GALLERY_STAGE.width) *
    100;
  const logoCyPct =
    ((HERO_GALLERY_LOGO.top + HERO_GALLERY_LOGO.height / 2) /
      HERO_GALLERY_STAGE.height) *
    100;

  return (
    <div
      className={clusterClass}
      style={
        {
          "--stage-w": `${HERO_GALLERY_STAGE.width}px`,
          "--stage-h": `${HERO_GALLERY_STAGE.height}px`,
          "--grow-x": `${logoCxPct}%`,
          "--grow-y": `${logoCyPct}%`,
        } as CSSProperties
      }
      aria-hidden
    >
      {HERO_GALLERY_TILES.map((tile, index) => (
        <div
          key={tile.id}
          className="hero-gallery-tile overflow-hidden rounded-[4px] bg-[#ececec]"
          style={{
            left: `${(tile.left / HERO_GALLERY_STAGE.width) * 100}%`,
            top: `${(tile.top / HERO_GALLERY_STAGE.height) * 100}%`,
            width: `${(tile.width / HERO_GALLERY_STAGE.width) * 100}%`,
            height: `${(tile.height / HERO_GALLERY_STAGE.height) * 100}%`,
            animationDelay: revealing ? `${tile.delayMs}ms` : undefined,
          }}
        >
          <Image
            src={tile.image.src}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: tile.position ?? "50% 50%" }}
            sizes="160px"
            priority={index < 5}
          />
        </div>
      ))}

      <div
        className={`hero-gallery-logo absolute z-10 ${logoIntro}`}
        style={{
          left: `${logoLeftPct}%`,
          top: `${logoTopPct}%`,
          width: `${(HERO_GALLERY_LOGO.width / HERO_GALLERY_STAGE.width) * 100}%`,
          height: `${(HERO_GALLERY_LOGO.height / HERO_GALLERY_STAGE.height) * 100}%`,
        }}
      >
        <HeroMark className="h-full w-full" />
      </div>
    </div>
  );
}
