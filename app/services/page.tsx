import Link from "next/link";

export const metadata = { title: "Services" };

type Row = {
  label: string;
  starter: string;
  savvy: string;
  optimist: string;
};

const rows: Row[] = [
  { label: "Monthly investment", starter: "$2,000", savvy: "$3,500", optimist: "$5,000" },
  { label: "Posts / month", starter: "12", savvy: "20", optimist: "20" },
  { label: "Platforms", starter: "2", savvy: "Unlimited", optimist: "Unlimited" },
  { label: "Community engagement", starter: "✓", savvy: "✓", optimist: "✓" },
  { label: "Content shoot", starter: "Add-on", savvy: "Add-on", optimist: "Included" },
  { label: "Paid social + SEO", starter: "—", savvy: "✓", optimist: "✓" },
  { label: "Influencer + UGC partnerships", starter: "—", savvy: "—", optimist: "✓" },
  { label: "Email / SMS marketing", starter: "—", savvy: "—", optimist: "Add-on" },
];

const addOns = [
  ["SEO & paid media", "Search and social ad campaigns aligned with your organic engine."],
  ["UGC + influencer", "Local creators and aligned voices booked, briefed, and managed."],
  ["Content shoots", "Half-day or full-day shoots to feed 30–90 days of content."],
  ["Email marketing", "Lifecycle and broadcast campaigns that match your social voice."],
  ["SMS marketing", "High-intent flows for launches, drops, and loyalty moments."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-16 md:py-24">
          <p className="tso-eyebrow">services & investment</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-wider2 sm:text-5xl md:text-6xl">
            Plans built for <span className="italic whitespace-nowrap">growth-minded</span> brands.
          </h1>
          <p className="mt-6 max-w-prose2 text-base text-dark-brown/75 sm:text-lg">
            Three set tiers. No negotiation. We work with profitable brands who
            value creative freedom and want to grow without burning out on
            content.
          </p>
        </div>
      </section>

      <section className="tso-container pb-24">
        <div className="overflow-x-auto rounded-3xl border border-dark-brown/10 bg-cloud-cotton shadow-stamp">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-cloud-cotton px-6 py-6 align-bottom">
                  <span className="tso-eyebrow">compare plans</span>
                </th>
                <th className="px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Starter</p>
                </th>
                <th className="bg-pink-cherub/30 px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Savvy</p>
                  <span className="mt-2 inline-flex rounded-full bg-pink-cherub px-2.5 py-0.5 text-[10px] uppercase tracking-widest2 text-dark-brown">
                    Most popular
                  </span>
                </th>
                <th className="px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Optimist</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={i % 2 === 0 ? "bg-cloud-cotton" : "bg-cloud-cotton-deep/30"}
                >
                  <td className="sticky left-0 z-10 bg-inherit px-6 py-4 text-sm font-medium text-dark-brown/80">
                    {r.label}
                  </td>
                  <td className="px-6 py-4 text-sm">{r.starter}</td>
                  <td className="bg-pink-cherub/20 px-6 py-4 text-sm font-medium">{r.savvy}</td>
                  <td className="px-6 py-4 text-sm">{r.optimist}</td>
                </tr>
              ))}
              <tr>
                <td className="sticky left-0 z-10 bg-cloud-cotton px-6 py-6" />
                <td className="px-6 py-6">
                  <Link href="/contact" className="tso-btn-secondary text-xs px-4 py-2">
                    Start with Starter
                  </Link>
                </td>
                <td className="bg-pink-cherub/20 px-6 py-6">
                  <Link href="/contact" className="tso-btn-primary text-xs px-4 py-2">
                    Start with Savvy
                  </Link>
                </td>
                <td className="px-6 py-6">
                  <Link href="/contact" className="tso-btn-secondary text-xs px-4 py-2">
                    Start with Optimist
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-dark-brown/50 sm:hidden">Swipe to compare →</p>
      </section>

      <section className="bg-cloud-cotton-deep/40 py-24">
        <div className="tso-container">
          <p className="tso-eyebrow">add-ons</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">When the strategy calls for more.</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map(([title, body]) => (
              <li key={title} className="tso-card">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-dark-brown/70">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tso-container py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Not sure which tier fits?</h2>
        <p className="mt-4 text-dark-brown/70">
          A 30-minute call usually answers it.
        </p>
        <Link href="/contact" className="mt-8 inline-flex tso-btn-primary">
          Book a discovery call
        </Link>
      </section>
    </>
  );
}
