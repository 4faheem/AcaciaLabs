"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, startTransition, useState } from "react";

type ContactFormProps = {
  email: string;
};

const EMAILJS_PUBLIC_KEY = "MRA9au2IGFnTmk_4n";
const EMAILJS_SERVICE_ID = "service_8nv2cxj";
const EMAILJS_TEMPLATE_ID = "template_emkh0qt";

export function ContactForm({ email }: ContactFormProps) {
  const [message, setMessage] = useState("This form sends your project directly to our team.");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();

    startTransition(() => {
      setIsSending(true);
      setMessage("Sending your project...");
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name || "Website visitor",
          from_email: senderEmail || "-",
          company: company || "-",
          project: project || "-",
          to_email: email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setMessage("Sent! We'll be in touch soon.");
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="surface-card flex flex-col gap-5 p-7 sm:p-8" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#1A1040]">Start a Project</h2>
        <p className="text-sm leading-7 text-[#1A1040]/64">{message}</p>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#1A1040]">Name</span>
        <input type="text" name="name" required placeholder="Your name" className="w-full rounded-2xl border border-[#1A1040]/10 bg-[#F8F7FF] px-4 py-3 text-sm text-[#1A1040] outline-none transition focus:border-[#6C5CE7] focus:bg-white" />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#1A1040]">Email</span>
        <input type="email" name="email" required placeholder="you@company.com" className="w-full rounded-2xl border border-[#1A1040]/10 bg-[#F8F7FF] px-4 py-3 text-sm text-[#1A1040] outline-none transition focus:border-[#6C5CE7] focus:bg-white" />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#1A1040]">Company</span>
        <input type="text" name="company" placeholder="Company name" className="w-full rounded-2xl border border-[#1A1040]/10 bg-[#F8F7FF] px-4 py-3 text-sm text-[#1A1040] outline-none transition focus:border-[#6C5CE7] focus:bg-white" />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#1A1040]">Project Description</span>
        <textarea name="project" required rows={6} placeholder="Tell us what you want to build, what problem it solves, and where AI should create leverage." className="w-full rounded-3xl border border-[#1A1040]/10 bg-[#F8F7FF] px-4 py-3 text-sm leading-7 text-[#1A1040] outline-none transition focus:border-[#6C5CE7] focus:bg-white" />
      </label>
      <button type="submit" disabled={isSending} className="button-primary w-full sm:w-fit disabled:opacity-50 disabled:cursor-not-allowed">
        {isSending ? "Sending..." : "Start a Project"}
      </button>
    </form>
  );
}
