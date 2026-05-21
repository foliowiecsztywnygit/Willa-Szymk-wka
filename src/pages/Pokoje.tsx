import Button from "@/components/Button";
import InquiryForm from "@/components/InquiryForm";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { site } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import { BedDouble, CookingPot, Sparkles, Wifi } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Pokoje() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#zapytanie") {
      setTimeout(() => scrollToId("zapytanie"), 0);
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Pokoje i apartamenty – Willa Szymkówka | Zakopane"
        description="Nowoczesny komfort w regionalnym klimacie: czyste wnętrza, dopracowane łazienki, w pełni wyposażone aneksy kuchenne i zmodernizowane Wi‑Fi."
      />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 ws-wood opacity-[0.26]" />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-950/65 via-wood-950/85 to-wood-950" />
          <Ornament variant="a" className="-right-20 -top-24 h-72 w-72 opacity-[0.12] md:h-[420px] md:w-[420px]" />
          <Ornament variant="b" className="-left-24 top-24 h-64 w-64 opacity-[0.10] md:h-[360px] md:w-[360px]" />
          <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-14 md:px-6 md:pb-20 md:pt-20">
            <Reveal className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Pokoje i apartamenty</div>
              <h1 className="mt-3 font-display text-4xl tracking-wide text-cream-50 md:text-5xl">
                Komfort, który czuć od pierwszej chwili
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream-100/85 md:text-base">
                Wnętrza zaprojektowane tak, aby odpoczynek był lekki: czystość, ciepłe materiały, wygodne
                łóżka, praktyczny aneks i spokojna okolica Strążyskiej.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button onClick={() => scrollToId("zapytanie")}>Zapytaj o nocleg</Button>
                <div className="rounded-full bg-white/6 px-5 py-3 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10">
                  {site.addressLine}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="b" className="-right-24 bottom-6 h-64 w-64 opacity-[0.10] md:h-[360px] md:w-[360px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-12">
            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5 text-brass-400" />
                </span>
                <div className="font-display text-xl tracking-wide text-cream-100">Czystość premium</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
                Standard, który goście podkreślają w opiniach: świeżość, porządek i dopracowane detale w
                pokojach oraz łazienkach.
              </p>
            </Reveal>

            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                  <CookingPot className="h-5 w-5 text-brass-400" />
                </span>
                <div className="font-display text-xl tracking-wide text-cream-100">W pełni wyposażony aneks</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
                Płyta grzewcza, naczynia i przybory kuchenne – gotowe na komfortowy pobyt, także przy dłuższym
                wyjeździe.
              </p>
            </Reveal>

            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                  <Wifi className="h-5 w-5 text-brass-400" />
                </span>
                <div className="font-display text-xl tracking-wide text-cream-100">Zmodernizowane Wi‑Fi</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
                Szybkie i stabilne w każdym pokoju – tak, aby praca zdalna czy streaming działały bez stresu.
              </p>
            </Reveal>

            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                  <BedDouble className="h-5 w-5 text-brass-400" />
                </span>
                <div className="font-display text-xl tracking-wide text-cream-100">Sen i cisza</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
                Spokojna okolica przy ul. Strążyskiej, blisko szlaków – a jednocześnie z dala od zgiełku
                centrum.
              </p>
            </Reveal>
            </div>
          </div>
        </section>

        <InquiryForm id="zapytanie" />
      </main>
    </>
  );
}

