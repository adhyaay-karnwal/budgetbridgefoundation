import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SEO_KEYWORDS,
} from "@/lib/seo";

export const SITE_OG_IMAGE = {
  url: "/media/bbf-banner.png",
  width: 3840,
  height: 2160,
  alt: `${SITE.name} — financial literacy nonprofit teaching money skills to students`,
} as const;

const ROBOTS_INDEX = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

const ROBOTS_NOINDEX = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
};

function buildOpenGraph({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: SITE.name,
    title,
    description,
    url,
    locale: "en_US",
    images: [SITE_OG_IMAGE],
  };
}

function buildTwitter({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [SITE_OG_IMAGE.url],
    creator: SITE.instagramHandle,
    site: SITE.instagramHandle,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_TITLE,
    template: `%s · ${SITE.name}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE.name,
  keywords: [...SEO_KEYWORDS],
  category: "nonprofit",
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  robots: ROBOTS_INDEX,
  openGraph: buildOpenGraph({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: absoluteUrl("/"),
  }),
  twitter: buildTwitter({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  }),
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  openGraphType = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  openGraphType?: "website" | "article";
}): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = keywords
    ? [...new Set([...SEO_KEYWORDS, ...keywords])]
    : [...SEO_KEYWORDS];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical },
    robots: noIndex ? ROBOTS_NOINDEX : ROBOTS_INDEX,
    openGraph: {
      ...buildOpenGraph({ title, description, url: canonical }),
      type: openGraphType,
    },
    twitter: buildTwitter({ title, description }),
  };
}

export function homeMetadata(): Metadata {
  return {
    ...rootMetadata,
    title: { absolute: HOME_TITLE },
    description: HOME_DESCRIPTION,
    alternates: { canonical: absoluteUrl("/") },
    openGraph: buildOpenGraph({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      url: absoluteUrl("/"),
    }),
    twitter: buildTwitter({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
    }),
  };
}

export function articleMetadata({
  title,
  description,
  path,
  publishedTime,
  authors,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const pageTitle = title;
  const canonical = absoluteUrl(path);

  return {
    ...pageMetadata({
      title: pageTitle,
      description,
      path,
      openGraphType: "article",
    }),
    title: { absolute: `${pageTitle} · ${SITE.name}` },
    openGraph: {
      ...buildOpenGraph({
        title: `${pageTitle} · ${SITE.name}`,
        description,
        url: canonical,
      }),
      type: "article",
      publishedTime,
      authors,
    },
    twitter: buildTwitter({
      title: `${pageTitle} · ${SITE.name}`,
      description,
    }),
  };
}

/** Re-export for pages that only need the default site description. */
export { DEFAULT_DESCRIPTION };
