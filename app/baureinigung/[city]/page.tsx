// app/baureinigung/[city]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITY_WHITELIST, cityLabel, isCitySlug } from "@/lib/cities";
import BaureinigungForm from "../BaureinigungForm";

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
      title: "Baureinigung | AE Gebäudeservice",
      description: "Professionelle Baureinigung für Neubau, Umbau und Sanierung.",
    };
  }

  const cityName = cityLabel(city);

  return {
    title: `Baureinigung in ${cityName} | AE Gebäudeservice`,
    description: `Professionelle Baureinigung in ${cityName}: Baugrob- und Baufeinreinigung für Neubau, Umbau und Sanierung. Jetzt Termin anfragen oder direkt anrufen.`,
    alternates: {
      canonical: `/baureinigung/${city}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;

  if (!isCitySlug(city)) {
    notFound();
  }

  const cityName = cityLabel(city);

  return (
    <>
      <section className="relative min-h-screen flex flex-col pt-10 sm:pt-12 md:pt-16 pb-0 overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[70%] md:w-[60%] h-full bg-primary/10 -skew-x-12 translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-w-0">
            <div className="lg:col-span-7 min-w-0">
              <div className="inline-block max-w-full break-words bg-primary text-white font-bold px-3 sm:px-4 py-1 mb-6 md:mb-8 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
                Baureinigung in {cityName}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-6 md:mb-8 tracking-tighter break-words">
                BAU-
                <span className="text-primary italic">REINIGUNG</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl block mt-3 md:mt-4 text-gray-300 break-words">
                  IN {cityName.toUpperCase()}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl border-l-4 border-primary pl-4 md:pl-6 py-2 break-words">
                Wir übernehmen die Baureinigung in {cityName} für Neubau, Umbau
                und Sanierung – von der Baugrobreinigung bis zur sauberen
                Übergabe vor Abnahme oder Einzug.
              </p>

              <a
                className="w-full sm:w-auto max-w-full flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 md:py-6 border-2 border-white/30 text-white font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all text-center break-words"
                href="#quote"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 break-words">
              Baureinigung in {cityName}
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight mb-6 break-words">
              Sauber zur Übergabe in {cityName}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed break-words">
              Ob Neubau, Modernisierung oder Sanierung: Mit unserer
              Baureinigung in {cityName} sorgen wir dafür, dass Böden,
              Oberflächen, Fenster und Sanitärbereiche sauber vorbereitet und
              termingerecht übergeben werden können.
            </p>
          </div>
        </div>
      </section>

      <div id="quote">
        <BaureinigungForm cityDefault={cityName} />
      </div>
    </>
  );
}