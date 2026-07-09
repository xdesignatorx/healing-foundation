import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Explore real centre photos of Healing Foundation's residence, therapy spaces, rooms, and activity areas."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real spaces for structured, compassionate recovery."
        copy="A curated look at Healing Foundation's residence, counselling rooms, shared spaces, wellness sessions, and outdoor activity areas."
        image="/images/centre/exterior-day-team.jpeg"
      />
      <section className="container-pad py-20">
        <SectionHeading
          eyebrow="Spaces"
          title="Quiet corners, restorative rooms, and open air."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="group relative min-h-[320px] overflow-hidden rounded-lg shadow-soft">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="font-serif text-3xl font-semibold text-pearl">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
