import type { Metadata } from "next";
import { Alice, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alice",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesocialoptimist.com"),
  title: {
    default: "The Social Optimist — Creative optimists. Social optimizers.",
    template: "%s · The Social Optimist",
  },
  description:
    "A Dallas-based creative agency focusing on brand strategy and social media exposure for growth-minded businesses nationwide.",
  openGraph: {
    title: "The Social Optimist",
    description:
      "Creative optimists. Social optimizers. Social media strategy & management out of Dallas.",
    url: "https://thesocialoptimist.com",
    siteName: "The Social Optimist",
    images: ["/brand/avatar-pink-tso.svg"],
    type: "website",
  },
  icons: {
    icon: "/brand/avatar-pink-tso.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${alice.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
