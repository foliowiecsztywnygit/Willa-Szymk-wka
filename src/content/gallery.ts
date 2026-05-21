import { optimizedPhotos, type OptimizedPhotoCategory } from "@/content/optimizedPhotos";

export type GalleryCategory = Exclude<OptimizedPhotoCategory, "Hero">;

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  alt: string;
  src: string;
};

export const galleryItems: GalleryItem[] = optimizedPhotos
  .filter((p) => p.category !== "Hero")
  .map((p) => ({
    id: p.id,
    category: p.category as GalleryCategory,
    title: p.title,
    alt: p.description,
    src: p.src,
  }));

export const galleryCategories: GalleryCategory[] = [
  "Willa",
  "Ogród",
  "Pokoje",
  "Łazienki",
];

