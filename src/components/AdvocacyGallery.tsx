"use client";

import { useEffect, useState } from "react";
import { MagneticCarousel } from "@/components/MagneticCarousel";

type Photo = {
  src: string;
  alt: string;
};

export function AdvocacyGallery({ photos }: { photos: readonly Photo[] }) {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="mt-12 h-[min(420px,55vh)] w-full">
      <MagneticCarousel
        images={photos.map((photo) => ({
          src: photo.src,
          alt: photo.alt,
        }))}
        openSize={compact ? 320 : 500}
        collapsedWidth={compact ? 52 : 100}
        hoverWidth={compact ? 96 : 200}
        collapsedHeight={compact ? 260 : 340}
        hoverHeight={compact ? 300 : 400}
        gap={compact ? 8 : 16}
        influence={compact ? 120 : 200}
        autoPlay
        autoPlayInterval={3500}
      />
    </div>
  );
}
