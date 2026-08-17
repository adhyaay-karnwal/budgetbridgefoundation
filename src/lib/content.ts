import { HOME, SITE } from "@/lib/site";
import { MEDIA } from "@/lib/media";

/** Founders — roles from budgetbridgefoundation.org/aboutus */
export const FOUNDERS = [
  {
    name: "Shubh Potdar",
    role: "Co-Founder & Board of Trustees",
    image: MEDIA.founders.shubh.src,
    bio: "Oversees strategy, lobbying, and the direction of Budget Bridge’s programs.",
  },
  {
    name: "Avi Mehta",
    role: "Co-Founder & Board of Trustees",
    image: MEDIA.founders.avi.src,
    bio: "Manages curriculum development and program operations.",
  },
  {
    name: "Rohit Viswanath",
    role: "Co-Founder & Board of Trustees",
    image: MEDIA.founders.rohit.src,
    bio: "Manages operations and leads domestic outreach.",
  },
  {
    name: "Evan Schwartz",
    role: "Co-Founder & Executive Director",
    image: MEDIA.founders.evan.src,
    bio: "Manages international outreach and partnerships.",
  },
] as const;

export type Founder = (typeof FOUNDERS)[number];

const TEAM_PLACEHOLDER = MEDIA.team.placeholder.src;

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

/** Executive team directors */
export const EXECUTIVE_TEAM: TeamMember[] = [
  {
    name: "Adhyaay Karnwal",
    role: "Director of Product/Tech",
    image: MEDIA.team.adhyaay.src,
  },
  {
    name: "Veera",
    role: "Executive Director of CT",
  },
  {
    name: "Arnav",
    role: "Director of Membership",
  },
  {
    name: "Ajay Boradia",
    role: "Director of Social Media",
  },
  {
    name: "Abhyuday",
    role: "Director of Outreach",
  },
  {
    name: "Keshav Patel",
    role: "Director of Campaigns/Projects",
  },
  {
    name: "Zayd",
    role:
      "Director of LAMPS (Legislation, Acquisitions, Mergers, Partnerships, Scholarships)",
  },
];

export function teamMemberImage(member: TeamMember): string {
  return member.image ?? TEAM_PLACEHOLDER;
}

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
  executiveTeam: {
    label: "Executive team",
    heading: "Executive team",
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

export const PARTNERS = {
  label: "Partners",
  title: "Partners in financial education",
  intro:
    "Budget Bridge works with NGOs, schools, and companies that share our mission. Together, we expand financial literacy to students in classrooms and communities around the world.",
  comingSoon: {
    label: "Coming soon",
    heading: "More partners are on the way",
    body: "We currently have more partners than the ones featured here. The complete list and partnership data are coming soon. Check back for details on each collaboration and the students we reach together.",
  },
  countries: {
    label: "Countries",
    heading: "Where our partners work",
    body: "Every name below is a partner country. The list is the full set we can share today.",
    updating:
      "This list is constantly updating as we add more partners.",
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
      slug: "adolescent-window-financial-education",
      title: "The Adolescent Window: Why Timing Matters in Financial Education",
      date: "July 29, 2026",
      dateShort: "Jul 29",
      author: "Adhyaay Karnwal",
      category: "Budget Bridge",
      cover: {
        src: "/media/blog/early-financial-education-cover.jpg",
        alt: "City skyline at dusk, representing long-term economic horizons",
      },
      excerpt:
        "Neuroscience and behavioral research show that adolescence is a critical period for building the habits that shape lifelong financial health.",
      paragraphs: [
        "Most personal finance advice assumes that adults can simply learn better habits whenever they choose. Research in neuroscience and developmental psychology suggests a more urgent story. The adolescent brain is unusually receptive to routines around planning, delayed gratification, and risk assessment. Skills practiced in those years tend to persist. Skills deferred often arrive when life is already crowded with tuition, rent, and career pressure.",
        "Consider compound growth. A teenager who learns to allocate even a small portion of income toward saving or investing internalizes a pattern early. The dollar amount matters less than the repetition. By contrast, someone who first encounters compound interest at twenty-five may understand the math but struggle to change spending habits formed over a decade of unchecked consumption. The knowledge arrives on time. The behavior often does not.",
        "School policy reflects this gap. Many states treat financial literacy as an elective or bury it inside broader courses where it competes with other topics. Students graduate without practicing credit, budgeting, or tax basics in a structured environment. They enter adulthood with abstract awareness but little hands-on confidence. That gap shows up in student debt loads, underused retirement accounts, and households unprepared for economic shocks.",
        "Effective programs treat financial education as skill building, not lecture series. Short, repeated exercises with feedback work better than one-off seminars. Gamified scenarios, peer discussion, and real-world case studies help students connect abstract concepts to choices they will face within months, not decades. This is why student-led organizations like Budget Bridge pair classroom instruction with tutoring, advocacy, and community workshops. The goal is not a single lesson but a habit loop formed before adulthood.",
        "Timing is not the only factor in economic mobility, but it is one we can influence directly. Policymakers, educators, and families share an opportunity to meet students during a window when their brains are wired to learn precisely the skills money management demands. The adolescent window will close for every student. The question is whether we open the door while it is still there.",
      ],
    },
    {
      slug: "political-economic-personal-finance",
      title:
        "Why Understanding the Political and Economic State of the World Matters for Your Personal Finances",
      date: "Sep 21, 2025",
      dateShort: "Sep 21",
      author: "Sonya Viswanath",
      category: "Budget Bridge",
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

function parseBlogDate(date: string): number {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function getBlogPostsSorted(): BlogPost[] {
  return [...BLOG.posts].sort(
    (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date),
  );
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return getBlogPostsSorted()[0];
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG.posts.find((post) => post.slug === slug);
}
