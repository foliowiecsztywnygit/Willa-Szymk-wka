export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  sections: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

export const posts: Post[] = [
  {
    slug: "dolina-strazyska-przewodnik",
    title: "Co warto zobaczyć w Dolinie Strążyskiej? Przewodnik dla gości Willi Szymkówka",
    excerpt:
      "Dolina Strążyska to jeden z najpiękniejszych, a przy tym najbardziej dostępnych szlaków w Zakopanem. Zobacz, jak zaplanować spacer, co zabrać i kiedy iść, aby było najspokojniej.",
    date: "2026-05-19",
    readingTime: "6 min",
    sections: [
      {
        type: "p",
        text: "Jeśli cenisz ciszę, zieleń i bliskość gór bez długich dojazdów, Dolina Strążyska jest idealnym wyborem. Z Willi Szymkówka dojdziesz do wejścia na szlak dosłownie w kilka chwil.",
      },
      { type: "h2", text: "Dlaczego warto wybrać Dolinę Strążyską?" },
      {
        type: "ul",
        items: [
          "Krótki, widokowy spacer dobry o każdej porze roku",
          "Przyjemny mikroklimat i szum potoku po drodze",
          "Możliwość dojścia do wodospadu Siklawica",
          "Szybki start ze spokojnej dzielnicy przy ul. Strążyskiej",
        ],
      },
      { type: "h2", text: "Jak zaplanować wyjście, żeby było naprawdę komfortowo?" },
      {
        type: "p",
        text: "Największy komfort daje start rano lub późnym popołudniem, kiedy na szlaku jest mniej osób. W cieplejsze dni warto zabrać wodę, a jesienią lekką kurtkę przeciwdeszczową. Po powrocie docenisz aneks kuchenny – szybka herbata i chwila odpoczynku robią różnicę.",
      },
      { type: "h2", text: "Wskazówka od gospodarza" },
      {
        type: "p",
        text: "Zarezerwuj pobyt tak, aby mieć choć jeden pełny dzień bez pośpiechu. W Tatrach liczy się rytm – spokojne śniadanie, krótki spacer, powrót na odpoczynek i wieczorny widok z balkonu.",
      },
    ],
  },
  {
    slug: "weekend-w-zakopanem-blisko-szlakow",
    title: "Weekend w Zakopanem – jak zaplanować idealny wypoczynek blisko szlaków?",
    excerpt:
      "Dwa dni wystarczą, żeby poczuć Tatry – pod warunkiem, że dobrze ułożysz plan. Propozycja weekendu dla gości premium: minimum tłumów, maksimum jakości i widoków.",
    date: "2026-05-19",
    readingTime: "7 min",
    sections: [
      {
        type: "p",
        text: "Weekend w Zakopanem może być prawdziwie regenerujący, jeśli postawisz na dobrą lokalizację i prosty plan. Okolica Strążyskiej daje szybki dostęp do dolin, a jednocześnie pozwala odpocząć od centrum.",
      },
      { type: "h2", text: "Dzień 1: lekki start i klimat Podhala" },
      {
        type: "ul",
        items: [
          "Przyjazd i spokojne zameldowanie",
          "Krótki spacer Doliną Strążyską (bez presji czasu)",
          "Kolacja w regionalnym stylu (z dala od największych kolejek)",
          "Wieczór: widok na góry + cisza, która naprawdę wycisza",
        ],
      },
      { type: "h2", text: "Dzień 2: widoki i powrót z energią" },
      {
        type: "p",
        text: "Rano zaplanuj krótszą trasę, a później wróć na spokojne śniadanie i pakowanie. Dla wielu gości kluczowy jest balans – lepiej zrobić mniej, ale jakościowo, niż gonić listę atrakcji.",
      },
      { type: "h2", text: "Checklist przed wyjazdem" },
      {
        type: "ul",
        items: ["Wygodne buty", "Warstwa „na wiatr”", "Woda", "Rezerwa czasu na odpoczynek"],
      },
    ],
  },
  {
    slug: "goralska-tradycja-nowoczesnosc-wnetrza",
    title: "Góralska tradycja i nowoczesność – architektura i wnętrza na Podhalu",
    excerpt:
      "Jak połączyć regionalny charakter z nowoczesnym komfortem? Zobacz, jakie materiały, kolory i detale budują styl Modern Alpine i dlaczego goście premium go kochają.",
    date: "2026-05-19",
    readingTime: "5 min",
    sections: [
      {
        type: "p",
        text: "Podhale ma wyjątkowy język form: drewno, kamień, rzemiosło i ornament. W nowoczesnym wydaniu nie chodzi o „przeładowanie”, tylko o precyzyjny detal – jeden mocny akcent, reszta spokojna i funkcjonalna.",
      },
      { type: "h2", text: "Materiały, które robią premium" },
      {
        type: "ul",
        items: [
          "Drewno o głębokim usłojeniu (ciemne lub naturalne)",
          "Kamień jako kontrast (łazienki, detale)",
          "Tekstylia: wełna, len, bawełna w stonowanych barwach",
          "Ciepłe, rozproszone światło zamiast ostrego LED-u",
        ],
      },
      { type: "h2", text: "Regionalny detal bez kiczu" },
      {
        type: "p",
        text: "Najlepiej działa ornament jako podpis: rozetka, wzór, ręcznie wykonany element. Reszta ma być czysta, wygodna i nowoczesna – wtedy goście czują autentyczność, ale też komfort.",
      },
      { type: "h2", text: "Willa Szymkówka w tym klimacie" },
      {
        type: "p",
        text: "Stawiamy na czystość, spokój i funkcjonalność. Aneks kuchenny ma być praktyczny, łazienka dopieszczona, a widok z balkonu – punktem kulminacyjnym dnia.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

