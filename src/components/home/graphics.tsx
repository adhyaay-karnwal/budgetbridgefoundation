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

type AtmosphericStageProps = StageProps & {
  atmosphere: string;
};

/** Natural-style textured photo stage with floating UI on top */
export function AtmosphericStage({
  children,
  atmosphere,
  className = "",
}: AtmosphericStageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[2px] ${className}`}
    >
      <Image
        src={atmosphere}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        aria-hidden
      />
      <div className="relative z-10 flex h-full min-h-[inherit] w-full items-center justify-center p-5 sm:p-8">
        {children}
      </div>
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
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.clouds.src}
      className="aspect-[4/3] w-full"
    >
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
    </AtmosphericStage>
  );
}

export function GraphicTutoring() {
  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.shoreline.src}
      className="aspect-[4/3] w-full"
    >
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
    </AtmosphericStage>
  );
}

export function GraphicGameClass() {
  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.curtains.src}
      className="aspect-[4/3] w-full"
    >
      <div className="relative mx-auto w-[86%] max-w-[280px] overflow-hidden rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <Image
          src={MEDIA.programs.gameclass.src}
          alt="GameClass lessons dashboard"
          width={3978}
          height={2265}
          className="h-auto w-full"
        />
      </div>
    </AtmosphericStage>
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

export function GraphicAdvocacy() {
  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.bridge.src}
      className="aspect-square w-full min-h-[280px]"
    >
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
    </AtmosphericStage>
  );
}

export function GraphicStatStudents() {
  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.warmSky.src}
      className="aspect-[4/3] w-full"
    >
      <SoftCard className="px-6 py-5 text-center">
        <p className="text-[40px] font-medium leading-none tracking-tight text-[#161514]">
          {SITE.impact.students}
        </p>
        <p className="mt-2 text-[13px] text-[#717071]">students reached</p>
      </SoftCard>
    </AtmosphericStage>
  );
}

export function GraphicStatCountries() {
  const heights = [40, 55, 48, 70, 62, 80, 58, 74, 88];

  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.dusk.src}
      className="aspect-[4/3] w-full"
    >
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
    </AtmosphericStage>
  );
}

export function GraphicStatVolunteers() {
  const avatarColors = ["#d9d4cc", "#c5d0c8", "#c8c4d4", "#d4c8c0"];

  return (
    <AtmosphericStage
      atmosphere={MEDIA.atmospheres.softField.src}
      className="aspect-[4/3] w-full"
    >
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
    </AtmosphericStage>
  );
}

type LayeredHighlightProps = {
  src: string;
  alt: string;
  pattern?: "waves" | "grid" | "grain";
};

/** Natural-style layered collage inside a gray stage */
export function LayeredHighlight({
  src,
  alt,
  pattern = "waves",
}: LayeredHighlightProps) {
  const accents = PATTERN_ACCENTS[pattern ?? "waves"];

  return (
    <GraphicStage className="aspect-[5/4] w-full p-4 sm:p-5">
      <div className="relative h-full w-full min-h-[200px]">
        <div
          aria-hidden
          className="absolute bottom-[2%] left-[1%] h-[74%] w-[74%] overflow-hidden rounded-[2px]"
          style={accents.back}
        />
        <div
          aria-hidden
          className="absolute right-[1%] top-[2%] h-[60%] w-[60%] overflow-hidden rounded-[2px]"
          style={accents.front}
        />
        <div className="absolute inset-[14%] overflow-hidden rounded-[2px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </GraphicStage>
  );
}

const PATTERN_ACCENTS = {
  waves: {
    back: {
      backgroundColor: "#1a1a1a",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <defs>
            <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.8 0 0 0 0 0.6 0 0 0 0 0.3 0 0 0 0.35 0'/></filter>
          </defs>
          <rect width='200' height='200' fill='#1a1a1a'/>
          <rect width='200' height='200' filter='url(%23n)'/>
        </svg>`,
      )}")`,
      backgroundSize: "cover",
    },
    front: {
      backgroundColor: "#cc9b4c",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'>
          <rect width='160' height='160' fill='#cc9b4c'/>
          <g fill='none' stroke='%23e8d4a8' stroke-width='1.4' opacity='0.85'>
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
    },
  },
  grid: {
    back: {
      backgroundColor: "#cc9b4c",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
          <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/></filter>
          <rect width='120' height='120' fill='#b8893f'/>
          <rect width='120' height='120' filter='url(%23g)' opacity='0.4'/>
        </svg>`,
      )}")`,
      backgroundSize: "cover",
    },
    front: {
      backgroundColor: "#2a2a2a",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
          <rect width='18' height='18' fill='#2a2a2a'/>
          <path d='M18 0H0v18' fill='none' stroke='%23cc9b4c' stroke-width='1' opacity='0.55'/>
        </svg>`,
      )}")`,
      backgroundSize: "18px 18px",
    },
  },
  grain: {
    back: {
      backgroundColor: "#ececec",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
          <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter>
          <rect width='120' height='120' fill='#d8d4cc'/>
          <rect width='120' height='120' filter='url(%23g)' opacity='0.45'/>
        </svg>`,
      )}")`,
      backgroundSize: "cover",
    },
    front: {
      backgroundColor: "#161514",
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'>
          <rect width='160' height='160' fill='#161514'/>
          <g fill='none' stroke='%23cc9b4c' stroke-width='1.2' opacity='0.7'>
            <circle cx='40' cy='40' r='28'/>
            <circle cx='110' cy='55' r='18'/>
            <circle cx='70' cy='115' r='34'/>
            <circle cx='130' cy='120' r='14'/>
          </g>
        </svg>`,
      )}")`,
      backgroundSize: "cover",
    },
  },
} as const;

