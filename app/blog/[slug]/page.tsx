import Image from "next/image";
import { notFound } from "next/navigation";
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
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-8 text-forest/70">
          <p>
            Choosing rehabilitation is often an emotional decision. Families may be balancing urgency, privacy, safety, and uncertainty about what meaningful treatment should include.
          </p>
          <p>
            A premium recovery setting should offer more than comfort. It should provide clinical clarity, structured days, compassionate communication, and an environment where the resident can feel steady enough to do difficult personal work.
          </p>
          <p>
            At {siteConfig.name}, the first step is a confidential conversation. From there, the team can help identify care needs, admission suitability, family expectations, and the supports required after residential treatment.
          </p>
        </div>
      </section>
    </article>
  );
}
