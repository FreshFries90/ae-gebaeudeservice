"use client";

import { useState } from "react";

export default function BaureinigungForm() {
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
              defaultValue="Baureinigung"
              required
            >
              <option>Baureinigung</option>
              <option>Unterhaltsreinigung</option>
              <option>Industriereinigung</option>
              <option>Glasreinigung</option>
              <option>Containerreinigung</option>
              <option>Grundreinigung</option>
            </select>
          </div>

          <div className="min-w-0">
            <label className="block text-xs font-black text-gray-400 uppercase mb-2 break-words">
              Kurze Info
            </label>
            <textarea
              className="w-full min-w-0 bg-gray-100 border-2 border-gray-100 p-4 font-bold text-black focus:border-primary focus:bg-white outline-none transition-all min-h-[140px] resize-y"
              name="message"
              placeholder="Zum Beispiel: Neubau, Büroumbau, Reinigung vor Übergabe, kurzfristiger Termin ..."
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
                : "JETZT BAUREINIGUNG ANFRAGEN"}
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
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur
            Bearbeitung Ihrer Anfrage zu.
          </p>
        </div>
      </form>
    </div>
  );
}