import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://bcss.website/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
