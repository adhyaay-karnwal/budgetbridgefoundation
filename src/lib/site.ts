export type CtaLink = {
  label: string;
  href: string;
};

export type NavLink = {
  title: string;
  description: string;
  href: string;
};

export type NavItem =
  | { label: string; href: string; kind: "link" }
  | { label: string; kind: "menu"; items: NavLink[] };

/**
 * Top-level nav mirrors natural.com density.
 * Mega-menus only when there are multiple real pages under a label.
 */
export const NAV: NavItem[] = [
  {
    label: "Programs",
    kind: "menu",
    items: [
      {
        title: "Overview",
        description: "How Budget Bridge reaches students worldwide",
        href: "/programs",
      },
      {
        title: "Education",
        description: "Live tutoring, workshops, and curriculum",
        href: "/programs/education",
      },
      {
        title: "Seminars",
        description: "Free sessions for elementary and middle schools",
        href: "/programs/seminars",
      },
    ],
  },
  { label: "Advocacy", href: "/advocacy", kind: "link" },
  {
    label: "About",
    kind: "menu",
    items: [
      {
        title: "Our story",
        description: "How four students started Budget Bridge",
        href: "/about",
      },
      {
        title: "Press",
        description: "News and letters from the community",
        href: "/press",
      },
      {
        title: "Blog",
        description: "Ideas on money, policy, and education",
        href: "/blog",
      },
    ],
  },
  { label: "Get Involved", href: "/get-involved", kind: "link" },
  { label: "Contact", href: "/contact", kind: "link" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Overview", href: "/programs" },
      { label: "Education", href: "/programs/education" },
      { label: "Seminars", href: "/programs/seminars" },
    ],
  },
  {
    title: "Advocacy",
    links: [{ label: "Policy & Advocacy", href: "/advocacy" }],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/budgetbridgefoundation/",
        external: true,
        variant: "instagram" as const,
      },
      {
        label: "Email",
        href: "mailto:budgetbridgefoundation@gmail.com",
        external: true,
      },
    ],
  },
] as const;

export const SITE = {
  name: "Budget Bridge Foundation",
  shortName: "BBF",
  email: "budgetbridgefoundation@gmail.com",
  instagram: "https://www.instagram.com/budgetbridgefoundation/",
  instagramHandle: "@budgetbridgefoundation",
  ein: "39-3370086",
  tagline: "Empowering futures through financial education.",
  impact: {
    students: "4,200",
    countries: "9",
    volunteers: "30+",
  },
};

/** Hero copy — Natural structure, BBF words */
export const HERO = {
  announcement: {
    title: "The adolescent window in financial education",
    date: "Jul 29",
    href: "/blog/adolescent-window-financial-education",
  },
  headline: "Budget Bridge teaches money skills.",
  muted:
    "Seminars. Tutoring. Workshops. Advocacy. Curriculum. Everything students need to thrive *",
  primaryCta: { label: "Volunteer with us", href: "/get-involved" } satisfies CtaLink,
  secondaryCta: { label: "Talk to the team", href: "/contact" } satisfies CtaLink,
};

/**
 * Homepage copy — sourced from budgetbridgefoundation.org.
 * Do not invent facts; keep marketing framing light around verified text.
 */
