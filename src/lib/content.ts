import { HOME, SITE } from "@/lib/site";
import { MEDIA } from "@/lib/media";

/** Founders — roles from budgetbridgefoundation.org/aboutus */
export const FOUNDERS = [
  {
    name: "Shubh Potdar",
    role: "Co-Founder & Executive Director",
    image: MEDIA.founders.shubh.src,
    bio: "Oversees strategy, lobbying, and the direction of Budget Bridge’s programs.",
  },
  {
    name: "Avi Mehta",
    role: "Co-Founder",
    image: MEDIA.founders.avi.src,
    bio: "Manages curriculum development and program operations.",
  },
  {
    name: "Rohit Viswanath",
    role: "Co-Founder",
    image: MEDIA.founders.rohit.src,
    bio: "Manages operations and leads domestic outreach.",
  },
  {
    name: "Evan Schwartz",
    role: "Co-Founder",
    image: MEDIA.founders.evan.src,
    bio: "Manages international outreach and partnerships.",
  },
] as const;

export type Founder = (typeof FOUNDERS)[number];

/** Page copy — factual text verified against BBF sources */

export const ABOUT = {
  label: "About",
  title: "Bridging the financial literacy gap",
  intro:
    "Budget Bridge is a student-led 501(c)(3) that teaches personal finance and supports equitable financial literacy legislation. We work with schools, community groups, policymakers, and startups to democratize financial education.",
  teach:
    "We teach budgeting, saving, credit, and planning with simple steps and real examples. By training volunteers and building resources for students, we expand our reach and strengthen long-term financial stability in the communities we serve.",
  story: {
    label: "Our story",
    heading: "How Budget Bridge began",
    body: "Four high school students, united by a shared passion for finance and education, came together with a vision to address economic inequality. Recognizing that gap as one deeply tied to disparities in financial literacy, they understood that knowledge could be a powerful equalizer. Their journey began with the belief that empowering underprivileged children with financial education is essential to breaking the cycle of poverty.",
  },
} as const;

export const PROGRAMS = {
  label: "Programs",
  title: "How Budget Bridge reaches students",
  description:
    "Education, seminars, and advocacy work together to expand access to financial literacy.",
  cards: [
    {
      title: "Education & tutoring",
      description:
        "Live tutoring for ages 10–16, workshops, and curriculum with NGO partners worldwide.",
      href: "/programs/education",
    },
    {
      title: "School seminars",
      description:
        "Free, easy-to-understand seminars in local elementary and middle schools.",
      href: "/programs/seminars",
    },
    {
      title: "Policy & advocacy",
      description:
        "Board of Education advocacy and state legislation for financial literacy.",
      href: "/advocacy",
    },
  ],
} as const;

export const EDUCATION = {
  label: "Education",
  title: "Live tutoring, workshops, and more",
  body: "At Budget Bridge Foundation, we expand financial literacy for underprivileged children worldwide by partnering with NGOs across Latin America, Africa, and Asia. We offer live tutoring for ages 10–16, teaching budgeting, saving, investing, and money management to build a fairer future.",
  gameclass: {
    heading: "Gamifying financial literacy education",
    bodyBefore: "Budget Bridge partners with ",
    link: { label: "GameClass AI", href: "https://gameclass.net/" },
    bodyAfter:
      " to gamify our personal finance content. We use short, interactive lessons that let students practice budgeting, credit, saving, and planning in real scenarios. The goal is consistent learning through repetition and feedback.",
  },
} as const;

export const SEMINARS = {
  label: "Seminars",
  title: "Elementary and middle school seminars",
  body: "Budget Bridge Foundation offers free, easy-to-understand seminars in local elementary and middle schools. These programs teach basic personal finance skills to help kids learn and manage their finances early, and to spark interest in sound money management at an early age.",
} as const;

