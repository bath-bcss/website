import type { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bcss.website",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
