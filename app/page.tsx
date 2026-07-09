import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { AnimatedStats } from "@/components/AnimatedStats";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FloatIn, Reveal } from "@/components/Motion";
import { RecoveryTimeline } from "@/components/RecoveryTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { StorySection } from "@/components/StorySection";
import {
  facilities,
  faqs,
  hero,
  inclusions,
  siteConfig,
  testimonials,
  treatments,
  trustPoints
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.image}
            alt="Quiet premium wellness residence surrounded by nature"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-forest/70 to-forest/20" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-cream to-transparent" />
        </div>

        <div className="container-pad grid min-h-[840px] items-center gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <FloatIn className="max-w-3xl text-pearl">
            <div className="inline-flex items-center gap-2 rounded-full border border-pearl/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sand backdrop-blur">
              <ShieldCheck size={14} />
              {hero.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.98] text-balance sm:text-7xl lg:text-8xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-pearl/80 sm:text-xl">
              {hero.copy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="gold-button">
                Start a confidential enquiry
              </Link>
              <a
                href={siteConfig.whatsapp}
                className="inline-flex h-12 items-center justify-center rounded-full border border-pearl/40 px-7 text-sm font-bold text-pearl transition duration-300 hover:-translate-y-0.5 hover:bg-pearl hover:text-forest"
              >
                WhatsApp admissions
              </a>
            </div>
          </FloatIn>

          <Reveal className="hidden lg:block">
            <div className="glass-panel p-5">
              <AnimatedStats stats={hero.stats} />
              <div className="mt-4 rounded-lg border border-white/10 bg-forest/80 p-7 text-pearl shadow-soft">
                <p className="font-serif text-4xl font-semibold">A calmer first step.</p>
                <p className="mt-3 text-sm leading-7 text-pearl/70">
                  Speak privately with a care coordinator about treatment options, suitability, and next steps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-20 pb-8 lg:hidden">
        <AnimatedStats stats={hero.stats} />
      </section>

      <section className="container-pad relative z-10 pb-20 lg:-mt-20">
        <div className="grid gap-5 md:grid-cols-3">
          {trustPoints.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="luxury-card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                <item.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-semibold text-forest">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-forest/70">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pearl/70 py-24">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Treatment Philosophy"
              title="Recovery care designed around privacy, structure, and emotional safety."
              copy="Our programs are designed to support each resident through clear routines, therapeutic depth, restorative spaces, and a care team that understands the sensitivity of asking for help."
            />
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-lg border border-forest/10 bg-white/70 p-4 shadow-card transition hover:-translate-y-0.5 hover:border-gold/30"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-semibold text-forest">{item.title}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative min-h-[520px] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
              alt="Calm wellness therapy space"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/30 bg-white/20 p-5 text-pearl backdrop-blur-xl">
              <p className="font-serif text-3xl font-semibold">Quiet structure, gentle accountability.</p>
              <p className="mt-2 text-sm leading-6 text-pearl/80">
                Premium care means the environment supports the therapeutic work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-pad py-24">
        <SectionHeading
          eyebrow="Programs"
          title="Personalized treatment for addiction, mental wellness, and family healing."
          copy="Each pathway is shaped by assessment, clinical need, resident readiness, and long-term recovery goals."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="luxury-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-soft"
            >
              <item.icon className="h-9 w-9 text-gold transition group-hover:scale-110" />
              <h3 className="mt-6 font-serif text-3xl font-semibold text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/70">{item.summary}</p>
              <Link href="/treatments" className="premium-link mt-6 text-sm">
                Learn more <ArrowRight size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <StorySection />

      <section className="bg-deep py-24 text-pearl">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Care Journey"
            title="A clear admission path for families who need guidance now."
            copy="From the first call to aftercare, the process is calm, transparent, and centered on safety."
            tone="dark"
          />
          <RecoveryTimeline />
        </div>
      </section>

      <section className="container-pad py-24">
        <SectionHeading
          eyebrow="Facilities"
          title="A private wellness setting that supports rest and renewal."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <Reveal
              key={item.title}
              className="group overflow-hidden rounded-lg bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-3xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-forest/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pearl py-24">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Families Say"
            title="Trust is built through clarity, warmth, and consistent care."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.08}
                className="luxury-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <Quote className="h-8 w-8 fill-gold/20 text-gold" />
                <p className="mt-5 text-lg leading-8 text-forest/80">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 font-semibold text-forest">{item.name}</p>
                <p className="text-sm text-gold">{item.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad grid gap-10 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Common Questions"
            title="Answers before the first call."
            copy="If the situation is urgent or sensitive, reach out directly. A coordinator can help you understand options privately."
          />
          <Link href="/contact" className="premium-link mt-8 text-sm">
            Contact admissions <ArrowRight size={16} />
          </Link>
        </div>
        <FAQAccordion faqs={faqs} />
      </section>

      <section className="relative overflow-hidden bg-forest py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(199,168,107,0.26),transparent_28rem)]" />
        <div className="container-pad relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-pearl">
            <p className="eyebrow text-sand">Confidential Support</p>
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
