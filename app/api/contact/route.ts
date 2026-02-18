// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // wichtig (Nodemailer läuft nicht im Edge Runtime)

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isPhone(v: string) {
  return /^[+]?[\d\s().-]{6,}$/.test(v);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Honeypot
    const company = String(form.get("company") ?? "");
    if (company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();

    // Optional: falls du später ein Email-Feld ergänzt
    const email = String(form.get("email") ?? "").trim();

    if (!name || !phone || !service) {
      return NextResponse.json(
        { ok: false, error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 },
      );
    }
    if (!isPhone(phone)) {
      return NextResponse.json(
        { ok: false, error: "Bitte eine gültige Telefonnummer angeben." },
        { status: 400 },
      );
    }
    if (email && !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Bitte eine gültige E-Mail angeben." },
        { status: 400 },
      );
    }

    // SMTP aus ENV
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const from =
      process.env.MAIL_FROM || "Website <no-reply@aegebaeudeservice.de>";
    const to = process.env.MAIL_TO || "info@aegebaeudeservice.de";

    if (!host || !user || !pass) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "SMTP ist nicht konfiguriert (SMTP_HOST/SMTP_USER/SMTP_PASS fehlen).",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user, pass },
      tls: {
        // optional: falls dein Provider zickt
        // rejectUnauthorized: false,
      },
    });

    const subject = `Neue Anfrage: ${service} (${name})`;
    const text = [
      "Neue Anfrage über Website-Formular",
      "",
      `Name: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-Mail: ${email}` : null,
      `Service: ${service}`,
      "",
      `Zeit: ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <h2>Neue Anfrage über Website-Formular</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Telefon:</strong> <a href="tel:${escapeAttr(phone)}">${escapeHtml(phone)}</a></p>
      ${email ? `<p><strong>E-Mail:</strong> <a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a></p>` : ""}
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <hr />
      <p style="color:#666;font-size:12px">Zeit: ${escapeHtml(new Date().toISOString())}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email || undefined, // falls du später email abfragst, kannst du direkt antworten
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Senden fehlgeschlagen." },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(s: string) {
  return escapeHtml(s).replaceAll("`", "&#096;");
}
