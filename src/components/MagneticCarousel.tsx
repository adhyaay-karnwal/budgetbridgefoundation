"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const EASE_PRESETS: Record<string, string> = {
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
};

type CarouselImage = {
  src: string;
  alt?: string;
};

type TransitionConfig = {
  type?: string;
  duration?: number;
  ease?: string | number[];
};

type MagneticCarouselProps = {
  images: readonly CarouselImage[];
  collapsedWidth?: number;
  hoverWidth?: number;
  collapsedHeight?: number;
  hoverHeight?: number;
  openSize?: number;
  gap?: number;
  influence?: number;
  blur?: number;
  transition?: TransitionConfig;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  style?: CSSProperties;
};

function parseTransition(t?: TransitionConfig) {
  const dur = Math.max(0.05, t?.duration ?? 0.5);
  let ease = "cubic-bezier(0.44, 0, 0.56, 1)";
  if (Array.isArray(t?.ease) && t.ease.length === 4) {
    ease = `cubic-bezier(${t.ease.join(", ")})`;
  } else if (typeof t?.ease === "string" && EASE_PRESETS[t.ease]) {
    ease = EASE_PRESETS[t.ease];
  } else if (t?.type === "spring") {
    ease = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }
  return { dur, ease };
}

/** macOS-dock style image carousel — bars magnify on hover; click or auto-play to expand. */
export function MagneticCarousel({
  images,
  collapsedWidth = 100,
  hoverWidth = 200,
  collapsedHeight = 340,
  hoverHeight = 400,
  openSize = 600,
  gap = 16,
  influence = 200,
  blur = 2,
  transition = { type: "tween", duration: 0.3, ease: "easeInOut" },
  autoPlay = false,
  autoPlayInterval = 3500,
  className = "",
  style,
}: MagneticCarouselProps) {
  const count = images.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [factors, setFactors] = useState<number[]>(() => images.map(() => 0));
  const [open, setOpen] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const [autoEnabled, setAutoEnabled] = useState(autoPlay);
  const [reduceMotion, setReduceMotion] = useState(false);

  const targetRef = useRef<number[]>(images.map(() => 0));
  const curRef = useRef<number[]>(images.map(() => 0));
  const loopRef = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  const { dur, ease } = parseTransition(transition);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setAutoEnabled(autoPlay && !reduceMotion);
  }, [autoPlay, reduceMotion]);

  useEffect(() => {
    targetRef.current = images.map(() => 0);
    curRef.current = images.map(() => 0);
    setFactors(images.map(() => 0));
    setOpen(null);
  }, [count, images]);

  useEffect(
    () => () => {
      cancelAnimationFrame(loopRef.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    },
    [],
  );

  const pauseAuto = (resumeAfterMs?: number) => {
    pausedRef.current = true;
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    if (resumeAfterMs !== undefined) {
      pauseTimer.current = setTimeout(() => {
        pausedRef.current = false;
      }, resumeAfterMs);
    }
  };

  // Auto-advance: cycle which image is expanded.
  useEffect(() => {
    if (!autoEnabled || count < 2) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setOpen((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % count;
      });
    }, autoPlayInterval);

    return () => window.clearInterval(id);
  }, [autoEnabled, autoPlayInterval, count]);

  // Kick off on first slide when autoplay starts.
  useEffect(() => {
    if (!autoEnabled || count === 0) return;
    setOpen(0);
  }, [autoEnabled, count]);

  const startLoop = () => {
    if (loopRef.current) return;
    const step = () => {
      const tgt = targetRef.current;
      const cur = curRef.current;
      let moving = false;
      for (let i = 0; i < cur.length; i++) {
        const d = (tgt[i] ?? 0) - cur[i];
        if (Math.abs(d) > 0.001) {
          cur[i] += d * 0.2;
          moving = true;
        } else {
          cur[i] = tgt[i] ?? 0;
        }
      }
      setFactors([...cur]);
      loopRef.current = moving ? requestAnimationFrame(step) : 0;
    };
    loopRef.current = requestAnimationFrame(step);
  };

  const setTargetFromCursor = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = clientX - rect.left;
    const totalBase = count * collapsedWidth + (count - 1) * gap;
    const startX = (rect.width - totalBase) / 2;
    targetRef.current = images.map((_, i) => {
      const center = startX + i * (collapsedWidth + gap) + collapsedWidth / 2;
      const dist = Math.abs(cx - center);
      const f = Math.max(0, 1 - dist / influence);
      return f * f * (3 - 2 * f);
    });
    startLoop();
  };

  const onMove = (e: React.MouseEvent) => {
    if (open !== null) return;
    setTargetFromCursor(e.clientX);
  };

  const onEnter = () => {
    pauseAuto();
    if (autoEnabled) {
      targetRef.current = images.map(() => 0);
      curRef.current = images.map(() => 0);
      setFactors(images.map(() => 0));
      setOpen(null);
    }
  };

  const onLeave = () => {
    if (open !== null && !autoEnabled) return;
    targetRef.current = images.map(() => 0);
    startLoop();
    if (autoEnabled) {
      pauseAuto(600);
      setOpen(0);
    }
  };

  const close = () => {
    targetRef.current = images.map(() => 0);
    curRef.current = images.map(() => 0);
    setFactors(images.map(() => 0));
    setClosing(true);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setClosing(false), dur * 1000);
    setOpen(null);
    if (autoEnabled) pauseAuto(autoPlayInterval);
  };

  const sizeFor = (i: number) => {
    if (open !== null) {
      return i === open
        ? { width: openSize, height: openSize }
        : { width: collapsedWidth, height: collapsedHeight };
    }
    const f = factors[i] ?? 0;
    return {
      width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    };
  };

  const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
  const barTransition =
    open !== null || closing || autoEnabled ? openEase : "none";

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap,
        position: "relative",
        overflow: "visible",
      }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: open !== null && !autoEnabled ? "auto" : "none",
        }}
        onClick={close}
        aria-hidden
      />
      {images.map((img, i) => {
        const { width, height } = sizeFor(i);
        const blurred = open !== null && i !== open;
        return (
          <button
            key={img.src}
            type="button"
            aria-label={img.alt ?? `View image ${i + 1}`}
            aria-expanded={open === i}
            onClick={(e) => {
              e.stopPropagation();
              pauseAuto(autoPlayInterval * 2);
              if (open === i) {
                if (autoEnabled) {
                  setOpen((prev) =>
                    prev === null ? 0 : (prev + 1) % count,
                  );
                } else {
                  close();
                }
              } else {
                setOpen(i);
              }
            }}
            style={{
              flex: "none",
              width,
              height,
              overflow: "hidden",
              cursor: "pointer",
              transition: barTransition,
              willChange: "width, height",
              position: "relative",
              zIndex: open === i ? 3 : 2,
              filter: blurred ? `blur(${blur}px)` : "none",
              opacity: blurred ? 0.6 : 1,
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "none",
              padding: 0,
              borderRadius: 2,
            }}
          />
        );
      })}
    </div>
  );
}
