import Image from "next/image";
import type { Metadata } from "next";
import BaureinigungForm from "./BaureinigungForm";
import { ServiceCitiesSection } from "/app/components/sections/ServiceCitiesSection";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export const metadata: Metadata = {
  title: "Baureinigung | AE Gebäudeservice",
  description:
    "Ob Neubau, Umbau oder Sanierung: Wir kümmern uns darum, dass Baustellenbereiche, Fenster, Böden und Oberflächen sauber übergeben werden können. Jetzt anrufen und Termin sichern.",
};

export default function Page() {
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

      <section className="relative min-h-screen flex flex-col pt-10 sm:pt-12 md:pt-16 pb-0 overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[70%] md:w-[60%] h-full bg-primary/10 -skew-x-12 translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-w-0">
            <div className="lg:col-span-7 min-w-0">
              <div className="inline-block max-w-full break-words bg-primary text-white font-bold px-3 sm:px-4 py-1 mb-6 md:mb-8 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
                Sauber zur Übergabe, Abnahme oder zum Neustart
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-6 md:mb-8 tracking-tighter break-words">
                BAU-
                <span className="text-primary italic">REINIGUNG</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl block mt-3 md:mt-4 text-gray-300 break-words">
                  GRÜNDLICH, ZUVERLÄSSIG UND TERMINTREU
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl border-l-4 border-primary pl-4 md:pl-6 py-2 break-words">
                Ob Neubau, Umbau oder Sanierung: Wir kümmern uns darum, dass
                Baustellenbereiche, Fenster, Böden und Oberflächen sauber
                übergeben werden können. Ohne unnötiges Drumherum, sondern so,
                wie man es auf der Baustelle braucht.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 md:mb-16 items-stretch sm:items-center min-w-0">
                <a
                  className="relative w-full sm:w-auto max-w-full overflow-hidden group bg-primary text-white font-black text-lg sm:text-xl md:text-2xl py-5 sm:py-6 md:py-8 px-6 sm:px-10 md:px-14 shadow-[0_0_50px_rgba(22,163,74,0.5)] hover:scale-[1.02] md:hover:scale-105 transition-all uppercase tracking-wide md:tracking-widest flex items-center justify-center gap-3 md:gap-4 text-center break-words"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-3xl md:text-4xl animate-pulse shrink-0">
                    phone_in_talk
                  </span>
                  <span className="break-words">JETZT ANRUFEN</span>
                </a>

                <a
                  className="w-full sm:w-auto max-w-full flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 md:py-6 border-2 border-white/30 text-white font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all text-center break-words"
                  href="#quote"
                >
                  Angebot anfragen
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block min-w-0">
              <div className="relative w-full max-w-lg aspect-square mask-blob shadow-2xl bg-gray-800 mx-auto overflow-hidden">
                <Image
                  alt="Baureinigung auf einer Baustelle"
                  src="/images/baureinigung.jpg"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 1024px) 520px, 0px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-8 sm:py-10 relative z-20 border-t-4 border-primary mt-8 md:mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-24 grayscale opacity-70 hover:grayscale-0 transition-all text-center">
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  construction
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Baugrob- & Feinreinigung
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  event_available
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Termingerechte Einsätze
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  fact_check
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Sauber zur Übergabe
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  groups
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Eingespielte Teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-6 md:py-8 overflow-hidden relative border-y-4 border-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-w-0">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span className="material-icons-outlined text-white text-4xl sm:text-5xl md:text-6xl shrink-0">
              inventory_2
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic leading-none break-words">
                Reinigung vor Abnahme?
              </h2>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-sm mt-1 break-words">
                Kurz anrufen und Einsatz abstimmen.
              </p>
            </div>
          </div>

          <a
            className="bg-black text-white px-6 md:px-10 py-4 md:py-6 text-2xl sm:text-3xl md:text-6xl font-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-2xl w-full md:w-auto text-center break-words leading-tight"
            href={`tel:${PHONE}`}
          >
            <span className="break-all sm:break-normal">{PHONE_LABEL}</span>
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 break-words">
              Baureinigung für Neubau, Umbau und Sanierung
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight mb-6 break-words">
              Sauber, wenn es darauf ankommt
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed break-words">
              Auf Baustellen geht es selten darum, dass etwas nur gut aussieht.
              Es geht darum, dass Flächen nutzbar sind, Wege frei bleiben,
              Handwerker vernünftig weiterarbeiten können und zum Schluss eine
              saubere Übergabe möglich ist. Genau darauf ist unsere Baureinigung
              ausgelegt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 border-l-8 border-primary p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                handyman
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Baugrobreinigung
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed break-words">
                Entfernung von grobem Schmutz, Verpackungen, Folien,
                Restmaterial und typischen Baustellenrückständen, damit
                Arbeitsbereiche wieder ordentlich und sicher nutzbar sind.
              </p>
            </div>

            <div className="bg-primary text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-white text-4xl md:text-5xl mb-6 block">
                cleaning_services
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Baufeinreinigung
              </h4>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed break-words">
                Gründliche Reinigung von Böden, Fenstern, Rahmen,
                Sanitärbereichen, Türen, Lichtschaltern und Oberflächen vor
                Übergabe, Bezug oder Endabnahme.
              </p>
            </div>

            <div className="bg-black text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                apartment
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Laufende Bauendreinigung
              </h4>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed break-words">
                Auch wenn ein Objekt abschnittsweise fertig wird, passen wir den
                Ablauf an. So können einzelne Bereiche bereits sauber übergeben
                oder weiter genutzt werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase mb-6 break-words">
                Was bei einer Baureinigung wichtig ist
              </h2>
              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="break-words">
                  Jede Baustelle ist anders. Mal geht es um Staub nach
                  Trockenbauarbeiten, mal um Farbreste, Folien, Bauschmutz oder
                  verschmierte Fensterflächen. Manchmal muss es kurzfristig
                  gehen, weil ein Termin vorgezogen wurde oder eine Abnahme
                  ansteht.
                </p>
                <p className="break-words">
                  Entscheidend ist deshalb nicht nur die Reinigung selbst,
                  sondern auch die Abstimmung. Welche Bereiche sind schon frei?
                  Wo wird noch gearbeitet? Was muss zuerst fertig sein? Genau
                  diese Fragen klären wir vorab, damit der Einsatz nicht im
                  Chaos endet.
                </p>
                <p className="break-words">
                  Unser Ziel ist keine übertriebene Werbeversprechung, sondern
                  ein Ergebnis, mit dem man vor Ort wirklich arbeiten kann:
                  ordentliche Flächen, saubere Übergänge und ein Zustand, der
                  bei Übergabe oder Weiterarbeit passt.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-10 shadow-xl border-t-4 border-primary">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6 break-words">
                Typische Einsatzbereiche
              </h3>
              <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Neubauten vor Übergabe oder Einzug
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Sanierungen von Wohnungen, Büros und Gewerbeflächen
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Umbauten im laufenden Betrieb
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Bauendreinigung nach Handwerkerarbeiten
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Reinigung einzelner Bauabschnitte
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Fenster-, Rahmen- und Oberflächenreinigung nach Abschluss
                  </span>
                </li>
              </ul>

              <a
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-primary text-white font-black uppercase py-4 px-6 hover:bg-black transition-colors text-center"
                href={`tel:${PHONE}`}
              >
                <span className="material-icons-outlined">call</span>
                Einsatz besprechen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6 md:mb-8 break-words">
            Keine Lust auf endlose Abstimmung?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 md:mb-12 break-words">
            Dann rufen Sie kurz an. Oft lässt sich direkt klären, was gebraucht
            wird und wann der Einsatz stattfinden kann.
          </p>

          <div className="inline-block max-w-full p-1 bg-gradient-to-r from-primary to-primary-accent rounded-2xl shadow-[0_0_50px_rgba(22,163,74,0.3)] w-full sm:w-auto">
            <div className="bg-black px-4 sm:px-10 md:px-12 py-8 sm:py-10 rounded-xl">
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm break-words">
                Direkt am Telefon
              </p>
              <a
                className="text-2xl sm:text-4xl md:text-7xl font-black text-white hover:text-primary transition-colors flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center break-words leading-tight"
                href={`tel:${PHONE}`}
              >
                <span className="material-icons-outlined text-3xl sm:text-5xl md:text-7xl shrink-0">
                  call
                </span>
                <span className="break-all sm:break-normal">{PHONE_LABEL}</span>
              </a>
            </div>
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
                Ob einzelne Bauendreinigung oder regelmäßige Unterstützung auf
                der Baustelle: Wir schauen uns an, was gebraucht wird.
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

            <BaureinigungForm />
          </div>
        </div>
      </section>
      <ServiceCitiesSection defaultService="baureinigung" />
    </>
  );
}
