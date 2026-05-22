// app/sitemap.ts
import type { MetadataRoute } from "next";
import { CITY_WHITELIST } from "@/lib/cities";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://aegebaeudeservice.de";

const STATIC_ROUTES = [
  "",
  "/blog",
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
  "/einsatzgebiete",
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
    priority: route === "" ? 1 : route === "/blog" ? 0.85 : 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SERVICES.flatMap((service) =>
    CITY_WHITELIST.map((city) => ({
      url: `${BASE_URL}/${service}/${city}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  );

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.status === "published" ? 0.75 : 0.3,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}