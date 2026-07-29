import type { Metadata } from "next";
import { OutboundLink } from "@/components/OutboundLink";
import { CtaRow, PageHero, PageSection } from "@/components/PageChrome";
import { CONTACT } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact · ${SITE.name}`,
  description: CONTACT.description,
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHero
        label={CONTACT.label}
        title={CONTACT.title}
        description={CONTACT.description}
      />

      <PageSection>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-[15px] text-[#a3a3a3]">Email</p>
            <OutboundLink
              href={`mailto:${CONTACT.email}`}
              className="mt-2 text-[22px] font-medium"
            >
              {CONTACT.email}
            </OutboundLink>
          </div>
          <div>
            <p className="text-[15px] text-[#a3a3a3]">Instagram</p>
            <OutboundLink
              href={CONTACT.instagram}
              variant="instagram"
              className="mt-2 text-[22px] font-medium"
            >
              {CONTACT.instagramHandle}
            </OutboundLink>
          </div>
        </div>

        <CtaRow
          className="mt-14 flex flex-wrap items-center gap-4"
          primary={{ label: "Volunteer with us", href: "/get-involved" }}
          secondary={{
            label: "Email the team",
            href: `mailto:${SITE.email}`,
          }}
        />
      </PageSection>
    </main>
  );
}
