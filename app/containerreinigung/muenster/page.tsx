// app/containerreinigung/muenster/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ServiceCitiesSection } from "@/app/components/ServiceCitiesSection";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";
const CITY = "Münster";

export const metadata: Metadata = {
  title: "Containerreinigung in Münster | AE Gebäudeservice",
  description:
    "Containerreinigung in Münster: Innenreinigung, Außenreinigung, Sanitärcontainer und komplette Containeranlagen. Hygienisch, gründlich und schnell einsatzbereit.",
  alternates: { canonical: "/containerreinigung/muenster" },
};

const serviceCards = [
  {
    icon: "meeting_room",
    title: "Innenreinigung",
    text: "Gründliche Reinigung von Innenräumen, Böden, Türen, Fenstern, Griffbereichen und stark genutzten Oberflächen.",
  },
  {
    icon: "other_houses",
    title: "Außenreinigung",
    text: "Reinigung sichtbarer Außenflächen, Eingangsbereiche, Fassadenbereiche und Laufwege für einen gepflegten Gesamteindruck.",
  },
  {
    icon: "wc",
    title: "Sanitärcontainer",
    text: "Hygienische Reinigung von Toiletten, Waschbereichen, Böden, Armaturen und angrenzenden Flächen.",
  },
  {
    icon: "apartment",
    title: "Containeranlagen",
    text: "Reinigung kompletter Anlagen inklusive Zugänge, Gemeinschaftsflächen, Aufenthaltsbereiche und Sanitärzonen.",
  },
  {
    icon: "inventory_2",
    title: "Vor Nutzung oder Übergabe",
    text: "Containerreinigung vor Erstbezug, Wiederinbetriebnahme, Übergabe, Projektstart oder nach intensiver Nutzung.",
  },
  {
    icon: "schedule",
    title: "Einmalig oder regelmäßig",
    text: "Flexible Einsätze nach Bedarf: einmalige Grundreinigung, wiederkehrende Reinigung oder kurzfristige Terminabstimmung.",
  },
];

