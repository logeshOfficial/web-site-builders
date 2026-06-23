import type { MetadataRoute } from "next";
import { absoluteUrl, industrySlugs, publicSitemapPaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticEntries: MetadataRoute.Sitemap = publicSitemapPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: absoluteUrl(`/industries/${slug}`),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...industryEntries];
}
