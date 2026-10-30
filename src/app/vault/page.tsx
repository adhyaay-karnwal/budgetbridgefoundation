import type { CSSProperties } from "react";
import { PageHero, PageSection } from "@/components/PageChrome";
import { SectionHeading, SectionLabel } from "@/components/home/primitives";
import { DoodleArrow, DoodleCoin } from "@/components/playful/Doodles";
import { VaultDoor } from "@/components/playful/VaultDoor";
import { VaultRequest } from "@/components/VaultRequest";
import { VAULT } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "The Vault",
  description: `${VAULT.description} Free financial literacy lesson plans, seminar slides, worksheets, soccer activities, and toolkits from Budget Bridge Foundation.`,
  path: "/vault",
  keywords: [
    "free financial literacy lesson plans",
    "financial literacy resources",
    "personal finance worksheets",
    "money skills activities",
  ],
});

export default function VaultPage() {
  return (
    <main>
      <PageHero
        label={VAULT.label}
        title={VAULT.title}
        description={VAULT.description}
        tone="forest"
        doodle="vault"
        media={<VaultDoor />}
      />

      <PageSection className="content-gutter-x pb-28 pt-4">
        <div className="relative">
          <SectionLabel>{VAULT.boxes.label}</SectionLabel>
          <SectionHeading>{VAULT.boxes.heading}</SectionHeading>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink-soft">
            {VAULT.boxes.body}
          </p>
          <DoodleCoin
            size={64}
            className="animate-float absolute right-2 top-0 hidden text-marigold-deep md:block"
            style={{ "--r": "14deg" } as CSSProperties}
          />
          <p className="mt-6 hidden items-end gap-1 font-hand text-[26px] text-ink-soft md:flex">
            pick as many as you like
            <DoodleArrow size={48} className="rotate-[20deg] text-ink-faint" />
          </p>
        </div>

        <div className="mt-10">
          <VaultRequest
            items={VAULT.items}
            email={SITE.email}
            roles={VAULT.request.roles}
            request={VAULT.request}
          />
        </div>
      </PageSection>
    </main>
  );
}
