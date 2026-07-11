"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const content = {
  en: {
    label: "English",
    title: "Clear guidance in the language families are comfortable with.",
    copy:
      "Use this quick guide to understand the first step, privacy, admission conversation, and visit process.",
    cards: [
      ["First step", "Call or WhatsApp the admissions team and share the situation privately."],
      ["Privacy", "Your enquiry is handled discreetly. Share only what feels comfortable."],
      ["Visit", "Please call before visiting so the team can guide you with timing and directions."],
      ["Family support", "Families can ask questions about care, routine, boundaries, and aftercare."]
    ],
    cta: "Ask in English"
  },
  hi: {
    label: "Hindi",
    title: "Parivaar ke liye seedhi aur aasaan guidance.",
    copy:
      "Is short guide se aap first step, privacy, admission call, aur visit process samajh sakte hain.",
    cards: [
      ["Pehla step", "Admissions team ko call ya WhatsApp karke situation privately share karein."],
      ["Privacy", "Aapki enquiry discreetly handle hoti hai. Sirf utna share karein jitna comfortable ho."],
      ["Visit", "Centre aane se pehle call kar lein, team timing aur directions guide kar degi."],
      ["Family support", "Parivaar care, routine, boundaries aur aftercare ke baare me questions pooch sakta hai."]
    ],
    cta: "Hindi me poochhein"
  }
};

export function LanguageGuide() {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const active = content[language];

  const whatsappHref = useMemo(() => {
    const message =
      language === "hi"
        ? `Namaste ${siteConfig.name}, mujhe Hindi me confidential admission guidance chahiye.`
        : `Hello ${siteConfig.name}, I would like confidential admission guidance in English.`;

    return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [language]);

  return (
    <section className="bg-[#ece8f8] py-24 text-forest sm:py-32">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
              Hindi + English
            </p>
            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
              {active.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/64">{active.copy}</p>
            <div className="mt-8 inline-flex rounded-full border border-forest/10 bg-white p-1 shadow-card">
              {(["en", "hi"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`h-10 rounded-full px-5 text-sm font-bold transition ${
                    language === item ? "bg-forest text-white" : "text-forest/62 hover:text-forest"
                  }`}
                >
                  {content[item].label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {active.cards.map(([title, text]) => (
                <div key={title} className="rounded-md bg-[#f7f7f2] p-5">
                  <p className="text-sm font-bold text-forest">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{text}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1fae66] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              {active.cta}
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
