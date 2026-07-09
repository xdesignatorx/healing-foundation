import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Explore placeholder gallery imagery for Healing Foundation's premium wellness residence."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of calm residential recovery."
        copy="These placeholder visuals represent the intended premium, peaceful, and nature-led atmosphere. Replace with original centre photography before launch."
        image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85"
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
