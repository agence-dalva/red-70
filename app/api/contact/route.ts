import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message, company, elapsedMs } = await req.json();

  // Honeypot: real visitors never see or fill this field.
  if (company) {
    return NextResponse.json({ success: true });
  }

  // Bots typically submit near-instantly; reject anything under 3s.
  if (typeof elapsedMs === "number" && elapsedMs < 3000) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact RED-70 <contact@red-70.com>",
    to: "red-70@live.fr",
    replyTo: email,
    subject: `Nouvelle demande de devis — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#dc2626">Nouvelle demande de devis</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:120px">Nom</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#666;vertical-align:top">Message</td><td style="padding:8px 0;white-space:pre-wrap">${message}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
