/**
 * Color blocks shared by cards, frames, and stickers.
 * Each tone pairs a surface with readable text for that surface.
 */
export const TONES = {
  marigold: {
    bg: "bg-marigold",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-marigold",
    hex: "#f5b82e",
  },
  forest: {
    bg: "bg-forest",
    text: "text-cream",
    muted: "text-cream/75",
    border: "border-forest",
    hex: "#1f4b3a",
  },
  coral: {
    bg: "bg-coral",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-coral",
    hex: "#ee6b4d",
  },
  teal: {
    bg: "bg-teal",
    text: "text-cream",
    muted: "text-cream/80",
    border: "border-teal",
    hex: "#2f9c8f",
  },
  lilac: {
    bg: "bg-lilac",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-lilac",
    hex: "#b49be3",
  },
  sky: {
    bg: "bg-sky",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-sky",
    hex: "#9fd0ee",
  },
  cream: {
    bg: "bg-cream",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-cream",
    hex: "#fbf6ec",
  },
  blush: {
    bg: "bg-blush",
    text: "text-ink",
    muted: "text-ink/70",
    border: "border-blush",
    hex: "#f8d9cc",
  },
} as const;

export type Tone = keyof typeof TONES;

/** Rotating order used when a list needs varied colors */
export const TONE_CYCLE: Tone[] = ["marigold", "coral", "teal", "lilac", "forest", "sky"];

export function toneAt(index: number): Tone {
  return TONE_CYCLE[index % TONE_CYCLE.length];
}
