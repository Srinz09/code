import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://fitwithdebasri.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/start" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