export default function MuensterContainerreinigungPage() {
  return (
    <>
      <a
        className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(22,163,74,0.55)] transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-20 md:w-20"
        href={`tel:${PHONE}`}
        aria-label={`Containerreinigung in ${CITY} telefonisch anfragen`}
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">phone</span>
      </a>

      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/containerreinigung-hero.jpg"
            alt={`Containerreinigung in ${CITY}`}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:px-6 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block -rotate-1 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg sm:text-sm">
              Containeranlagen, Sanitärcontainer & Bürocontainer
            </div>

            <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-7xl">
              Containerreinigung in {CITY}
              <span className="mt-2 block italic text-primary">innen & außen gründlich gereinigt</span>
            </h1>

            <p className="mb-8 max-w-3xl border-l-4 border-primary pl-4 text-lg text-gray-300 sm:text-xl md:mb-10 md:pl-6 md:text-2xl">
              In Münster werden Container häufig bei Bauprojekten, Gewerbeflächen, Veranstaltungen, Bildungseinrichtungen oder temporären Standortlösungen eingesetzt. AE Gebäudeservice sorgt dafür, dass Container innen und außen sauber, hygienisch und ordentlich bleiben – von Sanitärcontainern bis zu kompletten Anlagen.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-3 bg-primary px-8 py-4 text-lg font-black uppercase tracking-widest text-white shadow-[0_0_40px_rgba(22,163,74,0.45)] transition-all hover:scale-[1.02] md:px-12 md:py-6 md:text-2xl"
              >
                <span className="material-icons-outlined text-3xl">phone_in_talk</span>
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

      <section className="border-y border-gray-200 border-t-4 border-t-primary bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["clean_hands", "Hygienisch gereinigt"],
              ["home_work", "Container innen & außen"],
              ["verified", "Zuverlässige Ausführung"],
              ["call", "Direkt telefonisch erreichbar"],
            ].map(([icon, label]) => (
              <div className="flex flex-col items-center gap-2" key={label}>
                <span className="material-icons-outlined text-3xl text-primary">{icon}</span>
                <span className="font-black uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/containerreinigung-detail.jpg"
              alt={`Reinigung eines Containerinnenraums in ${CITY}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Sauberkeit für stark genutzte Container in {CITY}
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Schnell sauber, schnell wieder nutzbar
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Container werden im Alltag häufig stärker beansprucht als klassische Räume. Gerade bei Bürocontainern, Aufenthaltscontainern, Sanitärcontainern oder kompletten Containeranlagen sammeln sich Staub, Laufspuren, Griffspuren und hygienische Belastungen schnell an.
              </p>
              <p>
                Containerreinigung in Münster muss oft sauber, zuverlässig und unaufgeregt funktionieren. Ob am Stadtrand, in Gewerbegebieten, auf Baustellen oder bei temporären Einrichtungen: stark genutzte Container benötigen gepflegte Böden, saubere Sanitärbereiche, klare Eingänge und ordentliche Oberflächen. Wir stimmen den Einsatz direkt ab und reinigen passend zur Nutzung.
              </p>
              <p>
                Für Münster sinnvoll bei Baucontainern, Veranstaltungscontainern, Sanitärcontainern, Bildungsstandorten und gewerblichen Übergangslösungen.
              </p>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 font-black uppercase tracking-widest text-white transition-colors hover:bg-black"
            >
              <span className="material-icons-outlined">call</span>
              Direkt Reinigung anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="leistungen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Unsere Leistungen in {CITY}
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Containerreinigung für Innen- und Außenbereiche
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Wir reinigen Container dort, wo Sauberkeit, Hygiene und ein gepflegter Zustand wichtig sind: von einzelnen Einheiten bis zu kompletten Containeranlagen in {CITY}.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-8 shadow-xl ring-1 ring-gray-200 transition-transform hover:-translate-y-1"
              >
                <span className="material-icons-outlined mb-5 block text-5xl text-primary">{item.icon}</span>
                <h4 className="mb-4 text-2xl font-black uppercase text-gray-900">{item.title}</h4>
                <p className="leading-relaxed text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight md:text-6xl">
            Containerreinigung in Münster
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Wer in {CITY} eine zuverlässige Containerreinigung sucht, braucht keine komplizierten Abläufe. Ein kurzer Anruf reicht oft, um Standort, Containerart, gewünschte Reinigung und Terminfenster zu klären. AE Gebäudeservice reinigt Container innen und außen gründlich, hygienisch und passend zum tatsächlichen Einsatz vor Ort.
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

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Warum AE Gebäudeservice in {CITY}
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Sauberkeit, die im Alltag spürbar ist
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Container werden häufig täglich genutzt und müssen trotzdem ordentlich, hygienisch und gepflegt bleiben. Gerade in Aufenthalts-, Büro- oder Sanitärcontainern ist eine saubere Umgebung wichtig für Eindruck, Nutzung und Wohlbefinden.
              </p>
              <p>
                Wir achten auf gründliche Ausführung, kurze Abstimmung und Einsätze, die sich unkompliziert organisieren lassen. So bleibt der Aufwand gering und die Container sind schnell wieder in einem sauberen Zustand.
              </p>
              <p>
                Ob einzelner Container oder komplette Anlage in {CITY}: Wenn du eine zuverlässige Containerreinigung suchst, kannst du uns direkt anrufen und den Einsatz besprechen.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/containerreinigung-clean.jpg"
              alt={`Sauber gereinigter Container in ${CITY}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-y-4 border-black bg-primary py-10 md:py-14">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:px-6 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-black uppercase italic leading-none text-white md:text-5xl">
              Containerreinigung in {CITY} anfragen
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black">
              Innen, außen, hygienisch und schnell wieder einsatzbereit.
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

      <ServiceCitiesSection defaultService="containerreinigung" />
    </>
  );
}
