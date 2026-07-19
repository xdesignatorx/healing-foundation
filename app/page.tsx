import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { agencyServices } from "@/data/services";
import { siteConfig } from "@/data/site";

const metrics = [
  ["LIVE CTR", "8.4%", "+2.1% vs last week", "left-[3%] top-[43%]"],
  ["LEADS TODAY", "342", "+18 in last hour", "right-[4%] top-[49%]"],
  ["ROAS", "4.8x", "Optimizing", "left-[5%] bottom-[4%]"],
  ["CAMPAIGNS", "847", "AI assisted", "right-[5%] bottom-[7%]"]
] as const;

const process = [
  ["01", "Decode", "We map your offer, audience, competitors, pain points, and conversion goal."],
  ["02", "Design", "We craft the digital direction: hero, copy rhythm, UI mood, service flow, and trust points."],
  ["03", "Develop", "We build fast responsive pages with motion, metadata, forms, and production-ready code."],
  ["04", "Deploy", "We push live on Vercel, test key flows, and guide domain and launch settings."]
];

const faqs = [
  {
    question: "Is this inspired by World of Digital Dudes?",
    answer:
      "The visual direction is inspired by futuristic digital agency energy, but the layout, copy, structure, colors, and content are customized for DesignstryX."
  },
  {
    question: "What does DesignstryX deliver?",
    answer:
      "DesignstryX delivers website design, web development, UI/UX systems, branding, marketing creatives, graphics, motion assets, ecommerce UI, and no-code MVP experiences."
  },
  {
    question: "Can you make the full project live?",
    answer:
      "Yes. DesignstryX can handle design, development, GitHub push, Vercel deployment, basic SEO metadata, forms, and domain guidance."
  },
  {
    question: "Is DesignstryX registered?",
    answer:
      "Yes. DesignstryX is Udyam registered. The certificate can be uploaded later as an official trust section."
  }
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#05060d] pt-28 text-white">
        <div className="network-grid absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(23,91,255,0.20),transparent_34%),radial-gradient(circle_at_20%_25%,rgba(255,112,0,0.16),transparent_28%),linear-gradient(180deg,rgba(5,6,13,0)_0%,#05060d_92%)]" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        {metrics.map(([label, value, sub, position]) => (
          <div
            key={label}
            className={`pointer-events-none absolute hidden rounded-2xl border border-white/10 bg-[#10111d]/80 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl xl:block ${position}`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/52">{label}</p>
            <p className="mt-3 text-2xl font-black">{value}</p>
            <p className="mt-1 font-mono text-xs text-[#00f0a8]">{sub}</p>
          </div>
        ))}

        <div className="absolute right-[4%] top-[13%] hidden space-y-3 xl:block">
          <div className="rounded-lg border border-[#00f0a8]/25 bg-[#00f0a8]/5 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#00f0a8]">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#00f0a8] shadow-[0_0_18px_#00f0a8]" />
            AI system online
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-white/60">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#ff7a00] shadow-[0_0_18px_#ff7a00]" />
            Trusted build workflow
          </div>
        </div>

        <div className="container-pad relative flex min-h-[calc(100vh-7rem)] items-center justify-center pb-16">
          <Reveal className="mx-auto max-w-6xl text-center">
            <div className="mx-auto mb-12 w-fit rounded-md border border-[#0d65ff]/35 bg-[#0d65ff]/10 px-5 py-3 font-mono text-sm text-[#0d65ff] shadow-[0_0_45px_rgba(13,101,255,0.18)]">
              AI&gt; Designing brand systems, websites, campaigns... |
            </div>

            <h1 className="mx-auto max-w-7xl text-[4.5rem] font-black leading-[0.95] tracking-[-0.075em] sm:text-[7rem] lg:text-[8.8rem]">
              The Next-Gen
              <span className="block">Creative</span>
              <span className="block bg-gradient-to-r from-[#ff7a00] via-[#d3a17d] to-[#0d65ff] bg-clip-text text-transparent">
                AI-Powered
              </span>
              <span className="relative mx-auto block w-fit">
                Studio
                <span className="hero-swoosh" />
              </span>
            </h1>

            <p className="mx-auto mt-9 max-w-3xl text-lg leading-8 text-white/58 sm:text-xl">
              DesignstryX does not just make pages. We engineer brand presence, interfaces, campaigns, and digital systems that look premium and move people toward action.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-7 text-sm font-black text-white shadow-[0_18px_60px_rgba(255,112,0,0.28)] transition hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-7 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#05060d]"
              >
                Explore Services
                <Search className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#070812] py-5 text-white">
        <div className="animate-marquee flex w-max gap-10 font-mono text-sm uppercase tracking-[0.24em] text-white/52">
          {["AI Website Design", "Brand Systems", "Landing Pages", "UI UX", "Creative Campaigns", "Vercel Deployment", "Motion Interfaces", "Conversion Design"].concat(["AI Website Design", "Brand Systems", "Landing Pages", "UI UX", "Creative Campaigns", "Vercel Deployment", "Motion Interfaces", "Conversion Design"]).map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
              {item}
              <span className="h-2 w-2 rounded-full bg-[#ff7a00]" />
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">AI-enabled creative delivery</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              Services built for brands that want attention.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/52">
              A complete studio stack for design, code, branding, campaigns, and launch support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agencyServices.map((service, index) => {
              const Icon = service.icon;

              return (
              <Reveal key={service.slug} delay={(index % 3) * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f1b] p-7 transition hover:-translate-y-1 hover:border-[#ff7a00]/50 hover:bg-[#111420]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0d65ff] to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#ff7a00]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-14 text-3xl font-black tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/52">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#ff7a00]">
                    View service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a00]">Results engine</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                Design that looks premium. Systems that feel measurable.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/54">
                DesignstryX combines creative direction with practical launch thinking: clean pages, clear offers, strong CTAs, and fast deployment.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-white/10 bg-[#0d0f1b] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.28)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    [BrainCircuit, "Smart strategy", "Offer, audience, and conversion path before visual polish."],
                    [BarChart3, "Growth clarity", "Page sections designed around attention and enquiry flow."],
                    [Bot, "AI-assisted workflow", "Faster ideation, content planning, and creative iteration."],
                    [Rocket, "Launch ready", "GitHub, Vercel, metadata, responsive QA, and final polish."]
                  ].map(([Icon, title, text]) => {
                    const CardIcon = Icon as typeof BrainCircuit;
                    return (
                      <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <CardIcon className="h-7 w-7 text-[#0d65ff]" />
                        <h3 className="mt-8 text-xl font-black">{title as string}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">{text as string}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">Launch protocol</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              From rough idea to live digital asset.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="min-h-72 rounded-2xl border border-white/10 bg-[#0d0f1b] p-7">
                  <p className="font-mono text-sm text-[#ff7a00]">{number}</p>
                  <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/52">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a00]">Start the build</p>
              <h2 className="text-gradient mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                Ready to turn DesignstryX into your digital advantage?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/54">
                Send your reference, services, deadline, and offer. We will turn it into a premium live web experience.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-white/10 bg-[#0d0f1b] p-6">
                <div className="space-y-3">
                  <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-sm font-black transition hover:bg-[#ff7a00]">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp {siteConfig.phone}
                  </a>
                  <a href={siteConfig.secondaryPhoneHref} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-sm font-black transition hover:bg-[#0d65ff]">
                    <Phone className="h-5 w-5" />
                    Call {siteConfig.secondaryPhone}
                  </a>
                  <a href={siteConfig.emailHref} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-sm font-black transition hover:bg-white hover:text-[#05060d]">
                    <Mail className="h-5 w-5" />
                    {siteConfig.email}
                  </a>
                  <p className="flex items-center gap-3 rounded-2xl border border-[#00f0a8]/15 bg-[#00f0a8]/5 px-4 py-4 text-sm font-black text-[#00f0a8]">
                    <CheckCircle2 className="h-5 w-5" />
                    {siteConfig.registration}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">FAQ</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em]">Quick answers.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
