import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import { SectionHeading } from "@/components/SectionHeading";
import {
  faqs,
  hero,
  processSteps,
  siteConfig,
  testimonials,
  treatments,
  trustPoints
} from "@/data/site";

const careModules = [
  "Private enquiry",
  "Assessment",
  "Detox guidance",
  "Residential care",
  "Group therapy",
  "Family sessions",
  "Wellness routine",
  "Aftercare"
];

const featureStories = [
  {
    kicker: "01 / Admission",
    title: "A private first conversation before any decision is made.",
    text: "Families can speak with an admissions coordinator, understand suitability, and plan the next step with complete discretion.",
    image: "/images/centre/consultation-office.jpeg",
    icon: ShieldCheck
  },
  {
    kicker: "02 / Daily Rhythm",
    title: "Structure that feels calm, not clinical.",
    text: "Therapy, group sessions, wellness practices, rest, and accountability come together in a predictable residential routine.",
    image: "/images/centre/group-therapy-session.jpeg",
    icon: Stethoscope
  },
  {
    kicker: "03 / Residence",
    title: "A real place for recovery, not a stock-photo promise.",
    text: "Actual centre photography shows the rooms, common areas, counselling spaces, and activity zones residents use every day.",
    image: "/images/centre/front-sign.jpeg",
    icon: HeartHandshake
  }
];

const visualGallery = [
  { title: "Residential building", image: "/images/centre/exterior-day-team.jpeg" },
  { title: "Counselling room", image: "/images/centre/counselling-room.jpeg" },
  { title: "Wellness hall", image: "/images/centre/wellness-yoga-hall.jpeg" },
  { title: "Residential dormitory", image: "/images/centre/residential-dorm.jpeg" },
  { title: "Outdoor activity", image: "/images/centre/outdoor-activity.jpeg" }
];

export default function Home() {
  const featuredTreatments = treatments.slice(0, 8);

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-[#09140f] pt-20 text-pearl">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.image}
            alt="Healing Foundation residential wellness centre at night"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(199,168,107,0.28),transparent_22rem),linear-gradient(180deg,rgba(9,20,15,0.50)_0%,rgba(9,20,15,0.94)_76%)]" />
        </div>

        <div className="container-pad flex min-h-[calc(100vh-5rem)] flex-col justify-between py-10">
          <FloatIn className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-pearl/20 bg-pearl/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sand backdrop-blur-xl">
              <Sparkles size={14} />
              Healing Foundation Care Edition
            </div>
            <h1 className="mt-8 font-serif text-[18vw] font-semibold uppercase leading-[0.76] tracking-[-0.06em] text-pearl sm:text-[15vw] lg:text-[11rem]">
              Begin
              <span className="block text-sand">Again</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-pearl/76 sm:text-xl">
              A premium residential rehabilitation experience designed around privacy, structure, family guidance, and real human steadiness.
            </p>
          </FloatIn>

          <div className="grid gap-4 pb-8 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:items-end">
            <Reveal className="rounded-lg border border-pearl/16 bg-pearl/10 p-5 backdrop-blur-xl">
              <p className="eyebrow text-sand">Admissions</p>
              <p className="mt-3 font-serif text-3xl font-semibold">24/7 private support</p>
              <a href={siteConfig.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </Reveal>

            <Reveal className="relative min-h-[260px] overflow-hidden rounded-lg border border-pearl/16 bg-pearl/10 shadow-soft backdrop-blur-xl">
              <Image
                src="/images/centre/front-sign.jpeg"
                alt="Healing Foundation signage and residential centre"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="eyebrow text-sand">Actual Centre Photography</p>
                <p className="mt-2 max-w-xl font-serif text-4xl font-semibold leading-tight">
                  Real spaces for structured recovery.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-pearl/16 bg-pearl/10 p-5 backdrop-blur-xl">
                  <p className="font-serif text-4xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-pearl/62">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gold py-4 text-ink">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...careModules, ...careModules, ...careModules].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-2 inline-flex items-center gap-3 rounded-full border border-ink/15 bg-cream/40 px-5 py-3 text-sm font-black uppercase tracking-[0.16em]"
            >
              <CheckCircle2 className="h-4 w-4" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <SectionHeading
              eyebrow="Why Families Trust Us"
              title="A high-touch care experience, explained without noise."
              copy="The homepage is now built like an editorial launch: big promises are replaced by clear structure, visible proof, and fast admission actions."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <Reveal key={item.title} className="rounded-lg border border-forest/10 bg-white p-6 shadow-card">
                  <item.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-forest/68">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1d16] py-24 text-pearl">
        <div className="container-pad">
          <p className="eyebrow text-sand">Care System</p>
          <h2 className="mt-4 max-w-5xl font-serif text-6xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            Three parts. One calmer path forward.
          </h2>
          <div className="mt-14 grid gap-5">
            {featureStories.map((story, index) => (
              <Reveal
                key={story.title}
                delay={index * 0.06}
                className="grid overflow-hidden rounded-lg border border-pearl/12 bg-pearl/8 shadow-soft backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div className={`relative min-h-[360px] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <story.icon className="h-9 w-9 text-gold" />
                  <p className="eyebrow mt-8 text-sand">{story.kicker}</p>
                  <h3 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.02] sm:text-5xl">
                    {story.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-pearl/70">{story.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-pad">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Programs"
              title="Treatment pathways, arranged for fast understanding."
              copy="Families can scan the available support quickly, then discuss suitability with the admissions team."
            />
            <Link href="/treatments" className="forest-button w-fit">
              View all treatments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTreatments.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="group rounded-lg border border-forest/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft"
              >
                <item.icon className="h-8 w-8 text-gold transition group-hover:scale-110" />
                <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-forest/66">{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-24 text-pearl">
        <div className="container-pad">
          <SectionHeading
            eyebrow="The Residence"
            title="A visual look inside Healing Foundation."
            copy="Large, direct photography helps families see the environment before they call."
            tone="dark"
            align="center"
          />
          <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
            {visualGallery.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="group relative h-[520px] min-w-[78vw] overflow-hidden rounded-lg shadow-soft sm:min-w-[420px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 420px, 78vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">0{index + 1}</p>
                  <h3 className="mt-3 font-serif text-4xl font-semibold">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Recovery Journey</p>
            <h2 className="mt-4 font-serif text-6xl font-semibold leading-[0.98] tracking-[-0.03em] text-forest">
              From first call to aftercare.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-forest/70">
              A simple pathway helps families move from uncertainty to informed action.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05} className="rounded-lg bg-white p-6 shadow-card">
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
      </section>

      <section className="relative overflow-hidden bg-forest py-24 text-pearl">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/centre/exterior-day-team.jpeg"
            alt="Healing Foundation team outside the residence"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-pad relative">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="eyebrow text-sand">Families Say</p>
              <h2 className="mt-4 font-serif text-6xl font-semibold leading-[0.98] tracking-[-0.03em]">
                Trust is built in the details families remember.
              </h2>
            </div>
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
            <h2 className="mt-3 font-serif text-6xl font-semibold leading-[0.98] tracking-[-0.03em]">
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
