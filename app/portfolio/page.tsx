import Link from "next/link";
import {
  gallery,
  gallerySections,
  slugifySection,
} from "@/content/gallery";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-pink-cherub">
        <div className="tso-container py-14 md:py-24">
          <p className="tso-eyebrow text-dark-brown/70">the work</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-wider2 text-cloud-cotton sm:text-5xl md:text-6xl">
            Our work, by category.
          </h1>
          <p className="mt-6 max-w-prose2 text-base text-dark-brown/85 sm:text-lg">
            Short-form video, lifestyle content, and live event work — pulled
            straight from the platforms our audience already lives on. Pick a
            category to see more.
          </p>
        </div>
      </section>

      <section className="tso-container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {gallerySections.map((sec) => {
            const items = gallery.filter((g) => g.section === sec);
            const cover = items[0];
            const slug = slugifySection(sec);
            return (
              <Link
                key={sec}
                href={`/portfolio/${slug}`}
                className="group relative overflow-hidden rounded-2xl bg-dark-brown/5 sm:rounded-3xl"
                style={{ aspectRatio: "9 / 16" }}
              >
                {cover ? (
                  <video
                    src={cover.src}
                    poster={cover.poster}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="h-full w-full bg-pink-cherub/30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/85 via-dark-brown/20 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
                  <h2 className="font-display text-xl text-cloud-cotton sm:text-2xl md:text-3xl">
                    {sec}
                  </h2>
                  <p className="text-[10px] uppercase tracking-widest2 text-cloud-cotton/70 sm:text-xs">
                    {items.length} {items.length === 1 ? "post" : "posts"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
