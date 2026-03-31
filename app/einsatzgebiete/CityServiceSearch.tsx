"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cityLabel, type CitySlug } from "@/lib/cities";

type ServiceItem = {
  key: string;
  label: string;
  href: string;
  icon: string;
};

type Props = {
  cities: readonly CitySlug[];
  services: readonly ServiceItem[];
};

export default function CityServiceSearch({ cities, services }: Props) {
  const [query, setQuery] = useState("");

  const filteredCities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cities.filter((city) =>
      cityLabel(city).toLowerCase().includes(normalizedQuery),
    );
  }, [cities, query]);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <div className="max-w-2xl mb-8">
          <label
            htmlFor="city-search"
            className="block text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-3"
          >
            Stadt suchen
          </label>

          <div className="relative">
            <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              id="city-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zum Beispiel Bochum, Essen oder Dortmund"
              className="w-full border border-black/15 bg-white py-4 pl-12 pr-4 text-base text-gray-900 outline-none transition focus:border-primary"
            />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            {filteredCities.length}{" "}
            {filteredCities.length === 1 ? "Stadt" : "Städte"} gefunden
          </p>
        </div>

        <div className="grid gap-6">
          {filteredCities.map((city) => {
            const label = cityLabel(city);

            return (
              <article
                key={city}
                className="border border-black/10 bg-gray-50 p-5 sm:p-6 md:p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
                      Einsatzgebiet
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">
                      {label}
                    </h2>
                  </div>

                  <a
                    href="tel:+491757540841"
                    className="inline-flex items-center justify-center border border-black bg-white px-4 py-3 text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
                  >
                    Jetzt anrufen
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {services.map((service) => (
                    <Link
                      key={`${city}-${service.key}`}
                      href={`${service.href}/${city}`}
                      className="group border border-black/10 bg-white p-5 transition hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <span className="material-icons-outlined text-3xl mb-4 block text-primary group-hover:text-white">
                        {service.icon}
                      </span>

                      <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-white">
                        {service.label}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-white/90">
                        {service.label} in {label}
                      </p>

                      <span className="mt-4 inline-flex items-center text-xs font-black uppercase tracking-wide text-primary group-hover:text-white">
                        Zur Stadtseite
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {filteredCities.length === 0 && (
          <div className="border border-dashed border-black/20 bg-gray-50 p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-gray-900">
              Keine Stadt gefunden
            </h2>
            <p className="mt-3 text-gray-600">
              Bitte prüfen Sie die Schreibweise oder suchen Sie nach einer
              anderen Stadt.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
