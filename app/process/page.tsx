import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, CheckCircle2, Code2, Compass, Gauge, LayoutDashboard, MessagesSquare, Rocket, Search } from "lucide-react";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Explore the DesignstryX design and development process, from discovery and research to design, development, testing, launch, and optimization."
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    icon: Compass,
    text: "We understand your business, audience, current problem, references, deadline, and what success should look like.",
    points: ["Business goal", "Audience clarity", "Reference audit"]
  },
  {
    step: "02",
    title: "Research",
    icon: Search,
    text: "We study competitors, user expectations, content priorities, offer positioning, and the trust signals your page needs.",
    points: ["Competitor scan", "Content hierarchy", "Trust mapping"]
  },
  {
    step: "03",
    title: "Strategy",
    icon: MessagesSquare,
    text: "We shape the page journey before pixels: hero message, sections, CTA flow, conversion logic, and mobile-first layout.",
    points: ["Page architecture", "CTA planning", "Lead flow"]
  },
  {
    step: "04",
    title: "Design System",
    icon: LayoutDashboard,
    text: "We create a visual language with typography, spacing, color, cards, buttons, states, motion, and responsive behavior.",
    points: ["UI direction", "Components", "Responsive states"]
  },
  {
    step: "05",
    title: "Development",
    icon: Code2,
    text: "We build the experience in Next.js with clean components, SEO metadata, accessible markup, smooth animations, and forms.",
    points: ["Next.js build", "Motion polish", "SEO basics"]
  },
  {
    step: "06",
    title: "Testing",
    icon: Beaker,
    text: "We test the site across screen sizes, fix visual issues, check links/forms, and run production build checks before launch.",
    points: ["Mobile QA", "Link checks", "Build verification"]
  },
  {
    step: "07",
    title: "Launch",
    icon: Rocket,
    text: "We push to GitHub, deploy on Vercel, verify live pages, and guide custom domain setup when needed.",
    points: ["GitHub push", "Vercel deploy", "Domain guidance"]
  },
  {
    step: "08",
    title: "Optimize",
    icon: Gauge,
    text: "After launch, we refine copy, sections, speed, visual hierarchy, and conversion details based on real feedback.",
    points: ["Polish pass", "Conversion review", "Future updates"]
  }
];

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05060d] pt-36 text-white">
        <div className="network-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_18%,rgba(13,101,255,0.22),transparent_32%),radial-gradient(circle_at_75%_25%,rgba(255,122,0,0.18),transparent_28%),linear-gradient(180deg,rgba(5,6,13,0.12)_0%,#05060d_88%)]" />
        <div className="orbit orbit-one" />
        <div className="container-pad relative pb-20 pt-10 sm:pb-28">
          <Reveal className="mx-auto max-w-6xl text-center">
            <div className="mx-auto mb-8 w-fit rounded-md border border-[#0d65ff]/35 bg-[#0d65ff]/10 px-5 py-3 font-mono text-sm text-[#0d65ff]">
              PROCESS&gt; Strategy, design, build, test, launch...
            </div>
            <h1 className="text-[4rem] font-black leading-[0.92] tracking-[-0.075em] sm:text-[6.6rem] lg:text-[8rem]">
              A clear process for
              <span className="block bg-gradient-to-r from-[#ff7a00] via-[#d3a17d] to-[#0d65ff] bg-clip-text text-transparent">
                premium digital work.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/58">
              DesignstryX keeps every project moving through a practical workflow so you always know what is happening, what is next, and what is needed from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad">
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#ff7a00] via-white/10 to-[#0d65ff] lg:block" />
            <div className="grid gap-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={(index % 2) * 0.04}>
                    <article className="group grid gap-5 rounded-3xl border border-white/10 bg-[#0d0f1b] p-5 transition hover:-translate-y-1 hover:border-[#ff7a00]/45 sm:p-7 lg:grid-cols-[9rem_1fr_0.8fr] lg:items-center lg:pl-14">
                      <div className="flex items-center gap-4">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] text-white shadow-[0_18px_50px_rgba(255,112,0,0.22)]">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="font-mono text-sm font-bold text-white/36">{item.step}</span>
                      </div>
                      <div>
                        <h2 className="text-4xl font-black tracking-[-0.055em]">{item.title}</h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/54">{item.text}</p>
                      </div>
                      <div className="grid gap-2">
                        {item.points.map((point) => (
                          <span key={point} className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/62">
                            <CheckCircle2 className="h-4 w-4 text-[#00f0a8]" />
                            {point}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.20),transparent_30%),linear-gradient(135deg,#0d0f1b,#05060d)] p-8 text-center sm:p-14">
            <h2 className="mx-auto max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              Have an idea but no clear plan yet?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/56">
              That is exactly where the process begins. Bring the rough brief and DesignstryX will shape it into a launch path.
            </p>
            <Link href="/contact" className="mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-8 text-sm font-black text-white transition hover:-translate-y-1">
              Start project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
