import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { absoluteUrl, resolveSiteBaseUrl } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host =
    headersList.get("x-forwarded-host") ?? headersList.get("host");
  const baseUrl = resolveSiteBaseUrl(host);

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
    host: baseUrl,
    sitemap: absoluteUrl("/sitemap.xml", baseUrl),
  };
}
