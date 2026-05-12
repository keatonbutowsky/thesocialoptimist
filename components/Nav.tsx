import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-dark-brown/5 bg-cloud-cotton/90 backdrop-blur">
      <div className="tso-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="The Social Optimist home">
          <img
            src="/brand/avatar-pink-tso.svg"
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <span className="font-display text-lg tracking-wider2 hidden sm:inline">
            the social optimist
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-dark-brown/80 transition hover:bg-pink-cherub/40 hover:text-dark-brown"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 tso-btn-primary text-xs px-4 py-2">
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
