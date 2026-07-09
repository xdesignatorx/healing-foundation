import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Motion";

export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(199,168,107,0.18),transparent_28rem)]" />
      <div className="container-pad relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative min-h-[540px] overflow-hidden rounded-lg shadow-soft">
          <Image
            src="/images/centre/stair-lobby.jpeg"
            alt="Clean interior stair lobby at Healing Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-7 text-pearl">
            <p className="eyebrow text-sand">Emotional Recovery</p>
            <p className="mt-3 max-w-md font-serif text-3xl font-semibold leading-tight">
              From overwhelm toward steadier days.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Before and After Care</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-forest sm:text-6xl">
            A humane story of change, without promises or pressure.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-forest/10 bg-white/75 p-6 shadow-card">
              <p className="font-serif text-3xl font-semibold text-forest">Before</p>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                Families often arrive exhausted, uncertain, and worried about privacy, safety, and what treatment might feel like.
              </p>
            </div>
            <div className="rounded-lg border border-gold/30 bg-white p-6 shadow-card">
              <p className="font-serif text-3xl font-semibold text-forest">After</p>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                The goal is not a dramatic claim. It is more stability, clearer routines, better communication, and a supported plan for the next step.
              </p>
            </div>
          </div>
          <Link href="/contact" className="premium-link mt-8">
            Begin a private conversation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
