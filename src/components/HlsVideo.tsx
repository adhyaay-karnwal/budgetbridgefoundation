"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HlsVideoProps = {
  src: string;
  className?: string;
  aspect?: "portrait" | "landscape";
};

/** Plays Squarespace HLS streams (Safari native, Chrome via hls.js). */
export function HlsVideo({
  src,
  className = "",
  aspect = "landscape",
}: HlsVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <div
      className={`overflow-hidden rounded-[2px] bg-[#111] ${
        aspect === "portrait" ? "aspect-[9/16] max-h-[520px]" : "aspect-video"
      } ${className}`}
    >
      <video
        ref={ref}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
