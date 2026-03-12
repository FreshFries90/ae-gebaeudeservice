"use client";

import { useState } from "react";
import Image from "next/image";

const PHONE = "+491757540841";
const PHONE_LABEL = "0175 75 40 841";

export default function Page() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });

      if (res.status === 204) {
        setStatus("success");
        formEl.reset();
        return;
      }

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || "Senden fehlgeschlagen.");
        return;
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setError("Netzwerkfehler. Bitte später erneut versuchen.");
    }
  }

  return (
    <>
      {/* Floating Call Button */}
      <a
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] animate-bounce hover:scale-110 transition-transform"
        href={`tel:${PHONE}`}
        aria-label="Jetzt anrufen"
      >
        <span className="material-icons-outlined text-2xl md:text-4xl">
          phone
        </span>
      </a>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col pt-10 sm:pt-12 md:pt-16 pb-0 overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[70%] md:w-[60%] h-full bg-primary/10 -skew-x-12 translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-w-0">
            <div className="lg:col-span-7 min-w-0">
              <div className="inline-block max-w-full break-words bg-primary text-white font-bold px-3 sm:px-4 py-1 mb-6 md:mb-8 -rotate-1 shadow-lg uppercase tracking-wider text-xs sm:text-sm">
                Klare Sicht. Gepflegter Eindruck.
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-6 md:mb-8 tracking-tighter break-words">
                GLAS &amp;
                <span className="text-primary italic">&nbsp;FASSADE</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl block mt-3 md:mt-4 text-gray-300 break-words">
                  STREIFENFREI, SAUBER UND ZUVERLÄSSIG
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl border-l-4 border-primary pl-4 md:pl-6 py-2 break-words">
                Reinigung von Glasflächen, Fenstern und Fassaden für Büros,
                Gewerbeobjekte und Immobilien. Für einen sauberen ersten
                Eindruck, klare Sicht und ein gepflegtes Erscheinungsbild – auch
                bei anspruchsvollen Flächen und größeren Höhen.
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
                  alt="Glas- und Fassadenreinigung"
                  src="/images/glasreinigung.jpg"
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
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-24 grayscale opacity-70 hover:grayscale-0 transition-all text-center">
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  window
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Streifenfreie Glasreinigung
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  apartment
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Saubere Fassadenflächen
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  visibility
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Gepflegter Gesamteindruck
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-icons-outlined text-2xl sm:text-3xl text-primary shrink-0">
                  schedule
                </span>
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tighter uppercase italic break-words">
                  Flexible Intervalle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-6 md:py-8 overflow-hidden relative border-y-4 border-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-w-0">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span className="material-icons-outlined text-white text-4xl sm:text-5xl md:text-6xl shrink-0">
              window
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic leading-none break-words">
                Glas oder Fassade reinigen?
              </h2>
              <p className="text-black font-bold uppercase tracking-widest text-[10px] sm:text-sm mt-1 break-words">
                Jetzt anrufen und Termin abstimmen.
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

      {/* Intro */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 break-words">
              Glasreinigung und Fassadenreinigung für Gewerbe und Immobilien
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight mb-6 break-words">
              Wenn der erste Eindruck sichtbar besser werden soll
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed break-words">
              Saubere Glasflächen und gepflegte Fassaden machen im Alltag mehr
              aus, als man zunächst denkt. Gerade bei Büros, Praxen,
              Gewerbeobjekten oder Eingangsbereichen fallen Schlieren,
              Witterungsspuren und Verschmutzungen sofort auf. Eine gründliche
              Reinigung sorgt nicht nur für klare Sicht, sondern auch für einen
              deutlich ordentlicheren Gesamteindruck.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 border-l-8 border-primary p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                window
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Glasflächen reinigen
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed break-words">
                Fenster, Glaselemente, Eingangsbereiche und größere Glasfronten
                werden gründlich gereinigt, damit ein klarer, gepflegter
                Eindruck entsteht – innen wie außen.
              </p>
            </div>

            <div className="bg-primary text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-white text-4xl md:text-5xl mb-6 block">
                domain
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Fassade auffrischen
              </h4>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed break-words">
                Verschmutzungen an Außenflächen, Eingangsfronten und sichtbaren
                Fassadenbereichen werden entfernt, damit das Objekt wieder
                sauber und ordentlich wirkt.
              </p>
            </div>

            <div className="bg-black text-white p-6 sm:p-8 md:p-10">
              <span className="material-icons-outlined text-primary text-4xl md:text-5xl mb-6 block">
                high_quality
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                Auch bei anspruchsvollen Flächen
              </h4>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed break-words">
                Ob großflächige Verglasung, schwer zugängliche Bereiche oder
                höhere Fassadenabschnitte: Der Einsatz wird passend zum Objekt
                geplant und sauber umgesetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase mb-6 break-words">
                Was bei Glas- und Fassadenreinigung wichtig ist
              </h2>
              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="break-words">
                  Glas und Fassadenflächen werden täglich gesehen. Genau deshalb
                  fallen Verschmutzungen dort besonders schnell auf. Schlieren,
                  Staub, Regenrückstände, Ablagerungen oder allgemein stumpf
                  wirkende Flächen können das ganze Objekt ungepflegt erscheinen
                  lassen, obwohl innen alles ordentlich ist.
                </p>
                <p className="break-words">
                  Entscheidend ist dabei nicht nur, dass gereinigt wird, sondern
                  wie. Unterschiedliche Oberflächen, Witterungseinflüsse,
                  Zugänglichkeit und die Größe der Flächen spielen in der
                  Planung eine wichtige Rolle. Gerade bei Eingangsfronten,
                  Bürogebäuden, Praxen oder gewerblich genutzten Immobilien
                  zählt ein sauberes Ergebnis ohne unnötige Umstände.
                </p>
                <p className="break-words">
                  Uns ist wichtig, dass die Abstimmung einfach bleibt und der
                  Einsatz zu Ihrem Objekt passt. Ob einmalige Reinigung,
                  regelmäßiger Turnus oder Auffrischung vor einem wichtigen
                  Termin – wir schauen uns an, was sinnvoll ist und setzen es
                  zuverlässig um.
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
                    Bürogebäude und Gewerbeimmobilien
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Schaufenster und Eingangsbereiche
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Praxen, Kanzleien und Geschäftsräume
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Glasfronten und größere Fensterflächen
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    Fassadenbereiche mit sichtbaren Verschmutzungen
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="break-words">
                    regelmäßige Reinigung im festen Intervall
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

      {/* Extra section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase mb-10 break-words">
              Für wen sich Glas- und Fassadenreinigung besonders lohnt
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Unternehmen mit Kundenkontakt
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Saubere Glasflächen und ein gepflegter Eingangsbereich wirken
                  professionell und ordentlich. Gerade dort, wo Kunden, Besucher
                  oder Geschäftspartner ein- und ausgehen, macht das sofort
                  einen Unterschied.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Büros und Verwaltungsgebäude
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Große Fensterflächen und Fassaden prägen das Gesamtbild eines
                  Gebäudes. Regelmäßige Reinigung hilft dabei, den gepflegten
                  Eindruck dauerhaft zu erhalten.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Praxen und sensible Objekte
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  In Bereichen, in denen Sauberkeit besonders schnell auffällt,
                  sorgen gereinigte Glas- und Fassadenflächen für einen ruhigen,
                  ordentlichen und vertrauenswürdigen Eindruck.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-primary">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words">
                  Für Immobilien mit sichtbaren Witterungsspuren
                </h3>
                <p className="text-gray-700 leading-relaxed break-words">
                  Gerade Außenflächen verlieren mit der Zeit schnell an Wirkung.
                  Eine gezielte Reinigung kann das Erscheinungsbild spürbar
                  verbessern, ohne dass direkt größere Maßnahmen nötig sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6 md:mb-8 break-words">
            Noch Fragen zum Ablauf?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 md:mb-12 break-words">
            Rufen Sie uns einfach an. Oft lässt sich direkt klären, welche
            Flächen gereinigt werden sollen und welcher Termin sinnvoll ist.
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
                <span className="material-icons-outlined text-3xl sm:text-5xl md:text-7xl shrink-0">
                  call
                </span>
                <span className="break-all sm:break-normal">{PHONE_LABEL}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
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
                direkt, was sinnvoll ist und wie der Einsatz ablaufen kann.
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

            <div className="relative min-w-0">
              <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />

              <form
                className="bg-white p-6 sm:p-8 md:p-10 relative z-10 min-w-0"
                onSubmit={onSubmit}
              >
                <h3 className="text-3xl sm:text-4xl font-black text-black uppercase mb-6 md:mb-8 border-b-4 border-primary pb-4 break-words">
                  Schnell-Angebot
                </h3>

                <div className="hidden" aria-hidden="true">
                  <label>
                    Bitte leer lassen
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div className="space-y-6 min-w-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="min-w-0">
                      <label className="block text-xs font-black text-gray-400 uppercase mb-2 break-words">
                        Telefonnummer
                      </label>
                      <input
                        className="w-full min-w-0 bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all"
                        placeholder="+49..."
                        type="tel"
                        name="phone"
                        required
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="block text-xs font-black text-gray-400 uppercase mb-2 break-words">
                        Ihr Name
                      </label>
                      <input
                        className="w-full min-w-0 bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all"
                        placeholder="Name"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-xs font-black text-gray-400 uppercase mb-2 break-words">
                      Service
                    </label>
                    <select
                      className="w-full min-w-0 bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all appearance-none"
                      name="service"
                      defaultValue="Glasreinigung"
                      required
                    >
                      <option>Glasreinigung</option>
                      <option>Fassadenreinigung</option>
                      <option>Unterhaltsreinigung</option>
                      <option>Grundreinigung</option>
                      <option>Baureinigung</option>
                      <option>Industriereinigung</option>
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-xs font-black text-gray-400 uppercase mb-2 break-words">
                      Kurze Info
                    </label>
                    <textarea
                      className="w-full min-w-0 bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all min-h-[120px] resize-y"
                      name="message"
                      placeholder="Zum Beispiel: Bürofront, Schaufenster, Glasflächen, Fassade, regelmäßiger Turnus, schwer zugängliche Bereiche ..."
                    />
                  </div>

                  <button
                    className="w-full bg-black text-white font-black uppercase text-base sm:text-lg md:text-xl py-5 sm:py-6 hover:bg-primary transition-all flex items-center justify-center gap-3 group disabled:opacity-60 text-center break-words"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    <span className="break-words">
                      {status === "sending"
                        ? "SENDET..."
                        : "JETZT TERMIN SICHERN"}
                    </span>
                    <span className="material-icons-outlined group-hover:translate-x-2 transition-transform shrink-0">
                      arrow_forward
                    </span>
                  </button>

                  {status === "success" && (
                    <div className="rounded-lg border-2 border-green-600 bg-green-50 p-4 text-green-800 font-bold break-words">
                      Danke! Wir melden uns schnellstmöglich.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-lg border-2 border-red-600 bg-red-50 p-4 text-red-800 font-bold break-words">
                      {error || "Senden fehlgeschlagen."}
                    </div>
                  )}

                  <p className="text-xs text-gray-500 leading-relaxed break-words">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben
                    zur Bearbeitung Ihrer Anfrage zu.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
