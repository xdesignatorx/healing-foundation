"use client";

import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const projectTypes = [
  "Website design",
  "Web development",
  "Brand identity",
  "Marketing creatives",
  "UI/UX system",
  "Complete launch package"
];

export function ProjectBriefForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-3xl border border-white/10 bg-[#0d0f1b] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.32)] sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = [
          "Hello DesignstryX, I want to start a project.",
          `Name: ${data.get("name")}`,
          `Phone: ${data.get("phone")}`,
          `Email: ${data.get("email") || "Not provided"}`,
          `Project type: ${data.get("projectType")}`,
          `Timeline: ${data.get("timeline")}`,
          `Budget range: ${data.get("budget")}`,
          `Reference / message: ${data.get("message") || "Not provided"}`
        ].join("\n");

        window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        setSubmitted(true);
      }}
    >
      <div className="mb-6 rounded-2xl border border-[#00f0a8]/15 bg-[#00f0a8]/5 px-4 py-4 text-sm font-bold leading-6 text-[#00f0a8]">
        <CheckCircle2 className="mr-2 inline h-4 w-4" />
        Tell us the outcome you want. We will shape the right design and development plan.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-white">
          Name
          <input
            required
            name="name"
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-medium text-white transition placeholder:text-white/30 focus:border-[#ff7a00]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-white">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-medium text-white transition placeholder:text-white/30 focus:border-[#ff7a00]"
            placeholder="+91"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-black text-white">
        Email
        <input
          name="email"
          type="email"
          className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-medium text-white transition placeholder:text-white/30 focus:border-[#ff7a00]"
          placeholder="you@example.com"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-black text-white">
        Project type
        <select name="projectType" className="h-12 rounded-xl border border-white/10 bg-[#111420] px-4 font-medium text-white transition focus:border-[#ff7a00]">
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-white">
          Timeline
          <select name="timeline" className="h-12 rounded-xl border border-white/10 bg-[#111420] px-4 font-medium text-white transition focus:border-[#ff7a00]">
            <option>Urgent launch</option>
            <option>2-4 weeks</option>
            <option>1-2 months</option>
            <option>Exploring first</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-white">
          Budget range
          <select name="budget" className="h-12 rounded-xl border border-white/10 bg-[#111420] px-4 font-medium text-white transition focus:border-[#ff7a00]">
            <option>Need guidance</option>
            <option>Starter project</option>
            <option>Premium website</option>
            <option>Full brand + web</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-black text-white">
        Reference or message
        <textarea
          name="message"
          rows={5}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-medium text-white transition placeholder:text-white/30 focus:border-[#ff7a00]"
          placeholder="Share reference links, goals, deadline, or what you want to build."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-6 text-sm font-black text-white shadow-[0_18px_60px_rgba(255,112,0,0.25)] transition hover:-translate-y-1"
      >
        Send brief on WhatsApp
        <MessageCircle className="h-4 w-4" />
      </button>

      {submitted && (
        <p className="mt-4 rounded-xl border border-[#00f0a8]/15 bg-[#00f0a8]/5 px-4 py-3 text-sm font-bold text-[#00f0a8]">
          WhatsApp opened with your project brief. Review it once and send.
        </p>
      )}

      <a href={siteConfig.emailHref} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white/56 transition hover:text-[#ff7a00]">
        Prefer email? Send your brief
        <ArrowRight className="h-4 w-4" />
      </a>
    </form>
  );
}
