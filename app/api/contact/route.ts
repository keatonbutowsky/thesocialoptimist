import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_ADDRESS = "megan@thesocialoptimist.com";
const FROM_ADDRESS = "TSO Contact Form <noreply@thesocialoptimist.com>";

type ContactPayload = {
  name?: string;
  email?: string;
  brand?: string;
  budget?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const brand = (body.brand ?? "").trim();
  const budget = (body.budget ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Brand / company", brand || "—"],
    ["Budget range", budget || "—"],
    ["What they want to grow", message || "—"],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2A2422; font-size: 15px; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #eee; background: #FFFDE9; font-weight: bold; white-space: nowrap; vertical-align: top;">${escapeHtml(
              label
            )}</td>
            <td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(
              value
            ).replace(/\n/g, "<br>")}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `New inquiry from ${name}${brand ? ` (${brand})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
