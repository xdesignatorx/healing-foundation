import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps, values } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Learn about Healing Foundation's approach to private residential rehabilitation and wellness care."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Healing Foundation"
        title="A private place to begin again with dignity."
        copy="We combine clinical structure, compassionate support, and restorative surroundings for individuals and families navigating addiction recovery."
        image="/images/centre/front-sign.jpeg"
      />
      <section className="container-pad grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Our Ethos"
            title="Premium care is not only comfort. It is discretion, consistency, and deep respect."
            copy="Healing Foundation is shaped for people who need a calm and confidential environment away from familiar triggers. The program supports emotional stability, personal responsibility, family repair, and long-term relapse prevention."
          />
        </Reveal>
        <Reveal className="relative min-h-[430px] overflow-hidden rounded-lg shadow-soft">
          <Image
            src="/images/centre/team-office-landscape.jpeg"
            alt="Healing Foundation care team in the consultation office"
            fill
            className="object-cover"
          />
        </Reveal>
      </section>
      <section className="bg-pearl py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Values" title="The principles behind every care plan." align="center" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Reveal key={value} className="rounded-lg border border-forest/10 bg-white/70 p-5 text-center font-serif text-2xl font-semibold text-forest">
                {value}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-pad py-20">
        <SectionHeading eyebrow="Process" title="A thoughtful journey from enquiry to aftercare." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} className="luxury-card p-6">
              <p className="font-serif text-4xl font-semibold text-gold">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/70">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
