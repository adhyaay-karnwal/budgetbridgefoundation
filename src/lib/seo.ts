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
  "BBF",
  "Bridget Bridge Foundation",
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
  "Budget Bridge Foundation | Financial Literacy Nonprofit for Students";

export const HOME_DESCRIPTION =
  "Budget Bridge Foundation (BBF) is a student-led financial literacy nonprofit. Free seminars, live tutoring, workshops, and advocacy help students learn budgeting, saving, credit, and money management.";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE.url).toString();
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
  { path: "/partners", changeFrequency: "monthly", priority: 0.8 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.85 },
  { path: "/press", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  ...BLOG.posts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    lastModified: post.date,
  })),
];

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": absoluteUrl("/#organization"),
  name: SITE.name,
  alternateName: [...ORG_ALTERNATE_NAMES],
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
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Latin America" },
    { "@type": "Place", name: "Africa" },
    { "@type": "Place", name: "Asia" },
  ],
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
