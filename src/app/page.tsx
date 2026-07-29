import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-4">
          <Image
            src="/bbf-black.svg"
            alt="BBF Logo"
            width={40}
            height={40}
          />
          <span className="text-3xl font-bold tracking-tight text-foreground">
            BBF
          </span>
        </div>
        <Link
          href="/design-system"
          className="group relative inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <Image
            src="/bbf-black.svg"
            alt="BBF Logo"
            width={20}
            height={20}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          Design System
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
