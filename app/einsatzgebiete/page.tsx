// app/einsatzgebiete/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { ServiceCitiesSection } from "@/app/components/ServiceCitiesSection";

export const metadata: Metadata = {
  title: "Einsatzgebiete | AE Gebäudeservice",
  description:
    "Alle Einsatzgebiete von AE Gebäudeservice auf einen Blick: Gebäudereinigung, Baureinigung, Containerreinigung, Glasreinigung, Grundreinigung, Industriereinigung, Spezialreinigung und Unterhaltsreinigung in vielen Städten in NRW.",
  alternates: {
    canonical: "/einsatzgebiete",
  },
  openGraph: {
    title: "Einsatzgebiete | AE Gebäudeservice",
    description:
      "Finden Sie Ihre Stadt und springen Sie direkt zur passenden Reinigungsleistung von AE Gebäudeservice in NRW.",
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
    basePath: "/gebaeudereinigung",
    icon: "apartment",
    description:
      "Saubere Büro-, Gewerbe- und Objektflächen für einen professionellen Eindruck.",
  },
  {
    key: "baureinigung",
    label: "Baureinigung",
    basePath: "/baureinigung",
    icon: "construction",
    description:
      "Vom Grobschmutz bis zur bezugsfertigen Übergabe nach Bau- und Renovierungsarbeiten.",
  },
  {
    key: "containerreinigung",
    label: "Containerreinigung",
    basePath: "/containerreinigung",
    icon: "inventory_2",
    description:
      "Reinigung von Aufenthaltscontainern, Bürocontainern und kompletten Containeranlagen.",
  },
  {
    key: "glasreinigung",
    label: "Glasreinigung",
    basePath: "/glasreinigung",
    icon: "window",
    description: "Streifenfreie Glas- und Fensterflächen für innen und außen.",
  },
  {
    key: "grundreinigung",
    label: "Grundreinigung",
    basePath: "/grundreinigung",
    icon: "cleaning_services",
    description:
      "Intensive Reinigung für stark beanspruchte Flächen und hartnäckige Verschmutzungen.",
  },
  {
    key: "industriereinigung",
    label: "Industriereinigung",
    basePath: "/industriereinigung",
    icon: "factory",
    description:
      "Saubere Produktions-, Lager- und Industrieflächen mit zuverlässiger Planung.",
  },
  {
    key: "spezialreinigung",
    label: "Spezialreinigung",
    basePath: "/spezialreinigung",
    icon: "precision_manufacturing",
    description:
      "Individuelle Reinigungslösungen für besondere Anforderungen und sensible Bereiche.",
  },
  {
    key: "unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    basePath: "/unterhaltsreinigung",
    icon: "event_repeat",
    description:
      "Regelmäßige Reinigung für dauerhaft gepflegte und einsatzbereite Objekte.",
  },
] as const;

export default function EinsatzgebietePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Einsatzgebiete | AE Gebäudeservice",
    description:
      "Übersicht aller Einsatzgebiete und Reinigungsleistungen von AE Gebäudeservice in NRW.",
    isPartOf: {
      "@type": "WebSite",
      name: "AE Gebäudeservice",
      url: "https://aegebaeudeservice.de",
    },
  };

  return (
    <main className="flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-20">
          <div className="border border-black/10 bg-gray-50 p-6 sm:p-8 md:p-12">
            <div className="max-w-4xl">
              <p className="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-3">
                Einsatzgebiete
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900">
                Reinigung in vielen Städten in NRW
              </h1>

              <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                Hier finden Sie alle Einsatzgebiete von AE Gebäudeservice.
                Wählen Sie Ihre Stadt und springen Sie direkt zur passenden
                Leistung – von der Gebäudereinigung über die Baureinigung bis
                hin zur Container-, Glas-, Industrie- oder Unterhaltsreinigung.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+491757540841"
                  className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-black uppercase text-white transition hover:opacity-90"
                >
                  Jetzt anrufen
                </a>

                <Link
                  href="/#quote"
                  className="inline-flex items-center justify-center border border-black px-5 py-3 text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
                >
                  Angebot anfragen
                </Link>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.key}
                  href={service.basePath}
                  className="border border-black/10 bg-white p-5 transition hover:border-primary hover:bg-primary hover:text-white group"
                >
                  <span className="material-icons-outlined text-3xl mb-4 block text-primary group-hover:text-white">
                    {service.icon}
                  </span>

                  <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-white">
                    {service.label}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCitiesSection defaultService="gebaeudereinigung" />

      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6 pb-12 sm:pb-16 md:pb-20">
          <div className="border border-black/10 bg-gray-50 p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
              <div>
                <p className="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-3">
                  Sauberkeit mit System
                </p>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900">
                  Der passende Reinigungsservice für Ihr Objekt
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Ob laufende Objektpflege, kurzfristige Baureinigung,
                  professionelle Glasreinigung oder spezialisierte Einsätze in
                  Industrie und Gewerbe: AE Gebäudeservice steht für schnelle
                  Reaktionszeiten, saubere Abläufe und verlässliche Qualität.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Über die Städteübersicht gelangen Sie direkt auf die passende
                  Leistungsseite für Ihren Standort. So finden Interessenten
                  schnell genau die Reinigungslösung, die sie benötigen.
                </p>
              </div>

              <div className="bg-white border border-black/10 p-5 sm:p-6">
                <h3 className="text-lg font-black uppercase text-gray-900">
                  Ihre Vorteile
                </h3>

                <ul className="mt-4 space-y-3 text-sm sm:text-base text-gray-700">
                  <li>• Viele Städte in NRW direkt auswählbar</li>
                  <li>• Passende Leistung mit einem Klick erreichbar</li>
                  <li>• Klare Struktur für Nutzer und SEO</li>
                  <li>• Schnelle Anfrage oder direkter Telefonkontakt</li>
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:+491757540841"
                    className="inline-flex items-center justify-center bg-black px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-primary"
                  >
                    0175 75 40 841 anrufen
                  </a>

                  <Link
                    href="/#quote"
                    className="inline-flex items-center justify-center border border-black px-4 py-3 text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
                  >
                    Jetzt Anfrage senden
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
