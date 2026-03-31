import type { Metadata } from "next";
import { CITY_WHITELIST } from "@/lib/cities";
import CityServiceSearch from "./CityServiceSearch";

export const metadata: Metadata = {
  title: "Einsatzgebiete | AE Gebäudeservice",
  description:
    "Alle Einsatzgebiete von AE Gebäudeservice auf einen Blick. Finden Sie Ihre Stadt und sehen Sie sofort alle verfügbaren Leistungen – von Gebäudereinigung bis Baureinigung.",
  alternates: {
    canonical: "/einsatzgebiete",
  },
  openGraph: {
    title: "Einsatzgebiete | AE Gebäudeservice",
    description:
      "Stadt auswählen und alle Reinigungsleistungen von AE Gebäudeservice auf einen Blick sehen.",
    url: "/einsatzgebiete",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AE Gebäudeservice",
      },
    ],
  },
};

const SERVICES = [
  {
    key: "gebaeudereinigung",
    label: "Gebäudereinigung",
    href: "/gebaeudereinigung",
    icon: "apartment",
  },
  {
    key: "baureinigung",
    label: "Baureinigung",
    href: "/baureinigung",
    icon: "construction",
  },
  {
    key: "containerreinigung",
    label: "Containerreinigung",
    href: "/containerreinigung",
    icon: "inventory_2",
  },
  {
    key: "glasreinigung",
    label: "Glasreinigung",
    href: "/glasreinigung",
    icon: "window",
  },
  {
    key: "grundreinigung",
    label: "Grundreinigung",
    href: "/grundreinigung",
    icon: "cleaning_services",
  },
  {
    key: "industriereinigung",
    label: "Industriereinigung",
    href: "/industriereinigung",
    icon: "factory",
  },
  {
    key: "spezialreinigung",
    label: "Spezialreinigung",
    href: "/spezialreinigung",
    icon: "precision_manufacturing",
  },
  {
    key: "unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    href: "/unterhaltsreinigung",
    icon: "event_repeat",
  },
] as const;

export default function EinsatzgebietePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Einsatzgebiete | AE Gebäudeservice",
    description:
      "Übersicht aller Städte und Leistungen von AE Gebäudeservice in NRW.",
    isPartOf: {
      "@type": "WebSite",
      name: "AE Gebäudeservice",
      url: "https://aegebaeudeservice.de",
    },
  };

  return (
    <main className="flex-grow bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-3">
              Einsatzgebiete
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900">
              Städte & Leistungen auf einen Blick
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              Finden Sie Ihre Stadt und sehen Sie sofort, welche Leistungen wir
              dort anbieten. So gelangen Sie mit einem Klick direkt zur
              passenden Reinigungsleistung von AE Gebäudeservice.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+491757540841"
                className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-black uppercase text-white transition hover:opacity-90"
              >
                Jetzt anrufen
              </a>

              <a
                href="/#quote"
                className="inline-flex items-center justify-center border border-black px-5 py-3 text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <CityServiceSearch cities={CITY_WHITELIST} services={SERVICES} />

      <section className="border-t border-black/10">
        <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-black/10 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
                Schnell zur passenden Leistung
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Statt lange zu suchen, wählen Interessenten direkt ihre Stadt
                aus und sehen sofort alle Leistungen. Das ist übersichtlicher,
                conversionstärker und für lokale Landingpages deutlich
                angenehmer.
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
                Für viele Städte in NRW
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                AE Gebäudeservice ist in vielen Städten im Einsatz – von
                laufender Unterhaltsreinigung über Glas- und Gebäudereinigung
                bis hin zu Bau- und Spezialreinigung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
