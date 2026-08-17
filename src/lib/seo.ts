import { BLOG } from "@/lib/content";
import { SITE } from "@/lib/site";

/** Common search variants and misspellings (e.g. Bridget vs Budget). */
export const ORG_ALTERNATE_NAMES = [
  "Budget Bridge",
  "BBF",
  "Budget Bridge Foundation nonprofit",
  "Bridget Bridge Foundation",
  "Bridget Bridge",
] as const;

export const SEO_KEYWORDS = [
  "Budget Bridge Foundation",
  "Budget Bridge",
  "budget bridge",
  "budget bridge foundation",
  "BBF",
  "Bridget Bridge Foundation",
  "financial literacy",
  "financial literacy nonprofit",
  "financial education nonprofit",
  "student-led nonprofit",
  "501(c)(3) financial literacy",
  "personal finance education",
  "financial literacy for students",
  "money skills for kids",
  "financial literacy seminars",
  "financial tutoring nonprofit",
  "youth financial education",
  "New Jersey financial literacy",
  "Parsippany financial literacy",
  "nonprofit personal finance",
  "financial literacy advocacy",
  "financial literacy legislation",
  "volunteer financial education",
] as const;

export const DEFAULT_DESCRIPTION =
  "Budget Bridge Foundation is a student-led 501(c)(3) nonprofit teaching personal finance, money skills, and financial literacy through seminars, tutoring, workshops, and policy advocacy worldwide.";

export const HOME_TITLE =
  "Budget Bridge Foundation | Budget Bridge | Financial Literacy Nonprofit";

export const HOME_DESCRIPTION =
  "Budget Bridge Foundation is a student-led financial literacy nonprofit. Free seminars, live tutoring, workshops, and advocacy help students learn budgeting, saving, credit, and money management.";

export function absoluteUrl(path: string, baseUrl: string = SITE.url): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return new URL(normalized, base).toString();
}

/** Convert display dates like "July 29, 2026" to ISO for sitemaps. */
export function toSitemapLastModified(date: string | Date): string {
  if (date instanceof Date) {
    return date.toISOString();
  }

  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) {
    return new Date().toISOString();
  }

  return new Date(parsed).toISOString();
}

export function resolveSiteBaseUrl(host: string | null): string {
  if (!host) return SITE.url;

  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

export type SitemapRoute = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: string | Date;
};

/** Public indexable routes (excludes design-system and other internal pages). */
export const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/programs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/programs/education", changeFrequency: "monthly", priority: 0.85 },
  { path: "/programs/seminars", changeFrequency: "monthly", priority: 0.85 },
  { path: "/advocacy", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partners", changeFrequency: "weekly", priority: 0.8 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.85 },
  { path: "/press", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  ...BLOG.posts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    lastModified: toSitemapLastModified(post.date),
  })),
];

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": absoluteUrl("/#organization"),
  name: SITE.name,
  alternateName: [...ORG_ALTERNATE_NAMES],
  legalName: SITE.name,
  url: SITE.url,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/media/bbf-banner.png"),
  description: DEFAULT_DESCRIPTION,
  email: SITE.email,
  taxID: SITE.ein,
  nonprofitStatus: "Nonprofit501c3",
  slogan: SITE.tagline,
  foundingLocation: {
    "@type": "Place",
    name: "New Jersey, United States",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  knowsAbout: [
    "Financial literacy",
    "Personal finance education",
    "Youth financial education",
    "Financial literacy policy",
    "Student tutoring",
    "Nonprofit financial education",
  ],
  sameAs: [SITE.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE.email,
    availableLanguage: "English",
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: SITE.name,
  alternateName: [...ORG_ALTERNATE_NAMES],
  url: SITE.url,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": absoluteUrl("/#organization") },
};
