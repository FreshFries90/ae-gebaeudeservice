// app/components/SiteFooter.tsx
const PHONE = "+4916096407718";
const PHONE_LABEL = "0160 96407718";

export function SiteFooter() {
  return (
    <footer
      className="bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12 border-t-8 border-primary"
      id="contact"
    >
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
              Maximale Sauberkeit. Minimaler Aufwand. Ihr professioneller
              Partner für gewerbliche Reinigungslösungen.
            </p>

            <div className="flex gap-6">
              <a
                className="text-gray-600 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-icons-outlined text-3xl md:text-4xl">
                  facebook
                </span>
              </a>
              <a
                className="text-gray-600 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-icons-outlined text-3xl md:text-4xl">
                  language
                </span>
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
                  <p className="text-xs font-black uppercase text-gray-600">
                    Hotline 24/7
                  </p>
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
                <a
                  className="text-base sm:text-lg hover:text-white"
                  href="mailto:info@aegebaeudeservice.de"
                >
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
                <a
                  className="hover:text-primary transition-colors"
                  href="/impressum"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="/datenschutz"
                >
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
  );
}
