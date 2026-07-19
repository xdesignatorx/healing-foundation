import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleDot, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { agencyServices } from "@/data/services";
import { siteConfig } from "@/data/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return agencyServices.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = agencyServices.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service"
    };
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = agencyServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-[#05060d] pt-36 text-white">
        <div className="network-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(13,101,255,0.22),transparent_34%),radial-gradient(circle_at_84%_28%,rgba(255,122,0,0.16),transparent_26%),linear-gradient(180deg,rgba(5,6,13,0.12)_0%,#05060d_88%)]" />
        <div className="orbit orbit-two" />

        <div className="container-pad relative pb-20 pt-10 sm:pb-28">
          <Reveal>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-black text-white/64 transition hover:text-[#ff7a00]">
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-md border border-[#0d65ff]/35 bg-[#0d65ff]/10 px-5 py-3 font-mono text-sm text-[#0d65ff] shadow-[0_0_45px_rgba(13,101,255,0.18)]">
                <Icon className="h-4 w-4" />
                DX SERVICE&gt; {service.eyebrow}
              </div>
              <h1 className="mt-8 text-[4.2rem] font-black leading-[0.92] tracking-[-0.075em] sm:text-[7rem]">
                {service.title}
                <span className={`block bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  built to perform.
                </span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/58">{service.summary}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-white/10 bg-[#10111d]/82 p-6 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#00f0a8]/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#00f0a8]">
                    Build board
                  </span>
                  <span className="font-mono text-xs text-white/38">Active sprint</span>
                </div>
                <div className="mt-8 grid gap-4">
                  {service.outcomes.map((outcome, index) => (
                    <div key={outcome} className="rounded-2xl bg-white/[0.05] p-5">
                      <div className="mb-4 flex items-center justify-between text-sm font-black">
                        <span>{outcome}</span>
                        <span className="text-[#ff7a00]">{92 + index}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full bg-gradient-to-r ${service.gradient}`} style={{ width: `${92 + index}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">What you get</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              A focused package with premium execution.
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 0.04}>
                <div className="min-h-40 rounded-2xl border border-white/10 bg-[#0d0f1b] p-6 transition hover:-translate-y-1 hover:border-[#ff7a00]/40">
                  <CheckCircle2 className="h-6 w-6 text-[#00f0a8]" />
                  <p className="mt-8 text-lg font-black leading-7">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a00]">Delivery flow</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              How this service moves from idea to launch.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={(index % 4) * 0.04}>
                <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f1b] p-7">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  <p className="font-mono text-sm text-white/36">0{index + 1}</p>
                  <CircleDot className="mt-10 h-6 w-6 text-[#ff7a00]" />
                  <h3 className="mt-6 text-2xl font-black tracking-[-0.04em]">{step}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_18%_22%,rgba(13,101,255,0.24),transparent_30%),linear-gradient(135deg,#10111d,#05060d)] p-8 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-center">
              <div>
                <Sparkles className="h-10 w-10 text-[#ff7a00]" />
                <h2 className="mt-8 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                  Ready to build this with DesignstryX?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/56">
                  Send your reference link, project goal, deadline, and business details. We will turn it into a clear service plan.
                </p>
              </div>
              <div className="grid gap-3">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-7 text-sm font-black text-white transition hover:-translate-y-1"
                >
                  Start project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-7 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#05060d]"
                >
                  Email brief
                  <Zap className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
