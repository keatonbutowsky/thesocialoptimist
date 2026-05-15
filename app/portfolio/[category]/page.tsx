import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryGrid from "@/components/GalleryGrid";
import {
  findSectionBySlug,
  gallerySections,
  slugifySection,
} from "@/content/gallery";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return gallerySections.map((s) => ({ category: slugifySection(s) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const section = findSectionBySlug(category);
  if (!section) return { title: "Portfolio" };
  return { title: `${section} · Portfolio` };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const section = findSectionBySlug(category);
  if (!section) notFound();

  return (
    <>
      <section className="bg-pink-cherub">
        <div className="tso-container py-12 md:py-20">
          <Link
            href="/portfolio"
            className="tso-eyebrow text-dark-brown/70 hover:text-dark-brown"
          >
            ← all categories
          </Link>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-wider2 text-cloud-cotton sm:text-5xl md:text-6xl">
            {section}.
          </h1>
        </div>
      </section>

      <GalleryGrid lockedSection={section} />
    </>
  );
}
