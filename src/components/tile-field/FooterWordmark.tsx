"use client";

import { useEffect, useRef } from "react";
import { TileField } from "@/components/tile-field/engine";

export function FooterWordmark() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const field = new TileField(host);
    field.start();

    const ro = new ResizeObserver(() => field.resize());
    ro.observe(host);

    return () => {
      ro.disconnect();
      field.destroy();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative mt-16 w-full"
      style={{ height: "clamp(88px, 16vw, 160px)" }}
      aria-hidden
    />
  );
}
