import { GalleryLightbox } from "@/components/GalleryLightbox";
import { PageHero } from "@/components/PageHero";
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
        <GalleryLightbox items={gallery} />
      </section>
    </>
  );
}
