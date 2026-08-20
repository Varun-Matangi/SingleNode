import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

declare global {
  interface CloudflareEnv {
    N8N_WEBHOOK_URL?: string;
    N8N_WEBHOOK_SECRET?: string;
  }
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, company, service, message, website } = body;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const webhookUrl = env.N8N_WEBHOOK_URL;
  const webhookSecret = env.N8N_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json({ ok: false, error: "Contact form is not configured" }, { status: 500 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Webhook-Secret": webhookSecret },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        service,
        message,
        submittedAt: new Date().toISOString(),
        source: "singlenodestudio.com contact form",
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Upstream error" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Upstream error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
