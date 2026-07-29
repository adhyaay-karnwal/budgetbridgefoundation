import Link from "next/link";

type PageStubProps = {
  title: string;
  description: string;
};

/** Minimal placeholder until each page is designed. */
export default function PageStub({ title, description }: PageStubProps) {
  return (
    <main className="content-gutter-x py-24">
      <p className="mb-3 text-[15px] text-[#717071]">Coming soon</p>
      <h1 className="text-[40px] font-normal leading-[56px] text-[#111400]">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] leading-7 text-[#717071]">
        {description}
      </p>
      <Link
        href="/"
        className="mt-10 inline-block text-[15px] text-[#161514] underline-offset-4 hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}
