"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck2,
  Check,
  CheckCircle2,
  LayoutDashboard,
  MessageCircle,
  Phone
} from "lucide-react";
import { siteConfig } from "@/data/site";

const planTabs = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Recovery overview",
    title: "A calmer plan for the next step",
    image: "/images/centre/exterior-day-team.jpeg",
    alt: "Healing Foundation residential care team",
    badge: "Plan active",
    headline: "Private care. Shared clarity.",
    copy: "A confidential overview of residential support, therapy, routine, family guidance, and aftercare.",
    href: "/about",
    cta: "View residence",
    schedule: [
      ["Today", "Therapy + wellness"],
      ["Family", "Guidance scheduled"],
      ["Next", "Progress review"]
    ],
    rhythm: [
      ["Clinical review", "Completed", "bg-[#6e57d9]", "100%"],
      ["Therapy sessions", "3 of 4", "bg-[#ef896f]", "75%"],
      ["Wellness routine", "5 of 7", "bg-[#55a476]", "71%"]
    ],
    checklist: ["Private enquiry received", "Care needs discussed", "First call planned"]
  },
  {
    id: "daily",
    label: "Daily plan",
    eyebrow: "Daily structure",
    title: "A steady routine that reduces overwhelm",
    image: "/images/centre/wellness-yoga-hall.jpeg",
    alt: "Wellness and yoga hall at Healing Foundation",
    badge: "Routine ready",
    headline: "Therapy, wellness, rest, and reflection.",
    copy: "Daily rhythm keeps recovery practical with guided sessions, wellness activity, meals, reflection, and rest.",
    href: "/facilities",
    cta: "See wellness spaces",
    schedule: [
      ["Morning", "Wellness routine"],
      ["Afternoon", "Therapy work"],
      ["Evening", "Reflection"]
    ],
    rhythm: [
      ["Morning routine", "Planned", "bg-[#6e57d9]", "82%"],
      ["Therapy block", "Scheduled", "bg-[#ef896f]", "65%"],
      ["Rest window", "Protected", "bg-[#55a476]", "74%"]
    ],
    checklist: ["Wake-up rhythm set", "Therapy block selected", "Wellness activity chosen"]
  },
  {
    id: "therapy",
    label: "Therapy",
    eyebrow: "Therapeutic care",
    title: "Sessions shaped around the person",
    image: "/images/centre/counselling-room.jpeg",
    alt: "Individual counselling room at Healing Foundation",
    badge: "Therapy mapped",
    headline: "Private conversations, clear goals.",
    copy: "Therapy support can include individual counselling, group work, emotional awareness, and relapse-prevention planning.",
    href: "/treatments",
    cta: "Explore treatments",
    schedule: [
      ["Focus", "Triggers"],
      ["Support", "1:1 counselling"],
      ["Practice", "Coping tools"]
    ],
    rhythm: [
      ["Individual session", "Booked", "bg-[#6e57d9]", "85%"],
      ["Group support", "Active", "bg-[#ef896f]", "72%"],
      ["Relapse prevention", "Started", "bg-[#55a476]", "58%"]
    ],
    checklist: ["Primary concern noted", "Therapy goals drafted", "Progress review planned"]
  },
  {
    id: "family",
    label: "Family",
    eyebrow: "Family guidance",
    title: "Support for the people around recovery",
    image: "/images/centre/group-therapy-session.jpeg",
    alt: "Guided group and family support session",
    badge: "Family included",
    headline: "Boundaries, communication, and trust.",
    copy: "Family guidance helps loved ones understand recovery, respond calmly, and support healthy structure at home.",
    href: "/contact",
    cta: "Plan family call",
    schedule: [
      ["Call", "Family check-in"],
      ["Topic", "Boundaries"],
      ["Next", "Home plan"]
    ],
    rhythm: [
      ["Family update", "Scheduled", "bg-[#6e57d9]", "76%"],
      ["Education", "In progress", "bg-[#ef896f]", "68%"],
      ["Home support plan", "Drafting", "bg-[#55a476]", "52%"]
    ],
    checklist: ["Family questions collected", "Update rhythm selected", "Aftercare expectations discussed"]
  },
  {
    id: "aftercare",
    label: "Aftercare",
    eyebrow: "Aftercare pathway",
    title: "Recovery continues after residential care",
    image: "/images/centre/outdoor-activity.jpeg",
    alt: "Outdoor activity at Healing Foundation",
    badge: "Next steps ready",
    headline: "A plan for life after discharge.",
    copy: "Aftercare planning turns treatment progress into realistic routines, support contacts, and relapse-prevention steps.",
    href: "/brochure",
    cta: "Open brochure",
    schedule: [
      ["Plan", "Home routine"],
      ["Support", "Follow-up"],
      ["Safety", "Relapse prevention"]
    ],
    rhythm: [
      ["Discharge plan", "Drafted", "bg-[#6e57d9]", "70%"],
      ["Follow-up support", "Mapped", "bg-[#ef896f]", "62%"],
      ["Relapse plan", "Reviewing", "bg-[#55a476]", "66%"]
    ],
    checklist: ["Home triggers reviewed", "Support contacts listed", "Follow-up routine prepared"]
  }
];

