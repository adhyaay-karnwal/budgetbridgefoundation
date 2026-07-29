import Image from "next/image";
import { CtaRow } from "@/components/PageChrome";
import { MEDIA } from "@/lib/media";
import { HOME } from "@/lib/site";

/** Closing CTA + full-bleed image — on every page, above the footer */
export function PageEnd() {
  const { cta } = MEDIA;

  return (
    <>
      <section className="content-gutter-x pb-28 pt-24 text-center">
        <h2 className="text-[40px] font-medium leading-[1.15] tracking-tight text-[#111400]">
          {HOME.closing.line1}
          <br />
          {HOME.closing.line2}
        </h2>
        <CtaRow
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          primary={HOME.closing.primaryCta}
          secondary={HOME.closing.secondaryCta}
        />
      </section>

      <section className="w-full">
        <Image
          src={cta.src}
          alt={cta.alt}
          width={cta.width}
          height={cta.height}
          className="h-auto w-full"
          sizes="100vw"
          priority={false}
        />
      </section>
    </>
  );
}
