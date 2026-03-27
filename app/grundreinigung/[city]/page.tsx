import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import GrundreinigungForm from "../GrundreinigungForm";
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
      title: "Grundreinigung | AE Gebäudeservice",
      description:
        "Professionelle Grundreinigung für Büro, Gewerbe, Sanitärbereiche und stark beanspruchte Flächen. Gründlich, zuverlässig und schnell einsatzbereit. Jetzt anrufen.",
    };
  }

  const cityName = cityLabel(city);

  return {
    title: `Grundreinigung in ${cityName} | AE Gebäudeservice`,
    description: `Professionelle Grundreinigung in ${cityName} für Büro, Gewerbe, Sanitärbereiche und stark beanspruchte Flächen. Gründlich, zuverlässig und schnell einsatzbereit. Jetzt anrufen.`,
    alternates: {
      canonical: `/grundreinigung/${city}`,
    },
  };
}

export default async function GrundreinigungCityPage({ params }: Props) {
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
        aria-label={`Jetzt Grundreinigung in ${cityName} anrufen`}
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">
          phone
        </span>
      </a>

      <section className="relative overflow-hidden bg-background-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/grundreinigung.jpg"
            alt={`Professionelle Grundreinigung in ${cityName}`}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 mb-6 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
              Tiefenreinigung für stark beanspruchte Flächen in {cityName}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase mb-6">
              Grundreinigung
              <span className="block text-primary italic mt-2">
                in {cityName} gründlich, intensiv, sauber
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 md:mb-10">
              AE Gebäudeservice übernimmt die Grundreinigung in {cityName} für
              stark beanspruchte Böden, Sanitärbereiche, Büroflächen,
              Eingangsbereiche und gewerbliche Objekte. Für einen sichtbar
              gründlichen Zustand, wenn normale Reinigung nicht mehr ausreicht.
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
                auto_fix_high
              </span>
              <span className="font-black uppercase">Intensive Reinigung</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-primary text-3xl">
                cleaning_services
              </span>
              <span className="font-black uppercase">
                Gründlich bis ins Detail
              </span>
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
              src="/images/reinigung-gruendlich.jpg"
              alt={`Intensive Grundreinigung in ${cityName}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Grundreinigung mit sichtbarem Effekt in {cityName}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Wenn normale Reinigung nicht mehr ausreicht
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Eine Grundreinigung in {cityName} ist immer dann sinnvoll, wenn
                Flächen deutlich stärker verschmutzt sind, Rückstände entfernt
                werden müssen oder ein Objekt wieder in einen gründlich sauberen
                Zustand gebracht werden soll. Gerade bei stark beanspruchten
                Böden, Sanitärbereichen, Küchen, Eingangsbereichen oder älteren
                Verschmutzungen reicht eine normale Unterhaltsreinigung oft
                nicht aus.
              </p>

              <p>
                AE Gebäudeservice übernimmt in {cityName} die intensive
                Reinigung von Oberflächen, Bodenbelägen und sensiblen Bereichen,
                damit Räume wieder ordentlich, gepflegt und nutzbar wirken.
                Dabei geht es nicht nur um einen optischen Unterschied, sondern
                um echte Tiefenreinigung dort, wo sich Schmutz über längere Zeit
                festgesetzt hat.
              </p>

              <p>
                Besonders wichtig ist dabei eine einfache Abstimmung: kurz
                anrufen, Einsatz besprechen und direkt klären, welche Bereiche
                gereinigt werden sollen. Wer eine Grundreinigung in {cityName}
                sucht, will eine schnelle Lösung mit sichtbar gründlichem
                Ergebnis.
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
              Grundreinigung für verschiedene Einsatzbereiche
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              Ob Bodenflächen, Sanitärzonen, Gewerberäume oder stark genutzte
              Bereiche: Wir passen die Grundreinigung in {cityName} an Objekt,
              Verschmutzungsgrad und Einsatzbedarf an.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "floor",
                title: "Bodengrundreinigung",
                text: "Intensive Reinigung stark beanspruchter Böden, um alte Rückstände, Schmutzschichten und festgesetzte Verschmutzungen zu lösen.",
              },
              {
                icon: "wc",
                title: "Sanitärbereiche",
                text: "Gründliche Reinigung hygienisch sensibler Flächen wie Toiletten, Waschräume und Sanitäranlagen.",
              },
              {
                icon: "kitchen",
                title: "Küchen & Aufenthaltsbereiche",
                text: "Reinigung von stark genutzten Gemeinschaftsflächen, Küchenbereichen und angrenzenden Oberflächen.",
              },
              {
                icon: "apartment",
                title: "Büro & Gewerbe",
                text: "Grundreinigung für Büros, Praxen, Studios, Ladenlokale und andere gewerblich genutzte Flächen.",
              },
              {
                icon: "cleaning_services",
                title: "Oberflächen & Details",
                text: "Intensive Reinigung von Oberflächen, Ecken, Kanten und Bereichen, die bei normaler Reinigung oft nur oberflächlich behandelt werden.",
              },
              {
                icon: "event_repeat",
                title: "Einmalig oder nach Bedarf",
                text: "Einzeltermine, Sonderreinigungen oder intensive Reinigung als Ergänzung zur laufenden Pflege.",
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
              Grundreinigung in {cityName} direkt anfragen
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
              Tiefenreinigung ohne komplizierte Abläufe
            </h3>

            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Wer eine Grundreinigung in {cityName} beauftragt, sucht keinen
                Standarddurchgang, sondern ein wirklich gründliches Ergebnis.
                Genau darauf legen wir Wert. Saubere, intensiv gereinigte
                Flächen machen sofort einen sichtbaren Unterschied und sorgen
                dafür, dass Räume wieder gepflegt, ordentlich und nutzbar
                wirken.
              </p>

              <p>
                Viele wollen keinen Anbieter, der alles unnötig kompliziert
                macht, sondern einen Partner, der erreichbar ist, sauber
                arbeitet und den Einsatz zuverlässig umsetzt. Genau das ist der
                Anspruch von AE Gebäudeservice in {cityName}.
              </p>

              <p>
                Der schnellste Weg geht telefonisch: kurz anrufen, Bedarf
                schildern und direkt abstimmen, wann die Grundreinigung sinnvoll
                umgesetzt werden kann.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/objektpflege.jpg"
              alt={`Saubere Flächen nach professioneller Grundreinigung in ${cityName}`}
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
                <span className="text-primary">ANFRAGEN.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-md italic break-words">
                Ein kurzer Anruf spart oft viel Abstimmung. Wir sagen dir
                direkt, was für deine Flächen in {cityName} sinnvoll ist und wie
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

            <GrundreinigungForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Grundreinigung in {cityName} anfragen
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
            Du suchst in {cityName} einen zuverlässigen Partner für
            Grundreinigung, intensive Flächenreinigung oder die gründliche
            Reinigung stark beanspruchter Bereiche? Dann ruf jetzt an und
            besprich deinen Einsatz direkt mit uns. So kommst du ohne Umwege
            schnell zu einem sichtbar sauberen Ergebnis.
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
