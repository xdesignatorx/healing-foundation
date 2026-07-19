import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, CircleDot, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { agencyServices } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore DesignstryX services including website design, web development, UI/UX systems, branding, marketing creatives, motion assets, ecommerce UI, and launch support."
};

const studioSignals = [
  "Strategy before screens",
  "Conversion-led page flow",
  "Responsive production builds",
  "Launch support included"
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05060d] pt-36 text-white">
        <div className="network-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(13,101,255,0.22),transparent_34%),radial-gradient(circle_at_84%_20%,rgba(255,122,0,0.18),transparent_28%),linear-gradient(180deg,rgba(5,6,13,0.12)_0%,#05060d_88%)]" />
        <div className="orbit orbit-one" />
        <div className="container-pad relative pb-20 pt-10 sm:pb-28">
          <Reveal className="mx-auto max-w-6xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-md border border-[#0d65ff]/35 bg-[#0d65ff]/10 px-5 py-3 font-mono text-sm text-[#0d65ff] shadow-[0_0_45px_rgba(13,101,255,0.18)]">
              <Bot className="h-4 w-4" />
              AI&gt; Mapping brand, product, traffic, conversion...
            </div>
            <h1 className="mx-auto max-w-6xl text-[4rem] font-black leading-[0.92] tracking-[-0.075em] sm:text-[6.6rem] lg:text-[8rem]">
              Services engineered for
              <span className="block bg-gradient-to-r from-[#ff7a00] via-[#d3a17d] to-[#0d65ff] bg-clip-text text-transparent">
                digital momentum.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/58">
              Pick one focused service or combine the full studio stack. DesignstryX builds premium digital assets that look sharp, communicate clearly, and launch cleanly.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {studioSignals.map((signal) => (
              <div key={signal} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-bold text-white/74 backdrop-blur">
                <CheckCircle2 className="mb-5 h-5 w-5 text-[#00f0a8]" />
                {signal}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#05060d] pb-24 text-white sm:pb-32">
        <div className="container-pad">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {agencyServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.slug} delay={(index % 3) * 0.04}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f1b] p-7 transition hover:-translate-y-1 hover:border-[#ff7a00]/50 hover:shadow-[0_24px_80px_rgba(0,0,0,0.36)]"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#0d65ff]/10 blur-3xl transition group-hover:bg-[#ff7a00]/20" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#ff7a00]">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="font-mono text-xs text-white/34">DX-{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="relative mt-14 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#00f0a8]">
                      {service.eyebrow}
                    </p>
                    <h2 className="relative mt-4 text-4xl font-black leading-none tracking-[-0.055em]">{service.title}</h2>
                    <p className="relative mt-5 text-sm leading-7 text-white/54">{service.summary}</p>
                    <div className="relative mt-auto pt-8">
                      <div className="mb-6 grid gap-2">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <span key={item} className="flex items-center gap-2 text-sm text-white/62">
                            <CircleDot className="h-3.5 w-3.5 text-[#ff7a00]" />
                            {item}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#05060d] transition group-hover:bg-[#ff7a00] group-hover:text-white">
                        Explore service
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.20),transparent_30%),linear-gradient(135deg,#0d0f1b,#05060d)] p-8 text-center shadow-[0_26px_90px_rgba(0,0,0,0.32)] sm:p-14">
            <Sparkles className="mx-auto h-10 w-10 text-[#ff7a00]" />
            <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              Need a complete design-to-launch package?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/56">
              Share your business, references, deadline, and goal. We will shape the right mix of services for your launch.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-8 text-sm font-black text-white transition hover:-translate-y-1"
            >
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
