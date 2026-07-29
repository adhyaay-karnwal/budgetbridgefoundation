"use client";

import { useState } from "react";
import { AccentButton } from "@/components/AccentButton";
import {
  GraphicProgramsHero,
  GraphicStage,
  SoftCard,
} from "@/components/home/graphics";
import { TextLink } from "@/components/home/primitives";

type ProgramTab = {
  id: string;
  label: string;
  description: string;
};

type InvolvedTab = {
  id: string;
  label: string;
};

function useActiveTab<T extends { id: string }>(tabs: readonly T[]) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  return { activeId, setActiveId, current };
}

export function ProgramsShowcase({ tabs }: { tabs: readonly ProgramTab[] }) {
  const { setActiveId, current } = useActiveTab(tabs);

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

export function InvolvedShowcase({
  tabs,
  intro,
}: {
  tabs: readonly InvolvedTab[];
  intro: string;
}) {
  const { activeId, setActiveId, current } = useActiveTab(tabs);

  return (
    <div>
      <p className="mb-10 max-w-2xl text-[15px] leading-6 text-[#717071]">
        {intro}
      </p>

      <GraphicStage className="flex-col">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 pt-10 sm:gap-3 sm:pt-12">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={
                  isActive
                    ? "rounded-full bg-white px-4 py-2 text-[14px] leading-none text-[#161514] transition-colors"
                    : "rounded-full px-4 py-2 text-[14px] leading-none text-[#717071] transition-colors hover:text-[#161514]"
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto my-10 w-[min(100%,560px)] px-4 pb-12">
          <SoftCard className="px-5 py-6">
            <p className="text-[13px] text-[#a3a3a3]">Department</p>
            <p className="mt-2 text-[22px] font-medium text-[#161514]">
              {current?.label}
            </p>
            <p className="mt-3 text-[15px] leading-6 text-[#717071]">
              Email us or DM us on Instagram to schedule an interview.
            </p>
          </SoftCard>
        </div>
      </GraphicStage>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <AccentButton href="/get-involved">Volunteer</AccentButton>
        <TextLink href="/contact">Talk to the team</TextLink>
      </div>
    </div>
  );
}
