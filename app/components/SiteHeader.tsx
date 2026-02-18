// app/components/SiteHeader.tsx
const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export function SiteHeader() {
  return (
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
  );
}
