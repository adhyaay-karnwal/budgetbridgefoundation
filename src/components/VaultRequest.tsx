"use client";

import { useState, type FormEvent } from "react";
import {
  Add01Icon,
  Cancel01Icon,
  MailSend01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { SectionHeading, SectionLabel } from "@/components/home/primitives";
import { DOODLES } from "@/components/playful/Doodles";
import type { VaultBox } from "@/lib/content";
import { TONES } from "@/lib/tones";

type VaultRequestProps = {
  items: readonly VaultBox[];
  email: string;
  roles: readonly string[];
  request: { label: string; heading: string; body: string };
};

const TILTS = [-1.5, 1, -1, 1.5];

const FIELD =
  "w-full rounded-[14px] border-2 border-ink bg-cream px-4 py-3 text-[16px] text-ink outline-none transition-shadow placeholder:text-ink-faint focus:shadow-sticker-sm";

/**
 * Vault "deposit boxes" plus the request form. Boxes added here show up in
 * the form, which opens a ready-to-send email to the team.
 */
export function VaultRequest({ items, email, roles, request }: VaultRequestProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
    setError("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();
    const name = field("name");
    const message = field("message");

    if (selected.length === 0 && !message) {
      setError("Add at least one box from the Vault, or tell us what you need.");
      return;
    }

    const picked = items.filter((item) => selected.includes(item.id));
    const organization = field("organization");
    const lines = [
      "Hi Budget Bridge team,",
      "",
      "I’d like to request materials from the Vault.",
      "",
      `Name: ${name}`,
      `Email: ${field("email")}`,
      ...(organization ? [`School / organization: ${organization}`] : []),
      `I am a: ${field("role")}`,
      ...(picked.length
        ? ["", "Materials:", ...picked.map((item) => `- ${item.title}`)]
        : []),
      ...(message ? ["", "Message:", message] : []),
    ];

    const subject = `Vault request${name ? ` from ${name}` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setError("");
    setSent(true);
  }

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const t = TONES[item.tone];
          const Doodle = DOODLES[item.doodle];
          const isOn = selected.includes(item.id);
          return (
            <li key={item.id} id={item.id} className="scroll-mt-28">
              <article
                className={`hover-wiggle grain relative flex h-full flex-col rounded-[26px] border-2 border-ink p-6 transition-[translate,rotate,box-shadow] duration-300 ${t.bg} ${t.text} ${
                  isOn ? "-translate-y-1 shadow-sticker" : "shadow-sticker-sm hover:-translate-y-1"
                }`}
                style={{ rotate: isOn ? "0deg" : `${TILTS[index % TILTS.length]}deg` }}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-[13px] font-medium uppercase tracking-[0.16em] ${t.muted}`}>
                    Box {String(index + 1).padStart(2, "0")}
                  </span>
                  <Doodle size={52} className="wiggle-target" />
                </div>
                <h3 className="font-display mt-6 text-[26px] leading-tight">{item.title}</h3>
                <p className={`mt-2 text-[15px] leading-6 ${t.muted}`}>{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.contents.map((thing) => (
                    <li
                      key={thing}
                      className="rounded-full border border-current px-2.5 py-0.5 text-[12px] font-medium opacity-80"
                    >
                      {thing}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-pressed={isOn}
                  className={`mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-ink text-[15px] font-medium transition-colors ${
                    isOn ? "bg-ink text-cream" : "bg-cream text-ink hover:bg-paper"
                  }`}
                >
                  <Icon icon={isOn ? Tick02Icon : Add01Icon} size={18} strokeWidth={2} aria-hidden />
                  {isOn ? "In your request" : "Add to request"}
                </button>
              </article>
            </li>
          );
        })}
      </ul>

      <section
        id="request"
        className="mt-24 scroll-mt-28 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
      >
        <div>
          <SectionLabel>{request.label}</SectionLabel>
          <SectionHeading>{request.heading}</SectionHeading>
          <p className="mt-6 max-w-md text-[18px] leading-8 text-ink-soft">{request.body}</p>

          <div className="mt-10 rounded-[22px] border-2 border-dashed border-ink/30 p-5">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Your request · {selected.length} {selected.length === 1 ? "box" : "boxes"}
            </p>
            {selected.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {items
                  .filter((item) => selected.includes(item.id))
                  .map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink py-1 pl-3 pr-2 text-[14px] font-medium ${TONES[item.tone].bg} ${TONES[item.tone].text}`}
                        aria-label={`Remove ${item.title}`}
                      >
                        {item.title}
                        <Icon icon={Cancel01Icon} size={14} strokeWidth={2.4} aria-hidden />
                      </button>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="mt-3 font-hand text-[24px] leading-tight text-ink-faint">
                nothing yet. Add boxes from the Vault above
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="grain rounded-[30px] border-2 border-ink bg-paper p-6 shadow-sticker sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-ink">Name</span>
              <input name="name" required autoComplete="name" className={FIELD} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-ink">Email</span>
              <input name="email" type="email" required autoComplete="email" className={FIELD} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-ink">
                School or organization <span className="text-ink-faint">(optional)</span>
              </span>
              <input name="organization" autoComplete="organization" className={FIELD} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-ink">I am a…</span>
              <select name="role" className={FIELD} defaultValue={roles[0]}>
                {roles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-[14px] font-medium text-ink">
                Anything else we should know?
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Grade levels, language, number of students, dates…"
                className={`${FIELD} resize-y`}
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 text-[15px] font-medium text-coral" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-full border-2 border-ink bg-marigold px-6 text-[16px] font-medium text-ink shadow-sticker-sm transition-[translate,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Icon icon={MailSend01Icon} size={18} strokeWidth={2} aria-hidden />
            Send request
          </button>

          <p className="mt-4 text-[14px] leading-6 text-ink-soft" aria-live="polite">
            {sent
              ? `Your email app should open with the request filled in. If it didn’t, email us at ${email}.`
              : `Opens your email app, addressed to ${email}.`}
          </p>
        </form>
      </section>
    </>
  );
}
