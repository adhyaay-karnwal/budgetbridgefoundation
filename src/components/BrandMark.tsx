import Image from "next/image";

/** BBF "B" mark on a marigold tile, matching the brand banner. */
export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[12px] border-2 border-ink bg-marigold ${className}`}
    >
      <Image
        src="/bbf-black.svg"
        alt=""
        width={32}
        height={32}
        className="h-[62%] w-[62%]"
      />
    </span>
  );
}
