import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-14 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:py-24">
          <div>
            <p className="tso-eyebrow">about</p>
            <h1 className="mt-4 font-display text-[clamp(2rem,9vw,3.5rem)] leading-tight tracking-wider2 md:text-6xl">
              Founded in Dallas by Megan Williams.
            </h1>
            <p className="mt-6 max-w-prose2 text-base text-dark-brown/80 sm:text-lg">
              The Social Optimist was founded by Megan Williams to do social
              media a different way. After years of watching brands lean into
              fear, comparison, and copycat tactics, she wanted to build the
              opposite — a creative shop that grows brands through community,
              psychology, and a genuine belief that the internet can still be a
              good place to be.
            </p>
            <p className="mt-4 max-w-prose2 text-base text-dark-brown/80 sm:text-lg">
              Trend starter, not a trend chaser. Culturally aware, adaptable,
              and obsessed with the craft of short-form content.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/photos/megan-about.jpg"
              alt="Megan Williams, founder of The Social Optimist"
              width={800}
              height={1000}
              className="mx-auto w-full max-w-xs rounded-3xl object-cover aspect-[4/5] shadow-stamp md:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud-cotton-deep/40 py-24">
        <div className="tso-container">
          <p className="tso-eyebrow">what we value</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Originality", "We'd rather start the trend than ride it."],
              ["Creative storytelling", "Strategy is invisible. Storytelling is what people remember."],
              ["Community", "Audiences aren't numbers — they're neighbors."],
              ["Cultural awareness", "We pay attention to the room before we speak in it."],
              ["Adaptability", "Platforms change. Principles don't."],
              ["Growth, the right way", "Sustainable, brand-safe, and built to last."],
            ].map(([title, body]) => (
              <div key={title} className="tso-card">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-dark-brown/70">{body}</p>
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
