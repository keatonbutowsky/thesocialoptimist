import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-24 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="tso-eyebrow">about</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-wider2">
              Built by two optimists in Dallas.
            </h1>
            <p className="mt-6 max-w-prose2 text-lg text-dark-brown/80">
              The Social Optimist was founded by Megan & Keaton Butowsky to do
              social media a different way. After years of watching brands lean
              into fear, comparison, and copycat tactics, we wanted to build the
              opposite — a creative shop that grows brands through community,
              psychology, and a genuine belief that the internet can still be a
              good place to be.
            </p>
            <p className="mt-4 max-w-prose2 text-lg text-dark-brown/80">
              We&apos;re trend starters, not trend chasers. Culturally aware,
              adaptable, and obsessed with the craft of short-form content.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/brand/monogram-pink-stamp.svg"
              alt=""
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud-cotton-deep/40 py-24">
        <div className="tso-container">
          <p className="tso-eyebrow">what we value</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Originality", "We&apos;d rather start the trend than ride it."],
              ["Creative storytelling", "Strategy is invisible. Storytelling is what people remember."],
              ["Community", "Audiences aren&apos;t numbers — they&apos;re neighbors."],
              ["Cultural awareness", "We pay attention to the room before we speak in it."],
              ["Adaptability", "Platforms change. Principles don&apos;t."],
              ["Growth, the right way", "Sustainable, brand-safe, and built to last."],
            ].map(([title, body]) => (
              <div key={title} className="tso-card">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-dark-brown/70" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tso-container py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Think we&apos;d be a fit?</h2>
        <Link href="/contact" className="mt-8 inline-flex tso-btn-primary">
          Say hi
        </Link>
      </section>
    </>
  );
}
