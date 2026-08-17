export default function PartnersLoading() {
  return (
    <main className="bg-white" aria-busy="true">
      <span className="sr-only">Loading partners…</span>

      <div className="content-gutter-x pb-16 pt-28" aria-hidden>
        <div className="h-4 w-24 animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-4 h-10 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-6 h-7 max-w-xl animate-pulse rounded-[2px] bg-[#ececec]" />
      </div>

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

      <div className="content-gutter-x pb-24 pt-8" aria-hidden>
        <div className="h-4 w-28 animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-4 h-10 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />
        <div className="mt-6 h-6 max-w-2xl animate-pulse rounded-[2px] bg-[#ececec]" />

        <div className="mt-14 space-y-0">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-[3rem_1fr] gap-6 border-t border-[#ececec] py-6"
            >
              <div className="h-5 w-6 animate-pulse rounded-[2px] bg-[#ececec]" />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((__, item) => (
                  <div
                    key={item}
                    className="h-5 animate-pulse rounded-[2px] bg-[#ececec]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
