import Image from "next/image";
import type { Metadata } from "next";
import SpezialreinigungForm from "../SpezialreinigungForm";
import { ServiceCitiesSection } from "@/app/components/ServiceCitiesSection";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export const metadata: Metadata = {
  title: "Spezialreinigung in Bielefeld | AE Gebäudeservice",
  description:
    "Spezialreinigung in Bielefeld: Teppiche, Polster, Praxen, sensible Bereiche und Sonderreinigungen. AE Gebäudeservice ist schnell erreichbar und zuverlässig.",
  alternates: {
    canonical: "/spezialreinigung/bielefeld",
  },
};

export default function SpezialreinigungBielefeldPage() {
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
                Spezialreinigung in Bielefeld
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-6 md:mb-8 tracking-tighter break-words">
                SPEZIAL-
                <br />
                <span className="text-primary italic">REINIGUNG</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl block mt-3 md:mt-4 text-gray-300 break-words">
                  FÜR BIELEFELD UND UMGEBUNG
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl border-l-4 border-primary pl-4 md:pl-6 py-2 break-words">
                Spezialreinigung in Bielefeld für Sonderfälle, textile Flächen,
                Praxen, sensible Räume und Bereiche, bei denen Standardreinigung
                nicht ausreicht. Spezialreinigung in Bielefeld lohnt sich besonders, wenn ein Objekt wieder sichtbar frischer und professioneller wirken soll.
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
                  Online Angebot
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block min-w-0">
              <div className="relative w-full max-w-lg aspect-square mask-blob shadow-2xl bg-gray-800 mx-auto overflow-hidden">
                <Image
                  alt="Spezialreinigung in Bielefeld"
                  src="/images/spezialreinigung.jpg"
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
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">auto_awesome</span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">Sonderreinigung</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">local_hospital</span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">Praxen & sensible Bereiche</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">chair</span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">Teppiche & Polster</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">build_circle</span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">Passendes Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-6 md:py-8 overflow-hidden relative border-y-4 border-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-w-0">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span className="material-icons-outlined text-white text-4xl sm:text-5xl md:text-6xl shrink-0">
              cleaning_services
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic leading-none break-words">
                Besondere Reinigung in Bielefeld?
              </h2>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-sm mt-1 break-words">
                Jetzt anrufen und Einsatz direkt abstimmen.
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
              Spezialreinigung in Bielefeld für Sonderfälle, Praxen, Teppiche und sensible Bereiche
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight mb-6 break-words">
              Wenn Standardreinigung nicht ausreicht
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed break-words">
              In Bielefeld werden viele Objekte täglich intensiv genutzt: Praxisräume, Büroflächen, Verkaufsbereiche und textile Flächen müssen gepflegt wirken und zuverlässig nutzbar bleiben. Unsere Spezialreinigung in Bielefeld ist darauf ausgelegt,
              Material, Nutzung und tatsächlichen Zustand vor Ort zu berücksichtigen.
              Das ist für Teppich- und Polsterreinigung, sensible Bereiche, Sonderverschmutzungen und gezielte Auffrischungen von gewerblich genutzten Flächen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 border-l-8 border-primary p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">chair_alt</span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Teppiche & Polster
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed break-words">
                Textile Oberflächen in Bielefeld werden im Alltag oft stark beansprucht.
                Wir reinigen Teppiche, Polster und textile Bereiche materialgerecht,
                damit sie wieder gepflegter wirken und länger nutzbar bleiben.
              </p>
            </div>

            <div className="bg-primary text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-white text-4xl md:text-5xl mb-6 block">medical_services</span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Praxen & sensible Räume
              </h4>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed break-words">
                Für Praxen, Beratungsräume, Behandlungsbereiche oder sensible
                Nutzflächen in Bielefeld stimmen wir den Ablauf sorgfältig ab und
                sorgen für einen ruhigen, sauberen Gesamteindruck.
              </p>
            </div>

            <div className="bg-black text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">science</span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Sonderfälle & Problemstellen
              </h4>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed break-words">
                Hartnäckige Verschmutzungen, ungewöhnliche Belastungen oder
                empfindliche Oberflächen werden individuell bewertet. So bekommt
                dein Objekt in Bielefeld genau die Reinigung, die wirklich passt.
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
                Spezialreinigung passend zu Bielefeld
              </h2>
              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="break-words">
                  Bielefeld ist Wirtschaftsstandort mit Büros, Praxen, Verwaltungsflächen, Gewerbeeinheiten und Einzelhandel. Deshalb unterscheiden sich die
                  Anforderungen je nach Objekt deutlich: Ein Praxisraum braucht
                  eine andere Herangehensweise als ein stark genutztes Büro,
                  ein Teppichflur, eine Polsterfläche oder ein Bereich nach
                  intensiver Nutzung.
                </p>
                <p className="break-words">
                  Besonders in Stadtteilen wie Mitte, Brackwede, Schildesche, Heepen, Sennestadt, Jöllenbeck und Gadderbaum entstehen
                  unterschiedliche Situationen: repräsentative Flächen,
                  gemischte Gewerbenutzung, Altbaubestand, stark genutzte
                  Eingänge oder textile Bereiche, die sichtbar aufgefrischt
                  werden sollen.
                </p>
                <p className="break-words">
                  Wir klären vorab, welche Fläche betroffen ist, wie empfindlich
                  das Material ist und welches Ergebnis gebraucht wird. Danach
                  wird der Einsatz so geplant, dass er zu deinem Objekt in
                  Bielefeld und zum laufenden Alltag passt.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-10 shadow-xl border-t-4 border-primary">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6 break-words">
                Typische Einsatzbereiche in Bielefeld
              </h3>
              <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Teppich- und Polsterreinigung in Büros und Objektflächen</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Reinigung von Praxen, Beratungsräumen und sensiblen Bereichen</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Sonderreinigung nach hoher Nutzung oder sichtbarer Belastung</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Empfindliche Materialien und Oberflächen</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Auffrischung vor Übergabe, Besuch, Neustart oder Besichtigung</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">check_circle</span>
                  <span className="break-words">Individuelle Sonderreinigungen nach Situation vor Ort</span>
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

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase mb-10 break-words">
              Für wen sich Spezialreinigung in Bielefeld besonders lohnt
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Praxen und sensible Umgebungen
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Gerade bei Praxisflächen und sensiblen Räumen in Bielefeld zählt
                  ein sauberer, ruhiger und vertrauenswürdiger Eindruck.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Objekte mit textilem Bestand
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Teppiche, Polster und textile Flächen nehmen Schmutz anders auf
                  als harte Oberflächen und brauchen deshalb eine passendere Methode.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für schwierige Einzelfälle
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Wenn übliche Maßnahmen nicht funktionieren, bewerten wir den
                  Fall individuell und stimmen die Reinigung auf Material und
                  Verschmutzung ab.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Auffrischung vor wichtigen Terminen
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Vor Übergaben, Besichtigungen, Kundenterminen oder einem
                  Neustart sorgt Spezialreinigung für einen sichtbar gepflegteren Zustand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6 md:mb-8 break-words">
            Spezialreinigung in Bielefeld anfragen
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 md:mb-12 break-words">
            Rufen Sie uns einfach an. Oft lässt sich direkt klären, ob eine
            Spezialreinigung sinnvoll ist und wie der Einsatz in Bielefeld
            umgesetzt werden kann.
          </p>

          <div className="inline-block max-w-full p-1 bg-gradient-to-r from-primary to-primary-accent rounded-2xl shadow-[0_0_50px_rgba(22,163,74,0.3)] w-full sm:w-auto">
            <div className="bg-black px-4 sm:px-10 md:px-12 py-8 sm:py-10 rounded-xl">
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm break-words">
                Rufen Sie uns direkt an
              </p>
              <a
                className="text-2xl sm:text-4xl md:text-7xl font-black text-white hover:text-primary transition-colors flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center break-words leading-tight"
                href={`tel:${PHONE}`}
              >
                <span className="material-icons-outlined text-3xl sm:text-5xl md:text-7xl shrink-0">call</span>
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
                <span className="text-primary">STARTEN.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-md italic break-words">
                Ein kurzer Anruf spart oft viel Abstimmung. Wir sagen Ihnen
                direkt, ob eine Spezialreinigung für Ihren Fall in Bielefeld
                sinnvoll ist und wie sie umgesetzt werden kann.
              </p>

              <div className="p-6 sm:p-8 md:p-10 bg-primary shadow-[10px_10px_0px_#000000] md:shadow-[15px_15px_0px_#000000] max-w-full overflow-hidden">
                <p className="font-black text-black uppercase tracking-widest mb-4 text-sm break-words">
                  Persönliche Beratung
                </p>
                <a
                  className="text-2xl sm:text-3xl md:text-5xl font-black text-white flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 break-words leading-tight"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-3xl md:text-4xl shrink-0">phone_iphone</span>
                  <span className="break-all sm:break-normal">{PHONE_LABEL}</span>
                </a>
              </div>
            </div>

            <SpezialreinigungForm />
          </div>
        </div>
      </section>

      <ServiceCitiesSection defaultService="spezialreinigung" />
    </>
  );
}