export function ProgramCardEducation() {
  const topics = [
    { label: "Budgeting", tone: "from-[#f0c078] to-[#cc9b4c]" },
    { label: "Saving", tone: "from-[#9bb8d4] to-[#6a8fb0]" },
    { label: "Credit", tone: "from-[#c5b0d4] to-[#8f7aa8]" },
    { label: "Investing", tone: "from-[#b8d4c0] to-[#7aa890]" },
  ];

  return (
    <SoftCard className="w-full max-w-[340px] p-5 sm:p-6">
      <MutedLabel>Live tutoring</MutedLabel>
      <p className="mt-2 text-[22px] font-medium text-[#161514]">
        Ages 10–16
      </p>
      <p className="mt-1 text-[13px] text-[#717071]">Session in progress</p>
      <ul className="mt-5 grid grid-cols-2 gap-2">
        {topics.map((topic) => (
          <li
            key={topic.label}
            className="flex items-center gap-2 rounded-[8px] bg-[#fafafa] px-2.5 py-2"
          >
            <span
              className={`h-7 w-7 shrink-0 rounded-[6px] bg-gradient-to-br ${topic.tone}`}
            />
            <span className="text-[13px] font-medium text-[#161514]">
              {topic.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-[#f0f0f0] pt-4">
        <span className="text-[12px] text-[#a3a3a3]">NGO partners</span>
        <span className="text-[13px] font-medium text-[#161514]">
          Latin America · Africa · Asia
        </span>
      </div>
    </SoftCard>
  );
}

export function ProgramCardSeminars() {
  return (
    <SoftCard className="w-full max-w-[340px] p-5 sm:p-6">
      <MutedLabel>School seminar</MutedLabel>
      <p className="mt-2 text-[20px] font-medium leading-snug text-[#161514]">
        Personal finance basics
      </p>
      <div className="mt-5 space-y-3">
        {[
          { step: "01", title: "What is a budget?", tone: "bg-[#cc9b4c]" },
          { step: "02", title: "Saving vs. spending", tone: "bg-[#6a8fb0]" },
          { step: "03", title: "Needs and wants", tone: "bg-[#8f7aa8]" },
        ].map((item) => (
          <div key={item.step} className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] text-[11px] font-medium text-white ${item.tone}`}
            >
              {item.step}
            </span>
            <span className="text-[14px] text-[#161514]">{item.title}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12px] text-[#a3a3a3]">
        Free for elementary & middle schools
      </p>
    </SoftCard>
  );
}

export function ProgramCardAdvocacy() {
  return (
    <SoftCard className="w-full max-w-[340px] p-5 sm:p-6">
      <MutedLabel>Policy track</MutedLabel>
      <p className="mt-2 text-[20px] font-medium text-[#161514]">
        Close the loophole
      </p>
      <div className="mt-5 space-y-3">
        <div className="rounded-[8px] bg-[#fafafa] px-3 py-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[13px] font-medium text-[#161514]">
              Senate Bill 3497
            </span>
            <span className="rounded-[4px] bg-[#cc9b4c]/20 px-2 py-0.5 text-[11px] font-medium text-[#8a6828]">
              Active
            </span>
          </div>
        </div>
        <div className="rounded-[8px] bg-[#fafafa] px-3 py-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[13px] font-medium text-[#161514]">
              Assembly Bill A4764
            </span>
            <span className="rounded-[4px] bg-[#6a8fb0]/20 px-2 py-0.5 text-[11px] font-medium text-[#3d5a73]">
              Active
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-[#f0f0f0] pt-4">
        <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#cc9b4c] to-[#8a6828] text-[10px] text-white">
          ✓
        </span>
        <span className="text-[13px] text-[#717071]">
          BOE testimony in Randolph & Parsippany
        </span>
      </div>
    </SoftCard>
  );
}

export function ProgramCardVolunteers() {
  const depts = [
    { label: "Social", tone: "from-[#f09433] via-[#dc2743] to-[#bc1888]" },
    { label: "Outreach", tone: "from-[#9bb8d4] to-[#6a8fb0]" },
    { label: "Curriculum", tone: "from-[#cc9b4c] to-[#a67c38]" },
    { label: "Research", tone: "from-[#c5b0d4] to-[#8f7aa8]" },
    { label: "Policy", tone: "from-[#b8d4c0] to-[#7aa890]" },
    { label: "Tech", tone: "from-[#161514] to-[#4a4a4a]" },
  ];

  return (
    <SoftCard className="w-full max-w-[340px] p-5 sm:p-6">
      <MutedLabel>Join a team</MutedLabel>
      <p className="mt-2 text-[20px] font-medium text-[#161514]">
        Volunteer departments
      </p>
      <ul className="mt-5 grid grid-cols-2 gap-2">
        {depts.map((dept) => (
          <li
            key={dept.label}
            className="flex items-center gap-2 rounded-[8px] bg-[#fafafa] px-2.5 py-2"
          >
            <span
              className={`h-6 w-6 shrink-0 rounded-[5px] bg-gradient-to-br ${dept.tone}`}
            />
            <span className="text-[13px] font-medium text-[#161514]">
              {dept.label}
            </span>
          </li>
        ))}
      </ul>
    </SoftCard>
  );
}

