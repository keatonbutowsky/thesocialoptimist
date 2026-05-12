import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/portfolio";

export default function PortfolioCard({ post }: { post: CaseStudyMeta }) {
  return (
    <Link
      href={`/portfolio/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-dark-brown/10 bg-pink-cherub-soft/40 transition hover:border-dark-brown/30 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-pink-cherub">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/brand/monogram-pink-stamp-no-bg.svg"
            alt=""
            className="h-1/2 w-1/2 opacity-90 transition group-hover:scale-105"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-cloud-cotton/95 px-3 py-1 text-[10px] uppercase tracking-widest2 text-dark-brown">
          {post.industry}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <p className="tso-eyebrow">{post.platforms.join(" · ")}</p>
        <h3 className="font-display text-2xl tracking-wider2">{post.client}</h3>
        <p className="text-sm text-dark-brown/70">{post.hero_metric}</p>
        <p className="mt-3 text-sm text-dark-brown/60 line-clamp-2">{post.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-dark-brown">
          Read the case study →
        </span>
      </div>
    </Link>
  );
}
