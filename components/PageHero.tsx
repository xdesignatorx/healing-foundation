import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
};

export function PageHero({ eyebrow, title, copy, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-forest/60 to-forest/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>
      <div className="container-pad flex min-h-[540px] items-end pb-20 pt-32">
        <div className="max-w-3xl text-pearl">
          <div className="inline-flex rounded-full border border-pearl/20 bg-white/10 px-4 py-2 backdrop-blur">
            <p className="eyebrow text-sand">{eyebrow}</p>
          </div>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] text-balance sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/80">{copy}</p>
        </div>
      </div>
    </section>
  );
}
