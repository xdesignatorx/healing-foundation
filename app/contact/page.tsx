import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, MessageCircle, Navigation, Phone, Sparkles } from "lucide-react";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { Reveal } from "@/components/Motion";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DesignstryX for website design, web development, branding, UI/UX, marketing creatives, and launch-ready digital projects."
};

const contactCards = [
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsapp,
    icon: MessageCircle,
    external: true
  },
  {
    label: "Primary call",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone
  },
  {
    label: "Secondary call",
    value: siteConfig.secondaryPhone,
    href: siteConfig.secondaryPhoneHref,
    icon: Phone
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: Mail
  }
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <section className="relative overflow-hidden bg-[#05060d] pt-36 text-white">
        <div className="network-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,rgba(255,122,0,0.20),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(13,101,255,0.22),transparent_32%),linear-gradient(180deg,rgba(5,6,13,0.12)_0%,#05060d_88%)]" />
        <div className="container-pad relative pb-20 pt-10 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-[#0d65ff]/35 bg-[#0d65ff]/10 px-5 py-3 font-mono text-sm text-[#0d65ff]">
                CONTACT&gt; Start signal received...
              </div>
              <h1 className="text-[4rem] font-black leading-[0.92] tracking-[-0.075em] sm:text-[6.4rem]">
                Let us build your next
                <span className="block bg-gradient-to-r from-[#ff7a00] via-[#d3a17d] to-[#0d65ff] bg-clip-text text-transparent">
                  digital advantage.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/58">
                Send your idea, reference site, deadline, and business goal. DesignstryX will help turn it into a premium web, brand, or creative project.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-white/10 bg-[#0d0f1b] p-5 sm:p-7">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#00f0a8]">Direct channels</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {contactCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <a
                        key={card.label}
                        href={card.href}
                        target={card.external ? "_blank" : undefined}
                        rel={card.external ? "noreferrer" : undefined}
                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#ff7a00]/45 hover:bg-white/[0.07]"
                      >
                        <Icon className="h-6 w-6 text-[#ff7a00]" />
                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/36">{card.label}</p>
                        <p className="mt-2 break-all text-base font-black text-white">{card.value}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#05060d] py-24 text-white sm:py-32">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-28">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a00]">Project brief</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-7xl">
                The fastest way to start is a clear brief.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/54">
                Share what you want to build, what it should achieve, and a few references. We will reply with the next practical step.
              </p>
              <div className="mt-8 rounded-2xl border border-[#00f0a8]/15 bg-[#00f0a8]/5 p-5">
                <Sparkles className="h-6 w-6 text-[#00f0a8]" />
                <p className="mt-5 text-sm font-bold leading-7 text-white/70">
                  Good brief inputs: business type, service list, target audience, reference links, launch deadline, and must-have sections.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <ProjectBriefForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080915] py-24 text-white sm:py-32">
        <div className="container-pad">
          <Reveal className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f1b] shadow-[0_26px_90px_rgba(0,0,0,0.28)]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-7 sm:p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7a00] text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#00f0a8]">Find us</p>
                <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.055em] sm:text-5xl">
                  India-based studio. Remote-first delivery.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/56">
                  DesignstryX works remotely across India. Map is added for local service-area clarity and quick directions.
                </p>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/36">Location</p>
                  <p className="mt-3 text-base font-black leading-7 text-white">{siteConfig.address}</p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-black text-[#05060d] transition hover:-translate-y-1 hover:bg-[#ff7a00] hover:text-white"
                >
                  Open Google Maps
                  <Navigation className="h-4 w-4" />
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="relative min-h-[440px] bg-[#05060d]">
                <iframe
                  title="DesignstryX location map"
                  src={mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[25%] invert-[0.88] hue-rotate-180"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(5,6,13,0.42)_100%)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
