import type { Metadata } from "next";
import Link from "next/link";
import GrundreinigungForm from "@/components/forms/GrundreinigungForm";

export const metadata: Metadata = {
  title: "Grundreinigung in Krefeld | AE Gebäudeservice",
  description:
    "Professionelle Grundreinigung in Krefeld: Büros, Praxen, Treppenhäuser, Gewerbeflächen und Objekte nach Umbau oder Auszug. Jetzt Termin sichern.",
  alternates: { canonical: "/grundreinigung/krefeld" },
};

const benefits = [
  "Kostenlose Einschätzung für Ihre Fläche",
  "Reinigung von Böden, Kanten, Sanitär- und Griffbereichen",
  "Ideal nach Umbau, Auszug, Leerstand oder starker Nutzung",
  "Flexible Termine für Gewerbe, Praxis und Wohnobjekte",
];

const cityNeeds = ["Büros, Praxen und Beratungsräume", "Treppenhäuser, Hauseingänge und Flure", "Gewerbeflächen und Sozialräume", "Böden, Sanitärbereiche und Küchen nach intensiver Nutzung"];

const faqs = [
  {
    question: "Was kostet eine Grundreinigung in Krefeld?",
    answer:
      "Der Preis hängt von Quadratmetern, Verschmutzungsgrad, Bodenart, Zugänglichkeit und gewünschtem Leistungsumfang ab. Am sinnvollsten ist eine kurze Einschätzung mit Fotos oder eine Besichtigung.",
  },
  {
    question: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
    answer:
      "Ja, bei vielen Objekten in Krefeld sind Termine am Abend, am Wochenende oder in betriebsschwachen Zeiten sinnvoll. Wir stimmen das passend zu Ihrem Objekt ab.",
  },
  {
    question: "Für welche Objekte eignet sich die Grundreinigung?",
    answer:
      "Die Grundreinigung eignet sich für Büros, Praxen, Treppenhäuser, Ladenflächen, Sanitärbereiche, Küchenzonen, Gemeinschaftsräume und Flächen nach Renovierung, Umzug oder intensiver Nutzung.",
  },
];

export default function GrundreinigungKrefeldPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Grundreinigung in Krefeld",
    areaServed: "Krefeld",
    provider: {
      "@type": "LocalBusiness",
      name: "AE Gebäudeservice",
    },
    serviceType: "Grundreinigung",
    description:
      "Professionelle Grundreinigung für Büros, Praxen, Treppenhäuser, Gewerbeflächen und Wohnobjekte in Krefeld.",
  };

  return (
    <main className="bg-white text-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.35),transparent_35%),linear-gradient(135deg,rgba(0,0,0,0.95),rgba(0,0,0,0.75))]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 bg-primary px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
              <span className="material-icons-outlined text-base">cleaning_services</span>
              Grundreinigung Krefeld
            </div>

            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Grundreinigung in Krefeld für sichtbar saubere Flächen
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
              Professionelle Grundreinigung für Gewerbeflächen, Büroetagen, Praxen, Wohnanlagen und Nutzflächen mit solider, gründlicher Reinigungserwartung. Wir bringen Böden,
              Sanitärbereiche, Küchen, Eingänge und stark genutzte Zonen wieder
              in einen gepflegten Zustand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:+4915757540841"
                className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-base font-black uppercase text-white transition hover:bg-white hover:text-black"
              >
                <span className="material-icons-outlined">call</span>
                Jetzt anrufen
              </Link>
              <Link
                href="#angebot"
                className="inline-flex items-center justify-center gap-2 border-2 border-white px-7 py-4 text-base font-black uppercase text-white transition hover:bg-white hover:text-black"
              >
                Angebot anfragen
                <span className="material-icons-outlined">arrow_downward</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/10 p-4 backdrop-blur">
                  <span className="material-icons-outlined text-primary">verified</span>
                  <span className="text-sm font-bold text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="angebot" className="lg:pt-8">
            <GrundreinigungForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Krefelder Objektpflege
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-5xl">
              Mehr als nur einmal durchwischen
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>Krefeld ist geprägt von Wohnquartieren, Gewerbeflächen und vielen praktischen Alltagsobjekten. Unsere Grundreinigung ist darauf ausgelegt, Flächen wieder in einen sauberen, gepflegten und gut nutzbaren Zustand zu bringen.</p>
            <p>Ob Uerdingen, Fischeln oder Innenstadt: Wir stimmen die Reinigung auf Verschmutzungsgrad, Objektgröße und gewünschte Nutzung nach der Reinigung ab.</p>
            <p>Für Krefeld setzen wir auf eine ehrliche Einschätzung und eine Grundreinigung, die sichtbar mehr leistet als die normale regelmäßige Reinigung.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Typische Einsätze in Krefeld
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
              Dafür werden wir in Krefeld häufig angefragt
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cityNeeds.map((item, index) => (
              <article key={item} className="bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-black text-white">
                  <span className="material-icons-outlined">
                    {["apartment", "storefront", "meeting_room", "sanitizer"][index]}
                  </span>
                </div>
                <h3 className="text-lg font-black uppercase">{item}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-gray-600">
                  Wir prüfen vorab, welche Flächen wirklich grundgereinigt werden
                  müssen und welche Bereiche den größten sichtbaren Effekt bringen.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-24">
        <div className="bg-black p-8 text-white lg:col-span-1">
          <span className="material-icons-outlined text-5xl text-primary">location_on</span>
          <h2 className="mt-6 text-3xl font-black uppercase">Vor Ort in Krefeld</h2>
          <p className="mt-4 text-white/75">
            Einsatz in Innenstadt, Uerdingen, Fischeln, Hüls, Oppum und Bockum. Weitere Stadtteile und angrenzende Orte prüfen wir
            gerne direkt mit.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
          {[
            ["1", "Kurze Einschätzung", "Sie senden uns Fotos, Quadratmeter, Adresse und den gewünschten Zeitraum."],
            ["2", "Planung nach Objekt", "Wir klären Zugang, Parken, Prioritäten, Bodenarten und sensible Bereiche."],
            ["3", "Gründliche Reinigung", "Unser Team arbeitet systematisch von stark belasteten Bereichen bis zu Details."],
            ["4", "Saubere Übergabe", "Zum Schluss prüfen wir die Fläche und besprechen mögliche Folgepflege."],
          ].map(([step, title, text]) => (
            <div key={step} className="border-2 border-gray-200 p-6">
              <div className="text-5xl font-black text-primary">{step}</div>
              <h3 className="mt-4 text-xl font-black uppercase">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Wann lohnt es sich?
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
              Wenn normale Reinigung nicht mehr reicht
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Eine Grundreinigung in Krefeld ist sinnvoll, wenn Böden stumpf wirken,
              Ecken und Ränder sichtbar verschmutzt sind, Sanitärbereiche eine
              intensive Reinigung brauchen oder eine Fläche nach Umbau, Auszug,
              Leerstand oder starker Nutzung wieder präsentabel werden soll.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Bodenflächen und Laufstraßen intensiv reinigen",
              "Ränder, Ecken, Sockel und Griffbereiche bearbeiten",
              "Sanitärbereiche und Küchenzonen gründlich säubern",
              "Objekt für Übergabe, Kundenverkehr oder Neuvermietung vorbereiten",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 bg-white/10 p-5">
                <span className="material-icons-outlined text-primary">check_circle</span>
                <span className="font-bold text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
            Fragen zur Grundreinigung
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
            Häufige Fragen aus Krefeld
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-2 border-gray-200 p-6">
              <h3 className="text-lg font-black uppercase">{faq.question}</h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              Grundreinigung in Krefeld anfragen
            </h2>
            <p className="mt-3 max-w-2xl font-semibold text-white/85">
              Schicken Sie uns kurz die wichtigsten Eckdaten. Wir melden uns schnell
              mit einer realistischen Einschätzung für Ihr Objekt.
            </p>
          </div>
          <Link
            href="#angebot"
            className="inline-flex items-center justify-center gap-2 bg-black px-7 py-4 text-base font-black uppercase text-white transition hover:bg-white hover:text-black"
          >
            Schnell-Angebot öffnen
            <span className="material-icons-outlined">arrow_upward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
