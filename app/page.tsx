import Image from "next/image";

const PHONE = "+4916096407718"; // tel (E.164)
const PHONE_LABEL = "0160 96407718"; // Anzeige

export default function Page() {
  return (
    <>
      {/* Floating Call Button */}
      <a
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] animate-bounce hover:scale-110 transition-transform"
        href={`tel:${PHONE}`}
        aria-label="Jetzt anrufen"
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">phone</span>
      </a>

      {/* Header */}
      <header className="fixed w-full z-50 top-0 bg-surface-light backdrop-blur-md border-b-2 border-primary shadow-xl">
        <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-10 md:w-14 md:h-12 bg-black text-primary -skew-x-12 rounded flex items-center justify-center font-black text-xl md:text-2xl border-2 border-primary shadow-[4px_4px_0px_rgba(22,163,74,1)] shrink-0">
              AE
            </div>

            <div className="hidden sm:flex flex-col min-w-0">
              <span className="font-black text-lg md:text-xl tracking-tighter uppercase italic leading-none text-gray-900">
                Gebäudeservice
              </span>
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-primary uppercase">
                Professionell &amp; Sauber
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              className="flex flex-col items-center bg-primary text-white px-3 py-2 sm:px-4 md:px-6 rounded-lg animate-glow transition-all hover:scale-105"
              href={`tel:${PHONE}`}
            >
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                Direkt-Kontakt
              </span>
              <span className="text-base sm:text-lg md:text-3xl font-black font-mono tracking-tight leading-none whitespace-nowrap">
                {PHONE_LABEL}
              </span>
            </a>

            <a
              className="hidden sm:block bg-black text-white text-xs font-bold uppercase tracking-wider py-3 md:py-4 px-4 md:px-6 -skew-x-12 border-2 border-primary shadow-[4px_4px_0px_#16a34a] hover:bg-white hover:text-black transition-all whitespace-nowrap"
              href="#quote"
            >
              Angebot
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[70%] md:w-[60%] h-full bg-primary/10 -skew-x-12 translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
            <div className="lg:col-span-7">
              <div className="inline-block bg-primary text-white font-bold px-3 sm:px-4 py-1 mb-6 md:mb-8 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
                In 24h vor Ort &amp; Einsatzbereit
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-6 md:mb-8 tracking-tighter">
                SAUBERKEIT <span className="text-primary italic">IN 24h</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl block mt-3 md:mt-4 text-gray-300">
                  JETZT ANRUFEN &amp; ANGEBOT ERHALTEN
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-xl border-l-4 border-primary pl-4 md:pl-6 py-2">
                Deutschlands härtester Reinigungsservice für Industrie und Gewerbe. Wir stoppen den Schmutz – sofort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 md:mb-16 items-stretch sm:items-center">
                <a
                  className="relative w-full sm:w-auto overflow-hidden group bg-primary text-white font-black text-xl md:text-2xl py-5 sm:py-6 md:py-8 px-8 sm:px-10 md:px-14 shadow-[0_0_50px_rgba(22,163,74,0.5)] hover:scale-[1.02] md:hover:scale-105 transition-all uppercase tracking-widest flex items-center justify-center gap-3 md:gap-4"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-3xl md:text-4xl animate-pulse">
                    phone_in_talk
                  </span>
                  <span>JETZT ANRUFEN</span>
                </a>

                <a
                  className="w-full sm:w-auto flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 md:py-6 border-2 border-white/30 text-white font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                  href="#quote"
                >
                  Online Angebot
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative w-full max-w-lg aspect-square mask-blob shadow-2xl bg-gray-800 mx-auto">
                <Image
                  alt="Industrial cleaning"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUfDnZc8IOnLj10TOOQqe0AdyEalHC1DWM6cmccKg5orMRjd2WlkEdMpHHgSJuBTtSuxVlWoxzXCskyj1P8k6VpuchM-aUod8stK6Cf8aQhNS00ijMxRIj-hV7Egb7RkMwVOSDgXsobxM_HCifkh8szkSXdUUbiC_oOrcvd8ySPe5-wO-H_2wNCJmYGptSSMyQrB4gM5r-2RY6JtRdjRghyxjoWlFE9bmC9N5L87WcjW3sBsOsy0vsZqfTa0EAS1hsaM0ZGfnDyKs"
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

        {/* Trust Bar */}
        <div className="w-full bg-white py-8 sm:py-10 relative z-20 border-t-4 border-primary mt-8 md:mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-24 grayscale opacity-60 hover:grayscale-0 transition-all text-center">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary">
                  badge
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic">
                  Festes, geschultes Personal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary">
                  verified_user
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic">
                  Betriebshaftpflicht
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary">
                  receipt_long
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic">
                  Transparente Preise
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary">
                  workspace_premium
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic">
                  Qualitätsgarantie
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="bg-primary py-6 md:py-8 overflow-hidden relative border-y-4 border-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="material-icons-outlined text-white text-4xl sm:text-5xl md:text-6xl">
              notification_important
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic leading-none">
                Soforthilfe benötigt?
              </h2>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-sm mt-1">
                Jetzt anrufen und Termin sichern.
              </p>
            </div>
          </div>

          <a
            className="bg-black text-white px-6 md:px-10 py-4 md:py-6 text-2xl sm:text-3xl md:text-6xl font-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-2xl w-full md:w-auto text-center whitespace-nowrap"
            href={`tel:${PHONE}`}
          >
            {PHONE_LABEL}
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
                Unsere Power-Leistungen
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight">
                Full Service
                <br />
                Reinigung
              </h3>
            </div>
            <a
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 font-black uppercase tracking-widest hover:bg-black transition-colors w-full md:w-auto text-center"
              href={`tel:${PHONE}`}
            >
              JETZT TERMIN SICHERN
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Big card */}
            <div className="lg:row-span-2 group relative h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[450px] overflow-hidden shadow-2xl">
              <Image
                alt="Gebäudereinigung"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUtaIxOR8VTSEKConKLR1O-8OLst0DhzTQ3uVmnjxFiygzFTbDKIPlwtO794vDPbBHDqLiq7TZwEamDhwwhPWV0V36C25byK2ZovIqvMK564hWq2I0kXvPqPzT7IFS20cSqMk-FOFxapxhkEVxhJarjFAjOOy7V_NzVK9f07Ad9Y6U9glkdUBpB_LVMUCCZNSzJV_qomdA5H4IddBFMJyria9J5nXanNzmAzcZ0q7WBl75PkLvWE5tEZLNIo5qxTgAHuURcW57yYM"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 w-full">
                <span className="material-icons-outlined text-primary text-4xl md:text-6xl mb-4 block">
                  business
                </span>
                <h4 className="text-3xl sm:text-4xl font-black text-white uppercase mb-3 md:mb-4">
                  Gebäudereinigung
                </h4>
                <p className="text-gray-300 mb-6 md:mb-8 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                  Komplettservice für Ihre Immobilie. Innen &amp; Außen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    className="bg-primary text-white font-black py-3 px-6 uppercase text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors text-center"
                    href={`tel:${PHONE}`}
                  >
                    <span className="material-icons-outlined text-sm">phone</span> Anrufen
                  </a>
                  <span className="border-2 border-white text-white font-bold py-3 px-6 uppercase text-sm text-center">
                    Jetzt Termin sichern
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 border-l-8 border-primary flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                  precision_manufacturing
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase mb-4">
                  Industrie
                </h4>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Spezialreinigung für Maschinen und Werkshallen.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="text-primary font-black uppercase flex items-center gap-2 hover:underline whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined">phone</span> Anrufen
                </a>
                <a className="font-bold text-gray-500 hover:text-black uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black text-white p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                  window
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                  Glas &amp; Fassade
                </h4>
                <p className="text-gray-400 text-base sm:text-lg mb-8">
                  Streifenfreier Glanz, auch in extremer Höhe.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="text-primary font-black uppercase flex items-center gap-2 hover:text-white whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined">phone</span> Anrufen
                </a>
                <a className="font-bold text-gray-500 hover:text-primary uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-primary text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-white text-4xl md:text-5xl mb-6 block">
                  construction
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                  Baureinigung
                </h4>
                <p className="text-white/80 text-base sm:text-lg mb-8">
                  Vom Rohbau bis zur Schlüsselübergabe.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="bg-black text-white font-black py-2 px-4 uppercase text-xs flex items-center gap-2 whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-sm">phone</span> Anrufen
                </a>
                <a className="font-bold text-black uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Underhaltsreinigung */}
            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 border-l-8 border-primary flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                  apartment
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase mb-4">
                  Unterhaltsreinigung
                </h4>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Büros, Flure &amp; Treppenhäuser – zuverlässig im festen Turnus.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="text-primary font-black uppercase flex items-center gap-2 hover:underline whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined">phone</span> Anrufen
                </a>
                <a className="font-bold text-gray-500 hover:text-black uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Containerreinigung */}
            <div className="bg-black text-white p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                  local_shipping
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                  Containerreinigung
                </h4>
                <p className="text-gray-400 text-base sm:text-lg mb-8">
                  Innen &amp; Außen gründlich gereinigt – hygienisch und schnell wieder einsatzbereit.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="text-primary font-black uppercase flex items-center gap-2 hover:text-white whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined">phone</span> Anrufen
                </a>
                <a className="font-bold text-gray-500 hover:text-primary uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Containeranlagen */}
            <div className="bg-primary text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-white text-4xl md:text-5xl mb-6 block">
                  factory
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                  Containeranlagen
                </h4>
                <p className="text-white/80 text-base sm:text-lg mb-8">
                  Reinigung kompletter Anlagen inkl. Sanitärbereiche &amp; Zugänge – auch kurzfristig.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="bg-black text-white font-black py-2 px-4 uppercase text-xs flex items-center gap-2 whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-sm">phone</span> Anrufen
                </a>
                <a className="font-bold text-black uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Grundreinigung */}
            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 border-l-8 border-primary flex flex-col justify-between">
              <div>
                <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                  cleaning_services
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase mb-4">
                  Grundreinigung
                </h4>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Tiefenreinigung für Böden, Sanitär &amp; Kontaktflächen – ideal bei Übergaben &amp; Neustarts.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <a
                  className="text-primary font-black uppercase flex items-center gap-2 hover:underline whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined">phone</span> Anrufen
                </a>
                <a className="font-bold text-gray-500 hover:text-black uppercase text-sm whitespace-nowrap" href="#quote">
                  Jetzt Termin sichern
                </a>
              </div>
            </div>

            {/* Wide card */}
            <div className="lg:col-span-2 relative min-h-[320px] sm:min-h-[360px] md:min-h-[380px] overflow-hidden group">
              <Image
                alt="Spezialreinigung"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOeTddfqWrABKUhY1Y12znWO3uvVnJ9CgIgh5ZvJ1n1OU-QXHrtevwpDsq9hemKSagR7fUKK4XX-CsCJV1-T7G7HHdiLsDQ7Rw4aypoz0eZGjV3y3i8JcrvIlrdh-fCWEAh62zoo2-0erIc76RJgD8jGCZ0hhDXGEUFnxfv_OHPLoLd68s8LLtsJfkIXpT-RL191ksNXPtnKCTZVbyPdRDh-qrBI1-2BxGd4zEZ3Ox3dSn_nVoAlJLE6AxWksnbX3CbIkv3vbCDNg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
              <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 md:p-12">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-4">
                  Spezialreinigung
                </h4>
                <p className="text-white text-base sm:text-lg md:text-xl max-w-lg mb-8 font-medium">
                  Sonderfälle? Teppiche? Praxen? Wir haben das Spezial-Equipment für jede Herausforderung.
                </p>
                <div className="flex">
                  <a
                    className="bg-white text-primary font-black py-3 sm:py-4 px-6 sm:px-8 uppercase text-base sm:text-lg flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center"
                    href={`tel:${PHONE}`}
                  >
                    <span className="material-icons-outlined">phone</span> Direkt Anrufen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6 md:mb-8">
            Noch Fragen zum Ablauf?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 md:mb-12">
            Holen Sie sich jetzt Ihre kostenlose Beratung am Telefon.
          </p>

          <div className="inline-block p-1 bg-gradient-to-r from-primary to-primary-accent rounded-2xl shadow-[0_0_50px_rgba(22,163,74,0.3)] w-full sm:w-auto">
            <div className="bg-black px-6 sm:px-10 md:px-12 py-8 sm:py-10 rounded-xl">
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">
                Rufen Sie uns direkt an
              </p>
              <a
                className="text-2xl sm:text-4xl md:text-7xl font-black text-white hover:text-primary transition-colors flex items-center justify-center gap-4 sm:gap-6 whitespace-nowrap"
                href={`tel:${PHONE}`}
              >
                <span className="material-icons-outlined text-3xl sm:text-5xl md:text-7xl">
                  call
                </span>
                {PHONE_LABEL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 sm:py-20 md:py-24 relative bg-background-dark overflow-hidden" id="quote">
        <div className="absolute inset-0 clip-diagonal bg-zinc-900 z-0" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start lg:items-center">
            <div className="text-white">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-8 md:mb-10">
                JETZT
                <br />
                <span className="text-primary">STARTEN.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-md italic">
                Ein kurzer Anruf spart Stunden an E-Mails. Wir sind bereit, wenn Sie es sind.
              </p>

              <div className="p-6 sm:p-8 md:p-10 bg-primary shadow-[10px_10px_0px_#000000] md:shadow-[15px_15px_0px_#000000]">
                <p className="font-black text-black uppercase tracking-widest mb-4 text-sm">
                  Persönliche Beratung
                </p>
                <a
                  className="text-2xl sm:text-3xl md:text-5xl font-black text-white flex items-center gap-3 md:gap-4 whitespace-nowrap"
                  href={`tel:${PHONE}`}
                >
                  <span className="material-icons-outlined text-3xl md:text-4xl">
                    phone_iphone
                  </span>
                  {PHONE_LABEL}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
              <form className="bg-white p-6 sm:p-8 md:p-10 relative z-10">
                <h3 className="text-3xl sm:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-primary pb-4">
                  Schnell-Angebot
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                        Telefonnummer
                      </label>
                      <input
                        className="w-full bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all"
                        placeholder="+49..."
                        type="tel"
                        name="phone"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                        Ihr Name
                      </label>
                      <input
                        className="w-full bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all"
                        placeholder="Name"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                      Service
                    </label>
                    <select
                      className="w-full bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all appearance-none"
                      name="service"
                      defaultValue="Unterhaltsreinigung"
                    >
                      <option>Unterhaltsreinigung</option>
                      <option>Industriereinigung</option>
                      <option>Glasreinigung</option>
                      <option>Baureinigung</option>
                      <option>Containerreinigung</option>
                      <option>Grundreinigung</option>
                    </select>
                  </div>

                  <button
                    className="w-full bg-black text-white font-black uppercase text-lg sm:text-xl py-5 sm:py-6 hover:bg-primary transition-all flex items-center justify-center gap-3 group"
                    type="button"
                  >
                    JETZT TERMIN SICHERN
                    <span className="material-icons-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12 border-t-8 border-primary" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white flex items-center justify-center font-black text-xl md:text-2xl -skew-x-12">
                  AE
                </div>
                <span className="text-2xl sm:text-3xl font-black uppercase tracking-tighter italic">
                  Gebäudeservice
                </span>
              </div>

              <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-sm mb-8 md:mb-10 leading-relaxed">
                Maximale Sauberkeit. Minimaler Aufwand. Ihr professioneller Partner für gewerbliche Reinigungslösungen.
              </p>

              <div className="flex gap-6">
                <a className="text-gray-600 hover:text-primary transition-colors" href="#">
                  <span className="material-icons-outlined text-3xl md:text-4xl">facebook</span>
                </a>
                <a className="text-gray-600 hover:text-primary transition-colors" href="#">
                  <span className="material-icons-outlined text-3xl md:text-4xl">language</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-lg sm:text-xl uppercase mb-6 md:mb-8 text-primary">
                Direkt-Kontakt
              </h4>
              <ul className="space-y-6 text-gray-400">
                <li className="flex items-start gap-4">
                  <span className="material-icons-outlined text-primary text-2xl sm:text-3xl">
                    phone
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-600">Hotline 24/7</p>
                    <a
                      className="text-xl sm:text-2xl font-black text-white hover:text-primary whitespace-nowrap"
                      href={`tel:${PHONE}`}
                    >
                      {PHONE_LABEL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-icons-outlined text-primary text-2xl sm:text-3xl">
                    email
                  </span>
                  <a className="text-base sm:text-lg hover:text-white" href="mailto:info@aegebaeudeservice.de">
                    info@aegebaeudeservice.de
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg sm:text-xl uppercase mb-6 md:mb-8 text-primary">
                Information
              </h4>
              <ul className="space-y-4 text-gray-500 font-bold uppercase text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Impressum
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-10 md:pt-12 border-t border-gray-900">
            <p className="text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
              © 2026 AE Gebäudeservice GmbH. High-Performance Cleaning Solutions.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
