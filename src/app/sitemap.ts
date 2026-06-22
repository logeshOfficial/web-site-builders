import type { MetadataRoute } from "next";
import { getSiteUrl, industrySlugs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticPages = ["", "/services", "/pricing", "/about", "/contact", "/industries", "/showcase", "/what-is-seo", "/what-is-domain-hosting", "/faq"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${siteUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...industryRoutes];
}
