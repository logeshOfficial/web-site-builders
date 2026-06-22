import type { MetadataRoute } from "next";
import { industryPages } from "@/lib/industry-content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/pricing", "/about", "/contact", "/industries"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const industryRoutes = Object.keys(industryPages).map((slug) => ({
    url: `${siteConfig.url}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...industryRoutes];
}
