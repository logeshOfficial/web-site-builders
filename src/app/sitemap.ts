import type { MetadataRoute } from "next";
import { absoluteUrl, industrySlugs } from "@/lib/site";

const staticPaths = [
  "",
  "/services",
  "/pricing",
  "/about",
  "/contact",
  "/industries",
  "/showcase",
  "/what-is-seo",
  "/what-is-domain-hosting",
  "/faq",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const industryRoutes = industrySlugs.map((slug) => ({
    url: absoluteUrl(`/industries/${slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...industryRoutes];
}
