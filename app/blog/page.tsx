import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/site";

export const metadata = {
  title: "Blog",
  description: "Read recovery insights on private rehabilitation, family support, wellness routine, and aftercare."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Guidance for families considering rehabilitation."
        copy="Practical, compassionate articles on treatment decisions, family involvement, and sustainable recovery."
        image="/images/centre/recovery-stages-poster.jpeg"
      />
      <section className="container-pad py-20">
        <SectionHeading eyebrow="Insights" title="Recovery writing with clarity and care." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06} className="overflow-hidden rounded-lg bg-white shadow-soft">
              <div className="relative h-60">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-forest">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-forest/70">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                  Read article <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
