import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  HeartHandshake,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Motion";
import {
  faqs,
  facilities,
  processSteps,
  siteConfig,
  testimonials,
  treatments
} from "@/data/site";
import { AnimatedStats } from "@/components/AnimatedStats";
import { BrochureCTA } from "@/components/BrochureCTA";
import { LanguageGuide } from "@/components/LanguageGuide";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TreatmentFinder } from "@/components/TreatmentFinder";

const careSignals = [
  {
    title: "Confidential by default",
    text: "Private conversations from the first enquiry to aftercare planning.",
    icon: LockKeyhole,
    tone: "bg-[#f0eaff]"
  },
  {
    title: "Clinically coordinated",
    text: "Assessment, therapy, routine, and progress reviews in one clear pathway.",
    icon: ClipboardCheck,
    tone: "bg-[#e4f3e9]"
  },
  {
    title: "Family included",
    text: "Guidance and education help families support recovery with clarity.",
    icon: Users,
    tone: "bg-[#ffe8df]"
  },
  {
    title: "Built beyond discharge",
    text: "Practical continuity and relapse-prevention planning for life at home.",
    icon: HeartHandshake,
    tone: "bg-[#f7edc9]"
  }
];

const treatmentImages = [
  "/images/centre/counselling-room.jpeg",
  "/images/centre/group-therapy-session.jpeg",
  "/images/centre/consultation-office.jpeg",
  "/images/centre/awareness-session.jpeg",
  "/images/centre/outdoor-activity.jpeg",
  "/images/centre/wellness-yoga-hall.jpeg"
];

const metrics = [
  { value: "24/7", label: "admissions guidance when a family needs it" },
  { value: "1:1", label: "personal care planning around individual needs" },
  { value: "04", label: "clear stages from first enquiry to aftercare" }
];

const promptOptions = [
  "Alcohol recovery",
  "Substance use",
  "Family guidance",
  "Private admission"
];

