import Image from "next/image";
import Link from "next/link";
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
                {column.links.map((link) => {
                  const external = "external" in link && link.external;
                  if (external) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http") ? "noreferrer" : undefined
                          }
                          className="text-[15px] leading-6 text-[#717071] transition-colors hover:text-[#161514]"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] leading-6 text-[#717071] transition-colors hover:text-[#161514]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
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
              {SITE.shortName}
            </span>
          </div>

          <div className="max-w-2xl space-y-3 sm:text-right">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#a3a3a3] sm:justify-end">
              <Link href="/contact" className="hover:text-[#717071]">
                Contact
              </Link>
              <a href={`mailto:${SITE.email}`} className="hover:text-[#717071]">
                Email
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#717071]"
              >
                Instagram
              </a>
            </div>
            <p className="text-[13px] leading-5 text-[#c4c4c4]">
              © {new Date().getFullYear()} Budget Bridge. {SITE.tagline}{" "}
              {SITE.name} is a 501(c)(3) non-profit organization. EIN #
              {SITE.ein}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
