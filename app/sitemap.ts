// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://aegebaeudeservice.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/baureinigung",
    "/containerreinigung",
    "/datenschutz",
    "/gebaeudereinigung",
    "/glasreinigung",
    "/grundreinigung",
    "/impressum",
    "/industriereinigung",
    "/spezialreinigung",
    "/unterhaltsreinigung",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}