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
