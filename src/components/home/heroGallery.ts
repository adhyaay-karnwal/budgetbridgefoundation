import { MEDIA, type MediaImage } from "@/lib/media";

/**
 * Hand-placed collage — tight around logo, jagged outer silhouette.
 * Stage 480×348. Logo 56×56 at (212, 136).
 * Inner tiles: 10px gutters. Outer edges intentionally staggered.
 */
export const HERO_GALLERY_STAGE = { width: 480, height: 348 } as const;

export const HERO_GALLERY_LOGO = {
  left: 212,
  top: 136,
  width: 56,
  height: 56,
} as const;

export type HeroGalleryTile = {
  id: string;
  image: MediaImage;
  left: number;
  top: number;
  width: number;
  height: number;
  position?: string;
  delayMs: number;
};

export const HERO_GALLERY_TILES: HeroGalleryTile[] = [
  // Outer top-left — inset, not flush to corner
  {
    id: "shubh",
    image: MEDIA.founders.shubh,
    left: 14,
    top: 16,
    width: 68,
    height: 62,
    position: "50% 12%",
    delayMs: 30,
  },
  // Far-left tall — stops short of bottom (jagged left edge)
  {
    id: "founders-group",
    image: MEDIA.founders.group,
    left: 0,
    top: 86,
    width: 72,
    height: 158,
    position: "50% 16%",
    delayMs: 0,
  },
  // Top band — doesn’t span full width
  {
    id: "conference",
    image: MEDIA.events.conference,
    left: 92,
    top: 0,
    width: 138,
    height: 74,
    position: "50% 30%",
    delayMs: 50,
  },
  // Above logo — shorter than conference row, offset down
  {
    id: "boe-4127",
    image: MEDIA.advocacy.photos[3],
    left: 264,
    top: 10,
    width: 78,
    height: 112,
    position: "45% 15%",
    delayMs: 70,
  },
  // Mid-left — tucked to logo
  {
    id: "boe-4222",
    image: MEDIA.advocacy.photos[0],
    left: 92,
    top: 84,
    width: 104,
    height: 68,
    position: "50% 32%",
    delayMs: 80,
  },
  // Square left of logo (same band — horizontal gutter only)
  {
    id: "boe-4122",
    image: MEDIA.advocacy.photos[1],
    left: 146,
    top: 168,
    width: 56,
    height: 56,
    position: "50% 22%",
    delayMs: 100,
  },
  // Bottom-left tall — shorter than far-right
  {
    id: "advocacy-highlight",
    image: MEDIA.highlights.advocacy,
    left: 92,
    top: 162,
    width: 40,
    height: 118,
    position: "50% 18%",
    delayMs: 55,
  },
  // Under logo — small square
  {
    id: "avi",
    image: MEDIA.founders.avi,
    left: 212,
    top: 202,
    width: 56,
    height: 50,
    position: "50% 10%",
    delayMs: 115,
  },
  // Lower-left portrait — extends past founders bottom
  {
    id: "boe-4224",
    image: MEDIA.advocacy.photos[2],
    left: 148,
    top: 242,
    width: 52,
    height: 110,
    position: "50% 28%",
    delayMs: 130,
  },
  // Right of logo
  {
    id: "rohit",
    image: MEDIA.founders.rohit,
    left: 278,
    top: 136,
    width: 72,
    height: 104,
    position: "50% 8%",
    delayMs: 90,
  },
  // Far-right — tall, starts high, ends mid (not aligned with bottom row)
  {
    id: "boe-8248",
    image: MEDIA.advocacy.photos[4],
    left: 378,
    top: 0,
    width: 56,
    height: 204,
    position: "40% 15%",
    delayMs: 105,
  },
  // Bottom-right patch only — no full-width footer bar
  {
    id: "volunteer",
    image: MEDIA.highlights.volunteer,
    left: 292,
    top: 272,
    width: 108,
    height: 54,
    position: "50% 38%",
    delayMs: 145,
  },
];
