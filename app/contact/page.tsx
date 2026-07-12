import { ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { BeforeYouVisit } from "@/components/BeforeYouVisit";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Healing Foundation for confidential rehabilitation admissions support."
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A private conversation can be the beginning of recovery."
        copy="Reach out for confidential admissions guidance, family consultation, or program suitability questions."
        image="/images/centre/awareness-session.jpeg"
      />
      <section className="container-pad grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Admissions"
            title="Speak with a care coordinator."
            copy="You can call, WhatsApp, email, or use the enquiry form. Share only what feels comfortable for the first conversation."
          />
          <div className="mt-8 grid gap-4">
            <a href={siteConfig.phoneHref} className="flex items-center gap-4 rounded-lg border border-forest/10 bg-white/70 p-5 transition hover:border-gold">
              <Phone className="h-6 w-6 text-gold" />
              <span>
                <span className="block text-sm text-forest/60">Primary call</span>
                <span className="font-semibold text-forest">{siteConfig.phone}</span>
              </span>
            </a>
            <a href={siteConfig.secondaryPhoneHref} className="flex items-center gap-4 rounded-lg border border-forest/10 bg-white/70 p-5 transition hover:border-gold">
              <Phone className="h-6 w-6 text-gold" />
              <span>
                <span className="block text-sm text-forest/60">Secondary call</span>
                <span className="font-semibold text-forest">{siteConfig.secondaryPhone}</span>
              </span>
            </a>
            <a href={siteConfig.emailHref} className="flex items-center gap-4 rounded-lg border border-forest/10 bg-white/70 p-5 transition hover:border-gold">
              <Mail className="h-6 w-6 text-gold" />
              <span>
                <span className="block text-sm text-forest/60">Email</span>
                <span className="font-semibold text-forest">{siteConfig.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-forest/10 bg-white/70 p-5">
              <MapPin className="h-6 w-6 text-gold" />
              <span>
                <span className="block text-sm text-forest/60">Address</span>
                <span className="font-semibold text-forest">{siteConfig.address}</span>
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <EnquiryForm />
        </Reveal>
      </section>
      <section className="container-pad pb-20">
        <Reveal className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-forest p-8 text-pearl md:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="eyebrow mt-7 text-sand">Find Healing Foundation</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Reach the centre with confidence.
              </h2>
              <p className="mt-5 text-sm leading-7 text-pearl/72">
                Use the interactive map for directions to the centre. For a smoother visit, call the admissions team before arriving.
              </p>
              <div className="mt-8 rounded-2xl border border-pearl/15 bg-pearl/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Address</p>
                <p className="mt-3 text-base font-semibold leading-7 text-pearl">{siteConfig.address}</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#D8BB7D]"
                >
                  <Navigation className="h-4 w-4" />
                  Open directions
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-pearl/25 px-6 text-sm font-bold text-pearl transition hover:-translate-y-0.5 hover:bg-pearl hover:text-forest"
                >
                  <Phone className="h-4 w-4" />
                  Call before visit
                </a>
              </div>
            </div>
            <div className="relative min-h-[440px] bg-mist">
              <iframe
                title="Healing Foundation location map"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>
      <BeforeYouVisit />
      <section className="container-pad pb-20">
        <div className="overflow-hidden rounded-lg bg-forest p-8 text-pearl shadow-soft md:p-12">
          <p className="eyebrow text-sand">Privacy Note</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Every enquiry is handled discreetly.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-pearl/70">
            Calls, WhatsApp messages, emails, and enquiry form submissions are intended for private admissions guidance. Share only what feels comfortable during the first conversation.
          </p>
        </div>
      </section>
    </>
  );
}
