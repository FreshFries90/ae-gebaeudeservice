// app/impressum/page.tsx
export const metadata = {
  title: "Impressum | AE Gebäudeservice GmbH",
  description: "Impressum der AE Gebäudeservice GmbH",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-10">
          Impressum
        </h1>

        <div className="prose prose-gray max-w-none">
          <p>
            AE Gebäudeservice GmbH
            <br />
            Schaffelhofer Weg 67
            <br />
            45277 Essen
          </p>

          <p>
            Handelsregister: HRB 21424
            <br />
            Registergericht: 44787 Bochum
          </p>

          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Justus Blass
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a className="text-primary font-bold" href="tel:+4916096407718">
              0160 96407718
            </a>
            <br />
            E-Mail:{" "}
            <a
              className="text-primary font-bold"
              href="mailto:info@aegebaeudeservice.de"
            >
              info@aegebaeudeservice.de
            </a>
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-recht24.de
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
