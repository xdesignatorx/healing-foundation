import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FloatIn, Reveal } from "@/components/Motion";
import { RecoveryTimeline } from "@/components/RecoveryTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import {
  facilities,
  faqs,
  hero,
  processSteps,
  siteConfig,
  testimonials,
  treatments,
  trustPoints
} from "@/data/site";

const editionCards = [
  {
    title: "Private admission planning",
    text: "A discreet first conversation, suitability guidance, and a calm next-step plan for the family.",
    image: "/images/centre/consultation-office.jpeg",
    icon: ShieldCheck
  },
  {
    title: "Therapy-led daily rhythm",
    text: "Individual therapy, group work, wellness routines, and guided accountability across the day.",
    image: "/images/centre/group-therapy-session.jpeg",
    icon: Stethoscope
  },
  {
    title: "Residential recovery setting",
    text: "A quiet living environment designed to make structure feel humane, dignified, and sustainable.",
    image: "/images/centre/reception-lounge.jpeg",
    icon: HeartHandshake
  }
];

const launchHighlights = [
  "Confidential 24/7 admissions",
  "Family-inclusive recovery support",
  "Individual care planning",
  "Residential wellness routines",
  "Aftercare continuity"
];

const careModules = [
  "Admission guidance",
  "Clinical assessment",
  "Residential routine",
  "Group therapy",
  "Family sessions",
  "Wellness practices",
  "Relapse prevention",
  "Aftercare planning"
];

