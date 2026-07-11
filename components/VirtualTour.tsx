"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Compass, Eye } from "lucide-react";

type TourItem = {
  title: string;
  text: string;
  image: string;
};

export function VirtualTour({ items }: { items: TourItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="container-pad pb-20">
      <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft sm:p-7 lg:p-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7057d9]">
              Virtual tour
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Explore the residence before you visit.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-moss"
          >
            Full gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="grid gap-2">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-md border px-4 py-4 text-left transition ${
                  activeIndex === index
                    ? "border-[#7057d9] bg-[#efeafd] text-[#2d2552]"
                    : "border-forest/10 bg-[#fbfbf7] text-forest/70 hover:border-forest/30"
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-bold">
                  {activeIndex === index ? <Eye className="h-4 w-4" /> : <Compass className="h-4 w-4" />}
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg bg-[#f7f7f2]">
            <div className="relative min-h-[420px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/78 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1c765]">
                  Tour stop {activeIndex + 1}
                </p>
                <h3 className="mt-3 text-4xl font-semibold leading-tight">{active.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{active.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