export default function Home() {
  const featuredTreatments = treatments.slice(0, 6);
  const featuredFacilities = facilities.slice(0, 3);

  return (
    <>
      <section className="overflow-hidden bg-[#f7f7f2] pb-16 pt-32 text-[#171c19] sm:pb-20 sm:pt-40">
        <div className="container-pad">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-2 text-xs font-bold text-forest shadow-card">
              <Sparkles className="h-4 w-4 text-[#7057d9]" />
              Private rehabilitation, made clearer
            </div>
            <h1 className="mt-7 font-sans text-6xl font-semibold leading-[0.94] text-balance sm:text-7xl lg:text-[7.25rem]">
              Care that moves recovery forward.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ink/68 sm:text-lg">
              A calm residential recovery experience where assessment, therapy,
              family support, daily structure, and aftercare move together.
            </p>
          </div>

          <Reveal className="mx-auto mt-10 max-w-4xl">
            <div className="rounded-lg border border-forest/10 bg-white p-2 shadow-[0_24px_80px_rgba(23,53,42,0.13)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex min-h-14 flex-1 items-center gap-3 px-3 sm:px-4">
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#7057d9]" />
                  <span className="text-left text-sm text-ink/56 sm:text-base">
                    Tell us what kind of support you need...
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-[#7057d9] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#5e46c7]"
                >
                  Plan my first call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-forest/8 px-3 pb-2 pt-3 sm:px-4">
                {promptOptions.map((option) => (
                  <Link
                    key={option}
                    href="/contact"
                    className="rounded-full border border-forest/10 bg-[#f7f7f2] px-3 py-2 text-xs font-semibold text-forest transition hover:border-[#7057d9]/40 hover:bg-[#f0eaff]"
                  >
                    {option}
                  </Link>
                ))}
                <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-2 text-xs font-semibold text-ink/48">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Completely confidential
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto mt-14 max-w-6xl" delay={0.08}>
            <div className="absolute inset-x-12 bottom-[-2rem] h-20 bg-[#7057d9]/14 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-[#242925]/12 bg-white p-2 shadow-[0_40px_100px_rgba(21,28,24,0.18)] sm:p-3">
              <div className="flex h-12 items-center justify-between border-b border-forest/8 px-3 sm:px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f08d72]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e9c85a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#67b88b]" />
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-forest sm:text-sm">
                  <LayoutDashboard className="h-4 w-4 text-[#7057d9]" />
                  Personal recovery plan
                </div>
                <div className="flex -space-x-2">
                  {["A", "T", "F"].map((letter, index) => (
                    <span
                      key={letter}
                      className={`grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[0.65rem] font-bold ${
                        index === 0
                          ? "bg-[#f6c2b4] text-[#6b3023]"
                          : index === 1
                            ? "bg-[#c8bdf4] text-[#34266f]"
                            : "bg-[#b8dcc7] text-[#214b34]"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid min-h-[540px] bg-[#f4f4ee] md:grid-cols-[180px_1fr] lg:grid-cols-[190px_1fr_270px]">
                <aside className="hidden border-r border-forest/8 bg-white p-4 md:block">
                  <p className="px-2 text-[0.65rem] font-bold uppercase text-ink/38">Care workspace</p>
                  <div className="mt-4 space-y-1">
                    {["Overview", "Daily plan", "Therapy", "Family", "Aftercare"].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-xs font-semibold ${
                          index === 0 ? "bg-[#f0eaff] text-[#5e46c7]" : "text-ink/56"
                        }`}
                      >
                        <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#7057d9]" : "bg-forest/16"}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-forest/8 pt-5">
                    <p className="px-2 text-[0.65rem] font-bold uppercase text-ink/38">Care team</p>
                    <div className="mt-3 space-y-3 px-2">
                      {["Admissions", "Therapist", "Family support"].map((item, index) => (
                        <div key={item} className="flex items-center gap-2 text-[0.7rem] text-ink/58">
                          <span className={`h-6 w-6 rounded-full ${index === 0 ? "bg-[#f6c2b4]" : index === 1 ? "bg-[#c8bdf4]" : "bg-[#b8dcc7]"}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="p-3 sm:p-5 lg:p-6">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase text-[#7057d9]">Recovery overview</p>
                      <h2 className="mt-1 text-2xl font-semibold text-forest sm:text-3xl">A calmer plan for the next step</h2>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#e4f3e9] px-3 py-2 text-xs font-bold text-[#28623f]">
                      <CheckCircle2 className="h-4 w-4" />
                      Plan active
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] min-h-[290px] overflow-hidden rounded-md bg-forest sm:min-h-[360px]">
                    <Image
                      src="/images/centre/exterior-day-team.jpeg"
                      alt="Healing Foundation residential care team"
                      fill
                      priority
                      sizes="(min-width: 1024px) 680px, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-7">
                      <div>
                        <p className="text-xs font-bold uppercase text-[#f4d77d]">Healing Foundation</p>
                        <p className="mt-2 max-w-lg text-2xl font-semibold leading-tight sm:text-4xl">
                          Private care. Shared clarity.
                        </p>
                      </div>
                      <Link
                        href="/about"
                        className="inline-flex h-10 w-fit items-center gap-2 rounded-md bg-white px-4 text-xs font-bold text-forest"
                      >
                        View residence
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Today", "Therapy + wellness"],
                      ["Family", "Guidance scheduled"],
                      ["Next", "Progress review"]
                    ].map(([label, value], index) => (
                      <div key={label} className="rounded-md border border-forest/8 bg-white px-4 py-3">
                        <p className={`text-[0.65rem] font-bold uppercase ${index === 0 ? "text-[#7057d9]" : index === 1 ? "text-[#b45a42]" : "text-[#35764e]"}`}>
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-forest sm:text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="border-t border-forest/8 bg-[#efeafd] p-5 lg:border-l lg:border-t-0">
                  <p className="text-xs font-bold uppercase text-[#7057d9]">This week</p>
                  <p className="mt-2 text-xl font-semibold text-[#2d2552]">Care rhythm</p>
                  <div className="mt-6 space-y-5">
                    {[
                      ["Clinical review", "Completed", "bg-[#6e57d9]", "100%"],
                      ["Therapy sessions", "3 of 4", "bg-[#ef896f]", "75%"],
                      ["Wellness routine", "5 of 7", "bg-[#55a476]", "71%"]
                    ].map(([title, state, color, width]) => (
                      <div key={title}>
                        <div className="flex items-center justify-between gap-3 text-xs">
                          <span className="font-semibold text-[#2d2552]">{title}</span>
                          <span className="text-[#2d2552]/55">{state}</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/80">
                          <div className={`h-full rounded-full ${color}`} style={{ width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-[#7057d9]/12 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#7057d9]">
                        <CalendarCheck2 className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[#2d2552]">Next check-in</p>
                        <p className="mt-0.5 text-[0.7rem] text-[#2d2552]/56">Family care review</p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-forest/8 bg-white py-8">
        <div className="container-pad">
          <p className="text-center text-xs font-bold uppercase text-ink/38">One coordinated recovery experience</p>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              [ShieldCheck, "Private admission"],
              [BadgeCheck, "Structured care"],
              [Users, "Family guidance"],
              [Clock3, "24/7 support"]
            ].map(([Icon, label]) => {
              const SignalIcon = Icon as typeof ShieldCheck;
              return (
                <div key={label as string} className="flex items-center justify-center gap-2.5 py-2 text-sm font-semibold text-forest">
                  <SignalIcon className="h-5 w-5 text-[#7057d9]" />
                  {label as string}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf7] py-24 text-forest sm:py-32">
        <div className="container-pad">
          <Reveal className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#7057d9]">Why Healing Foundation</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                Recovery works better when everything works together.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-ink/64 lg:ml-auto lg:text-lg">
              Our residential pathway connects the conversations, routines, people,
              and plans that shape sustainable recovery, without making families
              navigate every decision alone.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {careSignals.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className={`${item.tone} rounded-lg border border-forest/8 p-7 sm:p-9`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-white/80 text-forest shadow-card">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-ink/32">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-3xl font-semibold leading-tight sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-ink/64 sm:text-base">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e2622] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#f1c765]">The care workspace</p>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                A complete toolkit for whole-person recovery.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/62 lg:ml-auto">
              Clinical support is strongest when the environment, family, daily
              routine, and next-step planning reinforce the same goal.
            </p>
          </Reveal>

          <Reveal className="mt-10" delay={0.04}>
            <AnimatedStats stats={metrics} />
          </Reveal>

          <Reveal className="mt-14 overflow-hidden rounded-lg border border-white/12 bg-[#2a332f]" delay={0.06}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f1c765] px-3 py-2 text-xs font-bold text-[#302b1d]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Personalised care
                  </span>
                  <h3 className="mt-7 text-4xl font-semibold leading-tight sm:text-5xl">
                    One plan, shaped around one person.
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/64 sm:text-base">
                    Assessment informs a realistic mix of therapy, wellness,
                    family participation, daily structure, and discharge planning.
                  </p>
                </div>
                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {["Clinical assessment", "Individual therapy", "Family sessions", "Aftercare planning"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/82">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f1c765] text-[#302b1d]">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[480px] bg-[#d9cff8] p-5 sm:p-8">
                <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-md bg-white px-4 py-3 text-xs font-semibold text-[#382d65] shadow-card sm:inset-x-8 sm:top-8">
                  <span className="inline-flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-[#7057d9]" />
                    Care plan overview
                  </span>
                  <span className="rounded-full bg-[#e5f4e9] px-2.5 py-1 text-[#33734d]">Updated today</span>
                </div>
                <div className="absolute inset-x-5 bottom-5 top-20 overflow-hidden rounded-md bg-white shadow-soft sm:inset-x-8 sm:bottom-8 sm:top-24">
                  <Image
                    src="/images/centre/group-therapy-session.jpeg"
                    alt="Guided group recovery session"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161d19]/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase text-[#f1c765]">Today&apos;s focus</p>
                    <p className="mt-2 text-2xl font-semibold">Connection, insight, and practical change.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f2b9aa] py-24 text-[#2b2421] sm:py-28">
        <div className="container-pad">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase text-[#7f3628]">The payoff</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              Less confusion. More confidence in the next step.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 border-t border-[#2b2421]/18 pt-10 lg:grid-cols-3">
            {metrics.map((metric, index) => (
              <Reveal key={metric.value} delay={index * 0.06}>
                <p className="text-7xl font-semibold leading-none sm:text-8xl">{metric.value}</p>
                <p className="mt-5 max-w-xs text-sm font-semibold leading-6 text-[#2b2421]/66">{metric.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] py-24 text-forest sm:py-32">
        <div className="container-pad">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#7057d9]">How care moves</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                From first call to life after care.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-ink/64 lg:ml-auto">
              Every stage has a clear purpose, so residents and families understand
              what is happening now and what comes next.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={treatmentImages[index]}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-[#7057d9] shadow-card">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24 text-forest sm:py-32">
        <div className="container-pad">
          <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#b34f39]">Care pathways</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                The right structure for different recovery needs.
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-md border border-forest/14 px-5 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
            >
              Explore all treatments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((treatment, index) => (
              <Reveal key={treatment.slug} delay={(index % 3) * 0.05}>
                <Link href="/treatments" className="group block">
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${index % 3 === 0 ? "bg-[#e3dafa]" : index % 3 === 1 ? "bg-[#f8d7cd]" : "bg-[#dceee3]"}`}>
                    <div className="absolute inset-5 overflow-hidden rounded-md shadow-card">
                      <Image
                        src={treatmentImages[index]}
                        alt={treatment.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-forest shadow-card transition group-hover:bg-forest group-hover:text-white">
                      <treatment.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight">{treatment.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink/62">{treatment.summary}</p>
                    </div>
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#7057d9] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TreatmentFinder />

      <section className="bg-[#ece8f8] py-24 text-forest sm:py-32">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase text-[#7057d9]">The residence</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                A real place to rest, participate, and rebuild rhythm.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink/64">
                Families should be able to see the environment before they decide.
                These are real spaces at Healing Foundation, designed for privacy,
                therapeutic work, and healthy everyday routine.
              </p>
              <Link
                href="/gallery"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-[#7057d9] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#5e46c7]"
              >
                Explore the residence
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal className="grid grid-cols-2 gap-3" delay={0.06}>
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src="/images/centre/reception-lounge.jpeg"
                  alt="Healing Foundation reception lounge"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-2 text-xs font-bold text-forest shadow-card">
                  A calm arrival
                </div>
              </div>
              {featuredFacilities.slice(0, 2).map((facility) => (
                <div key={facility.title} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-card">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{facility.title}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] py-24 text-forest sm:py-32">
        <div className="container-pad">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-[#b34f39]">Families and residents</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
              Care feels different when people feel understood.
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={0.06}>
            <TestimonialCarousel testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      <LanguageGuide />

      <BrochureCTA />

      <section className="bg-white py-24 text-forest sm:py-32">
        <div className="container-pad">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase text-[#7057d9]">Questions, answered</p>
                <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                  Clear answers before a difficult decision.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-8 text-ink/64">
                  When you are ready, the admissions team can discuss the situation
                  privately and help you understand the safest next step.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-forest"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f0eaff] text-[#7057d9]">
                    <Phone className="h-5 w-5" />
                  </span>
                  {siteConfig.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <FAQAccordion faqs={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7edc9] py-24 text-forest sm:py-32">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-[#765d19]">
                <LockKeyhole className="h-4 w-4" />
                Private admissions support
              </span>
              <h2 className="mt-7 max-w-xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
                Start with one confidential conversation.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-ink/64">
                No pressure and no confusing process. Share what is happening and
                our team will help you understand the available care options.
              </p>
              <div className="mt-9 space-y-4">
                {[
                  "Admissions support available 24/7",
                  "Private assessment and guidance",
                  "Clear family communication"
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
