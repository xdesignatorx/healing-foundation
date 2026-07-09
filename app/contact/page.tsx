import { Mail, MapPin, Phone } from "lucide-react";
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
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A private conversation can be the beginning of recovery."
        copy="Reach out for confidential admissions guidance, family consultation, or program suitability questions."
        image="/images/centre/consultation-office.jpeg"
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
        <div className="overflow-hidden rounded-lg bg-forest p-8 text-pearl shadow-soft md:p-12">
          <p className="eyebrow text-sand">Privacy Note</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Every enquiry is handled discreetly.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-pearl/70">
            Calls, WhatsApp messages, emails, and enquiry form submissions should be handled with discretion by the admissions team. Connect the form to your preferred secure email, CRM, or admissions workflow before heavy promotion.
          </p>
        </div>
      </section>
    </>
  );
}
