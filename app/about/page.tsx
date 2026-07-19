import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDot, Lightbulb, Radar, Rocket, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet DesignstryX, an India-based digital studio creating premium websites, UI/UX systems, branding, marketing creatives, and launch-ready digital experiences."
};

const values = [
  "Design with business intent",
  "Fast, polished execution",
  "Clear communication",
  "Mobile-first experience",
  "Launch-ready code",
  "Long-term brand consistency"
];

const processNodes = [
  { title: "Strategy", icon: Radar, text: "Goals, audience, competitors, offer clarity." },
  { title: "Research", icon: Users, text: "References, user intent, content priorities." },
  { title: "Analysis", icon: Lightbulb, text: "Page flow, sections, CTA logic, hierarchy." },
  { title: "Design", icon: Sparkles, text: "Visual direction, UI system, motion language." },
  { title: "Production", icon: CheckCircle2, text: "Development, QA, responsiveness, SEO basics." },
  { title: "Launch", icon: Rocket, text: "Vercel deployment, domain support, final polish." }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05060d] pt-36 text-white">
        <div className="network-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,122,0,0.18),transparent_30%),radial-gradient(circle_at_72%_28%,rgba(13,101,255,0.22),transparent_32%),linear-gradient(180deg,rgba(5,6,13,0.12)_0%,#05060d_88%)]" />
        <div className="container-pad relative pb-20 pt-10 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">
                About DesignstryX
              </p>
              <h1 className="mt-6 text-[4rem] font-black leading-[0.92] tracking-[-0.075em] sm:text-[6.4rem]">
                A creative studio for brands that need
                <span className="block bg-gradient-to-r from-[#ff7a00] via-[#d3a17d] to-[#0d65ff] bg-clip-text text-transparent">
                  sharper digital presence.
                </span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/58">
                DesignstryX builds premium websites, visual systems, and launch assets for founders, local businesses, creators, and growing teams who want their digital identity to feel current, clear, and conversion-ready.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-7 text-sm font-black text-white transition hover:-translate-y-1">
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-lg border border-white/12 bg-white/5 px-7 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#05060d]">
                  Start a project
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-[#0d0f1b] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.32)]">
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-black">
                  <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} fill sizes="420px" className="object-contain p-4" priority />
                </div>
                <div className="mt-5 rounded-2xl border border-[#00f0a8]/15 bg-[#00f0a8]/5 p-5">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#00f0a8]">
                    {siteConfig.registration}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    A registered creative business focused on design, innovation, and elevated digital delivery.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a00]">Product design process</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              We turn messy ideas into clean digital systems.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/54">
              Inspired by product design thinking: understand the user, define the story, prototype the experience, test the flow, then launch with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mx-auto mt-14 max-w-6xl rounded-3xl border border-white/10 bg-[#0d0f1b] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_20rem_1fr] lg:items-center">
              <div className="grid gap-4">
                {processNodes.slice(0, 3).map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <div key={node.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d40c2f] text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-[-0.03em]">{node.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-white/52">{node.text}</p>
                        </div>
                        <span className="ml-auto font-mono text-xs text-white/28">0{index + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative mx-auto grid h-80 w-80 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                <div className="absolute inset-8 rounded-full border-[1.35rem] border-[#d40c2f]" />
                <div className="absolute inset-20 rounded-full border border-white/12" />
                <div className="relative z-10 grid h-32 w-32 place-items-center rounded-full bg-[#05060d] text-center shadow-[0_0_50px_rgba(255,122,0,0.22)]">
                  <Users className="h-10 w-10 text-[#ff7a00]" />
                  <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/64">User first</p>
                </div>
                {["Strategy", "Evaluate", "Beta", "Launch"].map((label, index) => (
                  <span
                    key={label}
                    className="absolute left-1/2 top-1/2 grid h-12 w-12 place-items-center rounded-full bg-[#d40c2f] text-sm font-black text-white"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * 90 - 30}deg) translateY(-9.5rem) rotate(${-index * 90 + 30}deg)`
                    }}
                  >
                    {label.slice(0, 1)}
                  </span>
                ))}
              </div>

              <div className="grid gap-4">
                {processNodes.slice(3).map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <div key={node.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d40c2f] text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-[-0.03em]">{node.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-white/52">{node.text}</p>
                        </div>
                        <span className="ml-auto font-mono text-xs text-white/28">0{index + 4}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">How we think</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                Design is not decoration. It is business clarity.
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value} delay={(index % 2) * 0.04}>
                  <div className="min-h-36 rounded-2xl border border-white/10 bg-[#0d0f1b] p-6">
                    <CircleDot className="h-5 w-5 text-[#ff7a00]" />
                    <p className="mt-8 text-xl font-black tracking-[-0.03em]">{value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
