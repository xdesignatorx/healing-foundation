import {
  ArrowRight,
  Brush,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  Phone,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stars,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/Motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { siteConfig } from "@/data/site";

const serviceCards = [
  ["Digital Strategy", "Offer clarity, audience positioning, competitor scan, and launch roadmap.", Sparkles],
  ["Website Design", "High-impact business websites, landing pages, portfolio sites, and product pages.", Globe2],
  ["Web Development", "Next.js, React, Tailwind, Framer Motion, forms, SEO, and Vercel deployment.", Code2],
  ["UI/UX Design", "Mobile app screens, dashboards, SaaS flows, prototypes, and design systems.", Layers3],
  ["Brand Identity", "Logo direction, visual language, colors, typography, and social brand kits.", Palette],
  ["Marketing Creatives", "Campaign visuals, ad creatives, banners, thumbnails, launch graphics, and reels.", Megaphone],
  ["Graphic Design", "Posters, brochures, decks, flyers, print-ready designs, and business collateral.", Brush],
  ["Motion Assets", "Animated sections, interaction ideas, simple promo videos, and scroll motion.", Play],
  ["Ecommerce", "Storefront design, product pages, offer pages, and conversion-first shopping UI.", ShoppingBag]
] as const;

const manifesto = [
  "Imagination",
  "Implementation",
  "Perspective",
  "Performance",
  "Identity",
  "Motion",
  "Conversion"
];

const approach = [
  {
    title: "We listen before we design.",
    text: "Every project starts by understanding the business, offer, audience, and the exact action the website must create."
  },
  {
    title: "We build a memorable direction.",
    text: "Typography, color, hierarchy, movement, and copy come together so the brand feels intentional, not generic."
  },
  {
    title: "We ship with discipline.",
    text: "Responsive QA, SEO basics, Vercel deployment, domain guidance, and final polish are handled before launch."
  }
];

const stats = [
  ["09+", "creative service lines"],
  ["100%", "responsive-first layouts"],
  ["24hr", "fast project response"],
  ["Udyam", "registered studio"]
];

const faqs = [
  {
    question: "Is DesignstryX only a design agency?",
    answer:
      "No. DesignstryX handles both design and implementation: UI/UX, brand identity, frontend development, marketing creatives, ecommerce pages, and Vercel deployment."
  },
  {
    question: "Can you build a website from only a reference link?",
    answer:
      "Yes. A reference can be used for direction, but the final website is designed as an original custom experience for your brand, audience, and offer."
  },
  {
    question: "Do you provide domain and hosting support?",
    answer:
      "Yes. DesignstryX can guide domain connection, Vercel deployment, DNS setup, and launch checks. Domain purchase and third-party hosting fees are separate."
  },
  {
    question: "Is DesignstryX registered?",
    answer:
      "Yes. DesignstryX is Udyam registered. Certificate details can be added to the website later as a trust section."
  }
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#070707] pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,255,101,0.2),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(116,91,255,0.28),transparent_30%),linear-gradient(135deg,#070707_0%,#121212_45%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#d5ff65]/10 to-transparent" />
        <div className="container-pad relative grid min-h-[calc(100vh-7rem)] gap-10 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal className="pb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#d5ff65] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              DesignstryX digital studio
            </span>
            <h1 className="mt-7 max-w-5xl text-[4.7rem] font-black uppercase leading-[0.78] tracking-[-0.09em] sm:text-[7rem] lg:text-[9.4rem]">
              Digital
              <span className="block text-[#d5ff65]">Distinction</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
              We turn ambitious ideas into premium websites, brand systems, interfaces, and marketing assets that feel sharp, modern, and built to convert.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#d5ff65] px-7 text-sm font-black text-[#070707] transition hover:-translate-y-1 hover:bg-white"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/18 px-7 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#070707]"
              >
                <Phone className="h-4 w-4" />
                Talk to Bharat
              </a>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.08}>
            <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#745bff] blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#f4f0e6] p-5 text-[#080808]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#080808] px-4 py-2 text-xs font-black uppercase text-[#d5ff65]">Live build board</span>
                  <span className="text-xs font-black text-[#080808]/40">DX-01</span>
                </div>
                <div className="mt-10 grid gap-3">
                  {[
                    ["Brand pulse", "92%"],
                    ["Conversion clarity", "88%"],
                    ["Launch readiness", "96%"]
                  ].map(([label, width]) => (
                    <div key={label} className="rounded-2xl bg-white p-4 shadow-card">
                      <div className="flex items-center justify-between text-sm font-black">
                        <span>{label}</span>
                        <span className="text-[#745bff]">{width}</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[#080808]/8">
                        <div className="h-full rounded-full bg-[#745bff]" style={{ width }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#d5ff65] p-5">
                    <MousePointerClick className="h-6 w-6" />
                    <p className="mt-8 text-2xl font-black leading-none tracking-[-0.04em]">Clickable experiences</p>
                  </div>
                  <div className="rounded-2xl bg-[#ff875f] p-5">
                    <Zap className="h-6 w-6" />
                    <p className="mt-8 text-2xl font-black leading-none tracking-[-0.04em]">Fast visual impact</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#080808] bg-[#d5ff65] py-6 text-[#080808]">
        <div className="animate-marquee flex w-max gap-8 text-2xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
          {[...manifesto, ...manifesto, ...manifesto].map((word, index) => (
            <span key={`${word}-${index}`} className="inline-flex items-center gap-8">
              {word}
              <Stars className="h-6 w-6" />
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#f4f0e6] py-24 text-[#080808] sm:py-32">
        <div className="container-pad">
          <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#745bff]">What we deliver</p>
              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl">
                Services with serious range.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#080808]/62 lg:ml-auto">
              One studio for design, code, identity, campaign visuals, motion, and deployment. Pick one service or build a complete launch system.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#080808] bg-[#080808] md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(([title, text, Icon], index) => (
              <Reveal key={title} delay={(index % 3) * 0.04}>
                <article className="group min-h-80 bg-[#f4f0e6] p-7 transition hover:bg-[#080808] hover:text-white">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#080808] text-[#d5ff65] transition group-hover:bg-[#d5ff65] group-hover:text-[#080808]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-black text-[#080808]/18 transition group-hover:text-white/24">0{index + 1}</span>
                  </div>
                  <h3 className="mt-16 text-4xl font-black tracking-[-0.06em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#080808]/62 transition group-hover:text-white/62">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#080808] py-24 text-white sm:py-32">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d5ff65]">Our approach</p>
              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl">
                We don&apos;t decorate. We direct attention.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[2rem] border border-white/12 bg-white/8 p-7 backdrop-blur">
                <p className="text-xl font-black leading-8">
                  DesignstryX is built for clients who want their digital presence to feel current, credible, and memorable without wasting weeks in confusion.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {["Udyam registered", "Fast response", "Vercel ready", "Mobile-first"].map((item) => (
                    <p key={item} className="flex items-center gap-2 rounded-xl bg-white/8 px-3 py-3 text-xs font-bold text-white/72">
                      <ShieldCheck className="h-4 w-4 text-[#d5ff65]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="min-h-80 rounded-[2rem] border border-white/12 bg-white/[0.04] p-8">
                  <span className="text-7xl font-black tracking-[-0.08em] text-[#d5ff65]">0{index + 1}</span>
                  <h3 className="mt-12 text-4xl font-black leading-none tracking-[-0.06em]">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#745bff] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d5ff65]">Why DesignstryX</p>
            <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl">
              Big agency energy, direct creator focus.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/20 bg-white/20 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <Reveal key={value}>
                <div className="bg-[#745bff] p-8">
                  <p className="text-6xl font-black tracking-[-0.08em] text-[#d5ff65]">{value}</p>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-white/70">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f4f0e6] py-24 text-[#080808] sm:py-32">
        <div className="container-pad">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#745bff]">Launch process</p>
            <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl">
              From idea to live link.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {[
              ["01", "Brief", "References, goals, pages, content needs, target audience."],
              ["02", "Direction", "Hero concept, visual language, services, CTA structure."],
              ["03", "Build", "Responsive development, animations, forms, metadata, QA."],
              ["04", "Launch", "GitHub push, Vercel deploy, domain guidance, final checks."]
            ].map(([number, title, text]) => (
              <Reveal key={title}>
                <div className="rounded-[2rem] border border-[#080808] bg-white p-7 shadow-card">
                  <p className="text-5xl font-black tracking-[-0.07em] text-[#745bff]">{number}</p>
                  <h3 className="mt-12 text-3xl font-black tracking-[-0.05em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#080808]/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d5ff65] py-24 text-[#080808] sm:py-32">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.24em]">Ready?</p>
              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-8xl">
                Let&apos;s make your brand look impossible to ignore.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-[2rem] bg-[#080808] p-7 text-white shadow-soft">
                <div className="space-y-3">
                  <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-black transition hover:bg-[#d5ff65] hover:text-[#080808]">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp {siteConfig.phone}
                  </a>
                  <a href={siteConfig.secondaryPhoneHref} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-black transition hover:bg-[#d5ff65] hover:text-[#080808]">
                    <Phone className="h-5 w-5" />
                    Call {siteConfig.secondaryPhone}
                  </a>
                  <a href={siteConfig.emailHref} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-black transition hover:bg-[#d5ff65] hover:text-[#080808]">
                    <Mail className="h-5 w-5" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#080808] sm:py-32">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#745bff]">FAQ</p>
            <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em]">
              Quick answers.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
