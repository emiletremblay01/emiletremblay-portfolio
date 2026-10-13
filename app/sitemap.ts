import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/coding", "/musique"].map((path) => ({
    url: `https://emile-tremblay.com${path}`,
  }));
}
