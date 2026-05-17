import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic in-memory rate-limiter for anti-abuse
const ipCache = new Map<string, number>();
const RATE_LIMIT_COOLDOWN_MS = 60000; // 1 minute limit per submission

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, projectType, message, honeypot } = body;

    // 1. Anti-Spam: Honeypot verification
    if (honeypot) {
      console.warn("Spam prevention triggered: Honeypot field filled.");
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // 2. Data Validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // 3. Simple Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const lastRequestTime = ipCache.get(ip);
    const now = Date.now();

    if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_COOLDOWN_MS) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait 1 minute before submitting again." },
        { status: 429 }
      );
    }
    ipCache.set(ip, now);

    // 4. Secure Environment Fallback for Local Development
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn(
        "SMTP INTEGRATION WARNING: EMAIL_USER or EMAIL_PASS variables are missing. Mocking success response for development."
      );
      console.log("MOCK BRIEF SUBMISSION LOG:", {
        timestamp: new Date().toISOString(),
        name,
        company: company || "N/A",
        email,
        projectType,
        message,
      });

      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Development Mock: Submission processed and logged successfully.",
      });
    }

    // 5. Initialize Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 6. Format Clean Institutional Email Body
    const mailOptions = {
      from: `"Acacia Labs Inquiry" <${process.env.EMAIL_USER}>`,
      to: "kiamafahim@gmail.com",
      replyTo: email,
      subject: `Acacia Labs Inquiry: ${company || "Organization"} [${projectType}]`,
      text: `
=========================================
ACACIA LABS INQUIRY SUBMISSION
=========================================
Timestamp: ${new Date().toISOString()}
Sender Name: ${name}
Organization: ${company || "Not Specified"}
Reply Email: ${email}
Interested In: ${projectType}

Project Details:
-----------------------------------------
${message}
=========================================
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 32px; background-color: #050505; color: #F5F5F5; border: 1px solid #161616; max-width: 600px; margin: 0 auto; border-radius: 8px;">
          <h2 style="color: #F5F5F5; border-bottom: 1px solid #222; padding-bottom: 16px; text-transform: uppercase; font-size: 14px; letter-spacing: 2px; font-weight: 700; margin-top: 0;">
            Acacia Labs Project Brief
          </h2>
          <table style="width: 100%; font-size: 13px; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="color: #A1A1AA; padding: 8px 0; width: 140px; font-weight: 500;">TIMESTAMP:</td>
              <td style="color: #F5F5F5;">${new Date().toISOString()}</td>
            </tr>
            <tr>
              <td style="color: #A1A1AA; padding: 8px 0;">SENDER NAME:</td>
              <td style="color: #F5F5F5; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="color: #A1A1AA; padding: 8px 0;">ORGANIZATION:</td>
              <td style="color: #F5F5F5;">${company || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="color: #A1A1AA; padding: 8px 0;">REPLY EMAIL:</td>
              <td style="color: #00D1FF; text-decoration: none;">${email}</td>
            </tr>
            <tr>
              <td style="color: #A1A1AA; padding: 8px 0;">INTERESTED IN:</td>
              <td style="color: #2563FF; font-weight: 600;">${projectType}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #222; margin: 24px 0;" />
          <h3 style="color: #A1A1AA; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; font-weight: 600;">
            PROJECT DETAILS & STRATEGY
          </h3>
          <p style="font-size: 13px; line-height: 1.6; color: #F5F5F5; background: #0B0B0B; padding: 20px; border: 1px solid #161616; border-radius: 6px; white-space: pre-wrap; margin-top: 0;">
            ${message}
          </p>
        </div>
      `,
    };

    // 7. Deliver mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Brief transmitted successfully. Our strategy team will coordinate contact.",
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Nodemailer routing failure:", errorMessage);
    return NextResponse.json(
      { error: "Brief delivery failed. Please utilize direct executive emails." },
      { status: 500 }
    );
  }
}
