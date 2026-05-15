"use client";

import { useEffect, useMemo, useState } from "react";
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

const platformOptions: PlatformFilter[] = ["All", "Instagram", "TikTok"];

type Props = {
  /** When set, hides the section filter and shows only items from that section. */
  lockedSection?: GallerySection;
};

export default function GalleryGrid({ lockedSection }: Props) {
  const sectionOptions: SectionFilter[] = ["All", ...gallerySections];
  const [section, setSection] = useState<SectionFilter>(
    lockedSection ?? "All"
  );
  const [platform, setPlatform] = useState<PlatformFilter>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const effectiveSection: SectionFilter = lockedSection ?? section;

  const filtered = useMemo(
    () =>
      gallery.filter((g) => {
        const matchSection =
          effectiveSection === "All" || g.section === effectiveSection;
        const matchPlatform = platform === "All" || g.platform === platform;
        return matchSection && matchPlatform;
      }),
    [effectiveSection, platform]
  );

  const visibleSections =
    effectiveSection === "All"
      ? gallerySections
      : ([effectiveSection] as GallerySection[]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <>
      <div className="tso-container pt-10 pb-2">
        <div className="space-y-4">
          {!lockedSection && (
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
          )}
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
            <section key={sec} className="tso-container py-8 md:py-12">
              {!lockedSection && (
                <h2 className="mb-6 font-display text-2xl tracking-wider2 md:mb-8 md:text-3xl">
                  {sec}
                </h2>
              )}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Card
                    key={item.src + i}
                    item={item}
                    onOpen={() => setLightbox(item)}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}

      {lightbox && (
        <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

function Card({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <figure className="flex flex-col gap-2 sm:gap-3">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Play ${item.clientType} ${item.contentType}`}
        className="group relative w-full overflow-hidden rounded-xl bg-dark-brown/5 sm:rounded-3xl"
        style={{ aspectRatio: "9 / 16" }}
      >
        <video
          src={item.src}
          poster={item.poster}
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-brown/0 transition group-hover:bg-dark-brown/15">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cloud-cotton/90 text-dark-brown opacity-90 shadow-stamp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
      <figcaption className="px-1">
        <p className="text-[10px] uppercase tracking-widest2 text-dark-brown/85 sm:text-xs">
          {item.clientType}
        </p>
        <p className="hidden text-xs uppercase tracking-widest2 text-dark-brown/55 sm:block">
          {item.contentType}
        </p>
      </figcaption>
    </figure>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-brown/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cloud-cotton/90 text-dark-brown shadow-stamp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md"
      >
        <VideoEmbed
          src={item.src}
          poster={item.poster}
          aspect={item.aspect ?? "9:16"}
        />
        <div className="mt-4 text-center text-cloud-cotton">
          <p className="text-xs uppercase tracking-widest2">{item.clientType}</p>
          <p className="text-xs uppercase tracking-widest2 text-cloud-cotton/60">
            {item.contentType}
          </p>
        </div>
      </div>
    </div>
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
