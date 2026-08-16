export default function PartnersLoading() {
  return (
    <main className="bg-white" aria-busy="true">
      <span className="sr-only">Loading partners…</span>

      {/* Hero skeleton */}
      <div className="content-gutter-x pb-16 pt-28" aria-hidden>
        <div className="h-4 w-24 animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-4 h-10 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-6 h-7 max-w-xl animate-pulse rounded-[2px] bg-[#ececec]" />
      </div>

      {/* Coming soon section skeleton */}
      <div className="content-gutter-x pb-24 pt-8" aria-hidden>
        <div className="h-4 w-28 animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-4 h-10 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-6 h-6 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] animate-pulse rounded-[2px] bg-[#ececec]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
