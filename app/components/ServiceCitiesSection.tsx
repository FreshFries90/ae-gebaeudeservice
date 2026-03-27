"use client";

import { useState } from "react";
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

  const cities = [...CITY_WHITELIST]
    .map((slug) => ({
      slug,
      label: cityLabel(slug as CitySlug),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "de"));

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
            Sie oben einfach die Kategorie und springen Sie direkt zur passenden
            Stadtseite.
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
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm sm:text-base font-black uppercase text-gray-900">
              {SERVICES.find((s) => s.slug === activeService)?.label}
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 font-semibold">
              {cities.length} Städte
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={`${activeService}-${city.slug}`}
                href={`/${activeService}/${city.slug}`}
                className="inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
