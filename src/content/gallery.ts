export type GalleryCategory = "Willa" | "Ogród" | "Widoki";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  alt: string;
  src: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "room-2",
    category: "Willa",
    title: "Willa – ujęcie frontowe",
    alt: "Willa Szymkówka – front budynku w stylu podhalańskim",
    src: "/2.jpeg",
  },
  {
    id: "bath-1",
    category: "Ogród",
    title: "Ogród przy willi",
    alt: "Zadbany ogród przy Willi Szymkówka",
    src: "/3.jpeg",
  },
  {
    id: "bath-2",
    category: "Widoki",
    title: "Zieleń i Tatry w tle",
    alt: "Zielona okolica Zakopanego z widokiem na Tatry",
    src: "/1.jpeg",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Willa",
  "Ogród",
  "Widoki",
];

