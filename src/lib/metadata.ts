import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const SITE_OG_IMAGE = {
  url: "/media/bbf-banner.png",
  width: 3840,
  height: 2160,
  alt: SITE.name,
} as const;

const defaultDescription =
  "Budget Bridge teaches money skills through seminars, tutoring, workshops, and advocacy so every student can thrive.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.name,
    description: defaultDescription,
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: defaultDescription,
    images: [SITE_OG_IMAGE.url],
  },
};

export function pageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
    twitter: {
      title,
      description,
      images: [SITE_OG_IMAGE.url],
    },
  };
}
