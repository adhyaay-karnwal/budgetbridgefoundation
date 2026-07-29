"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type IntroPhase = "logo" | "gallery" | "hero" | "chrome" | "done";

type IntroContextValue = {
  phase: IntroPhase;
  setPhase: (phase: IntroPhase) => void;
  showChrome: boolean;
  /** Navigated to home from another route — shorter hero enter, no logo hold */
  returnHome: boolean;
};

const IntroContext = createContext<IntroContextValue>({
  phase: "done",
  setPhase: () => {},
  showChrome: true,
  returnHome: false,
});

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function introPhaseForPath(path: string): IntroPhase {
  if (path !== "/" && path !== "") return "done";
  if (typeof window !== "undefined" && prefersReducedMotion()) return "done";
  return "logo";
}

function showChromeFor(phase: IntroPhase): boolean {
  return phase === "done" || phase === "chrome";
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);
  const [phase, setPhase] = useState<IntroPhase>(() => introPhaseForPath(pathname));
  const [returnHome, setReturnHome] = useState(false);

  useLayoutEffect(() => {
    const prev = prevPath.current;
    prevPath.current = pathname;

    if (pathname !== "/") {
      setPhase("done");
      setReturnHome(false);
      return;
    }

    if (prev !== null && prev !== "/") {
      if (prefersReducedMotion()) {
        setPhase("done");
        setReturnHome(false);
      } else {
        setReturnHome(true);
        setPhase("hero");
      }
      return;
    }

    // First load on home (fixes SSR/hydration starting in "done")
    if (prev === null) {
      setPhase(introPhaseForPath(pathname));
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (phase === "done") setReturnHome(false);
  }, [phase]);

  useLayoutEffect(() => {
    document.documentElement.dataset.intro = phase;
    document.body.style.overflow =
      phase === "logo" || phase === "gallery" ? "hidden" : "";
    return () => {
      delete document.documentElement.dataset.intro;
      document.body.style.overflow = "";
    };
  }, [phase]);

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      setPhase,
      showChrome: showChromeFor(phase),
      returnHome,
    }),
    [phase, returnHome],
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
