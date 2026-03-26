import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import GebaeudereinigungForm from "../GebaeudereinigungForm";
import { CITY_WHITELIST, cityLabel, isCitySlug } from "@/lib/cities";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

export async function generateStaticParams() {
  return CITY_WHITELIST.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;

  if (!isCitySlug(city)) {
    return {
      title: "Gebäudereinigung | AE Gebäudeservice",
      description:
        "Professionelle Gebäudereinigung für Büro, Gewerbe, Treppenhaus und Objektpflege. Schnell, gründlich und zuverlässig. Jetzt anrufen und Termin sichern.",
    };
  }

  const cityName = cityLabel(city);

  return {
    title: `Gebäudereinigung in ${cityName} | AE Gebäudeservice`,
    description: `Professionelle Gebäudereinigung in ${cityName} für Büro, Gewerbe, Treppenhaus und Objektpflege. Schnell, gründlich und zuverlässig. Jetzt anrufen und Termin sichern.`,
    alternates: {
      canonical: `/gebaeudereinigung/${city}`,
    },
  };
}

export default async function GebaeudereinigungCityPage({ params }: Props) {
  const { city } = await params;

  if (!isCitySlug(city)) {
    notFound();
  }

  const cityName = cityLabel(city);

  return (
    <>
      <a
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] animate-bounce hover:scale-110 transition-transform"
        href={`tel:${PHONE}`}
        aria-label={`Jetzt Gebäudereinigung in ${cityName} anrufen`}
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">
          phone
        </span>
      </a>

      <section className="relative overflow-hidden bg-background-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/fassadenreinigung.jpg"
            alt={`Professionelle Gebäudereinigung in ${cityName}`}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 mb-6 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
              Professionelle Reinigung für Gewerbe & Objekt in {cityName}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase mb-6">
              Gebäudereinigung
              <span className="block text-primary italic mt-2">
                in {cityName} sauber, schnell, zuverlässig
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 md:mb-10">
              AE Gebäudeservice sorgt in {cityName} für gepflegte
              Eingangsbereiche, saubere Büros, hygienische Sanitärflächen und
              einen starken ersten Eindruck bei Mitarbeitern, Kunden und
              Besuchern. Jetzt anrufen und kurzfristig einen Termin sichern.
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
              <span className="material-icons-outlined text-primary text-3xl">
                verified
              </span>
              <span className="font-black uppercase">
                Zuverlässige Einsätze
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">
                cleaning_services
              </span>
              <span className="font-black uppercase">Gründliche Reinigung</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">
                schedule
              </span>
              <span className="font-black uppercase">Kurzfristige Termine</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">
                phone
              </span>
              <span className="font-black uppercase">
                Direkter Kontakt statt Warten
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-light">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative min-h-[320px] md:min-h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/reinigungskraft.jpg"
              alt={`Reinigungskraft bei der Gebäudereinigung in ${cityName}`}
              title={`Reinigungskraft bei der Gebäudereinigung in ${cityName}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Sauberkeit mit System in {cityName}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Gebäudereinigung, die Eindruck macht
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Eine professionelle Gebäudereinigung in {cityName} ist weit mehr
                als nur ein sauberes Erscheinungsbild. Gepflegte Flächen,
                saubere Arbeitsplätze und hygienische Sanitärräume wirken sich
                direkt auf die Wahrnehmung deines Unternehmens aus. Kunden,
                Besucher und Mitarbeiter erkennen sofort, ob ein Objekt
                ordentlich, strukturiert und professionell geführt wird.
              </p>

              <p>
                Genau hier setzt AE Gebäudeservice an. Wir übernehmen in{" "}
                {cityName} die regelmäßige oder intensive Reinigung von Büros,
                Treppenhäusern, Gewerbeflächen, Eingangsbereichen und gemeinsam
                genutzten Objektflächen. Unser Ziel ist nicht nur oberflächliche
                Sauberkeit, sondern ein dauerhaft gepflegter Zustand, der
                Vertrauen schafft und den täglichen Betrieb unterstützt.
              </p>

              <p>
                Besonders wichtig ist uns dabei die unkomplizierte Abwicklung:
                kein langes Warten, keine unnötigen Umwege, kein kompliziertes
                Anfragechaos. Du rufst an, wir besprechen den Einsatz und finden
                schnell eine passende Lösung. Wer eine Gebäudereinigung in{" "}
                {cityName} sucht, will meist vor allem eins: schnelle Hilfe und
                ein Ergebnis, auf das man sich verlassen kann.
              </p>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex mt-8 bg-primary text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-colors items-center gap-3"
            >
              <span className="material-icons-outlined">call</span>
              Direkt Termin vereinbaren
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="leistungen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Unsere Leistungen in {cityName}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Gebäudereinigung für verschiedene Einsatzbereiche
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              Ob laufende Unterhaltsreinigung oder gezielte Reinigung einzelner
              Bereiche: Wir stellen uns in {cityName} auf dein Objekt, deine
              Nutzung und deine Anforderungen ein.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "apartment",
                title: "Büroreinigung",
                text: "Saubere Schreibtische, gepflegte Böden, ordentliche Gemeinschaftsflächen und ein professioneller Eindruck für Mitarbeiter und Kunden.",
              },
              {
                icon: "stairs",
                title: "Treppenhausreinigung",
                text: "Regelmäßige Reinigung von Treppenhäusern, Geländern, Eingangsbereichen und Laufwegen in Wohn- und Gewerbeobjekten.",
              },
              {
                icon: "storefront",
                title: "Gewerbereinigung",
                text: "Für Ladenlokale, Praxen, Studios, Werkstätten und sonstige gewerblich genutzte Flächen mit hohem Publikumsverkehr.",
              },
              {
                icon: "wc",
                title: "Sanitärreinigung",
                text: "Gründliche Reinigung hygienisch sensibler Bereiche wie Toiletten, Waschräume und Sanitäranlagen.",
              },
              {
                icon: "weekend",
                title: "Gemeinschaftsflächen",
                text: "Saubere Küchen, Aufenthaltsräume, Besprechungszonen und gemeinsam genutzte Bereiche für ein gepflegtes Gesamtbild.",
              },
              {
                icon: "construction",
                title: "Objektpflege",
                text: "Reinigung und Pflege von Bereichen, die regelmäßig beansprucht werden und dauerhaft ordentlich wirken sollen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-8 shadow-xl ring-1 ring-gray-200 transition-transform hover:-translate-y-1"
              >
                <span className="material-icons-outlined mb-5 block text-5xl text-primary">
                  {item.icon}
                </span>
                <h4 className="mb-4 text-2xl font-black uppercase text-gray-900">
                  {item.title}
                </h4>
                <p className="leading-relaxed text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-8 md:py-10 border-y-4 border-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white leading-none">
              Reinigung in {cityName} anfragen statt warten
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
              Warum AE Gebäudeservice
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Sauberkeit, auf die du dich verlassen kannst
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Viele Unternehmen in {cityName} suchen nicht einfach irgendeine
                Reinigung, sondern einen Dienstleister, der erreichbar ist,
                mitdenkt und zuverlässig arbeitet. Genau das ist unser Anspruch.
                Wir setzen auf klare Kommunikation, planbare Abläufe und ein
                Ergebnis, das du sofort siehst.
              </p>

              <p>
                Wer eine Gebäudereinigung in {cityName} beauftragt, möchte nicht
                ständig nachkontrollieren müssen. Deshalb legen wir Wert auf
                Sorgfalt, sichtbare Qualität und einen professionellen Umgang
                mit deinem Objekt. Saubere Räume schaffen Vertrauen,
                unterstützen den Werterhalt und sorgen dafür, dass dein
                Unternehmen nach außen genauso stark wirkt wie nach innen.
              </p>

              <p>
                Am schnellsten geht es telefonisch: kurz anrufen, Bedarf
                schildern und direkt den nächsten Schritt abstimmen. Gerade bei
                kurzfristigem Reinigungsbedarf ist das der direkte Weg zur
                Lösung.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/gebaeudereinigung-objekt.jpg"
              alt={`Sauberes Objekt nach professioneller Gebäudereinigung in ${cityName}`}
              title={`Sauberes Objekt nach professioneller Gebäudereinigung in ${cityName}`}
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
                Ein kurzer Anruf spart oft viel Abstimmung. Wir sagen dir
                direkt, was für dein Objekt in {cityName} sinnvoll ist und wie
                der Einsatz schnell umgesetzt werden kann.
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
            Gebäudereinigung in {cityName} anfragen
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
            Du suchst in {cityName} einen zuverlässigen Partner für
            Gebäudereinigung, Büroreinigung, Treppenhausreinigung oder
            gewerbliche Reinigung? Dann ruf jetzt an und besprich deinen Einsatz
            direkt mit uns. So kommst du ohne Umwege schnell zu einer sauberen
            Lösung.
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
    </>
  );
}
