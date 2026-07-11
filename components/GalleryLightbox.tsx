"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type GalleryItem = {
  title: string;
  image: string;
};

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + items.length) % items.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, items.length]);

  const showPrevious = () => {
    setActiveIndex((index) => (index === null ? index : (index - 1 + items.length) % items.length));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === null ? index : (index + 1) % items.length));
  };

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative min-h-[320px] overflow-hidden rounded-lg text-left shadow-soft transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/82 via-forest/10 to-transparent" />
            <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-forest shadow-card opacity-0 transition group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </div>
            <div className="absolute bottom-0 p-6">
              <p className="font-serif text-3xl font-semibold text-pearl">{item.title}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-pearl/62">
                Tap to view
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[80] bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-forest shadow-card sm:right-8 sm:top-8"
            aria-label="Close gallery image"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-forest shadow-card sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-forest shadow-card sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center">
            <div className="relative h-[72vh] overflow-hidden rounded-lg bg-forest shadow-soft">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-pearl">
              <p className="font-serif text-2xl font-semibold">{activeItem.title}</p>
              <p className="text-sm text-pearl/60">
                {activeIndex! + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
