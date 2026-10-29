export default function PartnersLoading() {
  return (
    <main aria-busy="true">
      <span className="sr-only">Loading partners…</span>

      <div className="content-gutter-x pb-16 pt-6" aria-hidden>
        <div className="h-[340px] animate-pulse rounded-[36px] bg-sky/50" />
      </div>

      <div className="content-gutter-x pb-24 pt-10" aria-hidden>
        <div className="h-4 w-28 animate-pulse rounded-full bg-paper" />
        <div className="mt-4 h-12 max-w-2xl animate-pulse rounded-full bg-paper" />
        <div className="mt-6 h-6 max-w-2xl animate-pulse rounded-full bg-paper" />

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] animate-pulse rounded-[22px] bg-paper"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
