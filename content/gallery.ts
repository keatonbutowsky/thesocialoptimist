// All content lives in gallery.json so Megan can edit videos, labels,
// categories, and platforms without touching code.
// See public/videos/_MEGAN_README.md for the editing workflow.

import data from "./gallery.json";

export type Platform = "Instagram" | "TikTok";
export type Aspect = "9:16" | "1:1" | "16:9";
export type GallerySection = string;

export type GalleryItem = {
  section: GallerySection;
  src: string;
  clientType: string;
  contentType: string;
  platform?: Platform;
  poster?: string;
  aspect?: Aspect;
};

export const gallerySections = data.sections as readonly GallerySection[];
export const gallery = data.items as GalleryItem[];

export function slugifySection(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findSectionBySlug(slug: string): GallerySection | undefined {
  return gallerySections.find((s) => slugifySection(s) === slug);
}
