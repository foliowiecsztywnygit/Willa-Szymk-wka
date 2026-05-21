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
    id: "int-09",
    category: "Pokoje",
    title: "Pokój – łóżko i schody przy wejściu",
    description: "Ujęcie pokoju z łóżkiem oraz schodami prowadzącymi do strefy wejściowej.",
    src: "/optimized/int-09-room-bed-stairs.jpeg",
  },
  {
    id: "int-10",
    category: "Pokoje",
    title: "Strefa dzienna – sofa i drzwi balkonowe (wieczór)",
    description: "Kącik wypoczynkowy z sofą, drzwiami na balkon i regionalnymi zasłonami.",
    src: "/optimized/int-10-room-lounge-balcony-door.jpeg",
  },
  {
    id: "int-11",
    category: "Pokoje",
    title: "Pokój – szerokie ujęcie (łóżko, TV, sofa)",
    description: "Szeroki kadr pokazujący sypialnię i część dzienną w jednym ujęciu.",
    src: "/optimized/int-11-room-wide-bed-tv-lounge.jpeg",
  },
  {
    id: "int-12",
    category: "Pokoje",
    title: "Sypialnia i strefa dzienna – jasne wnętrze",
    description: "Łóżko oraz część wypoczynkowa z ciepłym światłem i dużym oknem.",
    src: "/optimized/int-12-room-bed-and-lounge.jpeg",
  },
  {
    id: "int-13",
    category: "Pokoje",
    title: "Strefa dzienna – szerokie ujęcie przy oknie",
    description: "Sofa, stoliki i okno z widokiem; jasne, spokojne wnętrze.",
    src: "/optimized/int-13-room-lounge-wide-window.jpeg",
  },
  {
    id: "int-14",
    category: "Pokoje",
    title: "Strefa dzienna – sofa i dywan (szeroko)",
    description: "Ujęcie salonowej części pokoju z sofą, dywanem i stolikami.",
    src: "/optimized/int-14-room-lounge-sofa-wide.jpeg",
  },
  {
    id: "int-15",
    category: "Pokoje",
    title: "Stolik kawowy – wazon z kwiatami",
    description: "Detale wnętrza: stolik kawowy, wazon i podhalańskie zasłony w tle.",
    src: "/optimized/int-15-room-coffee-table-vase.jpeg",
  },
  {
    id: "int-16",
    category: "Pokoje",
    title: "Stolik kawowy – detale",
    description: "Zbliżenie na stoliki i dekoracje, tworzące przytulny klimat pokoju.",
    src: "/optimized/int-16-room-coffee-table-close.jpeg",
  },
  {
    id: "int-17",
    category: "Pokoje",
    title: "Roślina na stoliku – detal przy oknie",
    description: "Dekoracyjna roślina na drewnianym stoliku, regionalne zasłony w tle.",
    src: "/optimized/int-17-room-plant-side-table.jpeg",
  },
  {
    id: "int-18",
    category: "Pokoje",
    title: "Strefa TV – szafka i dekoracje",
    description: "Telewizor i komoda z dekoracjami w strefie dziennej pokoju.",
    src: "/optimized/int-18-room-tv-wall-cabinet.jpeg",
  },
  {
    id: "int-19",
    category: "Pokoje",
    title: "Komoda i wejście – ujęcie z TV",
    description: "Komoda z dekoracjami oraz wejście do pokoju; praktyczny układ przestrzeni.",
    src: "/optimized/int-19-room-dresser-door-tv.jpeg",
  },
  {
    id: "int-20",
    category: "Pokoje",
    title: "Dekoracje – kosz z dodatkami",
    description: "Kosz z dekoracyjnymi dodatkami w naturalnych kolorach – detal wnętrza.",
    src: "/optimized/int-20-room-decor-basket.jpeg",
  },
  {
    id: "int-21",
    category: "Pokoje",
    title: "Dekoracje – słoje i dodatki",
    description: "Zestaw dekoracyjnych słoików i dodatków na komodzie, podkreślający styl wnętrza.",
    src: "/optimized/int-21-room-decor-jars.jpeg",
  },
  {
    id: "bath-01",
    category: "Łazienki",
    title: "Łazienka – prysznic i strefa umywalki",
    description: "Czysta łazienka z prysznicem typu walk-in, jasne płytki i funkcjonalne wyposażenie.",
    src: "/optimized/bath-01-shower.jpeg",
  },
];
