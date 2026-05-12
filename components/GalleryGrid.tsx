"use client";

import { useMemo, useState } from "react";
import VideoEmbed from "./VideoEmbed";
import {
  gallery,
  gallerySections,
  type GalleryItem,
  type GallerySection,
  type Platform,
} from "@/content/gallery";

type SectionFilter = "All" | GallerySection;
type PlatformFilter = "All" | Platform;

const sectionOptions: SectionFilter[] = ["All", ...gallerySections];
const platformOptions: PlatformFilter[] = ["All", "Instagram", "TikTok"];

export default function GalleryGrid() {
  const [section, setSection] = useState<SectionFilter>("All");
  const [platform, setPlatform] = useState<PlatformFilter>("All");

  const filtered = useMemo(
    () =>
      gallery.filter((g) => {
        const matchSection = section === "All" || g.section === section;
        const matchPlatform = platform === "All" || g.platform === platform;
        return matchSection && matchPlatform;
      }),
    [section, platform]
  );

  const visibleSections =
    section === "All" ? gallerySections : ([section] as GallerySection[]);

  return (
    <>
      <div className="tso-container pt-10 pb-2">
        <div className="space-y-4">
          <div>
            <p className="tso-eyebrow mb-2">filter by section</p>
            <div className="flex flex-wrap gap-2">
              {sectionOptions.map((opt) => (
                <Chip
                  key={opt}
                  active={section === opt}
                  onClick={() => setSection(opt)}
                >
                  {opt}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="tso-eyebrow mb-2">filter by platform</p>
            <div className="flex flex-wrap gap-2">
              {platformOptions.map((opt) => (
                <Chip
                  key={opt}
                  active={platform === opt}
                  onClick={() => setPlatform(opt)}
                >
                  {opt}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="tso-container py-16 text-center text-dark-brown/60">
          Nothing here yet — try a different filter.
        </div>
      ) : (
        visibleSections.map((sec) => {
          const items = filtered.filter((g) => g.section === sec);
          if (items.length === 0) return null;
          return (
            <section key={sec} className="tso-container py-12">
              <h2 className="mb-8 font-display text-2xl tracking-wider2 md:text-3xl">
                {sec}
              </h2>
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Card key={item.src + i} item={item} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}

function Card({ item }: { item: GalleryItem }) {
  return (
    <figure className="flex flex-col gap-3">
      <VideoEmbed
        src={item.src}
        poster={item.poster}
        aspect={item.aspect ?? "9:16"}
      />
      <figcaption className="px-1">
        <p className="text-xs uppercase tracking-widest2 text-dark-brown/85">
          {item.clientType}
        </p>
        <p className="text-xs uppercase tracking-widest2 text-dark-brown/55">
          {item.contentType}
        </p>
      </figcaption>
    </figure>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex min-h-[44px] items-center rounded-full px-4 py-2 text-xs uppercase tracking-widest2 transition " +
        (active
          ? "bg-dark-brown text-cloud-cotton"
          : "border border-dark-brown/15 bg-cloud-cotton text-dark-brown/70 hover:border-dark-brown/40")
      }
    >
      {children}
    </button>
  );
}
