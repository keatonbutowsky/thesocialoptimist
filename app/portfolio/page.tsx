import GalleryGrid from "@/components/GalleryGrid";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-pink-cherub">
        <div className="tso-container py-14 md:py-24">
          <p className="tso-eyebrow text-dark-brown/70">the work</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-wider2 text-cloud-cotton sm:text-5xl md:text-6xl">
            Our work, live from the feed.
          </h1>
          <p className="mt-6 max-w-prose2 text-base text-dark-brown/85 sm:text-lg">
            Short-form video, lifestyle content, and the wedding work we&apos;re
            proudest of — pulled straight from the platforms our audience
            already lives on.
          </p>
        </div>
      </section>

      <GalleryGrid />
    </>
  );
}
