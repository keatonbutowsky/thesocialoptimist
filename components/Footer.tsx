import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 bg-dark-brown text-cloud-cotton">
      <div className="tso-container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/brand/wordmark-stacked-cream.svg"
              alt="The Social Optimist"
              className="h-28 w-auto"
              style={{ filter: "invert(0)" }}
            />
            <p className="mt-6 max-w-sm text-sm text-cloud-cotton/70">
              Dallas-based social media strategy & management for profitable,
              growth-minded brands. Authentic growth via community, psychology,
              and creativity.
            </p>
          </div>
          <div>
            <p className="tso-eyebrow text-cloud-cotton/60">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-pink-cherub">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-pink-cherub">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-pink-cherub">About</Link></li>
              <li><Link href="/contact" className="hover:text-pink-cherub">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="tso-eyebrow text-cloud-cotton/60">Say hi</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:hello@thesocialoptimist.com" className="hover:text-pink-cherub">hello@thesocialoptimist.com</a></li>
              <li>Dallas, TX</li>
              <li><a href="https://instagram.com" className="hover:text-pink-cherub">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cloud-cotton/15 pt-6 text-xs text-cloud-cotton/60 md:flex-row">
          <p>© {new Date().getFullYear()} The Social Optimist · Megan & Keaton Butowsky</p>
          <p className="italic">creative optimists. social optimizers.</p>
        </div>
      </div>
    </footer>
  );
}
