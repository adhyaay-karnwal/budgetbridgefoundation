import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/design-system", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/design-system", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/design-system", "/api/"],
      },
    ],
    host: SITE.url,
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
