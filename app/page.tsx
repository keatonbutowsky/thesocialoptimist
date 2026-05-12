import Link from "next/link";
import MonogramBadge from "@/components/MonogramBadge";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-pink-cherub">
        <div className="tso-container relative grid items-center gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-28">
          <div>
            <h1 className="font-display text-[clamp(2.5rem,11vw,5rem)] leading-[1.05] tracking-wider2 text-cloud-cotton md:text-7xl">
              creative
              <br />
              optimists.
              <br />
              <span className="italic text-dark-brown">social</span> optimizers.
            </h1>
            <p className="mt-6 max-w-prose2 text-base text-dark-brown/80 sm:text-lg md:mt-8">
              Social media strategy & management for profitable, growth-minded
              brands. We trade algorithm anxiety for authentic growth — through
              community, psychology, and a whole lot of creativity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/contact" className="tso-btn-primary">Book a discovery call</Link>
              <Link href="/portfolio" className="tso-btn-secondary">See the work</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/photos/megan-hero.jpg"
              alt="Megan Williams, founder of The Social Optimist"
              width={768}
              height={1024}
              className="w-full max-w-[260px] rounded-3xl object-cover aspect-[3/4] shadow-stamp md:max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* MISSION STRIP — with portrait */}
      <section className="tso-container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-12">
          <div>
            <p className="tso-eyebrow">what we believe</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Less time questioning. More time creating.
            </h2>
            <div className="mt-5 space-y-5 text-base text-dark-brown/80 sm:text-lg md:mt-6">
              <p>
                Social media can be powerful when it&apos;s built on connection
                instead of manipulation. We work with founders who want to grow
                the right way — culturally aware, creatively brave, and rooted
                in community.
              </p>
              <p>
                The optimist&apos;s edge: psychology, AI, and a trend-starter
                mindset, pointed at the platforms your audience actually lives
                on.
              </p>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/photos/megan-mission.jpg"
              alt="Megan Williams, founder of The Social Optimist"
              width={800}
              height={1000}
              className="mx-auto w-full max-w-xs rounded-3xl object-cover aspect-[4/5] shadow-stamp md:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-cloud-cotton-deep/40 py-24">
        <div className="tso-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tso-eyebrow">services</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Three ways to work together.
              </h2>
            </div>
            <Link href="/services" className="hidden sm:inline-flex tso-link text-sm">
              See full breakdown →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Social Starter", price: "$2,000", note: "12 posts · 2 platforms · community engagement" },
              { name: "Social Savvy", price: "$3,500", note: "20 posts · unlimited platforms · paid + SEO" },
              { name: "Social Optimist", price: "$5,000", note: "Full creative team · content shoot included" },
            ].map((t) => (
              <div key={t.name} className="tso-card flex flex-col">
                <p className="tso-eyebrow">{t.name}</p>
                <p className="mt-4 font-display text-4xl">{t.price}<span className="text-base text-dark-brown/60">/mo</span></p>
                <p className="mt-4 text-sm text-dark-brown/70">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-dark-brown text-cloud-cotton">
        <div className="tso-container flex flex-col items-center gap-8 py-24 text-center">
          <MonogramBadge size={72} className="opacity-90" />
          <h2 className="font-display text-3xl tracking-wider2 md:text-4xl">
            Ready to feed the algorithm something it&apos;ll love?
          </h2>
          <p className="max-w-xl text-cloud-cotton/70">
            Book a 30-minute discovery call. We&apos;ll talk goals, fit, and
            whether the optimist approach is right for your brand.
          </p>
          <Link href="/contact" className="tso-btn-primary bg-pink-cherub text-dark-brown hover:bg-cloud-cotton">
            Book a discovery call
          </Link>
        </div>
      </section>
    </>
  );
}
