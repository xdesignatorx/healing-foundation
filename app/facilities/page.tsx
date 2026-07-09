import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { facilities } from "@/data/site";

export const metadata = {
  title: "Facilities",
  description: "View the private residential suites, therapy rooms, gardens, and wellness spaces at Healing Foundation."
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Restorative spaces designed for privacy, rhythm, and renewal."
        copy="The residence supports recovery through calm interiors, outdoor reflection areas, structured routines, and clinical spaces."
        image="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="container-pad py-20">
        <SectionHeading
          eyebrow="Residence"
          title="Comfort that serves the care process."
          copy="Every space is selected to reduce overwhelm, encourage healthy routine, and support a dignified residential experience."
        />
        <div className="mt-10 grid gap-8">
          {facilities.map((item, index) => (
            <Reveal
              key={item.title}
              className={`grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-2 ${
                index % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[340px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="eyebrow">Facility</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold text-forest">{item.title}</h2>
                <p className="mt-5 text-base leading-8 text-forest/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