export default function Home() {
  const featuredTreatments = treatments.slice(0, 6);

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-ink pt-20 text-pearl">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.image}
            alt="Healing Foundation residential wellness centre at night"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,53,42,0.98)_0%,rgba(23,53,42,0.78)_46%,rgba(23,53,42,0.24)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cream via-cream/50 to-transparent" />
        </div>

        <div className="container-pad flex min-h-[calc(100vh-5rem)] flex-col justify-between gap-12 py-10 sm:py-14">
          <div className="grid gap-10 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <FloatIn className="max-w-6xl">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-pearl/25 bg-pearl/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sand backdrop-blur-xl">
                <Sparkles size={14} />
                Healing Foundation Care Experience
              </div>
              <h1 className="mt-7 max-w-5xl font-serif text-5xl font-semibold leading-[0.92] text-balance sm:text-7xl lg:text-8xl xl:text-9xl">
                Recovery care with quiet confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-pearl/78 sm:text-xl">
                {hero.copy} Built for families who need privacy, clarity, and a residential setting that feels steady from the first call.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="gold-button">
                  Start confidential enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-pearl/40 px-7 text-sm font-bold text-pearl transition duration-300 hover:-translate-y-0.5 hover:bg-pearl hover:text-forest"
                >
                  <Phone size={16} />
                  Call admissions
                </a>
              </div>
            </FloatIn>

            <Reveal className="hidden lg:block">
              <div className="grid gap-4 rounded-lg border border-pearl/20 bg-pearl/10 p-4 shadow-soft backdrop-blur-2xl">
                <div className="relative min-h-[280px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/centre/front-sign.jpeg"
                    alt="Healing Foundation residence and centre signage"
                    fill
                    priority
                    sizes="38vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="eyebrow text-sand">Residential Program</p>
                    <p className="mt-2 font-serif text-3xl font-semibold leading-tight">
                      Private care, visible structure.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-pearl/14 bg-ink/50 p-4">
                      <p className="font-serif text-3xl font-semibold text-gold">{stat.value}</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-pearl/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="grid gap-3 pb-10 sm:grid-cols-2 lg:grid-cols-5">
            {launchHighlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-pearl/20 bg-pearl/10 px-4 py-4 text-sm font-semibold text-pearl/86 backdrop-blur-xl"
              >
                <BadgeCheck className="mb-3 h-5 w-5 text-gold" />
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-6">
        <div className="container-pad">
          <div className="grid overflow-hidden rounded-lg border border-forest/10 bg-ink text-pearl shadow-soft lg:grid-cols-[0.84fr_1.16fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="eyebrow text-sand">Now open for admissions</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                A calmer way to move from concern to action.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-pearl/72">
                The experience is designed to help families understand the centre quickly: what support exists, how care begins, and who to contact privately.
              </p>
            </div>
            <div className="grid border-t border-pearl/10 lg:grid-cols-3 lg:border-l lg:border-t-0">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="border-pearl/10 p-6 lg:border-l first:lg:border-l-0">
                  <p className="font-serif text-5xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-pearl/64">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-pad">
          <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
            <SectionHeading
              eyebrow="Experience"
              title="Built like a premium care edition."
              copy="Each section introduces one reason to trust the centre, then lets the photographs and admission actions do the heavier work."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <Reveal key={item.title} className="rounded-lg border border-forest/10 bg-white p-5 shadow-card">
                  <item.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-forest/68">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {editionCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 0.08}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <card.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-forest">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-forest/68">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-10 text-pearl">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...careModules, ...careModules].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-2 inline-flex items-center gap-3 rounded-full border border-pearl/12 bg-pearl/8 px-5 py-3 text-sm font-bold text-pearl/78"
            >
              <CheckCircle2 className="h-4 w-4 text-gold" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-24 text-pearl">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-sand">Programs</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl">
              Treatment pathways that feel clear before they feel clinical.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-pearl/72">
              Families can scan the core options quickly, then speak privately with a coordinator for the right fit.
            </p>
            <Link href="/treatments" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#D8BB7D]">
              Explore treatments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {featuredTreatments.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="rounded-lg border border-pearl/12 bg-pearl/8 p-5 backdrop-blur-xl transition hover:border-gold/50 hover:bg-pearl/12"
              >
                <item.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-pearl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pearl/64">{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Facilities"
            title="Real spaces, not stock promises."
            copy="The centre photographs become the visual proof: residential rooms, counselling spaces, common areas, and wellness routines."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 4).map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className={`group relative overflow-hidden rounded-lg shadow-card ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={index === 0 ? "relative min-h-[520px]" : "relative min-h-[250px]"}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/22 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-pearl">
                    <h3 className="font-serif text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-pearl/76">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="eyebrow">Care Journey</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-[1.02] text-forest sm:text-6xl">
              From first call to aftercare, the path is visible.
            </h2>
            <div className="mt-8 grid gap-3">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05} className="rounded-lg border border-forest/10 bg-white p-5 shadow-card">
                  <div className="flex gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-serif text-2xl font-semibold text-forest">{step.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-forest/66">{step.text}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-ink p-5 text-pearl shadow-soft">
            <RecoveryTimeline />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-24 text-pearl">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/centre/exterior-day-team.jpeg"
            alt="Healing Foundation care team outside the residence"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-pad relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-sand">Families Say</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Trust is built in the details families remember.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.08}
                className="rounded-lg border border-pearl/16 bg-pearl/10 p-6 backdrop-blur-xl"
              >
                <Users className="h-7 w-7 text-gold" />
                <p className="mt-5 text-sm leading-7 text-pearl/78">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-5 font-semibold text-pearl">{item.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand">{item.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              title="Answers before the first call."
              copy="If the situation is urgent or sensitive, reach out directly. A coordinator can help you understand options privately."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="forest-button">
                Contact admissions
              </Link>
              <a href={siteConfig.whatsapp} className="gold-button">
                WhatsApp now
              </a>
            </div>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="bg-ink py-24 text-pearl">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
              <CalendarCheck size={22} />
            </div>
            <p className="eyebrow mt-6 text-sand">Confidential Support</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Speak with an admissions coordinator today.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-pearl/70">
              Share only what feels necessary. We will help you understand suitability, immediate steps, and what a residential recovery plan can look like.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
