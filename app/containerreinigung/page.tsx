// app/containerreinigung/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export const metadata: Metadata = {
  title: "Containerreinigung | AE Gebäudeservice",
  description:
    "Containerreinigung für Innen- und Außenbereiche. AE Gebäudeservice reinigt Container gründlich, hygienisch und schnell wieder einsatzbereit. Jetzt direkt anrufen.",
};

export default function ContainerreinigungPage() {
  return (
    <>
      {/* Floating Call Button */}
      <a
        className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(22,163,74,0.55)] transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-20 md:w-20"
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
            src="/images/containerreinigung-hero.jpg"
            alt="Gereinigte Containeranlage"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:px-6 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block -rotate-1 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg sm:text-sm">
              Spezialreinigung & Hygiene
            </div>

            <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-7xl">
              Containerreinigung
              <span className="mt-2 block italic text-primary">
                innen & außen gründlich gereinigt
              </span>
            </h1>

            <p className="mb-8 max-w-3xl border-l-4 border-primary pl-4 text-lg text-gray-300 sm:text-xl md:mb-10 md:pl-6 md:text-2xl">
              AE Gebäudeservice reinigt Container innen und außen gründlich,
              hygienisch und zuverlässig. Für saubere Containeranlagen,
              Sanitärcontainer, Bürocontainer und Aufenthaltsbereiche, die
              schnell wieder einsatzbereit sein sollen.
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
                clean_hands
              </span>
              <span className="font-black uppercase">Hygienisch gereinigt</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                home_work
              </span>
              <span className="font-black uppercase">
                Container innen & außen
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                verified
              </span>
              <span className="font-black uppercase">
                Zuverlässige Ausführung
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-outlined text-3xl text-primary">
                call
              </span>
              <span className="font-black uppercase">
                Direkt telefonisch erreichbar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/containerreinigung-detail.jpg"
              alt="Reinigung von Containerinnenraum"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Sauberkeit für stark genutzte Container
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Schnell sauber, schnell wieder nutzbar
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Container werden im Alltag oft stark beansprucht. Gerade bei
                Bürocontainern, Aufenthaltscontainern, Sanitärcontainern oder
                kompletten Containeranlagen sammeln sich Schmutz, Staub,
                Gebrauchsspuren und hygienische Belastungen schnell an.
              </p>

              <p>
                AE Gebäudeservice übernimmt die gründliche Containerreinigung im
                Innen- und Außenbereich. Wir reinigen Oberflächen, Böden,
                Eingangsbereiche, Sanitärzonen und stark genutzte Bereiche
                sauber, ordentlich und mit Blick auf einen gepflegten
                Gesamteindruck.
              </p>

              <p>
                Ob regelmäßige Reinigung, kurzfristiger Einsatz oder Reinigung
                vor Wiederinbetriebnahme: Wir stimmen den Einsatz direkt ab und
                sorgen dafür, dass Container schnell wieder einsatzbereit sind.
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

      {/* Services */}
      <section className="bg-white py-16 md:py-24" id="leistungen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Unsere Leistungen
            </h2>
            <h3 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-6xl">
              Containerreinigung für Innen- und Außenbereiche
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Wir reinigen Container dort, wo Sauberkeit, Hygiene und ein
              gepflegter Zustand wichtig sind — von einzelnen Einheiten bis zu
              kompletten Containeranlagen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "meeting_room",
                title: "Innenreinigung",
                text: "Gründliche Reinigung von Innenräumen, Oberflächen, Böden, Türen, Fenstern und stark genutzten Bereichen.",
              },
              {
                icon: "other_houses",
                title: "Außenreinigung",
                text: "Reinigung von Außenflächen, Eingängen, Fassadenbereichen und sichtbaren Verschmutzungen für einen gepflegten Gesamteindruck.",
              },
              {
                icon: "wc",
                title: "Sanitärcontainer",
                text: "Saubere und hygienische Reinigung von Sanitärbereichen, Waschplätzen und angrenzenden Flächen.",
              },
              {
                icon: "apartment",
                title: "Containeranlagen",
                text: "Reinigung kompletter Anlagen inklusive Zugänge, Gemeinschaftsflächen und stark frequentierter Bereiche.",
              },
              {
                icon: "inventory_2",
                title: "Vor Übergabe oder Nutzung",
                text: "Reinigung vor Erstbezug, Wiederinbetriebnahme, Übergabe oder nach intensiver Nutzung.",
              },
              {
                icon: "schedule",
                title: "Regelmäßig oder flexibel",
                text: "Einmalige Einsätze, wiederkehrende Reinigung oder individuelle Terminabsprachen passend zum Bedarf.",
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

      {/* SEO block */}
      <section className="bg-black py-16 text-white md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight md:text-6xl">
            Containerreinigung mit direkter Abstimmung
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Wenn du eine zuverlässige Containerreinigung suchst, brauchst du
            keine komplizierten Abläufe, sondern einen Ansprechpartner, der
            erreichbar ist und schnell reagiert. AE Gebäudeservice reinigt
            Container innen und außen gründlich, hygienisch und passend zum
            tatsächlichen Einsatz vor Ort.
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
              Sauberkeit, die im Alltag spürbar ist
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Container werden häufig täglich genutzt und müssen trotzdem
                ordentlich, hygienisch und gepflegt bleiben. Gerade in
                Aufenthalts-, Büro- oder Sanitärcontainern ist eine saubere
                Umgebung wichtig für Eindruck, Nutzung und Wohlbefinden.
              </p>

              <p>
                Wir achten auf eine gründliche Ausführung, kurze Abstimmung und
                Einsätze, die sich unkompliziert organisieren lassen. So bleibt
                der Aufwand für dich gering und die Container sind schnell
                wieder in einem sauberen Zustand.
              </p>

              <p>
                Ob einzelner Container oder komplette Anlage: Wenn du eine
                zuverlässige Containerreinigung suchst, kannst du uns direkt
                anrufen und den Einsatz besprechen.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden shadow-2xl md:min-h-[520px]">
            <Image
              src="/images/containerreinigung-clean.jpg"
              alt="Sauber gereinigter Container"
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
              Containerreinigung direkt anfragen
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
    </>
  );
}
