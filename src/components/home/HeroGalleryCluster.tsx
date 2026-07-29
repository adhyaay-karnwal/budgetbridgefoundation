"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { HeroMark } from "@/components/home/HeroMark";
import type { IntroPhase } from "@/components/intro/IntroProvider";
import {
  HERO_GALLERY_GRID,
  HERO_GALLERY_LOGO,
  HERO_GALLERY_TILES,
  gridPlacement,
} from "./heroGallery";

type HeroGalleryClusterProps = {
  phase: IntroPhase;
  returnHome: boolean;
};

export function HeroGalleryCluster({
  phase,
  returnHome,
}: HeroGalleryClusterProps) {
  if (returnHome) return null;

  const settled =
    phase === "hero" || phase === "chrome" || phase === "done";
  const revealing = phase === "gallery";
  const logoIntro = phase === "logo";

  const clusterClass = [
    "hero-gallery-cluster",
    revealing ? "hero-gallery-cluster--reveal" : "",
    settled ? "hero-gallery-cluster--settled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const logoPlacement = gridPlacement(
    HERO_GALLERY_LOGO.col,
    HERO_GALLERY_LOGO.row,
    HERO_GALLERY_LOGO.colSpan,
    HERO_GALLERY_LOGO.rowSpan,
  );

  return (
    <div
      className={clusterClass}
      style={
        {
          "--gallery-cols": HERO_GALLERY_GRID.columns,
          "--gallery-rows": HERO_GALLERY_GRID.rows,
        } as CSSProperties
      }
      aria-hidden
    >
      {HERO_GALLERY_TILES.map((tile, index) => {
        const placement = gridPlacement(
          tile.col,
          tile.row,
          tile.colSpan,
          tile.rowSpan,
        );

        return (
          <div
            key={tile.id}
            className="hero-gallery-tile overflow-hidden rounded-[3px] bg-[#ececec] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            style={{
              ...placement,
              animationDelay: revealing ? `${tile.delayMs}ms` : undefined,
            }}
          >
            <Image
              src={tile.image.src}
              alt=""
              fill
              className="object-cover"
              sizes="140px"
              priority={index < 4}
            />
          </div>
        );
      })}

      <div
        className={`hero-gallery-logo flex items-center justify-center ${logoIntro ? "home-intro-logo" : ""}`}
        style={logoPlacement}
      >
        <HeroMark />
      </div>
    </div>
  );
}