export const HOME = {
  mission: {
    label: "Mission",
    heading: "Our Mission",
    body: "We bridge the financial literacy gap by empowering students through local seminars, school presentations, workshops, competitions, and live tutoring. Our goal is to equip the next generation with essential money management skills to thrive in a global economy.",
  },
  benefits: {
    label: "Programs",
    heading: "How we teach money skills",
    cards: [
      {
        id: "curriculum" as const,
        title: "Curriculum & workshops",
        description:
          "We teach budgeting, saving, credit, and planning with simple steps and real examples.",
      },
      {
        id: "tutoring" as const,
        title: "Live tutoring worldwide",
        description:
          "Live tutoring for ages 10–16 with NGO partners across Latin America, Africa, and Asia.",
      },
      {
        id: "gameclass" as const,
        title: "Interactive lessons",
        descriptionBefore: "Partnering with ",
        descriptionLink: {
          label: "GameClass AI",
          href: "https://gameclass.net/",
        },
        descriptionAfter:
          " on short lessons where students practice budgeting, credit, saving, and planning.",
      },
    ],
  },
  programs: {
    label: "Programs",
    heading: "Budget Bridge reaches students in schools and communities",
    tabs: [
      {
        id: "education",
        label: "Education & tutoring",
        description:
          "Live tutoring sessions, workshops, and curriculum for students.",
      },
      {
        id: "seminars",
        label: "School seminars",
        description:
          "Free, easy-to-understand seminars in local elementary and middle schools.",
      },
      {
        id: "advocacy",
        label: "Policy & advocacy",
        description:
          "Board of Education advocacy and state legislation so every student graduates with money skills.",
      },
      {
        id: "volunteers",
        label: "Volunteer departments",
        description:
          "Social Media, Outreach, Curriculum Development, Research, Public Policy, and Tech.",
      },
    ],
  },
  approach: {
    label: "Advocacy",
    heading: "Turning policy into progress",
    points: [
      "Free seminars in local elementary and middle schools",
      "Live tutoring for ages 10–16 with NGO partners worldwide",
      "Advocacy for a standalone personal finance course at local Boards of Education",
      "Senate Bill 3497 and Assembly Bill A4764 to close New Jersey’s financial literacy loophole",
    ],
    primaryCta: { label: "Learn more", href: "/advocacy" } satisfies CtaLink,
    secondaryCta: { label: "Talk to the team", href: "/contact" } satisfies CtaLink,
  },
  involved: {
    label: "Get involved",
    heading: "Volunteer with Budget Bridge",
    intro:
      "Your time and expertise can make a real difference in the lives of children who lack access to quality financial education. We have a mission, but we cannot do it alone.",
    tabs: [
      { id: "social", label: "Social Media" },
      { id: "outreach", label: "Outreach" },
      { id: "curriculum", label: "Curriculum Development" },
      { id: "research", label: "Research" },
      { id: "policy", label: "Public Policy" },
      { id: "tech", label: "Tech" },
    ],
  },
  impact: {
    label: "Impact",
    heading: "Our Impact",
    cards: [
      {
        id: "students" as const,
        title: "4,200 students reached",
        description: "Students reached through Budget Bridge programs.",
      },
      {
        id: "countries" as const,
        title: "9 countries",
        description:
          "Reach built with NGO partners across Latin America, Africa, and Asia.",
      },
      {
        id: "volunteers" as const,
        title: "30+ active volunteers",
        description:
          "Active volunteers across Social Media, Outreach, Curriculum, Research, Public Policy, and Tech.",
      },
    ],
  },
  press: {
    label: "Press",
    heading: "In the news",
    cards: [
      {
        outlet: "TAP into",
        title:
          "From GDP to writing a check: Closing the financial literacy gap in Parsippany schools",
        href: "https://www.tapinto.net/towns/parsippany/articles/from-gdp-to-writing-a-check-closing-the-financial-literacy-gap-in-parsippany-schools",
        tone: "bg-[#1e3a5f]",
      },
      {
        outlet: "Parsippany Focus",
        title:
          "Letter to the editor: From GDP to writing a check — closing the financial literacy gap in Parsippany schools",
        href: "https://parsippanyfocus.com/letter-to-the-editor-from-gdp-to-writing-a-check-closing-the-financial-literacy-gap-in-parsippany-schools/",
        tone: "bg-[#2f4a3c]",
      },
      {
        outlet: "Board of Education",
        title:
          "Founder testimony at Randolph and Parsippany Board of Education meetings",
        href: "/advocacy#testimony",
        tone: "bg-[#3d3229]",
      },
    ],
  },
  blog: {
    label: "Blog",
  },
  highlights: {
    items: [
      {
        id: "story" as const,
        title: "Our story",
        date: "About",
        href: "/about",
        pattern: "waves" as const,
      },
      {
        id: "volunteer" as const,
        title: "Volunteer",
        date: "Join",
        href: "/get-involved",
        pattern: "grid" as const,
      },
      {
        id: "advocacy" as const,
        title: "Advocacy",
        date: "Policy",
        href: "/advocacy",
        pattern: "grain" as const,
      },
    ],
  },
  closing: {
    line1: "Empowering Financial Futures.",
    line2: "Volunteer with Budget Bridge.",
    primaryCta: { label: "Volunteer with us", href: "/get-involved" } satisfies CtaLink,
    secondaryCta: { label: "Talk to the team", href: "/contact" } satisfies CtaLink,
  },
} as const;
