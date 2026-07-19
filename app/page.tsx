import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Check,
  Code2,
  Globe2,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointer2,
  Palette,
  PenTool,
  Phone,
  Play,
  Rocket,
  ShoppingBag,
  Sparkles,
  Stars,
  Wand2,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/Motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { siteConfig } from "@/data/site";

const services = [
  {
    title: "Website Design",
    text: "Premium landing pages, business websites, portfolio sites, and conversion-focused UI systems.",
    icon: Globe2
  },
  {
    title: "Web Development",
    text: "Fast Next.js builds, responsive frontend development, CMS-ready structures, and Vercel deployment.",
    icon: Code2
  },
  {
    title: "Product & App UI",
    text: "Dashboards, SaaS interfaces, mobile app screens, design systems, and interactive prototypes.",
    icon: LayoutDashboard
  },
  {
    title: "Brand Identity",
    text: "Logo direction, color systems, typography, social media identity, and launch-ready brand kits.",
    icon: Palette
  },
  {
    title: "Graphic Design",
    text: "Posters, banners, ad creatives, brochures, presentation decks, thumbnails, and campaign assets.",
    icon: Brush
  },
  {
    title: "Marketing Creatives",
    text: "Scroll-stopping visuals for Instagram, Meta ads, Google campaigns, WhatsApp sharing, and launches.",
    icon: Megaphone
  },
  {
    title: "No-Code Builds",
    text: "Fast MVPs, automation-ready forms, workflow pages, business tools, and content-driven microsites.",
    icon: Wand2
  },
  {
    title: "Motion & Video Assets",
    text: "Animated sections, launch reels, UI motion, simple product videos, and premium page transitions.",
    icon: Play
  },
  {
    title: "Ecommerce Stores",
    text: "Shop pages, product landing pages, checkout-ready experiences, and conversion-first storefront UI.",
    icon: ShoppingBag
  }
];

const stack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Figma-style UI",
  "SEO metadata",
  "Responsive design"
];

const process = [
  {
    title: "Discover",
    text: "We define the offer, target audience, pages, content structure, and conversion goals."
  },
  {
    title: "Design",
    text: "A premium visual direction is shaped with typography, spacing, interactions, and page rhythm."
  },
  {
    title: "Build",
    text: "The site is developed cleanly with responsive layouts, smooth motion, SEO, and fast performance."
  },
  {
    title: "Launch",
    text: "Deployment, domain setup, final checks, and post-launch guidance are handled end to end."
  }
];

