import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
  absoluteUrl,
  resolveSiteBaseUrl,
  SITEMAP_ROUTES,
} from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host =
    headersList.get("x-forwarded-host") ?? headersList.get("host");
  const baseUrl = resolveSiteBaseUrl(host);

  return SITEMAP_ROUTES.map((route) => ({
    url: absoluteUrl(route.path, baseUrl),
    lastModified: route.lastModified ?? new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
