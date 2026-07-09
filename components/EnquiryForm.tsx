"use client";

import { LockKeyhole, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-xl sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="mb-5 flex items-center gap-3 rounded-md bg-cream px-4 py-3 text-sm text-ink/70">
        <LockKeyhole className="h-4 w-4 shrink-0 text-gold" />
        Your enquiry is handled privately by the admissions team.
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Name
          <input
            required
            className="h-12 rounded-md border border-forest/10 bg-pearl px-4 font-normal transition focus:border-gold"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Phone
          <input
            required
            type="tel"
            className="h-12 rounded-md border border-forest/10 bg-pearl px-4 font-normal transition focus:border-gold"
            placeholder="+91"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-forest">
        Concern
        <select className="h-12 rounded-md border border-forest/10 bg-pearl px-4 font-normal transition focus:border-gold">
          <option>Alcohol dependence</option>
          <option>Substance use</option>
          <option>Mental wellness support</option>
          <option>Family consultation</option>
          <option>Other</option>
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-forest">
        Message
        <textarea
          rows={4}
          className="rounded-md border border-forest/10 bg-pearl px-4 py-3 font-normal transition focus:border-gold"
          placeholder="Tell us what kind of support you need."
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-bold text-pearl shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-moss"
      >
        Send confidential enquiry
        <Send size={16} />
      </button>
      {submitted && (
        <p className="mt-4 rounded-md bg-mist px-4 py-3 text-sm text-forest">
          Thank you. This demo form is ready to connect to your CRM, email, or form service.
        </p>
      )}
      <div className="mt-5 border-t border-forest/10 pt-5 text-sm leading-7 text-forest/70">
        <p>
          Prefer direct contact? Call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-gold">
            {siteConfig.phone}
          </a>{" "}
          or{" "}
          <a href={siteConfig.secondaryPhoneHref} className="font-semibold text-gold">
            {siteConfig.secondaryPhone}
          </a>
          .
        </p>
        <p>
          Email{" "}
          <a href={siteConfig.emailHref} className="font-semibold text-gold">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