export const ADVOCACY = {
  label: "Advocacy",
  title: "Turning policy into progress",
  body: "We believe policy is key to closing the financial literacy gap. Beyond classrooms, we advocate at local Board of Education meetings for a standalone personal finance course and work directly with state legislators to advance legislation that ensure every student graduates with the money skills they need for life.",
  randolph: {
    heading: "Our work at the Randolph Board of Education meeting",
    body: "We had three Founders speak at the Randolph Board of Education meeting, advocating for a standalone personal finance course. Check out Co-Founders Shubh’s, Rohit’s, and Avi’s testimonies below.",
  },
  parsippany: {
    heading: "Our work at the Parsippany Board of Education meeting",
    body: "We had incredible support at the Parsippany Board of Education meeting, with a total of eight speeches on our behalf. Check out Co-Founder Evan’s speech.",
  },
  legislation: {
    heading: "Legislations we are fighting hard to pass",
    body: "Budget Bridge Foundation is partnering with state leaders to advocate for laws that establish financial literacy as a mandatory graduation requirement, while ensuring there are no loopholes that undermine this goal. Key legislative efforts include Senate Bill 3497 and Assembly Bill A4764 which aim to close the financial literacy loophole in New Jersey.",
  },
} as const;

export const GET_INVOLVED = {
  label: "Get involved",
  title: "Volunteer with Budget Bridge",
  why: "Your time and expertise can make a real difference in the lives of children who lack access to quality financial education. We have a mission, but we cannot do it alone.",
  departments: [
    "Social Media",
    "Outreach",
    "Curriculum Development",
    "Research",
    "Public Policy",
    "Tech",
  ],
  join: `Email us at ${SITE.email} or DM us on Instagram (${SITE.instagramHandle}) to schedule an interview.`,
} as const;

export const PRESS = {
  label: "Press",
  title: "Media & highlights",
  description: "News coverage and community highlights from Budget Bridge.",
  articles: HOME.press.cards,
} as const;

export const CONTACT = {
  label: "Contact",
  title: "Contact us",
  description: "Reach the Budget Bridge team by email or Instagram.",
  email: SITE.email,
  instagram: SITE.instagram,
  instagramHandle: SITE.instagramHandle,
} as const;

/** Blog — post text from budgetbridgefoundation.org */
export const BLOG = {
  label: "Blog",
  title: "Ideas on money, policy, and education",
  posts: [
    {
      slug: "political-economic-personal-finance",
      title:
        "Why Understanding the Political and Economic State of the World Matters for Your Personal Finances",
      date: "Sep 21, 2025",
      dateShort: "Sep 21",
      author: "Sonya Viswanath",
      cover: {
        src: "/media/blog/finance-washington-collage.jpg",
        alt: "Political and economic forces shaping personal finance",
      },
      excerpt:
        "Personal finance isn't just about what you earn or spend; it's about how well you adapt to the forces that shape the economy around you.",
      paragraphs: [
        "When individuals talk about personal finance, they usually focus on habits like budgeting carefully, saving consistently, and investing wisely. But habits alone aren't enough. To truly manage money well, you need to understand the political and economic world around you. The reason is simple: decisions made by governments and global markets directly impact financial opportunities and risks you face.",
        "Take interest rates. If you don't know why they rise and fall, you may miss out on chances to save money or protect yourself from debt. For example, when central banks raise rates to slow inflation, borrowing becomes more expensive. A person who understands this connection can lock in a fixed mortgage rate before rates climb, or focus on paying off high-interest credit card debt quickly. Without this awareness, someone might borrow at the wrong time and end up paying thousands more.",
        "The same is true for investments. Stock markets are influenced by elections, wars, trade agreements, and government spending. Someone who follows these events can better predict where risks and opportunities might appear. To illustrate, if a government passes new climate policies, renewable energy stocks could grow. If you ignore economics and politics, you're investing blindfolded, meaning that you are hoping for the best but missing crucial signs of change.",
        "Even everyday costs like food and gas are tied to global events. Understanding why prices rise (like when supply chains are disrupted or conflicts cut off oil supplies) helps people make smarter choices, such as budgeting differently, shopping strategically, or even choosing careers in more stable industries.",
        'The "why" is this: understanding the political and economic state of the world gives you control. Instead of being surprised by higher bills, job changes, or investment losses, you can prepare for them, adjust your choices, and even turn challenges into opportunities. Personal finance isn\'t just about what you earn or spend; it\'s about how well you adapt to the forces that shape the economy around you.',
      ],
    },
  ],
} as const;

export type BlogPost = (typeof BLOG.posts)[number];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG.posts.find((post) => post.slug === slug);
}
