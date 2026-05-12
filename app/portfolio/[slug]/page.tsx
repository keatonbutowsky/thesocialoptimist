import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllCaseStudies, getCaseStudy } from "@/lib/portfolio";

export function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getCaseStudy(slug);
  if (!post) return {};
  return { title: post.client, description: post.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getCaseStudy(slug);
  if (!post) notFound();

  const html = marked.parse(post.body) as string;

  return (
    <>
      <section className="bg-pink-cherub">
        <div className="tso-container py-20">
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-widest2 text-dark-brown/70 hover:text-dark-brown"
          >
            ← All work
          </Link>
          <p className="tso-eyebrow mt-6">
            {post.industry} · {post.service_tier}
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-wider2 text-cloud-cotton">
            {post.client}
          </h1>
          <p className="mt-6 max-w-prose2 text-lg text-dark-brown/85">
            {post.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {post.platforms.map((p) => (
              <span
                key={p}
                className="rounded-full bg-cloud-cotton/90 px-3 py-1 text-xs uppercase tracking-widest2 text-dark-brown"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="tso-container -mt-10 pb-12">
        <div className="rounded-3xl border border-dark-brown/10 bg-cloud-cotton p-8 shadow-stamp">
          <p className="tso-eyebrow">hero metric</p>
          <p className="mt-2 font-display text-4xl md:text-5xl">
            {post.hero_metric}
          </p>
        </div>
      </section>

      <article
        className="tso-container prose prose-lg max-w-prose2 prose-headings:font-display prose-headings:tracking-wider2 prose-p:text-dark-brown/85 pb-24"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <section className="bg-dark-brown text-cloud-cotton">
        <div className="tso-container flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Want results like this?
          </h2>
          <Link
            href="/contact"
            className="tso-btn-primary bg-pink-cherub text-dark-brown hover:bg-cloud-cotton"
          >
            Book a discovery call
          </Link>
        </div>
      </section>
    </>
  );
}
