import Image from "next/image";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import { facilities, processSteps, siteConfig, treatments } from "@/data/site";

export const metadata = {
  title: "Brochure",
  description: "Print-ready Healing Foundation brochure with treatments, facilities, address, and contact details."
};

export default function BrochurePage() {
  return (
    <div className="bg-[#f7f7f2] px-4 py-10 text-forest print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-soft print:rounded-none print:shadow-none">
        <section className="relative min-h-[520px] overflow-hidden p-8 text-white sm:p-12 print:min-h-[420px]">
          <Image
            src="/images/centre/front-sign.jpeg"
            alt="Healing Foundation residence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/70 to-forest/20" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20 bg-white">
                <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} fill sizes="64px" className="object-cover" />
              </span>
              <div>
                <p className="text-2xl font-bold leading-none">{siteConfig.name}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-[#f1c765]">
                  Wellness residence
                </p>
              </div>
            </div>
            <h1 className="mt-16 text-6xl font-semibold leading-[0.95] text-balance sm:text-7xl print:text-5xl">
              Private rehabilitation with calm, structured care.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
              A confidential residential recovery centre for addiction support,
              family guidance, wellness routine, and aftercare planning.
            </p>
          </div>
        </section>

        <section className="grid gap-6 p-8 sm:grid-cols-3 sm:p-12">
          {[
            ["Call", siteConfig.phone],
            ["WhatsApp", siteConfig.phone],
            ["Email", siteConfig.email]
          ].map(([label, value]) => (
            <div key={label} className="rounded-md bg-[#f7f7f2] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7057d9]">{label}</p>
              <p className="mt-3 text-sm font-bold text-forest">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 border-t border-forest/10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
              Treatment support
            </p>
            <div className="mt-5 grid gap-3">
              {treatments.slice(0, 8).map((item) => (
                <p key={item.title} className="flex gap-3 text-sm leading-6 text-ink/70">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#55a476]" />
                  <span>
                    <strong className="text-forest">{item.title}:</strong> {item.summary}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
              Facilities
            </p>
            <div className="mt-5 grid gap-3">
              {facilities.map((item) => (
                <p key={item.title} className="flex gap-3 text-sm leading-6 text-ink/70">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#55a476]" />
                  <span>
                    <strong className="text-forest">{item.title}:</strong> {item.text}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-forest/10 p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
            Recovery pathway
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-md border border-forest/10 p-5">
                <p className="text-3xl font-semibold text-[#7057d9]">0{index + 1}</p>
                <h2 className="mt-4 text-lg font-bold">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/62">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 bg-[#1e2622] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4 text-sm leading-7 text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
              {siteConfig.address}
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
              {siteConfig.phone} / {siteConfig.secondaryPhone}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
              {siteConfig.email}
            </p>
          </div>
          <div className="print:hidden">
            <PrintButton />
          </div>
        </section>
      </div>
    </div>
  );
}
