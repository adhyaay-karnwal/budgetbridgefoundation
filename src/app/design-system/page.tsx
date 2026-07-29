import Image from "next/image";

export default function DesignSystemPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              src="/bbf-black.svg"
              alt="BBF Logo"
              width={48}
              height={48}
            />
            <span className="text-4xl font-bold tracking-tight text-zinc-900">
              BBF
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900">
            Design System
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-500">
            The visual language and component primitives that define the BBF
            brand. This living document ensures consistency across every
            touchpoint.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-5xl space-y-24 px-6 py-20">
        {/* Typography */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Token
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">
            Typography
          </h2>
          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
                Font Family
              </p>
              <p className="text-xl text-zinc-900">Acumin Pro</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4 rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Regular · 400
                </p>
                <p className="font-sans text-base text-zinc-900">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
              <div className="space-y-4 rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Italic · 400
                </p>
                <p className="font-sans italic text-base text-zinc-900">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
              <div className="space-y-4 rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Bold · 700
                </p>
                <p className="font-sans text-base font-bold text-zinc-900">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
              <div className="space-y-4 rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Bold Italic · 700
                </p>
                <p className="font-sans text-base font-bold italic text-zinc-900">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-sans text-sm text-zinc-500">
                  abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Type Scale */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Scale
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">
            Type Scale
          </h2>
          <div className="space-y-6">
            {[
              { label: "Display", size: "text-5xl", example: "The quick brown fox" },
              { label: "Heading 1", size: "text-4xl", example: "The quick brown fox" },
              { label: "Heading 2", size: "text-3xl", example: "The quick brown fox" },
              { label: "Heading 3", size: "text-2xl", example: "The quick brown fox" },
              { label: "Heading 4", size: "text-xl", example: "The quick brown fox" },
              { label: "Body", size: "text-base", example: "The quick brown fox jumps over the lazy dog." },
              { label: "Small", size: "text-sm", example: "The quick brown fox jumps over the lazy dog." },
              { label: "Caption", size: "text-xs", example: "The quick brown fox jumps over the lazy dog." },
            ].map(({ label, size, example }) => (
              <div
                key={label}
                className="flex items-baseline gap-6 border-b border-zinc-100 pb-4"
              >
                <span className="w-24 text-xs font-medium text-zinc-400">
                  {label}
                </span>
                <span className="w-20 text-xs text-zinc-300">{size}</span>
                <p className={`font-sans ${size} text-zinc-900`}>{example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Token
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">Colors</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Foreground", value: "#0D0E0F", class: "bg-[#0D0E0F]" },
              { label: "Background", value: "#FFFFFF", class: "bg-white border border-zinc-200" },
              { label: "Muted", value: "#6B7280", class: "bg-[#6B7280]" },
              { label: "Border", value: "#E5E7EB", class: "bg-[#E5E7EB]" },
              { label: "Accent", value: "#1A1A2E", class: "bg-[#1A1A2E]" },
            ].map(({ label, value, class: swatchClass }) => (
              <div
                key={label}
                className="overflow-hidden rounded-xl border border-zinc-200"
              >
                <div className={`h-20 ${swatchClass}`} />
                <div className="p-3">
                  <p className="text-sm font-medium text-zinc-900">{label}</p>
                  <p className="text-xs text-zinc-500">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Asset
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">Logo</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4 rounded-xl border border-zinc-200 p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                Default
              </p>
              <div className="flex items-center justify-center rounded-lg bg-white p-8">
                <Image
                  src="/bbf-black.svg"
                  alt="BBF Logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="space-y-4 rounded-xl border border-zinc-200 p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                On Dark
              </p>
              <div className="flex items-center justify-center rounded-lg bg-[#0D0E0F] p-8">
                <Image
                  src="/bbf-black.svg"
                  alt="BBF Logo"
                  width={80}
                  height={80}
                  className="invert"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Token
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">Spacing</h2>
          <div className="space-y-3">
            {[
              { token: "4xs", px: 2 },
              { token: "3xs", px: 4 },
              { token: "2xs", px: 8 },
              { token: "xs", px: 12 },
              { token: "sm", px: 16 },
              { token: "md", px: 24 },
              { token: "lg", px: 32 },
              { token: "xl", px: 48 },
              { token: "2xl", px: 64 },
              { token: "3xl", px: 80 },
            ].map(({ token, px }) => (
              <div
                key={token}
                className="flex items-center gap-4 border-b border-zinc-100 pb-3"
              >
                <span className="w-16 text-sm font-medium text-zinc-900">
                  {token}
                </span>
                <span className="w-12 text-xs text-zinc-400">{px}px</span>
                <div
                  className="h-3 rounded bg-zinc-300"
                  style={{ width: px }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Borders & Radii */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Token
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">
            Border Radius
          </h2>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "none", radius: "rounded-none", size: "0px" },
              { label: "sm", radius: "rounded-sm", size: "4px" },
              { label: "md", radius: "rounded-md", size: "6px" },
              { label: "lg", radius: "rounded-lg", size: "8px" },
              { label: "xl", radius: "rounded-xl", size: "12px" },
              { label: "full", radius: "rounded-full", size: "9999px" },
            ].map(({ label, radius, size }) => (
              <div key={label} className="text-center">
                <div
                  className={`mb-2 h-12 w-16 border-2 border-zinc-300 bg-zinc-50 ${radius}`}
                />
                <p className="text-xs font-medium text-zinc-900">{label}</p>
                <p className="text-xs text-zinc-400">{size}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <div className="mb-2">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Token
            </span>
          </div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">Shadows</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "sm", class: "shadow-sm" },
              { name: "md", class: "shadow-md" },
              { name: "lg", class: "shadow-lg" },
              { name: "xl", class: "shadow-xl" },
              { name: "2xl", class: "shadow-2xl" },
            ].map(({ name, class: shadowClass }) => (
              <div
                key={name}
                className={`rounded-xl border border-zinc-200 bg-white p-6 ${shadowClass}`}
              >
                <p className="text-sm font-medium text-zinc-900">
                  shadow-{name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-400">
          BBF Design System · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
