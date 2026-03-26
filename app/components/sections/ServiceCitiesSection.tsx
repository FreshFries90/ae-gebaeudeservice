"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import * as Cities from "@/lib/cities";

type ServiceKey =
  | "haushaltsaufloesung"
  | "wohnungsaufloesung"
  | "entruempelung"
  | "messiewohnung"
  | "firmenaufloesung";

type ServiceDef = {
  key: ServiceKey;
  label: string;
  hrefBase: `/${string}`; // z.B. "/haushaltsaufloesung"
};

export type ServiceCitiesSectionProps = {
  id?: string;
  headline?: string;
  description?: string;
  defaultService?: ServiceKey;

  /**
   * Optional: wenn nicht jede Leistung alle Städte hat,
   * kannst du hier pro Service eine eigene City-Liste übergeben.
   * Falls nicht gesetzt: nutzt CITY_WHITELIST für alle Services.
   */
  serviceCityMap?: Partial<Record<ServiceKey, readonly string[]>>;

  /**
   * Optional: wenn du eigene Labels nutzen willst
   * (ansonsten wird CITY_LABELS verwendet, falls vorhanden).
   */
  cityLabels?: Record<string, string>;

  className?: string;
};

const SERVICES: ServiceDef[] = [
  {
    key: "baureinigung",
    label: "Baureinigung",
    hrefBase: "/baureinigung",
  },
  {
    key: "containerreinigung",
    label: "Containerreinigung",
    hrefBase: "/containerreinigung",
  },
  { key: "gebaeudereinigung", label: "Gebäudereinigung", hrefBase: "/gebaeudereinigung" },
  {
    key: "glasfassade",
    label: "Glas & Fassade",
    hrefBase: "/glasreinigung",
  },
  {
    key: "grundreinigung",
    label: "Grundreinigung",
    hrefBase: "/grundreinigung",
  },
  {
    key: "industriereinigung",
    label: "Industriereinigung",
    hrefBase: "/industriereinigung",
  },
  {
    key: "spezialreinigung",
    label: "Spezialreinigung",
    hrefBase: "/spezialreinigung",
  },
  {
    key: "unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    hrefBase: "/unterhaltsreinigung",
  },
];

function humanizeCitySlug(slug: string) {
  // Fallback, falls keine CITY_LABELS existieren
  return slug
    .split("-")
    .map((p) => (p.length ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ");
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function ServiceCitiesSection({
  id = "einsatzgebiete",
  headline = "Einsatzgebiete nach Leistung",
  description = "Wähle eine Leistung – danach siehst du alle Städte, in denen wir diese Dienstleistung anbieten.",
  defaultService = "gebaeudereinigung",
  serviceCityMap,
  cityLabels,
  className,
}: ServiceCitiesSectionProps) {
  const CITY_WHITELIST = ((Cities as any).CITY_WHITELIST ??
    []) as readonly string[];
  const CITY_LABELS = (cityLabels ??
    ((Cities as any).CITY_LABELS as Record<string, string> | undefined) ??
    undefined) as Record<string, string> | undefined;

  const [active, setActive] = useState<ServiceKey>(defaultService);
  const [q, setQ] = useState("");

  const activeService = useMemo(
    () => SERVICES.find((s) => s.key === active) ?? SERVICES[0],
    [active],
  );

  const citiesForService = useMemo(() => {
    const fromMap = serviceCityMap?.[active];
    return (fromMap && fromMap.length ? fromMap : CITY_WHITELIST).slice();
  }, [active, serviceCityMap, CITY_WHITELIST]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return citiesForService;

    return citiesForService.filter((slug) => {
      const label = (
        CITY_LABELS?.[slug] ?? humanizeCitySlug(slug)
      ).toLowerCase();
      return slug.toLowerCase().includes(query) || label.includes(query);
    });
  }, [q, citiesForService, CITY_LABELS]);

  return (
    <section id={id} className={cn("w-full py-10 md:py-16", className)}>
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            {headline}
          </h2>
          <p className="text-slate-600 max-w-3xl">{description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const isActive = s.key === active;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(s.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  "border",
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Search + count */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative w-full md:max-w-sm">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16.5 16.5 21 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Stadt suchen…"
              className={cn(
                "w-full rounded-xl border border-slate-200 bg-white",
                "pl-10 pr-3 py-2.5 text-slate-900 placeholder:text-slate-400",
                "outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300",
              )}
            />
          </div>

          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "Stadt" : "Städte"} für{" "}
            <span className="font-semibold text-slate-900">
              {activeService.label}
            </span>
          </div>
        </div>

        {/* Cities grid */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          {filtered.length === 0 ? (
            <div className="py-10 text-center">
              <div className="text-slate-900 font-bold">Keine Treffer</div>
              <div className="text-slate-600 text-sm mt-1">
                Suchbegriff ändern oder eine andere Leistung auswählen.
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {filtered.map((citySlug) => {
                const label =
                  CITY_LABELS?.[citySlug] ?? humanizeCitySlug(citySlug);
                const href = `${activeService.hrefBase}/${citySlug}`; // ✅ echte Cityroute

                return (
                  <Link
                    key={`${active}-${citySlug}`}
                    href={href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-2",
                      "border border-slate-200 bg-slate-50 text-slate-800",
                      "hover:bg-slate-100 hover:border-slate-300 transition",
                      "text-sm font-semibold",
                    )}
                    title={`${activeService.label} in ${label}`}
                  >
                    <span>{label}</span>
                    <span aria-hidden="true" className="text-slate-400">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
