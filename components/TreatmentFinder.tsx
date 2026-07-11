"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

const concerns = [
  {
    id: "alcohol",
    label: "Alcohol recovery",
    result: "Alcohol Dependence Recovery",
    note: "A private assessment can clarify daily routine, withdrawal risk, therapy needs, and family support."
  },
  {
    id: "substance",
    label: "Drug de-addiction",
    result: "Substance Use Treatment",
    note: "A residential plan can combine structured care, counselling, wellness rhythm, and relapse-prevention work."
  },
  {
    id: "dual",
    label: "Addiction with anxiety or low mood",
    result: "Dual Diagnosis Care",
    note: "Integrated support may be helpful when emotional health and substance use are affecting each other."
  },
  {
    id: "family",
    label: "Family guidance",
    result: "Family Consultation",
    note: "A guided family conversation can help with boundaries, admission decisions, and next-step clarity."
  }
];

const timelines = ["Today", "This week", "Exploring options"];
const supportFor = ["Myself", "A family member", "A friend"];

export function TreatmentFinder() {
  const [concern, setConcern] = useState(concerns[0].id);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [person, setPerson] = useState(supportFor[1]);

  const selected = useMemo(
    () => concerns.find((item) => item.id === concern) ?? concerns[0],
    [concern]
  );

  const whatsappHref = useMemo(() => {
    const message = [
      `Hello ${siteConfig.name}, I used the treatment finder on your website.`,
      `Support for: ${person}`,
      `Concern: ${selected.label}`,
      `Timeline: ${timeline}`,
      `Suggested pathway: ${selected.result}`,
      "Please guide me confidentially."
    ].join("\n");

    return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [person, selected, timeline]);

  return (
    <section className="bg-[#f7f7f2] py-24 text-forest sm:py-32">
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
              Treatment finder
            </p>
            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
              Not sure where to start?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-ink/64">
              Answer three simple questions and get a private starting point.
              This is not a diagnosis, just a clearer way to begin the conversation.
            </p>
          </div>

          <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-6">
              <div>
                <p className="text-sm font-bold text-forest">1. What support is needed?</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {concerns.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConcern(item.id)}
                      className={`rounded-md border px-4 py-3 text-left text-sm font-semibold transition ${
                        concern === item.id
                          ? "border-[#7057d9] bg-[#efeafd] text-[#4a35a8]"
                          : "border-forest/10 bg-[#fbfbf7] text-forest/70 hover:border-[#7057d9]/40"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-forest">2. Who is this for?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {supportFor.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPerson(item)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        person === item
                          ? "border-forest bg-forest text-white"
                          : "border-forest/10 bg-white text-forest/70 hover:border-forest/30"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-forest">3. How urgent is it?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {timelines.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTimeline(item)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        timeline === item
                          ? "border-[#c76f58] bg-[#f8d7cd] text-[#7b3b2d]"
                          : "border-forest/10 bg-white text-forest/70 hover:border-[#c76f58]/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-[#1e2622] p-6 text-white">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f1c765] text-[#302b1d]">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1c765]">
                    Suggested first step
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{selected.result}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{selected.note}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#1fae66] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  WhatsApp this result
                  <MessageCircle className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/18 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-forest"
                >
                  Speak to admissions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-ink/56">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#55a476]" />
              This tool is only for guidance. Final care suitability should be discussed privately with the admissions team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
