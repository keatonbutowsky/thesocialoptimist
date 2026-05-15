import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 bg-dark-brown text-cloud-cotton">
      <div className="tso-container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/brand/tso-logo.svg"
              alt="The Social Optimist"
              className="h-28 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm text-cloud-cotton/70">
              A Dallas-based creative agency focusing on brand strategy and
              social media exposure for businesses nationwide.
            </p>
          </div>
          <div>
            <p className="tso-eyebrow text-cloud-cotton/60">Explore</p>
            <ul className="mt-4 text-sm">
              <li><Link href="/services" className="inline-flex min-h-[44px] items-center hover:text-pink-cherub">Services</Link></li>
              <li><Link href="/portfolio" className="inline-flex min-h-[44px] items-center hover:text-pink-cherub">Portfolio</Link></li>
              <li><Link href="/about" className="inline-flex min-h-[44px] items-center hover:text-pink-cherub">About</Link></li>
              <li><Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-pink-cherub">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="tso-eyebrow text-cloud-cotton/60">Say hi</p>
            <ul className="mt-4 text-sm">
              <li><a href="mailto:hello@thesocialoptimist.com" className="inline-flex min-h-[44px] items-center hover:text-pink-cherub">hello@thesocialoptimist.com</a></li>
              <li className="py-2">Dallas, TX</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              {/* TODO: real URL */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-cotton/20 transition hover:border-pink-cherub hover:text-pink-cherub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TODO: real URL */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-cotton/20 transition hover:border-pink-cherub hover:text-pink-cherub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52V5.9a4.85 4.85 0 0 1-1.84-.21z" />
                </svg>
              </a>
              {/* TODO: real URL */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-cotton/20 transition hover:border-pink-cherub hover:text-pink-cherub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cloud-cotton/15 pt-6 text-xs text-cloud-cotton/60 md:flex-row">
          <p>© {new Date().getFullYear()} The Social Optimist · Megan Williams</p>
          <p className="italic">creative optimists. social optimizers.</p>
        </div>
      </div>
    </footer>
  );
}
