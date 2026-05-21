export type OptimizedPhotoCategory = "Hero" | "Willa" | "Ogród" | "Pokoje" | "Łazienki";

export type OptimizedPhoto = {
  id: string;
  category: OptimizedPhotoCategory;
  title: string;
  description: string;
  src: string;
};

export const optimizedPhotos: OptimizedPhoto[] = [
  {
    id: "ext-01",
    category: "Hero",
    title: "Willa Szymkówka – fasada (hero)",
    description: "Główne ujęcie fasady Willi Szymkówka w słoneczny dzień.",
    src: "/optimized/ext-01-hero.jpeg",
  },
  {
    id: "ext-02",
    category: "Willa",
    title: "Willa – ujęcie frontowe",
    description: "Front budynku w stylu podhalańskim z drewnianymi detalami.",
    src: "/optimized/ext-02-villa-front.jpeg",
  },
  {
    id: "ext-03",
    category: "Ogród",
    title: "Ogród i elewacja od strony zieleni",
    description: "Widok na willę od strony ogrodu – dużo zieleni i przestrzeni.",
    src: "/optimized/ext-03-villa-garden.jpeg",
  },
  {
    id: "ext-04",
    category: "Ogród",
    title: "Ogród z widokiem na Tatry",
    description: "Ogród w słoneczny dzień z panoramą Tatr w tle.",
    src: "/optimized/ext-04-garden-tatra-view.jpeg",
  },
  {
    id: "int-01",
    category: "Pokoje",
    title: "Sypialnia – detale i obrazy",
    description: "Łóżko i ściana z dekoracjami w pokoju; jasne ściany i drewniana podłoga.",
    src: "/optimized/int-01-bedroom-bed-wall-art.jpeg",
  },
  {
    id: "int-02",
    category: "Pokoje",
    title: "Sypialnia – kącik przy wejściu",
    description: "Fragment pokoju z łóżkiem, lampą i garderobą; ciepłe, przytulne oświetlenie.",
    src: "/optimized/int-02-bedroom-bed-corner-lamp.jpeg",
  },
  {
    id: "int-03",
    category: "Pokoje",
    title: "Pokój – szerokie ujęcie z wejściem",
    description: "Szerokie ujęcie pokoju: łóżko, dekoracje, schody przy wejściu i drewniana podłoga.",
    src: "/optimized/int-03-room-wide-bed-stairs.jpeg",
  },
  {
    id: "int-04",
    category: "Pokoje",
    title: "Strefa dzienna – sofa i wyjście na balkon",
    description: "Strefa dzienna: sofa, komoda i drzwi balkonowe z zasłonami w stylu podhalańskim.",
    src: "/optimized/int-04-room-lounge-sofa.jpeg",
  },
  {
    id: "int-05",
    category: "Pokoje",
    title: "Strefa dzienna – TV i stolik",
    description: "Salonowa część pokoju: TV, stolik, nastrojowe lampy i regionalne detale na tkaninach.",
    src: "/optimized/int-05-room-lounge-tv.jpeg",
  },
  {
    id: "int-06",
    category: "Pokoje",
    title: "Pokój – ujęcie od strony łóżka",
    description: "Ujęcie z widokiem na część dzienną; drewniana podłoga i ciepłe światło.",
    src: "/optimized/int-06-room-wide-from-bed.jpeg",
  },
  {
    id: "int-07",
    category: "Pokoje",
    title: "Strefa dzienna – ujęcie z progu",
    description: "Widok na strefę dzienną z progu: sofa, stolik i duże drzwi balkonowe.",
    src: "/optimized/int-07-room-lounge-from-door.jpeg",
  },
  {
    id: "int-08",
    category: "Pokoje",
    title: "Strefa dzienna – TV (zbliżenie)",
    description: "Zbliżenie na strefę TV: szafka, dywan i lampy; przytulna atmosfera wieczorem.",
    src: "/optimized/int-08-room-tv-close.jpeg",
  },
  {
    id: "bath-01",
    category: "Łazienki",
    title: "Łazienka – prysznic i strefa umywalki",
    description: "Czysta łazienka z prysznicem typu walk-in, jasne płytki i funkcjonalne wyposażenie.",
    src: "/optimized/bath-01-shower.jpeg",
  },
];

