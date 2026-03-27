"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CITY_WHITELIST, cityLabel, type CitySlug } from "@/lib/cities";

const SERVICES = [
  { slug: "gebaeudereinigung", label: "Gebäudereinigung" },
  { slug: "baureinigung", label: "Baureinigung" },
  { slug: "containerreinigung", label: "Containerreinigung" },
  { slug: "glasreinigung", label: "Glasreinigung" },
  { slug: "grundreinigung", label: "Grundreinigung" },
  { slug: "industriereinigung", label: "Industriereinigung" },
  { slug: "spezialreinigung", label: "Spezialreinigung" },
  { slug: "unterhaltsreinigung", label: "Unterhaltsreinigung" },
] as const;

type ServiceSlug = (typeof SERVICES)[number]["slug"];

const DEFAULT_SERVICE: ServiceSlug = "gebaeudereinigung";

export function ServiceCitiesSection() {
  const [activeService, setActiveService] =
    useState<ServiceSlug>(DEFAULT_SERVICE);
  const [search, setSearch] = useState("");

  const cities = useMemo(() => {
    return [...CITY_WHITELIST]
      .map((slug) => ({
        slug,
        label: cityLabel(slug as CitySlug),
      }))
      .sort((a, b) => a.label.localeCompare(b.label, "de"));
  }, []);

  const filteredCities = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return cities;

    return cities.filter(
      (city) =>
        city.label.toLowerCase().includes(q) ||
        city.slug.toLowerCase().includes(q),
    );
  }, [cities, search]);

  return (
    <section id="staedte" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 sm:mb-8">
          <p className="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-2">
            Einsatzorte
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
            Städte & Leistungen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl">
            Standardmäßig sehen Sie alle Städte für Gebäudereinigung. Wechseln
            Sie oben einfach die Kategorie oder suchen Sie direkt nach Ihrer
            Stadt.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {SERVICES.map((service) => {
            const active = activeService === service.slug;

            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActiveService(service.slug)}
                className={`px-3 py-2 text-[11px] sm:text-xs font-black uppercase tracking-wide transition ${
                  active
                    ? "bg-primary text-white"
                    : "bg-white text-gray-900 hover:bg-black hover:text-white"
                }`}
              >
                {service.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white p-4 sm:p-5 shadow-sm border border-black/5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-sm sm:text-base font-black uppercase text-gray-900">
              {SERVICES.find((s) => s.slug === activeService)?.label}
            </h3>

            <div className="w-full sm:w-[320px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Stadt suchen..."
                className="w-full border border-black/10 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900 outline-none transition focus:border-primary focus:bg-white"
              />
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm text-gray-500 font-semibold">
              {filteredCities.length} Städte
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filteredCities.map((city) => (
              <Link
                key={`${activeService}-${city.slug}`}
                href={`/${activeService}/${city.slug}`}
                className="inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                {city.label}
              </Link>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <p className="mt-4 text-sm text-gray-500">
              Keine passende Stadt gefunden.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
