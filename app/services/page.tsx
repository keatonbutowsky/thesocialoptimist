import Link from "next/link";

const tiers = [
  {
    name: "Social Starter",
    price: 2000,
    posts: 12,
    platforms: "2 platforms",
    features: ["12 posts / month", "2 platforms", "Community engagement", "Monthly strategy call"],
    note: "Best for brands testing the waters or launching a focused channel.",
  },
  {
    name: "Social Savvy",
    price: 3500,
    posts: 20,
    platforms: "Unlimited",
    features: [
      "20 posts / month",
      "Unlimited platforms",
      "Community engagement",
      "Quarterly content shoot",
      "Paid social + SEO",
    ],
    note: "Our most popular tier — full content engine with paid amplification.",
    highlight: true,
  },
  {
    name: "Social Optimist",
    price: 5000,
    posts: 20,
    platforms: "Unlimited",
    features: [
      "Everything in Savvy",
      "Dedicated creative team",
      "Monthly content shoot",
      "Influencer + UGC partnerships",
      "Email & SMS marketing add-on",
    ],
    note: "For brands ready to run social like a category leader.",
  },
];

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-24">
          <p className="tso-eyebrow">services & investment</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-wider2">
            Plans built for <span className="italic">growth-minded</span> brands.
          </h1>
          <p className="mt-6 max-w-prose2 text-lg text-dark-brown/75">
            Three set tiers. No negotiation. We work with profitable brands who
            value creative freedom and want to grow without burning out on
            content. Add-on services unlock as your strategy matures.
          </p>
        </div>
      </section>

      <section className="tso-container pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "flex flex-col rounded-3xl p-8 transition " +
                (t.highlight
                  ? "bg-pink-cherub text-dark-brown shadow-stamp"
                  : "border border-dark-brown/10 bg-cloud-cotton")
              }
            >
              {t.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-cloud-cotton px-3 py-1 text-[10px] uppercase tracking-widest2">
                  Most popular
                </span>
              )}
              <p className="tso-eyebrow">{t.name}</p>
              <p className="mt-4 font-display text-5xl">
                ${t.price.toLocaleString()}
                <span className="text-base text-dark-brown/60">/mo</span>
              </p>
              <p className="mt-3 text-sm text-dark-brown/70">{t.note}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-dark-brown/60" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={
                  "mt-8 " +
                  (t.highlight ? "tso-btn-primary bg-dark-brown text-cloud-cotton" : "tso-btn-secondary")
                }
              >
                Start with {t.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cloud-cotton-deep/40 py-24">
        <div className="tso-container">
          <p className="tso-eyebrow">add-ons</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">When the strategy calls for more.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["SEO & paid media", "Search and social ad campaigns aligned with your organic engine."],
              ["UGC + influencer", "Local creators and aligned voices booked, briefed, and managed."],
              ["Content shoots", "Half-day or full-day shoots to feed 30–90 days of content."],
              ["Email marketing", "Lifecycle and broadcast campaigns that match your social voice."],
              ["SMS marketing", "High-intent flows for launches, drops, and loyalty moments."],
              ["Advisory", "Quarterly strategy retainers for in-house teams who want a co-pilot."],
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
        <h2 className="font-display text-3xl md:text-4xl">Not sure which tier fits?</h2>
        <p className="mt-4 text-dark-brown/70">
          A 30-minute call usually answers it. We&apos;ll show you what we&apos;d do in the first 90 days.
        </p>
        <Link href="/contact" className="mt-8 inline-flex tso-btn-primary">
          Book a discovery call
        </Link>
      </section>
    </>
  );
}
