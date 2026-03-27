"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CITY_WHITELIST, cityLabel, type CitySlug } from "@/lib/cities";

const SERVICES = [
  {
    slug: "gebaeudereinigung",
    label: "Gebäudereinigung",
    icon: "business",
  },
  {
    slug: "baureinigung",
    label: "Baureinigung",
    icon: "construction",
  },
  {
    slug: "containerreinigung",
    label: "Containerreinigung",
    icon: "local_shipping",
  },
  {
    slug: "glasreinigung",
    label: "Glas & Fassade",
    icon: "window",
  },
  {
    slug: "grundreinigung",
    label: "Grundreinigung",
    icon: "cleaning_services",
  },
  {
    slug: "industriereinigung",
    label: "Industriereinigung",
    icon: "precision_manufacturing",
  },
  {
    slug: "spezialreinigung",
    label: "Spezialreinigung",
    icon: "auto_awesome",
  },
  {
    slug: "unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    icon: "apartment",
  },
] as const;

type ServiceSlug = (typeof SERVICES)[number]["slug"];

const DEFAULT_SERVICE: ServiceSlug = "gebaeudereinigung";

export function ServiceCitiesSection() {
  const [activeService, setActiveService] =
    useState<ServiceSlug>(DEFAULT_SERVICE);
  const [selectedCity, setSelectedCity] = useState<string>("");
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
    return cities.filter((city) => {
      const matchesSelect = !selectedCity || city.slug === selectedCity;
      const matchesSearch =
        !search ||
        city.label.toLowerCase().includes(search.toLowerCase()) ||
        city.slug.toLowerCase().includes(search.toLowerCase());

      return matchesSelect && matchesSearch;
    });
  }, [cities, selectedCity, search]);

  const activeServiceData = SERVICES.find(
    (service) => service.slug === activeService,
  );

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50" id="staedte">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-10 md:mb-14">
          <p className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
            Einsatzorte & Kategorien
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Städteübersicht
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
            Wählen Sie zuerst die gewünschte Kategorie. Standardmäßig zeigen wir
            alle Städte für <strong>Gebäudereinigung</strong>. Danach können Sie
            zusätzlich direkt nach Ihrer Stadt filtern.
          </p>
        </div>

        <div className="bg-white border border-black/5 shadow-xl p-4 sm:p-6 md:p-8 mb-8 md:mb-10">
          <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
            {SERVICES.map((service) => {
              const isActive = service.slug === activeService;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    setActiveService(service.slug);
                    setSelectedCity("");
                    setSearch("");
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-3 font-black uppercase text-xs sm:text-sm tracking-wide transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-black hover:text-white"
                  }`}
                >
                  <span className="material-icons-outlined text-base shrink-0">
                    {service.icon}
                  </span>
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-900 mb-2">
                Nach Stadt filtern
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border-2 border-black/10 bg-white px-4 py-4 font-semibold text-gray-900 outline-none focus:border-primary"
              >
                <option value="">Alle Städte anzeigen</option>
                {cities.map((city) => (
                  <option key={city.slug} value={city.slug}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-900 mb-2">
                Stadt suchen
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="z. B. Essen, Bochum, Dortmund ..."
                className="w-full border-2 border-black/10 bg-white px-4 py-4 font-semibold text-gray-900 outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-3 font-black uppercase text-xs sm:text-sm tracking-widest w-fit">
            <span className="material-icons-outlined text-base">
              {activeServiceData?.icon}
            </span>
            <span>{activeServiceData?.label}</span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-semibold">
            {filteredCities.length} Städte gefunden
          </p>
        </div>

        {filteredCities.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filteredCities.map((city) => (
              <Link
                key={`${activeService}-${city.slug}`}
                href={`/${activeService}/${city.slug}`}
                className="group bg-white border-l-4 border-primary p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black uppercase text-gray-900 leading-tight">
                      {city.label}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {activeServiceData?.label} in {city.label}
                    </p>
                  </div>

                  <span className="material-icons-outlined text-primary text-2xl transition-transform group-hover:translate-x-1 shrink-0">
                    arrow_forward
                  </span>
                </div>

                <div className="mt-4 text-xs font-black uppercase tracking-widest text-primary">
                  Zur Stadtseite
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border-l-4 border-primary p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-black uppercase text-gray-900 mb-2">
              Keine Stadt gefunden
            </h3>
            <p className="text-gray-600">
              Bitte ändern Sie den Suchbegriff oder setzen Sie den Stadtfilter
              zurück.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
