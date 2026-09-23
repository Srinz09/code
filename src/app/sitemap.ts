import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://fitwithdebasri.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/transformations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}
