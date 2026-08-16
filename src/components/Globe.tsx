"use client";

import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";

export type GlobeCountry = {
  id: string;
  name: string;
  location: [number, number];
};

type GlobeProps = {
  markers?: GlobeCountry[];
  className?: string;
  speed?: number;
};

/**
 * Countries reached by Budget Bridge, pinpointed by country centroid.
 * Spans North America, Latin America, Africa, and Asia.
 */
export const COUNTRY_MARKERS: GlobeCountry[] = [
  { id: "usa", name: "USA", location: [39.83, -98.58] },
  // Latin America
  { id: "mexico", name: "Mexico", location: [23.63, -102.55] },
  { id: "colombia", name: "Colombia", location: [4.57, -74.3] },
  { id: "peru", name: "Peru", location: [-9.19, -75.02] },
  { id: "brazil", name: "Brazil", location: [-10.77, -52.92] },
  { id: "argentina", name: "Argentina", location: [-34.6, -58.38] },
  { id: "chile", name: "Chile", location: [-33.45, -70.67] },
  // Africa
  { id: "nigeria", name: "Nigeria", location: [9.08, 8.68] },
  { id: "ghana", name: "Ghana", location: [7.95, -1.02] },
  { id: "kenya", name: "Kenya", location: [-1.29, 36.82] },
  { id: "south-africa", name: "South Africa", location: [-30.56, 22.94] },
  // Asia
  { id: "india", name: "India", location: [22.35, 78.66] },
  { id: "philippines", name: "Philippines", location: [12.88, 121.77] },
  { id: "vietnam", name: "Vietnam", location: [16.0, 107.9] },
  { id: "indonesia", name: "Indonesia", location: [-2.55, 118.02] },
];

export function Globe({
  markers = COUNTRY_MARKERS,
  className = "",
  speed = 0.003,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0) return;
      if (globe) return; // already initialized

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.72, 0.58, 0.17], // brand gold
        glowColor: [0.94, 0.93, 0.91],
        markerElevation: 0,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.025,
          id: m.id,
        })),
        arcs: [],
        arcColor: [0.15, 0.3, 0.55],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7,
      });

      function animate() {
        if (!isPausedRef.current && !reduceMotion) phi += speed;
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"));
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, speed]);

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 6,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            padding: "0.3rem 0.5rem",
            background: "#1a1a2e",
            color: "#fff",
            borderRadius: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s",
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {m.name}
          </span>
        </div>
      ))}
    </div>
  );
}
