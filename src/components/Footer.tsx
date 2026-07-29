import Image from "next/image";
import { OutboundLink } from "@/components/OutboundLink";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="content-gutter-x pb-16 pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="mb-5 text-[15px] font-medium text-[#161514]">
                {column.title}
              </p>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <OutboundLink
                      href={link.href}
                      variant={"variant" in link ? link.variant : "gold"}
                      className="text-[15px] leading-6"
                    >
                      {link.label}
                    </OutboundLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-[#f0f0f0] pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/bbf-black.svg"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="text-[15px] font-medium text-[#161514]">
              {SITE.name}
            </span>
          </div>

          <div className="max-w-2xl space-y-3 sm:text-right">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] sm:justify-end">
              <OutboundLink href="/contact" className="text-[13px]">
                Contact
              </OutboundLink>
              <OutboundLink href={`mailto:${SITE.email}`} className="text-[13px]">
                Email
              </OutboundLink>
              <OutboundLink
                href={SITE.instagram}
                variant="instagram"
                className="text-[13px]"
              >
                Instagram
              </OutboundLink>
            </div>
            <p className="text-[13px] leading-5 text-[#c4c4c4]">
              © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}{" "}
              {SITE.name} is a 501(c)(3) non-profit organization. EIN #
              {SITE.ein}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
