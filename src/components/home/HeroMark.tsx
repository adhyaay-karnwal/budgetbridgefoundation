import Image from "next/image";

/** Gold tile + white mark — same sizing in intro overlay and hero */
export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center bg-[#cc9b4c] p-2.5 ${className}`.trim()}
    >
      <Image
        src="/bbf-white.svg"
        alt="Budget Bridge Foundation"
        width={36}
        height={36}
        className="h-full w-full"
        priority
      />
    </div>
  );
}
