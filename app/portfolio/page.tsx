import PortfolioCard from "@/components/PortfolioCard";
import { getCaseStudyMetas } from "@/lib/portfolio";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  const posts = getCaseStudyMetas();
  const industries = Array.from(new Set(posts.map((p) => p.industry)));
  const platforms = Array.from(new Set(posts.flatMap((p) => p.platforms)));
  const tiers = Array.from(new Set(posts.map((p) => p.service_tier)));

  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-24">
          <p className="tso-eyebrow">the work</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-wider2">
            Portfolio.
          </h1>
          <p className="mt-6 max-w-prose2 text-lg text-dark-brown/75">
            A growing library of brand partnerships across industries and
            platforms. Each case study walks through the challenge, the
            strategy, and the metric we&apos;re proudest of.
          </p>
        </div>
      </section>

      {(industries.length > 0 || platforms.length > 0) && (
        <section className="tso-container -mt-6 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="tso-eyebrow mr-2">filter (preview)</span>
            {[...industries, ...platforms, ...tiers].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-dark-brown/10 bg-cloud-cotton px-3 py-1 text-dark-brown/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="tso-container py-16">
        {posts.length === 0 ? (
          <p className="text-dark-brown/60">Case studies coming soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PortfolioCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
