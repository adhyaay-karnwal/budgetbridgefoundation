import Image from "next/image";
import type { ReactNode } from "react";
import { MEDIA } from "@/lib/media";
import { SITE } from "@/lib/site";

type StageProps = {
  children: ReactNode;
  className?: string;
};

/** Gray stage that can later hold a photo behind the floating UI */
export function GraphicStage({ children, className = "" }: StageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[2px] bg-[#ececec] ${className}`}
    >
      {children}
    </div>
  );
}

/** Floating white UI card on a gray stage (Natural-style) */
export function SoftCard({ children, className = "p-4" }: StageProps) {
  return (
    <div
      className={`rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function MutedLabel({ children }: { children: ReactNode }) {
  return <p className="text-[12px] text-[#a3a3a3]">{children}</p>;
}

function StatValue({
  value,
  label,
  size = "md",
}: {
  value: string;
  label: string;
  size?: "sm" | "md";
}) {
  if (size === "sm") {
    return (
      <div>
        <p className="text-[20px] font-medium text-[#161514]">{value}</p>
        <p className="text-[12px] text-[#717071]">{label}</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[28px] font-medium leading-none text-[#161514]">
        {value}
      </p>
      <p className="mt-1 text-[13px] text-[#717071]">{label}</p>
    </div>
  );
}

export function GraphicCurriculum() {
  const topics = [
    {
      label: "Budgeting",
      swatch: "bg-gradient-to-br from-[#c5d4c8] to-[#9bb0c4]",
    },
    {
      label: "Saving",
      swatch: "bg-gradient-to-br from-[#d4c4b0] to-[#b8a090]",
    },
    {
      label: "Credit",
      swatch: "bg-gradient-to-br from-[#c8c4d4] to-[#9a90b0]",
    },
    {
      label: "Planning",
      swatch: "bg-gradient-to-br from-[#d4c8c0] to-[#a8b8c4]",
    },
  ];

  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <SoftCard className="w-[78%] max-w-[240px] p-4">
        <MutedLabel>Lesson</MutedLabel>
        <p className="mt-1 text-[16px] font-medium text-[#161514]">
          Money basics
        </p>
        <ul className="mt-4 space-y-2.5">
          {topics.map((topic) => (
            <li key={topic.label} className="flex items-center gap-2.5">
              <span
                className={`h-4 w-4 shrink-0 rounded-full ${topic.swatch}`}
              />
              <span className="text-[13px] text-[#161514]">{topic.label}</span>
            </li>
          ))}
        </ul>
      </SoftCard>
    </GraphicStage>
  );
}

export function GraphicTutoring() {
  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <SoftCard className="w-[78%] max-w-[240px] p-4">
        <div className="flex items-center justify-between">
          <MutedLabel>Live session</MutedLabel>
          <span className="rounded-full bg-[#eef6ee] px-2 py-0.5 text-[11px] text-[#2f4a3c]">
            Online
          </span>
        </div>
        <p className="mt-3 text-[20px] font-medium leading-none text-[#161514]">
          Ages 10–16
        </p>
        <p className="mt-2 text-[13px] leading-5 text-[#717071]">
          Budgeting, saving, investing, and money management
        </p>
        <div className="mt-4 flex gap-1.5">
          {["LATAM", "Africa", "Asia"].map((region) => (
            <span
              key={region}
              className="rounded-[4px] bg-[#f6f6f6] px-2 py-1 text-[11px] text-[#717071]"
            >
              {region}
            </span>
          ))}
        </div>
      </SoftCard>
    </GraphicStage>
  );
}

export function GraphicGameClass() {
  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <div className="relative mx-auto w-[86%] max-w-[280px] overflow-hidden rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <Image
          src={MEDIA.programs.gameclass.src}
          alt="GameClass lessons dashboard"
          width={3978}
          height={2265}
          className="h-auto w-full"
        />
      </div>
    </GraphicStage>
  );
}

/** Founders photo on gray stage (background image can be added later) */
export function GraphicFounders() {
  return (
    <GraphicStage className="aspect-[5/4] w-full min-h-[260px] lg:aspect-auto lg:min-h-[320px]">
      <div className="relative mx-auto aspect-[4/3] w-[82%] max-w-[340px] overflow-hidden rounded-[10px]">
        <Image
          src={MEDIA.founders.group.src}
          alt="Budget Bridge founders"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 340px"
          priority
        />
      </div>
    </GraphicStage>
  );
}

export function GraphicProgramsHero() {
  const { students, countries, volunteers } = SITE.impact;

  return (
    <GraphicStage className="aspect-[16/9] w-full min-h-[320px] md:min-h-[420px]">
      <SoftCard className="w-[min(88%,320px)] p-5">
        <MutedLabel>Our impact</MutedLabel>
        <p className="mt-2 text-[32px] font-medium leading-none tracking-tight text-[#161514]">
          {students}
        </p>
        <p className="mt-2 text-[14px] text-[#717071]">students reached</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#f0f0f0] pt-4">
          <span className="text-[13px] text-[#161514]">{countries} countries</span>
          <span className="text-[13px] text-[#717071]">
            {volunteers} volunteers
          </span>
        </div>
      </SoftCard>
    </GraphicStage>
  );
}

export function GraphicAdvocacy() {
  return (
    <GraphicStage className="aspect-square w-full min-h-[280px]">
      <SoftCard className="w-[82%] max-w-[280px] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[15px] font-medium text-[#161514]">
              Policy & advocacy
            </p>
            <p className="mt-1 text-[12px] text-[#a3a3a3]">New Jersey</p>
          </div>
          <span className="mt-0.5 h-8 w-8 shrink-0 rounded-[6px] bg-gradient-to-br from-[#c5d4c8] to-[#9bb0c4]" />
        </div>
        <p className="mt-5 text-[14px] leading-5 text-[#161514]">
          Standalone personal finance course
        </p>
        <div className="mt-5 space-y-3 border-t border-[#f0f0f0] pt-4">
          <div>
            <p className="text-[11px] text-[#a3a3a3]">Legislation</p>
            <p className="mt-0.5 text-[13px] text-[#161514]">S3497 · A4764</p>
          </div>
          <div>
            <p className="text-[11px] text-[#a3a3a3]">Board testimony</p>
            <p className="mt-0.5 text-[13px] text-[#161514]">
              Randolph · Parsippany
            </p>
          </div>
        </div>
      </SoftCard>
    </GraphicStage>
  );
}

export function GraphicStatStudents() {
  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <div className="text-center">
        <p className="text-[40px] font-medium leading-none tracking-tight text-[#161514]">
          {SITE.impact.students}
        </p>
        <p className="mt-2 text-[13px] text-[#717071]">students reached</p>
      </div>
    </GraphicStage>
  );
}

export function GraphicStatCountries() {
  const heights = [40, 55, 48, 70, 62, 80, 58, 74, 88];

  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <SoftCard className="w-[78%] max-w-[220px] p-4">
        <MutedLabel>Reach</MutedLabel>
        <div className="mt-3">
          <StatValue value={SITE.impact.countries} label="countries" />
        </div>
        <div className="mt-4 flex h-10 items-end gap-1">
          {heights.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-[1px] bg-[#d4c4b0]"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </SoftCard>
    </GraphicStage>
  );
}

export function GraphicStatVolunteers() {
  const avatarColors = ["#d9d4cc", "#c5d0c8", "#c8c4d4", "#d4c8c0"];

  return (
    <GraphicStage className="aspect-[4/3] w-full">
      <SoftCard className="w-[78%] max-w-[220px] p-4">
        <MutedLabel>Team</MutedLabel>
        <div className="mt-3">
          <StatValue value={SITE.impact.volunteers} label="active volunteers" />
        </div>
        <div className="mt-4 flex -space-x-2">
          {avatarColors.map((color) => (
            <span
              key={color}
              className="h-7 w-7 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </SoftCard>
    </GraphicStage>
  );
}

type LayeredHighlightProps = {
  src: string;
  alt: string;
  pattern?: "waves" | "grid" | "grain";
};

/** Natural-style layered collage: photo over patterned offset squares */
export function LayeredHighlight({
  src,
  alt,
  pattern = "waves",
}: LayeredHighlightProps) {
  return (
    <div className="relative aspect-[5/4] w-full">
      <div
        aria-hidden
        className="absolute bottom-[4%] left-[2%] h-[72%] w-[72%] overflow-hidden rounded-[2px] bg-[#d8d8d8]"
        style={{ backgroundImage: MARBLE_PATTERN, backgroundSize: "cover" }}
      />
      <div
        aria-hidden
        className="absolute right-[2%] top-[4%] h-[58%] w-[58%] overflow-hidden rounded-[2px] bg-[#ececec]"
        style={patternBackground(pattern)}
      />
      <div className="absolute inset-[12%] overflow-hidden rounded-[2px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}

const MARBLE_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
    <defs>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.55 0 0 0 0 0.55 0 0 0 0.55 0'/></filter>
    </defs>
    <rect width='200' height='200' fill='#cfcfcf'/>
    <rect width='200' height='200' filter='url(%23n)' opacity='0.85'/>
  </svg>`,
)}")`;

function patternBackground(pattern: LayeredHighlightProps["pattern"]) {
  if (pattern === "grid") {
    return {
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
          <path d='M16 0H0v16' fill='none' stroke='%23bdbdbd' stroke-width='1'/>
        </svg>`,
      )}")`,
      backgroundSize: "16px 16px",
    } as const;
  }

  if (pattern === "grain") {
    return {
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
          <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/></filter>
          <rect width='120' height='120' fill='#e4e4e4'/>
          <rect width='120' height='120' filter='url(%23g)' opacity='0.35'/>
        </svg>`,
      )}")`,
      backgroundSize: "cover",
    } as const;
  }

  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'>
        <rect width='160' height='160' fill='#e8e8e8'/>
        <g fill='none' stroke='%23b5b5b5' stroke-width='1.2'>
          <path d='M-10 20 Q40 0 90 20 T190 20'/>
          <path d='M-10 40 Q40 20 90 40 T190 40'/>
          <path d='M-10 60 Q40 40 90 60 T190 60'/>
          <path d='M-10 80 Q40 60 90 80 T190 80'/>
          <path d='M-10 100 Q40 80 90 100 T190 100'/>
          <path d='M-10 120 Q40 100 90 120 T190 120'/>
          <path d='M-10 140 Q40 120 90 140 T190 140'/>
        </g>
      </svg>`,
    )}")`,
    backgroundSize: "cover",
  } as const;
}

