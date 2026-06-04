"use client";

import { FormEvent, startTransition, useState } from "react";
import { cn } from "@/lib/utils";

type StatusState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<StatusState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const companyName = String(formData.get("company") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honeypot = String(formData.get("username") ?? "").trim();

    startTransition(() => {
      setStatus("sending");
      setFeedbackMessage("");
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company: companyName, projectType, message, honeypot }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFeedbackMessage(data.message || "Message sent successfully. Our team will contact you shortly.");
        form.reset();
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Failed to send message. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please contact us directly at hello@acacialabs.co.tz");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-glass-border bg-glass-bg/60 p-8 md:p-10 rounded-sm relative flex flex-col gap-6 shadow-2xl shadow-black/30"
    >
      {/* Accent top rule */}
      <div className="absolute inset-x-0 top-0 h-[1px] section-rule rounded-t-sm" />

      {/* Honeypot — spam protection */}
      <input
        type="text"
        name="username"
        autoComplete="off"
        tabIndex={-1}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        placeholder="Do not fill this field"
      />

      <div className="space-y-1">
        <h3 className="text-xl font-bold uppercase tracking-tight text-text-primary">Start a Project</h3>
        <p className="text-xs text-text-secondary">Tell us about your operational needs.</p>
      </div>

      {feedbackMessage && (
        <div className={cn(
          "text-xs px-4 py-3 rounded-sm border",
          status === "success" && "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
          status === "error" && "bg-red-500/10 border-red-500/30 text-red-400"
        )}>
          {feedbackMessage}
        </div>
      )}

      {/* Inputs grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="input-field"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Work Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="input-field"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company or organization"
            className="input-field"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Interested In *</label>
          <select
            name="projectType"
            required
            defaultValue=""
            className="input-field bg-secondary-bg"
          >
            <option value="" disabled>Select your interest…</option>
            <option value="E-Manager">E-Manager</option>
            <option value="syncAI">syncAI</option>
            <option value="Operational Infrastructure">Operational Infrastructure</option>
            <option value="Enterprise Automation">Enterprise Automation</option>
            <option value="Custom Systems">Custom Systems</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Project Details *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe your project, operational challenges, or infrastructure goals."
          className="input-field resize-none leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-sm bg-text-primary px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-primary-bg hover:bg-white hover:shadow-[0_0_24px_rgba(99,102,241,0.2)] hover:scale-[0.97] active:scale-[0.95] disabled:opacity-50 cursor-pointer"
        style={{ transition: `all 220ms var(--ease-premium)` }}
      >
        {status === "sending" ? (
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-primary-bg/30 border-t-primary-bg animate-spin" />
            Sending…
          </span>
        ) : "Send Message"}
      </button>
    </form>
  );
}
