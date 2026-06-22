import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiter
const ipCache = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, projectType, message, honeypot } = body;

    // 1. Honeypot
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // 2. Validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // 3. Rate limiting
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    const last = ipCache.get(ip);
    const now = Date.now();
    if (last && now - last < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Please wait 1 minute before submitting again." },
        { status: 429 }
      );
    }
    ipCache.set(ip, now);

    // 4. Dev fallback when credentials are missing
    if (!process.env.RESEND_API_KEY) {
      console.log("📧 [DEV MODE] Contact form submission:", { name, company, email, projectType, message });
      await new Promise(r => setTimeout(r, 600));
      return NextResponse.json({
        success: true,
        message: "Dev mode: submission logged. Set RESEND_API_KEY in .env.local to send live emails.",
      });
    }

    const COMPANY_EMAIL = process.env.COMPANY_EMAIL;
    if (!COMPANY_EMAIL) {
      console.error("COMPANY_EMAIL is not set — cannot route inquiry.");
      return NextResponse.json({ error: "Delivery failed. Please email us directly." }, { status: 500 });
    }

    // Verified sender. Until your domain is verified in Resend, use the shared
    // onboarding@resend.dev sender (works with zero DNS). Once emanager.africa
    // (or acacialabs.co.tz) is verified, set EMAIL_FROM to e.g. hello@your-domain.
    const EMAIL_FROM = process.env.EMAIL_FROM ?? "Acacia Labs <onboarding@resend.dev>";
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Nairobi",
    });

    // 5. Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 6. Email TO COMPANY
    await resend.emails.send({
      from: EMAIL_FROM,
      to: COMPANY_EMAIL,
      replyTo: `${name} <${email}>`,
      subject: `New Inquiry: ${name}${company ? ` · ${company}` : ""} [${projectType}]`,
      html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="border-bottom:1px solid #1a1a1a;padding-bottom:24px;margin-bottom:32px;">
      <p style="margin:0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#4F7CFF;font-weight:600;">
        ACACIA LABS · INTELLIGENCE INFRASTRUCTURE
      </p>
      <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.03em;">
        New Contact Inquiry
      </h1>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
      ${[
        ["Received", timestamp],
        ["Name", name],
        ["Organization", company || "Not specified"],
        ["Reply-to", email],
        ["Inquiry Type", projectType],
      ].map(([k, v]) => `
        <tr>
          <td style="padding:10px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;font-weight:600;width:140px;vertical-align:top;">${k}</td>
          <td style="padding:10px 0;font-size:14px;color:#fff;font-weight:${k === "Name" || k === "Inquiry Type" ? 600 : 400};">${v}</td>
        </tr>`).join("")}
    </table>
    <div style="background:#0a0a0a;border:1px solid #1a1a1a;border-left:2px solid #4F7CFF;border-radius:8px;padding:24px;margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#4F7CFF;font-weight:600;">Message</p>
      <p style="margin:0;font-size:14px;line-height:1.8;color:#ccc;white-space:pre-wrap;">${message}</p>
    </div>
    <a href="mailto:${email}?subject=Re: Your Acacia Labs Inquiry"
       style="display:inline-block;background:#4F7CFF;color:#fff;padding:12px 28px;border-radius:100px;font-size:13px;font-weight:600;text-decoration:none;">
      Reply to ${name}
    </a>
    <div style="margin-top:40px;padding-top:24px;border-top:1px solid #1a1a1a;">
      <p style="margin:0;font-size:11px;color:#333;letter-spacing:0.05em;">
        ACACIA LABS · Dar es Salaam, Tanzania
      </p>
    </div>
  </div>
</body></html>`,
    });

    // 7. AUTO-REPLY to the person who submitted (best practice for credibility)
    await resend.emails.send({
      from: EMAIL_FROM,
      to: `${name} <${email}>`,
      subject: "We received your inquiry — Acacia Labs",
      html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:48px 24px;">
    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#4F7CFF;font-weight:600;">
      ACACIA LABS
    </p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:700;color:#fff;letter-spacing:-0.04em;line-height:1.1;">
      We received your inquiry.
    </h1>
    <p style="font-size:15px;line-height:1.75;color:#999;margin:0 0 16px;">Hi ${name},</p>
    <p style="font-size:15px;line-height:1.75;color:#999;margin:0 0 32px;">
      Your message has been received. Our team reviews every inquiry and will be in touch within <strong style="color:#fff;">1–2 business days</strong>.
    </p>
    <div style="background:#0a0a0a;border:1px solid #1a1a1a;border-radius:8px;padding:20px 24px;margin-bottom:32px;">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#555;font-weight:600;">Your inquiry</p>
      <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">${message.slice(0, 200)}${message.length > 200 ? "…" : ""}</p>
    </div>
    <p style="font-size:14px;color:#555;margin:0 0 32px;">
      In the meantime, explore our thinking at <a href="https://acacialabs.co.tz/blog" style="color:#4F7CFF;text-decoration:none;">acacialabs.co.tz/blog</a>.
    </p>
    <div style="padding-top:32px;border-top:1px solid #1a1a1a;">
      <p style="margin:0;font-size:12px;color:#333;">Acacia Labs · Dar es Salaam, Tanzania</p>
    </div>
  </div>
</body></html>`,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. We will be in touch within 1–2 business days.",
    });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Email delivery error:", msg);
    return NextResponse.json(
      { error: "Delivery failed. Please email us directly." },
      { status: 500 }
    );
  }
}
