"use client";

import { useState } from "react";
import {
  BookOpen01Icon,
  CodeIcon,
  InstagramIcon,
  LegalDocument01Icon,
  MicroscopeIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { AccentButton } from "@/components/AccentButton";
import {
  GraphicProgramsHero,
  GraphicStage,
  SoftCard,
} from "@/components/home/graphics";
import { TextLink } from "@/components/home/primitives";
import { Icon, type IconProps } from "@/components/Icon";

type ProgramTab = {
  id: string;
  label: string;
  description: string;
};

type InvolvedTab = {
  id: string;
  label: string;
};

type DepartmentVisual = {
  icon: IconProps["icon"];
  tone: string;
};

const DEFAULT_DEPARTMENT_VISUAL: DepartmentVisual = {
  icon: UserGroupIcon,
  tone: "bg-[#ececec] text-[#161514]",
};

const DEPARTMENT_VISUALS: Record<string, DepartmentVisual> = {
  social: {
    icon: InstagramIcon,
    tone: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white",
  },
  outreach: {
    icon: UserGroupIcon,
    tone: "bg-gradient-to-br from-[#c5d4c8] to-[#9bb0c4] text-[#161514]",
  },
  curriculum: {
    icon: BookOpen01Icon,
    tone: "bg-gradient-to-br from-[#d4c4b0] to-[#b8a090] text-[#161514]",
  },
  research: {
    icon: MicroscopeIcon,
    tone: "bg-gradient-to-br from-[#c8c4d4] to-[#9a90b0] text-[#161514]",
  },
  policy: {
    icon: LegalDocument01Icon,
    tone: "bg-gradient-to-br from-[#d4c8c0] to-[#a8b8c4] text-[#161514]",
  },
  tech: {
    icon: CodeIcon,
    tone: "bg-gradient-to-br from-[#b8c4d4] to-[#8a9aab] text-[#161514]",
  },
};

export function ProgramsShowcase({ tabs }: { tabs: readonly ProgramTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div>
      <GraphicProgramsHero />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {tabs.map((tab) => {
          const isActive = tab.id === current?.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className="text-left"
            >
              <p
                className={
                  isActive
                    ? "text-[17px] font-medium leading-6 text-[#161514] transition-colors"
                    : "text-[17px] leading-6 text-[#c4c4c4] transition-colors hover:text-[#717071]"
                }
              >
                {tab.label}
              </p>
              {isActive ? (
                <p className="mt-3 text-[15px] leading-6 text-[#717071]">
                  {tab.description}
                </p>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Single non-interactive department card — all options shown at once */
export function InvolvedShowcase({
  tabs,
  intro,
}: {
  tabs: readonly InvolvedTab[];
  intro: string;
}) {
  return (
    <div>
      <p className="mb-10 max-w-2xl text-[15px] leading-6 text-[#717071]">
        {intro}
      </p>

      <GraphicStage className="relative min-h-[400px] px-5 pb-20 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
        <SoftCard className="relative z-10 w-full max-w-[560px] p-5 sm:p-6">
          <p className="text-[13px] text-[#a3a3a3]">Departments</p>
          <p className="mt-1 text-[22px] font-medium text-[#161514]">
            Join a team
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {tabs.map((tab) => {
              const visual =
                DEPARTMENT_VISUALS[tab.id] ?? DEFAULT_DEPARTMENT_VISUAL;

              return (
                <li
                  key={tab.id}
                  className="flex items-center gap-3 rounded-[8px] bg-[#fafafa] px-3 py-2.5"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] ${visual.tone}`}
                  >
                    <Icon icon={visual.icon} size={18} aria-hidden />
                  </span>
                  <span className="text-[14px] font-medium text-[#161514]">
                    {tab.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </SoftCard>

        <p className="absolute bottom-4 right-4 max-w-[220px] text-right text-[12px] leading-4 text-[#a3a3a3] sm:bottom-5 sm:right-5">
          Email us or DM us on Instagram to schedule an interview.
        </p>
      </GraphicStage>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <AccentButton href="/get-involved">Volunteer</AccentButton>
        <TextLink href="/contact">Talk to the team</TextLink>
      </div>
    </div>
  );
}
