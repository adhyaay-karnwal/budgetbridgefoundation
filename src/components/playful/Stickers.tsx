import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import { TONES, toneAt, type Tone } from "@/lib/tones";

type StickerItem = {
  label: string;
  doodle?: DoodleName;
  tone?: Tone;
};

const TILTS = [-3, 2, -1.5, 3, -2.5, 1.5];

/**
 * Row of pill "stickers" that sit at slight angles and wiggle on hover.
 * Purely decorative grouping of short labels (topics, departments, …).
 */
export function StickerRow({
  items,
  className = "",
}: {
  items: readonly StickerItem[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item, index) => {
        const tone = TONES[item.tone ?? toneAt(index)];
        const Doodle = item.doodle ? DOODLES[item.doodle] : null;
        return (
          <li
            key={item.label}
            className={`hover-wiggle inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 text-[15px] font-medium shadow-sticker-sm transition-transform duration-200 hover:-translate-y-0.5 ${tone.bg} ${tone.text}`}
            style={{ rotate: `${TILTS[index % TILTS.length]}deg` }}
          >
            {Doodle ? <Doodle size={22} strokeWidth={3} className="wiggle-target" /> : null}
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}

/** Large doodle tile used for departments and focus areas. */
export function DoodleTile({
  label,
  doodle,
  tone,
  description,
}: {
  label: string;
  doodle: DoodleName;
  tone: Tone;
  description?: string;
}) {
  const t = TONES[tone];
  const Doodle = DOODLES[doodle];

  return (
    <div
      className={`hover-wiggle grain group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-[26px] border-2 border-ink p-6 shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-sticker ${t.bg} ${t.text}`}
    >
      <Doodle size={64} className="wiggle-target" />
      <div className="mt-8">
        <p className="font-display text-[28px] leading-tight">{label}</p>
        {description ? (
          <p className={`mt-2 text-[15px] leading-6 ${t.muted}`}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}
