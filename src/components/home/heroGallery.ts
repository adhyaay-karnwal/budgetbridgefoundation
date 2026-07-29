import { MEDIA, type MediaImage } from "@/lib/media";

export type HeroGalleryTile = {
  id: string;
  image: MediaImage;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  delayMs: number;
};

/** 12×10 bento grid — tiles share 10px gaps and pack like the wireframe */
export const HERO_GALLERY_GRID = {
  columns: 12,
  rows: 10,
} as const;

export const HERO_GALLERY_LOGO = {
  col: 6,
  row: 5,
  colSpan: 2,
  rowSpan: 2,
} as const;

export const HERO_GALLERY_TILES: HeroGalleryTile[] = [
  {
    id: "founders-group",
    image: MEDIA.founders.group,
    col: 1,
    row: 2,
    colSpan: 2,
    rowSpan: 5,
    delayMs: 0,
  },
  {
    id: "shubh",
    image: MEDIA.founders.shubh,
    col: 1,
    row: 1,
    colSpan: 2,
    rowSpan: 1,
    delayMs: 40,
  },
  {
    id: "conference",
    image: MEDIA.events.conference,
    col: 3,
    row: 1,
    colSpan: 5,
    rowSpan: 2,
    delayMs: 60,
  },
  {
    id: "boe-4122",
    image: MEDIA.advocacy.photos[1],
    col: 3,
    row: 3,
    colSpan: 2,
    rowSpan: 2,
    delayMs: 100,
  },
  {
    id: "boe-4222",
    image: MEDIA.advocacy.photos[0],
    col: 5,
    row: 3,
    colSpan: 4,
    rowSpan: 1,
    delayMs: 80,
  },
  {
    id: "advocacy-highlight",
    image: MEDIA.highlights.advocacy,
    col: 2,
    row: 7,
    colSpan: 2,
    rowSpan: 3,
    delayMs: 50,
  },
  {
    id: "boe-4127",
    image: MEDIA.advocacy.photos[3],
    col: 8,
    row: 2,
    colSpan: 2,
    rowSpan: 4,
    delayMs: 70,
  },
  {
    id: "rohit",
    image: MEDIA.founders.rohit,
    col: 10,
    row: 4,
    colSpan: 2,
    rowSpan: 3,
    delayMs: 90,
  },
  {
    id: "boe-8248",
    image: MEDIA.advocacy.photos[4],
    col: 12,
    row: 1,
    colSpan: 1,
    rowSpan: 7,
    delayMs: 110,
  },
  {
    id: "boe-4224",
    image: MEDIA.advocacy.photos[2],
    col: 5,
    row: 8,
    colSpan: 4,
    rowSpan: 2,
    delayMs: 120,
  },
  {
    id: "avi",
    image: MEDIA.founders.avi,
    col: 9,
    row: 8,
    colSpan: 2,
    rowSpan: 2,
    delayMs: 130,
  },
];

export function gridPlacement(
  col: number,
  row: number,
  colSpan: number,
  rowSpan: number,
): { gridColumn: string; gridRow: string } {
  return {
    gridColumn: `${col} / span ${colSpan}`,
    gridRow: `${row} / span ${rowSpan}`,
  };
}
