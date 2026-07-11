"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  return (
    <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="rounded-lg bg-[#efeafd] p-7 text-[#2d2552]">
          <Quote className="h-10 w-10 text-[#7057d9]" />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#7057d9]">
            Resident and family voices
          </p>
          <p className="mt-4 text-3xl font-semibold leading-tight">
            Stories are shared as anonymised reflections to protect privacy.
          </p>
        </div>

        <div>
          <blockquote className="text-3xl font-semibold leading-[1.22] text-forest text-balance sm:text-5xl">
            <span aria-hidden="true">&quot;</span>
            {active.quote}
            <span aria-hidden="true">&quot;</span>
          </blockquote>
          <div className="mt-8 flex flex-col gap-5 border-t border-forest/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-forest">{active.name}</p>
              <p className="mt-1 text-xs text-ink/54">{active.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-forest/12 text-forest transition hover:bg-forest hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-forest/12 text-forest transition hover:bg-forest hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex ? "w-8 bg-[#7057d9]" : "w-2.5 bg-forest/18"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
