"use client";

type LocalVideoProps = {
  src: string;
  className?: string;
  aspect?: "portrait" | "landscape";
  poster?: string;
};

const ASPECT_CLASS = {
  portrait: "aspect-[9/16] max-h-[520px]",
  landscape: "aspect-video",
} as const;

/** Plain MP4 player for locally hosted advocacy clips. */
export function LocalVideo({
  src,
  className = "",
  aspect = "landscape",
  poster,
}: LocalVideoProps) {
  return (
    <div
      className={`overflow-hidden rounded-[2px] bg-[#111] ${ASPECT_CLASS[aspect]} ${className}`}
    >
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
