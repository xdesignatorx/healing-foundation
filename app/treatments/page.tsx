import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { treatments } from "@/data/site";

export const metadata = {
  title: "Treatments",
  description: "Explore residential addiction recovery, dual diagnosis care, family therapy, and aftercare programs."
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Evidence-informed care for complex recovery needs."
        copy="Programs are tailored to clinical assessment, personal history, family context, and the resident's recovery goals."
        image="/images/centre/group-therapy-session.jpeg"
      />
      <section className="container-pad py-20">
        <SectionHeading
          eyebrow="Programs"
          title="Structured pathways with room for individual needs."
          copy="Every treatment pathway includes routine, therapeutic work, wellness practices, progress reviews, and aftercare planning."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="luxury-card p-7">
              <item.icon className="h-10 w-10 text-gold" />
              <h2 className="mt-6 font-serif text-3xl font-semibold text-forest">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-forest/70">{item.summary}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
              <p className="mt-5 text-sm leading-7 text-forest/60">
                Includes assessment-led planning, therapeutic sessions, daily wellness practices, and relapse-prevention work.
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