const team = [
  {
    id: "admissions",
    letter: "A",
    label: "Admissions",
    color: "bg-[#f6c2b4] text-[#6b3023]",
    note: "First call, privacy, suitability, and visit guidance."
  },
  {
    id: "therapist",
    letter: "T",
    label: "Therapist",
    color: "bg-[#c8bdf4] text-[#34266f]",
    note: "Assessment, sessions, emotional work, and progress reviews."
  },
  {
    id: "family",
    letter: "F",
    label: "Family support",
    color: "bg-[#b8dcc7] text-[#214b34]",
    note: "Family updates, boundaries, education, and home planning."
  }
];

export function RecoveryPlanDashboard() {
  const [activeTabId, setActiveTabId] = useState(planTabs[0].id);
  const [activeTeamId, setActiveTeamId] = useState(team[0].id);
  const [completed, setCompleted] = useState([true, true, false]);

  const activeTab = planTabs.find((tab) => tab.id === activeTabId) ?? planTabs[0];
  const activeTeam = team.find((item) => item.id === activeTeamId) ?? team[0];

  const whatsappHref = useMemo(() => {
    const message = [
      `Hello ${siteConfig.name}, I am viewing the recovery plan section.`,
      `Selected focus: ${activeTab.label}`,
      `Care team: ${activeTeam.label}`,
      "Please guide me confidentially."
    ].join("\n");

    return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [activeTab.label, activeTeam.label]);

  const completedCount = completed.filter(Boolean).length;

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#242925]/12 bg-white p-2 shadow-[0_40px_100px_rgba(21,28,24,0.18)] sm:p-3">
      <div className="flex h-12 items-center justify-between border-b border-forest/8 px-3 sm:px-4">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f08d72]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e9c85a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#67b88b]" />
        </div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-forest sm:text-sm">
          <LayoutDashboard className="h-4 w-4 text-[#7057d9]" />
          Personal recovery plan
        </div>
        <div className="flex -space-x-2">
          {team.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => setActiveTeamId(member.id)}
              className={`grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[0.65rem] font-bold transition hover:-translate-y-0.5 ${
                member.color
              } ${activeTeamId === member.id ? "ring-2 ring-[#7057d9] ring-offset-1" : ""}`}
              aria-label={`Show ${member.label} role`}
              title={member.label}
            >
              {member.letter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid min-h-[540px] bg-[#f4f4ee] md:grid-cols-[180px_1fr] lg:grid-cols-[190px_1fr_290px]">
        <aside className="hidden border-r border-forest/8 bg-white p-4 md:block">
          <p className="px-2 text-[0.65rem] font-bold uppercase text-ink/38">Care workspace</p>
          <div className="mt-4 space-y-1">
            {planTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-xs font-semibold transition ${
                  activeTabId === tab.id
                    ? "bg-[#f0eaff] text-[#5e46c7]"
                    : "text-ink/56 hover:bg-[#f7f7f2] hover:text-forest"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${activeTabId === tab.id ? "bg-[#7057d9]" : "bg-forest/16"}`} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-forest/8 pt-5">
            <p className="px-2 text-[0.65rem] font-bold uppercase text-ink/38">Care team</p>
            <div className="mt-3 space-y-2 px-2">
              {team.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveTeamId(member.id)}
                  className={`flex w-full items-center gap-2 rounded-md py-1.5 text-left text-[0.7rem] transition ${
                    activeTeamId === member.id ? "text-forest" : "text-ink/58 hover:text-forest"
                  }`}
                >
                  <span className={`h-6 w-6 rounded-full ${member.color}`} />
                  {member.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="p-3 sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-[#7057d9]">{activeTab.eyebrow}</p>
              <h2 className="mt-1 text-2xl font-semibold text-forest sm:text-3xl">{activeTab.title}</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#e4f3e9] px-3 py-2 text-xs font-bold text-[#28623f] transition hover:-translate-y-0.5 hover:bg-[#d6eedc]"
            >
              <CheckCircle2 className="h-4 w-4" />
              {activeTab.badge}
            </Link>
          </div>

          <div className="mb-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {planTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`h-10 shrink-0 rounded-full px-4 text-xs font-bold ${
                  activeTabId === tab.id ? "bg-[#7057d9] text-white" : "bg-white text-forest/65"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[16/10] min-h-[290px] overflow-hidden rounded-md bg-forest sm:min-h-[360px]">
            <Image
              src={activeTab.image}
              alt={activeTab.alt}
              fill
              priority
              sizes="(min-width: 1024px) 680px, 90vw"
              className="object-cover transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/88 via-[#10251d]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-7">
              <div>
                <p className="text-xs font-bold uppercase text-[#f4d77d]">Healing Foundation</p>
                <p className="mt-2 max-w-lg text-2xl font-semibold leading-tight sm:text-4xl">
                  {activeTab.headline}
                </p>
                <p className="mt-2 hidden max-w-xl text-xs leading-6 text-white/72 sm:block">
                  {activeTab.copy}
                </p>
              </div>
              <Link
                href={activeTab.href}
                className="inline-flex h-10 w-fit items-center gap-2 rounded-md bg-white px-4 text-xs font-bold text-forest transition hover:-translate-y-0.5"
              >
                {activeTab.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {activeTab.schedule.map(([label, value], index) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  const nextTab = index === 0 ? "daily" : index === 1 ? "family" : "aftercare";
                  setActiveTabId(nextTab);
                }}
                className="rounded-md border border-forest/8 bg-white px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#7057d9]/35"
              >
                <p className={`text-[0.65rem] font-bold uppercase ${index === 0 ? "text-[#7057d9]" : index === 1 ? "text-[#b45a42]" : "text-[#35764e]"}`}>
                  {label}
                </p>
                <p className="mt-1 text-xs font-semibold text-forest sm:text-sm">{value}</p>
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {activeTab.checklist.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setCompleted((current) =>
                    current.map((checked, checkedIndex) => (checkedIndex === index ? !checked : checked))
                  )
                }
                className="flex items-center gap-2 rounded-md border border-forest/8 bg-white px-4 py-3 text-left text-xs font-semibold text-forest transition hover:border-[#55a476]/45"
              >
                <span className={`grid h-5 w-5 place-items-center rounded-full ${completed[index] ? "bg-[#55a476] text-white" : "bg-forest/8 text-transparent"}`}>
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </button>
            ))}
          </div>
        </div>

        <aside className="border-t border-forest/8 bg-[#efeafd] p-5 lg:border-l lg:border-t-0">
          <p className="text-xs font-bold uppercase text-[#7057d9]">This week</p>
          <p className="mt-2 text-xl font-semibold text-[#2d2552]">Care rhythm</p>
          <div className="mt-6 space-y-5">
            {activeTab.rhythm.map(([title, state, color, width]) => (
              <button
                key={title}
                type="button"
                onClick={() => {
                  if (title.toLowerCase().includes("family")) {
                    setActiveTabId("family");
                  } else if (title.toLowerCase().includes("therapy") || title.toLowerCase().includes("session")) {
                    setActiveTabId("therapy");
                  } else {
                    setActiveTabId("daily");
                  }
                }}
                className="block w-full rounded-md p-1 text-left transition hover:bg-white/45"
              >
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="font-semibold text-[#2d2552]">{title}</span>
                  <span className="text-[#2d2552]/55">{state}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/80">
                  <div className={`h-full rounded-full ${color}`} style={{ width }} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-md border border-[#7057d9]/12 bg-white/48 p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#7057d9]">
                <CalendarCheck2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-[#2d2552]">Next check-in</p>
                <p className="mt-0.5 text-[0.7rem] text-[#2d2552]/56">Family care review</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#7057d9] text-xs font-bold text-white transition hover:-translate-y-0.5"
            >
              Schedule call
              <Phone className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 rounded-md bg-white/58 p-4">
            <div className="flex items-start gap-3">
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold ${activeTeam.color}`}>
                {activeTeam.letter}
              </span>
              <div>
                <p className="text-xs font-bold text-[#2d2552]">{activeTeam.label}</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-[#2d2552]/62">{activeTeam.note}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-md bg-white/58 p-4">
            <p className="text-xs font-bold text-[#2d2552]">Checklist progress</p>
            <p className="mt-2 text-2xl font-semibold text-[#7057d9]">{completedCount}/3</p>
            <p className="mt-1 text-[0.7rem] leading-5 text-[#2d2552]/62">Tap checklist items to mark what is ready.</p>
          </div>

          <div className="mt-4 grid gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#1fae66] text-xs font-bold text-white transition hover:-translate-y-0.5"
            >
              WhatsApp plan
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/brochure"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#7057d9]/18 bg-white/60 text-xs font-bold text-[#2d2552] transition hover:bg-white"
            >
              View brochure
              <BookOpenCheck className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
