"use client";

import { useState } from "react";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-primary bg-surface-light backdrop-blur-md shadow-xl">
      <div className="container mx-auto flex h-20 items-center justify-between gap-3 px-4 md:h-24 md:px-6">
        <div className="flex min-w-0 items-center gap-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <div className="h-10 w-12 shrink-0 -skew-x-12 rounded border-2 border-primary bg-black text-xl font-black text-primary shadow-[4px_4px_0px_rgba(22,163,74,1)] flex items-center justify-center md:h-12 md:w-14 md:text-2xl">
              AE
            </div>

            <div className="hidden min-w-0 flex-col sm:flex">
              <span className="text-lg font-black uppercase italic leading-none tracking-tighter text-gray-900 md:text-xl">
                Gebäudeservice
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary md:text-xs">
                Professionell &amp; Sauber
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary"
            >
              Startseite
            </a>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary"
              >
                Leistungen
                <span className="text-xs">▼</span>
              </button>

              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="min-w-[220px] overflow-hidden rounded-xl border-2 border-primary bg-white shadow-xl">
                  <a
                    href="/gebaeudereinigung"
                    className="block px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-primary hover:text-white"
                  >
                    Gebäudereinigung
                  </a>
                  <a
                    href="/industriereinigung"
                    className="block px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-primary hover:text-white"
                  >
                    Industriereinigung
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="flex flex-col items-center rounded-lg bg-primary px-3 py-2 text-white transition-all hover:scale-105 sm:px-4 md:px-6"
            href={`tel:${PHONE}`}
          >
            <span className="mb-1 text-[9px] font-black uppercase leading-none tracking-widest sm:text-[10px]">
              Direkt-Kontakt
            </span>
            <span className="whitespace-nowrap text-base font-black leading-none tracking-tight font-mono sm:text-lg md:text-3xl">
              {PHONE_LABEL}
            </span>
          </a>

          <a
            className="hidden whitespace-nowrap border-2 border-primary bg-black px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_#16a34a] transition-all hover:bg-white hover:text-black md:block md:px-6 md:py-4 -skew-x-12"
            href="#quote"
          >
            Angebot
          </a>

          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-primary bg-black text-white md:hidden"
          >
            <span className="text-xl leading-none">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t-2 border-primary bg-white shadow-xl md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col">
              <a
                href="/"
                className="border-b border-gray-200 px-1 py-3 text-sm font-bold uppercase tracking-wider text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startseite
              </a>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex items-center justify-between border-b border-gray-200 px-1 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-900"
              >
                <span>Leistungen</span>
                <span className="text-xs">
                  {mobileServicesOpen ? "▲" : "▼"}
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="border-b border-gray-200 bg-gray-50">
                  <a
                    href="/gebaudereinigung"
                    className="block px-4 py-3 text-sm font-semibold text-gray-800"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Gebäudereinigung
                  </a>

                  {/*
                    Weitere Leistungen später hier ergänzen:
                    <a
                      href="/fensterreinigung"
                      className="block px-4 py-3 text-sm font-semibold text-gray-800"
                    >
                      Fensterreinigung
                    </a>
                  */}
                </div>
              )}

              <a
                href="#quote"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border-2 border-primary bg-primary px-4 py-3 text-sm font-black uppercase tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Angebot anfragen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
