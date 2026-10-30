import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { DOODLES, type DoodleName } from "@/components/playful/Doodles";
import { TONES, type Tone } from "@/lib/tones";

type ColorCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tone: Tone;
  /** Photo for the top of the card. Without one, a doodle panel is shown. */
  image?: { src: string; alt: string };
  doodle?: DoodleName;
  /** Panel color behind the doodle when there is no photo */
  panelTone?: Tone;
  aspect?: string;
  sizes?: string;
};

/** Photo card with a solid color footer, TEEEM-style. Lifts on hover. */
export function ColorCard({
  title,
  subtitle,
  href,
  tone,
  image,
  doodle = "sparkle",
  panelTone = "marigold",
  aspect = "aspect-[16/10]",
  sizes = "(max-width: 640px) 100vw, 45vw",
}: ColorCardProps) {
  const t = TONES[tone];
  const panel = TONES[panelTone];
  const Doodle = DOODLES[doodle];

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-ink shadow-sticker-sm transition-[translate,rotate,scale,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-sticker"
    >
      {image ? (
        <div className={`relative overflow-hidden bg-paper ${aspect}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`grain hover-wiggle flex items-center justify-center ${aspect} ${panel.bg} ${panel.text}`}
          aria-hidden
        >
          <Doodle
            size={120}
            strokeWidth={2}
            className="transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110"
          />
        </div>
      )}
      <div
        className={`flex flex-1 items-center justify-between gap-4 border-t-2 border-ink px-7 py-6 ${t.bg} ${t.text}`}
      >
        <div>
          <p className="font-display text-[26px] leading-tight">{title}</p>
          <p className={`mt-1 text-[16px] leading-6 ${t.muted}`}>{subtitle}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-current transition-transform duration-300 group-hover:rotate-[-45deg]">
          <Icon icon={ArrowRight01Icon} size={18} strokeWidth={2} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
