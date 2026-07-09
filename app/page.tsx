import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Users
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FloatIn, Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  faqs,
  processSteps,
  siteConfig,
  testimonials,
  treatments
} from "@/data/site";

const calmPrinciples = [
  {
    title: "Private by design",
    text: "A confidential first call, discreet admission guidance, and calm family coordination.",
    icon: ShieldCheck
  },
  {
    title: "Structured, not harsh",
    text: "Clear daily routines that support therapy, rest, movement, reflection, and accountability.",
    icon: CalendarCheck
  },
  {
    title: "Human care first",
    text: "Recovery is supported through conversation, family education, and practical aftercare.",
    icon: HeartHandshake
  }
];

const careApps = [
  "Alcohol Recovery",
  "Drug De-addiction",
  "Dual Diagnosis",
  "Family Therapy",
  "Aftercare",
  "Mindfulness",
  "Stress Care",
  "Habit Recovery"
];

const environmentNotes = [
  {
    title: "Rest",
    text: "Rooms and residential areas designed for sleep, stability, and privacy.",
    image: "/images/centre/residential-dorm.jpeg",
    icon: BedDouble
  },
  {
    title: "Therapy",
    text: "Quiet spaces for counselling, assessment, group work, and family conversations.",
    image: "/images/centre/counselling-room.jpeg",
    icon: Users
  },
  {
    title: "Routine",
    text: "Movement, yoga, shared learning, and daily rhythm to help recovery feel livable.",
    image: "/images/centre/wellness-yoga-hall.jpeg",
    icon: Leaf
  }
];

export default function Home() {
  const featuredTreatments = treatments.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F4F1E8] pt-24 text-ink">
        <div className="container-pad min-h-screen py-10">
          <FloatIn className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-forest shadow-card">
              <Sparkles size={14} className="text-gold" />
              Healing Foundation Wellness Residence
            </div>
            <h1 className="mx-auto mt-8 max-w-5xl font-serif text-6xl font-semibold leading-[0.9] text-forest sm:text-8xl lg:text-[9.5rem]">
              Care,
              <span className="block italic text-gold">softened.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-forest/72">
              A private rehabilitation centre for families who need recovery support that feels clear, humane, and steady from the very first conversation.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="forest-button">
                Begin private enquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-forest/20 bg-white/70 px-7 text-sm font-bold text-forest shadow-card transition hover:-translate-y-0.5 hover:border-gold"
              >
                <Phone size={16} />
                Call now
              </a>
            </div>
          </FloatIn>

          <div className="relative mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[0.92fr_1.16fr_0.92fr] lg:items-center">
            <Reveal className="order-2 rounded-[2rem] border border-forest/10 bg-white p-3 shadow-soft lg:order-1 lg:rotate-[-3deg]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem]">
                <Image
                  src="/images/centre/front-sign.jpeg"
                  alt="Healing Foundation sign outside the centre"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-4 text-sm font-bold text-forest">Actual centre signage</p>
            </Reveal>

            <Reveal className="order-1 rounded-[2.4rem] border border-forest/10 bg-white p-3 shadow-soft lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/centre/exterior-day-team.jpeg"
                  alt="Healing Foundation residence exterior"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 px-3 py-4">
                {[
                  ["24/7", "support"],
                  ["1:1", "planning"],
                  ["Private", "setting"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-cream p-3 text-center">
                    <p className="font-serif text-2xl font-semibold text-forest">{value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/55">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="order-3 rounded-[2rem] border border-forest/10 bg-white p-3 shadow-soft lg:rotate-[3deg]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem]">
                <Image
                  src="/images/centre/counselling-room.jpeg"
                  alt="Private counselling room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-4 text-sm font-bold text-forest">Private counselling space</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-forest py-5 text-pearl">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...careApps, ...careApps, ...careApps].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-2 inline-flex items-center gap-3 rounded-full border border-pearl/15 bg-pearl/10 px-5 py-3 text-sm font-bold"
            >
              <CheckCircle2 className="h-4 w-4 text-gold" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F1E8] py-24">
        <div className="container-pad text-center">
          <Reveal>
            <p className="eyebrow">A Different Kind Of Care</p>
            <h2 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[1.02] text-forest sm:text-7xl">
              We refuse to make recovery feel cold, confusing, or out of reach.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-forest/70">
              Healing Foundation brings structure and compassion into one residential experience, so families can move from urgency to a calmer next step.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad">
          <div className="grid gap-5 md:grid-cols-3">
            {calmPrinciples.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 font-serif text-4xl font-semibold leading-tight text-forest">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-forest/68">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111F18] py-24 text-pearl">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-sand">Treatment</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-[1.02] sm:text-7xl">
              Support for addiction, mental wellness, and family healing.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-pearl/70">
              Programs are shaped through assessment, personal history, family context, and realistic aftercare planning.
            </p>
            <Link href="/treatments" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#D8BB7D]">
              Explore programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {featuredTreatments.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="rounded-[1.5rem] border border-pearl/12 bg-pearl/8 p-5 backdrop-blur-xl transition hover:border-gold/50"
              >
                <item.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-pearl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pearl/64">{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1E8] py-24">
        <div className="container-pad">
          <SectionHeading
            eyebrow="The Residence"
            title="A calm setting for rest, therapy, and daily rhythm."
            copy="Real photographs from the centre help families understand the environment before they make a call."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {environmentNotes.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="group overflow-hidden rounded-[2rem] border border-forest/10 bg-white p-3 shadow-soft"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <item.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-serif text-4xl font-semibold text-forest">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-forest/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="premium-link">
              View centre gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] shadow-soft">
              <Image
                src="/images/centre/outdoor-activity.jpeg"
                alt="Outdoor activity at Healing Foundation"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 text-pearl">
                <p className="eyebrow text-sand">Daily Life</p>
                <h2 className="mt-3 max-w-xl font-serif text-5xl font-semibold leading-[1.02]">
                  Recovery also needs ordinary, healthy days.
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05} className="rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-card">
                  <div className="flex gap-5">
                    <span className="font-serif text-5xl font-semibold text-gold">0{index + 1}</span>
                    <span>
                      <span className="block font-serif text-3xl font-semibold text-forest">{step.title}</span>
                      <span className="mt-2 block text-sm leading-7 text-forest/66">{step.text}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111F18] py-24 text-pearl">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="eyebrow text-sand">Trust</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold leading-[1.02] sm:text-7xl">
                Small details make families feel safer.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={index * 0.08}
                  className="rounded-[1.5rem] border border-pearl/16 bg-pearl/10 p-6 backdrop-blur-xl"
                >
                  <Users className="h-7 w-7 text-gold" />
                  <p className="mt-5 text-sm leading-7 text-pearl/78">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-5 font-semibold text-pearl">{item.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand">{item.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1E8] py-24">
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

      <section className="bg-cream py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
              <SunMedium size={22} />
            </div>
            <p className="eyebrow mt-6">Begin Privately</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-[1.02] text-forest sm:text-7xl">
              A calmer first step is available today.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-forest/70">
              Share only what feels necessary. The admissions team can help you understand suitability, immediate steps, and residential care options.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
