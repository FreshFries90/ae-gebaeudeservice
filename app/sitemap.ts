// app/sitemap.ts
import type { MetadataRoute } from "next";
import { CITY_WHITELIST } from "@/lib/cities";

const BASE_URL = "https://aegebaeudeservice.de";

const STATIC_ROUTES = [
  "",
  "/gebaeudereinigung",
  "/baureinigung",
  "/containerreinigung",
  "/glasreinigung",
  "/grundreinigung",
  "/industriereinigung",
  "/spezialreinigung",
  "/unterhaltsreinigung",
  "/impressum",
  "/datenschutz",
] as const;

const CITY_SERVICES = [
  "gebaeudereinigung",
  "baureinigung",
  "containerreinigung",
  "glasreinigung",
  "grundreinigung",
  "industriereinigung",
  "spezialreinigung",
  "unterhaltsreinigung",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SERVICES.flatMap((service) =>
    CITY_WHITELIST.map((city) => ({
      url: `${BASE_URL}/${service}/${city}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  );

  return [...staticPages, ...cityPages];
}
