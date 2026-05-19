import type { Metadata } from "next";
import Image from "next/image";
import GebaeudereinigungForm from "../GebaeudereinigungForm";

import { ServiceCitiesSection } from "@/app/components/ServiceCitiesSection";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export const metadata: Metadata = {
  title: "Gebäudereinigung Bochum | AE Gebäudeservice",
  description:
    "Professionelle Gebäudereinigung in Bochum für Büro, Gewerbe, Treppenhaus, Praxis und Objektpflege. Schnell, gründlich und zuverlässig. Jetzt anrufen.",
  alternates: {
    canonical: "/gebaeudereinigung/bochum",
  },
};

export default function GebaeudereinigungBochumPage() {
  return (
    <>
      <a
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] animate-bounce hover:scale-110 transition-transform"
        href={`tel:${PHONE}`}
        aria-label="Jetzt anrufen"
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">
          phone
        </span>
      </a>

      <section className="relative overflow-hidden bg-background-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/fassadenreinigung.jpg"
            alt="Professionelle Gebäudereinigung in Bochum"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 mb-6 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
              Gebäudereinigung in Bochum für Gewerbe, Objekt & Verwaltung
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase mb-6">
              Gebäudereinigung Bochum
              <span className="block text-primary italic mt-2">
                sauber, schnell, zuverlässig
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 md:mb-10">
              AE Gebäudeservice übernimmt Gebäudereinigung in Bochum für Büros, Praxen,
              Treppenhäuser, Bildungsflächen, Ladenlokale und Gewerbeeinheiten. Wir
              sorgen für gepflegte Eingangsbereiche, saubere Arbeitsflächen, hygienische
              Sanitärbereiche und einen professionellen Eindruck bei Kunden, Besuchern
              und Mitarbeitern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="bg-primary text-white font-black text-lg md:text-2xl py-4 md:py-6 px-8 md:px-12 shadow-[0_0_40px_rgba(22,163,74,0.45)] hover:scale-[1.02] transition-all uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <span className="material-icons-outlined text-3xl">
                  phone_in_talk
                </span>
                Jetzt anrufen
              </a>

              <a
                href="#leistungen"
                className="border-2 border-white/30 text-white font-bold text-base md:text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all px-8 py-4 md:py-6 text-center"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t-4 border-primary border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">verified</span>
              <span className="font-black uppercase">Zuverlässige Einsätze</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">cleaning_services</span>
              <span className="font-black uppercase">Gründliche Reinigung</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">schedule</span>
              <span className="font-black uppercase">Kurzfristige Termine</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">location_on</span>
              <span className="font-black uppercase">Vor Ort in Bochum</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-light">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative min-h-[320px] md:min-h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/reinigungskraft.jpg"
              alt="Reinigungskraft bei der Gebäudereinigung in Bochum"
              title="Reinigungskraft bei der Gebäudereinigung in Bochum"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Sauberkeit mit System in Bochum
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Gebäudereinigung, die zum Objekt passt
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Bochum lebt von kurzen Wegen, vielen Dienstleistern, Hochschulnähe und
                gewachsenen Gewerbestandorten. Reinigung muss hier unkompliziert sein und
                zu Objekten passen, die von Mitarbeitern, Kunden oder Besuchern täglich
                genutzt werden.
              </p>

              <p>
                Für Bochum sind verlässliche Einsätze wichtig, die Eingangsbereiche,
                Arbeitsflächen und gemeinschaftlich genutzte Räume dauerhaft ordentlich
                halten.
              </p>

              <p>
                Wir reinigen in Bochum unter anderem rund um Innenstadt, Ehrenfeld,
                Wiemelhausen, Wattenscheid, Langendreer und Grumme. Ob regelmäßige
                Unterhaltsreinigung, Treppenhausreinigung, Büroreinigung oder gezielte
                Objektpflege: Wir stimmen Umfang, Rhythmus und Schwerpunkte direkt mit dir
                ab.
              </p>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex mt-8 bg-primary text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-colors items-center gap-3"
            >
              <span className="material-icons-outlined">call</span>
              Gebäudereinigung in Bochum anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="leistungen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Leistungen in Bochum
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Gebäudereinigung für Büro, Gewerbe und Objekt
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              Von der Büroreinigung bis zur Treppenhausreinigung: In Bochum übernehmen
              wir die Reinigung so, dass sie zu Nutzung, Objektgröße, Öffnungszeiten und
              gewünschtem Qualitätsniveau passt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "apartment",
                title: "Büroreinigung in Bochum",
                text: "Saubere Schreibtische, gepflegte Böden, ordentliche Küchenbereiche und ein professioneller Eindruck für Mitarbeiter, Kunden und Besucher.",
              },
              {
                icon: "stairs",
                title: "Treppenhausreinigung",
                text: "Regelmäßige Reinigung von Treppenhäusern, Geländern, Eingangsbereichen und Laufwegen in Wohn- und Gewerbeobjekten.",
              },
              {
                icon: "storefront",
                title: "Gewerbereinigung",
                text: "Für Ladenlokale, Praxen, Studios, Werkstätten und sonstige Flächen mit Publikumsverkehr oder täglicher Nutzung.",
              },
              {
                icon: "wc",
                title: "Sanitärreinigung",
                text: "Gründliche Pflege von Waschräumen und Toilettenbereichen für ein hygienisches und gepflegtes Gesamtbild.",
              },
              {
                icon: "window",
                title: "Glas- & Eingangsflächen",
                text: "Reinigung stark beanspruchter Glasflächen, Türen, Griffbereiche und sichtbarer Flächen für einen sauberen Außenauftritt.",
              },
              {
                icon: "construction",
                title: "Flexible Objektpflege",
                text: "Individuelle Reinigungslösungen nach Bedarf: einmalig, regelmäßig, kurzfristig oder mit festem Reinigungsrhythmus.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 shadow-xl p-8 bg-surface-light hover:-translate-y-1 transition-transform"
              >
                <span className="material-icons-outlined text-primary text-5xl mb-5 block">
                  {item.icon}
                </span>
                <h4 className="text-2xl font-black uppercase text-gray-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-8 md:py-10 border-y-4 border-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white leading-none">
              Reinigung in Bochum anfragen
            </h2>
            <p className="text-black font-bold uppercase tracking-widest text-sm mt-2">
              Ruf jetzt an und sichere dir schnell einen Termin.
            </p>
          </div>

          <a
            href={`tel:${PHONE}`}
            className="bg-black text-white px-8 md:px-12 py-4 md:py-6 text-2xl md:text-5xl font-black hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            {PHONE_LABEL}
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-light">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Warum AE Gebäudeservice in Bochum
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Sauberkeit, auf die du dich verlassen kannst
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Viele Unternehmen und Hausverwaltungen in Bochum suchen nicht irgendeine
                Reinigung, sondern einen Dienstleister, der erreichbar ist, mitdenkt und
                zuverlässig arbeitet. Genau darauf ist AE Gebäudeservice ausgelegt.
              </p>

              <p>
                Wir achten auf klare Kommunikation, sichtbare Ergebnisse und
                Reinigungsabläufe, die den Alltag im Objekt nicht unnötig stören. Gerade
                in Bochum mit unterschiedlichen Objektarten ist es wichtig, dass Reinigung
                flexibel bleibt und trotzdem zuverlässig ausgeführt wird.
              </p>

              <p>
                Am schnellsten geht es telefonisch: kurz anrufen, Bedarf schildern und
                direkt den nächsten Schritt abstimmen. So bekommst du ohne lange Wartezeit
                eine Gebäudereinigung, die zu deinem Objekt passt.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/gebaeudereinigung-objekt.jpg"
              alt="Sauberes Objekt nach Gebäudereinigung in Bochum"
              title="Sauberes Objekt nach Gebäudereinigung in Bochum"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 md:py-24 relative bg-background-dark overflow-hidden"
        id="quote"
      >
        <div className="absolute inset-0 clip-diagonal bg-zinc-900 z-0" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start lg:items-center min-w-0">
            <div className="text-white min-w-0">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-8 md:mb-10 break-words">
                JETZT
                <br />
                <span className="text-primary">STARTEN.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-md italic break-words">
                Du suchst Gebäudereinigung in Bochum? Ein kurzer Anruf reicht oft, um
                Objektart, Umfang, Rhythmus und den nächsten freien Termin direkt
                abzustimmen.
              </p>

              <div className="p-6 sm:p-8 md:p-10 bg-primary shadow-[10px_10px_0px_#000000] md:shadow-[15px_15px_0px_#000000] max-w-full overflow-hidden">
                <p className="font-black text-black uppercase tracking-widest mb-4 text-sm break-words">
                  Persönliche Beratung
                </p>
                <a
                  className="text-2xl sm:text-3xl md:text-5xl font-black text-white flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 break-words leading-tight"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-3xl md:text-4xl shrink-0">
                    phone_iphone
                  </span>
                  <span className="break-all sm:break-normal">
                    {PHONE_LABEL}
                  </span>
                </a>
              </div>
            </div>

            <GebaeudereinigungForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Gebäudereinigung in Bochum anfragen
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
            Du suchst einen zuverlässigen Partner für Gebäudereinigung, Büroreinigung,
            Treppenhausreinigung oder gewerbliche Reinigung in Bochum? Dann ruf jetzt
            an und besprich deinen Einsatz direkt mit uns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="bg-primary text-white px-8 md:px-12 py-4 md:py-6 font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-transform"
            >
              Jetzt anrufen: {PHONE_LABEL}
            </a>
            <a
              href="#quote"
              className="border-2 border-white/20 px-8 md:px-12 py-4 md:py-6 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Angebot anfragen
            </a>
          </div>
        </div>
      </section>

      <ServiceCitiesSection defaultService="gebaeudereinigung" />
    </>
  );
}
