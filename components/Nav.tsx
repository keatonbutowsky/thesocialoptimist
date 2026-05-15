"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-dark-brown/5 bg-cloud-cotton/90 backdrop-blur">
      <div className="tso-container flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-3 -m-2 p-2"
          aria-label="The Social Optimist home"
        >
          <img
            src="/brand/tso-logo.svg"
            alt=""
            aria-hidden="true"
            className="hidden h-10 w-auto sm:block md:h-12"
          />
          <img
            src="/brand/tso-wordmark.svg"
            alt="The Social Optimist"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-dark-brown/80 transition hover:bg-pink-cherub/40 hover:text-dark-brown"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 tso-btn-primary text-xs px-4 py-2"
          >
            Book a call
          </Link>
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            onClick={close}
            className="tso-btn-primary text-sm px-4 py-2.5 min-h-[44px]"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-brown/15 text-dark-brown"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden border-t border-dark-brown/10 bg-cloud-cotton">
          <ul className="tso-container py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className="flex min-h-[44px] items-center rounded-2xl px-3 py-3 text-base text-dark-brown/85 hover:bg-pink-cherub/30"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
