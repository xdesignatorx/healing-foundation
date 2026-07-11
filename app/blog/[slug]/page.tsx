import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { blogPosts, siteConfig } from "@/data/site";

type BlogArticleProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello ${siteConfig.name}, I read "${post.title}" and would like confidential guidance.`
  )}`;

  return (
    <article className="pt-20">
      <section className="container-pad py-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Healing Foundation Journal</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-forest sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-forest/70">{post.excerpt}</p>
          <p className="mt-4 text-sm font-semibold text-gold">
            {new Date(post.date).toLocaleDateString("en-IN", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </p>
        </div>
        <div className="relative mx-auto mt-10 h-[460px] max-w-5xl overflow-hidden rounded-lg shadow-soft">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>
      </section>
      <section className="container-pad pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                In this article
              </p>
              <nav className="mt-4 grid gap-2 text-sm font-semibold text-forest/70">
                <a href="#decision" className="rounded-md px-3 py-2 hover:bg-cream hover:text-forest">
                  The decision
                </a>
                <a href="#quality" className="rounded-md px-3 py-2 hover:bg-cream hover:text-forest">
                  What quality care includes
                </a>
                <a href="#next-step" className="rounded-md px-3 py-2 hover:bg-cream hover:text-forest">
                  Next step
                </a>
              </nav>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="space-y-6 text-base leading-8 text-forest/70">
              <section id="decision" className="scroll-mt-28">
                <h2 className="font-serif text-4xl font-semibold leading-tight text-forest">
                  The decision is emotional, not just practical.
                </h2>
                <p className="mt-4">
                  Choosing rehabilitation is often an emotional decision. Families may be balancing urgency, privacy, safety, and uncertainty about what meaningful treatment should include.
                </p>
              </section>

              <section id="quality" className="scroll-mt-28">
                <h2 className="font-serif text-4xl font-semibold leading-tight text-forest">
                  Quality care needs structure and compassion.
                </h2>
                <p className="mt-4">
                  A premium recovery setting should offer more than comfort. It should provide clinical clarity, structured days, compassionate communication, and an environment where the resident can feel steady enough to do difficult personal work.
                </p>
              </section>

              <section id="next-step" className="scroll-mt-28">
                <h2 className="font-serif text-4xl font-semibold leading-tight text-forest">
                  Start with one private conversation.
                </h2>
                <p className="mt-4">
                  At {siteConfig.name}, the first step is a confidential conversation. From there, the team can help identify care needs, admission suitability, family expectations, and the supports required after residential treatment.
                </p>
              </section>
            </div>

            <div className="rounded-lg bg-[#1e2622] p-7 text-white shadow-soft sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1c765]">
                Need private guidance?
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight">
                Share this article context with admissions on WhatsApp.
              </h2>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#1fae66] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                WhatsApp admissions
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="border-t border-forest/10 pt-10">
              <h2 className="font-serif text-4xl font-semibold text-forest">Related reading</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group rounded-lg border border-forest/10 bg-white p-5 shadow-card transition hover:-translate-y-1"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      Healing Foundation Journal
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-forest/62">{item.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
                      Read next
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
