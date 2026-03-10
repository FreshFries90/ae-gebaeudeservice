// app/industrie/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export const metadata: Metadata = {
  title: "Industriereinigung | AE Gebäudeservice",
  description:
    "Spezialreinigung für Maschinen, Produktionsbereiche und Werkshallen. AE Gebäudeservice reinigt gründlich, zuverlässig und effizient. Jetzt anrufen und Termin sichern.",
};

export default function IndustriePage() {
  return (
    <>
      {/* Floating Call Button */}
      <a
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(22,163,74,0.55)] transition-transform hover:scale-110"
        href={`tel:${PHONE}`}
        aria-label="Jetzt anrufen"
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">
          phone
        </span>
      </a>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/industriellereinigung.jpg"
            alt="Werkshalle und industrielle Reinigung"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:px-6 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block -rotate-1 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg sm:text-sm">
              Industrie & Spezialreinigung
            </div>

            <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-7xl">
              Industriereinigung
              <span className="mt-2 block italic text-primary">
                für Maschinen & Werkshallen
              </span>
            </h1>

            <p className="mb-8 max-w-3xl border-l-4 border-primary pl-4 text-lg text-gray-300 sm:text-xl md:mb-10 md:pl-6 md:text-2xl">
              AE Gebäudeservice übernimmt die Spezialreinigung von Maschinen,
              Produktionsflächen, Hallenbereichen und stark beanspruchten
              Industrieobjekten. Schnell erreichbar, zuverlässig im Einsatz und
              mit Fokus auf saubere, sichere Arbeitsumgebungen.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-3 bg-primary px-8 py-4 text-lg font-black uppercase tracking-widest text-white shadow-[0_0_40px_rgba(22,163,74,0.45)] transition-all hover:scale-[1.02] md:px-12 md:py-6 md:text-2xl"
              >
                <span className="material-icons-outlined text-3xl">
                  phone_in_talk
                </span>
                Jetzt anrufen
              </a>

              <a
                href="#leistungen"
                className="border-2 border-white/30 px-8 py-4 text-center text-base font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-black md:py-6 md:text-lg"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gray-200 border-t-4 border-t-primary bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                precision_manufacturing
              </span>
              <span className="font-black uppercase">Maschinenreinigung</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                warehouse
              </span>
              <span className="font-black uppercase">Werkshallen & Flächen</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                verified
              </span>
              <span className="font-black uppercase">Zuverlässige Ausführung</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                call
              </span>
              <span className="font-black uppercase">Direkt telefonisch erreichbar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/industrieflaeche.jpg"
              alt="Industriereinigung in Produktionsumgebung"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Reinigung für anspruchsvolle Bereiche
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Saubere Industrieflächen, bessere Abläufe
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                In industriellen Bereichen reicht eine klassische Reinigung oft
                nicht aus. Produktionsrückstände, Staub, Öle, Schmutzschichten
                und stark beanspruchte Hallenflächen erfordern eine gezielte,
                professionelle Vorgehensweise. Genau dafür ist unsere
                Industriereinigung ausgelegt.
              </p>

              <p>
                AE Gebäudeservice übernimmt die Spezialreinigung für Maschinen,
                Hallen, Laufwege, Arbeitsbereiche, Randzonen und sonstige
                betriebliche Flächen, auf denen Sauberkeit nicht nur für den
                Eindruck, sondern auch für Ordnung, Sicherheit und einen
                reibungslosen Ablauf wichtig ist.
              </p>

              <p>
                Ob regelmäßige Reinigung, punktueller Einsatz oder Unterstützung
                bei besonders verschmutzten Bereichen: Wir arbeiten lösungs- und
                einsatzorientiert. Statt langer Abstimmungen setzen wir auf
                direkte Erreichbarkeit und schnelle Terminabsprachen. Gerade in
                der Industrie zählt oft jede Stunde deshalb ist der direkte
                Anruf meist der schnellste Weg zur passenden Lösung.
              </p>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 font-black uppercase tracking-widest text-white transition-colors hover:bg-black"
            >
              <span className="material-icons-outlined">call</span>
              Direkt Einsatz besprechen
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-24" id="leistungen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Unsere Leistungen
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Spezialreinigung für Industrie & Produktion
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Wir unterstützen Unternehmen dort, wo herkömmliche Reinigung an
              Grenzen stößt: bei Maschinen, Hallenflächen und anspruchsvollen
              industriellen Einsatzbereichen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "precision_manufacturing",
                title: "Maschinenreinigung",
                text: "Reinigung äußerer Maschinenflächen, Gehäuse, Arbeitsbereiche und angrenzender Nutzflächen für ein gepflegtes und ordentliches Gesamtbild.",
              },
              {
                icon: "warehouse",
                title: "Werkshallenreinigung",
                text: "Reinigung von Hallenbereichen, Böden, Laufwegen, Randzonen und stark frequentierten Produktionsflächen.",
              },
              {
                icon: "factory",
                title: "Produktionsnahe Bereiche",
                text: "Gezielte Reinigung in Bereichen mit hoher Belastung durch Staub, Schmutz, Rückstände oder starke tägliche Nutzung.",
              },
              {
                icon: "route",
                title: "Laufwege & Verkehrsflächen",
                text: "Saubere Wege erhöhen die Ordnung im Betrieb und verbessern den Gesamteindruck innerhalb des Unternehmens.",
              },
              {
                icon: "construction",
                title: "Sonderreinigung",
                text: "Für stark verschmutzte Flächen, besondere Anforderungen oder individuelle Einsätze in Industrie- und Gewerbeobjekten.",
              },
              {
                icon: "schedule",
                title: "Regelmäßig oder flexibel",
                text: "Einmalige Einsätze, wiederkehrende Reinigungen oder individuelle Absprachen passend zu deinem Betriebsablauf.",
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

      {/* SEO / text block */}
      <section className="bg-black py-16 text-white md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight md:text-6xl">
            Industriereinigung mit direktem Draht
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Wer nach Industriereinigung, Hallenreinigung, Maschinenreinigung
            oder einer professionellen Spezialreinigung für Produktionsbereiche
            sucht, braucht keine komplizierten Prozesse, sondern einen
            Ansprechpartner, der schnell reagiert. AE Gebäudeservice steht für
            direkte Kommunikation, saubere Ergebnisse und flexible Einsätze in
            industriellen und gewerblichen Objekten.
          </p>

          <div className="mt-8">
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-primary px-8 py-4 text-xl font-black uppercase tracking-widest text-white transition-transform hover:scale-[1.02] md:px-12 md:py-6"
            >
              Jetzt anrufen: {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Warum AE Gebäudeservice
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Stark bei anspruchsvollen Reinigungsaufgaben
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Industrielle Bereiche stellen andere Anforderungen als normale
                Büro- oder Objektflächen. Hier geht es um robuste Nutzung,
                starke Verschmutzung, große Flächen und oft auch um laufende
                Betriebsabläufe. Deshalb braucht es eine Reinigung, die
                strukturiert, effizient und verlässlich umgesetzt wird.
              </p>

              <p>
                Wir legen Wert auf einen sauberen, professionellen Eindruck und
                auf eine Ausführung, die sich in deinen Betrieb einfügt. Dabei
                zählt nicht nur das sichtbare Ergebnis, sondern auch die
                Erreichbarkeit und die einfache Abstimmung im Vorfeld.
              </p>

              <p>
                Ob Werkshalle, Produktionsumgebung oder Maschinenumfeld: Wenn du
                eine zuverlässige Industriereinigung suchst, ist ein Anruf oft
                der schnellste Weg. So können Anforderungen direkt besprochen
                und passende Einsätze ohne Umwege geplant werden.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/bodenreinigung.jpg"
              alt="Saubere Industriehalle nach Reinigung"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-y-4 border-black bg-primary py-10 md:py-14">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:px-6 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-black uppercase italic leading-none text-white md:text-5xl">
              Spezialreinigung für Industrie anfragen
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black">
              Maschinen, Werkshallen, Produktionsflächen — direkt telefonisch.
            </p>
          </div>

          <a
            href={`tel:${PHONE}`}
            className="whitespace-nowrap bg-black px-8 py-4 text-2xl font-black text-white transition-all hover:bg-white hover:text-black md:px-12 md:py-6 md:text-5xl"
          >
            {PHONE_LABEL}
          </a>
        </div>
      </section>
    </>
  );
}