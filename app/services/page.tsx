import Link from "next/link";

export const metadata = { title: "Services" };

type Cell =
  | { kind: "check"; lines?: string[] }
  | { kind: "reach" };

type Row = {
  label: string;
  description: string;
  starter: Cell;
  savvy: Cell;
  optimist: Cell;
};

const rows: Row[] = [
  {
    label: "Social Media Management",
    description:
      "Posting and managing your company's social media pages across platforms. Highlighting promotions, services, and anything you can dream up.",
    starter: { kind: "check", lines: ["12 posts/mo", "2 platforms"] },
    savvy: { kind: "check", lines: ["20 posts/mo", "4 platforms"] },
    optimist: { kind: "check", lines: ["30 posts/mo", "Unlimited platforms"] },
  },
  {
    label: "Community Engagement",
    description:
      "Monitor and respond to comments, direct messages, and mentions so your business stays an active member in its community.",
    starter: { kind: "check" },
    savvy: { kind: "check" },
    optimist: { kind: "check" },
  },
  {
    label: "Paid Social Ads",
    description:
      "Run targeted paid social campaigns to drive sales, promote events, and put your business in front of an engaged audience.",
    starter: { kind: "reach" },
    savvy: { kind: "check" },
    optimist: { kind: "check" },
  },
  {
    label: "SEO",
    description:
      "Optimize your online presence, so your business shows up effectively in the search process.",
    starter: { kind: "reach" },
    savvy: { kind: "check" },
    optimist: { kind: "check" },
  },
  {
    label: "Content Shoot",
    description:
      "Batch a month's worth of social content in a single shoot day! Handle everything from creative ideation, concept-ing, shooting, & editing.",
    starter: { kind: "reach" },
    savvy: { kind: "reach" },
    optimist: { kind: "check" },
  },
  {
    label: "Influencer + UGC",
    description:
      "Act as the liaison between your company and creators. Handling sourcing creators, pitching, negotiating contracts, and making sure their content is up to your standards.",
    starter: { kind: "reach" },
    savvy: { kind: "reach" },
    optimist: { kind: "check" },
  },
  {
    label: "Email + SMS Marketing",
    description:
      "Run email & SMS campaigns that align with your marketing goals. Whether it's a monthly newsletter, product drops, or new promos, your clientele will stay in the loop.",
    starter: { kind: "reach" },
    savvy: { kind: "reach" },
    optimist: { kind: "reach" },
  },
];

function CellContent({ cell }: { cell: Cell }) {
  if (cell.kind === "reach") {
    return (
      <span className="text-xs italic leading-snug text-dark-brown/60">
        Reach out for customized proposal
      </span>
    );
  }
  return (
    <div className="flex flex-col items-start gap-1">
      <span aria-label="Included" className="text-lg leading-none text-dark-brown">
        ✓
      </span>
      {cell.lines && (
        <span className="text-xs leading-snug text-dark-brown/70">
          {cell.lines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}

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
            Three set tiers. No negotiation. We work with growth-minded brands
            ready to invest in their social, value creative freedom, and want
            to grow without burning out on content.
          </p>
        </div>
      </section>

      <section className="tso-container pb-24">
        <div className="overflow-x-auto rounded-3xl border border-dark-brown/10 bg-cloud-cotton shadow-stamp">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-cloud-cotton px-6 py-6 align-bottom">
                  <span className="tso-eyebrow">compare plans</span>
                </th>
                <th className="px-6 py-6 align-bottom">
                  <span className="tso-eyebrow">description</span>
                </th>
                <th className="px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Starter</p>
                  <p className="mt-2 font-display text-2xl leading-none">
                    $2,000<span className="text-sm text-dark-brown/60">/mo</span>
                  </p>
                </th>
                <th className="bg-pink-cherub/30 px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Savvy</p>
                  <p className="mt-2 font-display text-2xl leading-none">
                    $3,500<span className="text-sm text-dark-brown/60">/mo</span>
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-pink-cherub px-2.5 py-0.5 text-[10px] uppercase tracking-widest2 text-dark-brown">
                    Most popular
                  </span>
                </th>
                <th className="px-6 py-6 align-bottom">
                  <p className="tso-eyebrow">Social Optimist</p>
                  <p className="mt-2 font-display text-2xl leading-none">
                    $5,000<span className="text-sm text-dark-brown/60">/mo</span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={i % 2 === 0 ? "bg-cloud-cotton" : "bg-cloud-cotton-deep/30"}
                >
                  <td className="sticky left-0 z-10 bg-inherit px-6 py-5 align-top text-sm font-medium uppercase tracking-widest2 text-dark-brown">
                    {r.label}
                  </td>
                  <td className="max-w-xs px-6 py-5 align-top text-sm text-dark-brown/75">
                    {r.description}
                  </td>
                  <td className="px-6 py-5 align-top text-sm">
                    <CellContent cell={r.starter} />
                  </td>
                  <td className="bg-pink-cherub/20 px-6 py-5 align-top text-sm">
                    <CellContent cell={r.savvy} />
                  </td>
                  <td className="px-6 py-5 align-top text-sm">
                    <CellContent cell={r.optimist} />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="sticky left-0 z-10 bg-cloud-cotton px-6 py-6" />
                <td className="px-6 py-6" />
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

      <section className="tso-container py-12 text-center md:py-16">
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