const faqs = [
  {
    question: "What kind of projects does DesignstryX handle?",
    answer:
      "DesignstryX handles premium business websites, landing pages, UI/UX design, frontend development, ecommerce pages, brand identity, marketing creatives, and modern web experiences."
  },
  {
    question: "Can you design and develop the full website?",
    answer:
      "Yes. Design, development, responsive setup, SEO metadata, deployment, WhatsApp/call CTAs, forms, and Vercel launch can be handled in one complete workflow."
  },
  {
    question: "Is DesignstryX officially registered?",
    answer:
      "Yes. DesignstryX is registered on the Udyam portal. Certificate details can be shared or added to the website when required."
  },
  {
    question: "How do I start a project?",
    answer:
      "Send a WhatsApp message, call, or email with your business type, pages required, reference links, and deadline. A clear plan can be prepared from there."
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f5ec] pt-32 text-[#101713] sm:pt-40">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7c5cff]/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#f7c948]/20 blur-3xl" />
        <div className="container-pad relative">
          <Reveal className="mx-auto max-w-6xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#171c19]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6d52e7] shadow-card">
              <Sparkles className="h-4 w-4" />
              Design, development, and digital launch studio
            </span>
            <h1 className="mx-auto mt-8 max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#101713] sm:text-8xl lg:text-[9.5rem]">
              Your brand deserves a sharper digital presence.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#101713]/68 sm:text-xl">
              DesignstryX builds premium websites, interfaces, brand assets, and launch-ready digital experiences that look expensive, load fast, and help people take action.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#101713] px-7 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#6d52e7]"
              >
                Start on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#101713]/12 bg-white px-7 text-sm font-bold text-[#101713] transition hover:-translate-y-1 hover:border-[#6d52e7] hover:text-[#6d52e7]"
              >
                <Phone className="h-4 w-4" />
                Call DesignstryX
              </a>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-16 max-w-6xl" delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-[#101713]/10 bg-white shadow-[0_30px_90px_rgba(16,23,19,0.12)]">
              <div className="flex h-14 items-center justify-between border-b border-[#101713]/10 px-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff7a7a]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffd15c]" />
                  <span className="h-3 w-3 rounded-full bg-[#72d69b]" />
                </div>
                <span className="text-xs font-bold text-[#101713]/50">designstryx.studio</span>
              </div>
              <div className="grid min-h-[460px] gap-4 bg-[#111713] p-4 text-white md:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#efe9ff] p-8 text-[#181126]">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#6d52e7]">
                      <MousePointer2 className="h-4 w-4" />
                      Conversion-first interface
                    </span>
                    <h2 className="mt-8 max-w-xl text-5xl font-black leading-[0.96] tracking-[-0.04em] sm:text-6xl">
                      Strategy, visuals, code, and launch in one place.
                    </h2>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {["Premium UI", "Fast build", "Live support"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white p-4 text-sm font-bold shadow-card">
                        <Check className="mb-3 h-5 w-5 text-[#6d52e7]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] bg-[#d5ff65] p-7 text-[#101713]">
                    <Rocket className="h-8 w-8" />
                    <p className="mt-8 text-4xl font-black tracking-[-0.04em]">Launch-ready websites for serious brands.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[1.5rem] bg-[#ff8e6e] p-5 text-[#23120d]">
                      <Stars className="h-7 w-7" />
                      <p className="mt-10 text-2xl font-black tracking-[-0.04em]">Visual systems</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[#6d52e7] p-5">
                      <Zap className="h-7 w-7" />
                      <p className="mt-10 text-2xl font-black tracking-[-0.04em]">Smooth motion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 overflow-hidden border-y border-[#101713]/10 bg-[#d5ff65] py-5">
          <div className="animate-marquee flex w-max gap-10 text-lg font-black uppercase tracking-[-0.02em] text-[#101713]">
            {[...services, ...services].map((service, index) => (
              <span key={`${service.title}-${index}`} className="inline-flex items-center gap-10">
                {service.title}
                <span className="h-2 w-2 rounded-full bg-[#101713]" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#101713] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5ff65]">Services</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-7xl">
                Everything your digital brand needs.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/62">
              From one-page launch sites to full UI systems, DesignstryX covers strategy, design, build, and deployment with a polished modern finish.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 0.04}>
                <article className="group min-h-72 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white hover:text-[#101713]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d5ff65] text-[#101713]">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-black text-white/24 transition group-hover:text-[#101713]/28">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58 transition group-hover:text-[#101713]/64">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f7f5ec] py-24 text-[#101713] sm:py-32">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d52e7]">Capabilities</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-7xl">
                Built for founders, local businesses, creators, and growing teams.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#101713]/64">
                DesignstryX is Udyam-registered and built as a serious creative technology studio, not a template shop. Certificate upload can be added later as a trust badge.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="grid gap-3 sm:grid-cols-2">
                {stack.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#101713]/10 bg-white px-4 py-4 text-sm font-bold shadow-card">
                    <BadgeCheck className="h-5 w-5 text-[#6d52e7]" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#efe9ff] py-24 text-[#181126] sm:py-32">
        <div className="container-pad">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d52e7]">Process</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              Clear process. No confusion. No random guessing.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="min-h-72 rounded-[1.5rem] bg-white p-7 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#101713] text-sm font-black text-[#d5ff65]">
                    {index + 1}
                  </span>
                  <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#181126]/62">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d5ff65] py-24 text-[#101713] sm:py-32">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.2em]">Start a project</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Let&apos;s build something people remember.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[1.5rem] bg-[#101713] p-7 text-white shadow-soft">
                <div className="space-y-3">
                  <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-bold transition hover:bg-white hover:text-[#101713]">
                    <MessageCircle className="h-5 w-5 text-[#d5ff65]" />
                    WhatsApp: {siteConfig.phone}
                  </a>
                  <a href={siteConfig.secondaryPhoneHref} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-bold transition hover:bg-white hover:text-[#101713]">
                    <Phone className="h-5 w-5 text-[#d5ff65]" />
                    Call: {siteConfig.secondaryPhone}
                  </a>
                  <a href={siteConfig.emailHref} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-bold transition hover:bg-white hover:text-[#101713]">
                    <Mail className="h-5 w-5 text-[#d5ff65]" />
                    {siteConfig.email}
                  </a>
                  <a href={siteConfig.secondaryEmailHref} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4 text-sm font-bold transition hover:bg-white hover:text-[#101713]">
                    <PenTool className="h-5 w-5 text-[#d5ff65]" />
                    {siteConfig.secondaryEmail}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#101713] sm:py-32">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d52e7]">FAQ</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.05em]">
              Before we start.
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
