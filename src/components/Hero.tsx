import Button from "@/components/Button";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { MapPin } from "lucide-react";

const heroImage = "/optimized/ext-01-hero.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[86vh] overflow-hidden md:min-h-[92vh]">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Willa Szymkówka z widokiem na Tatry" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-wood-950" />
        <div className="absolute inset-0 ws-wood opacity-[0.22] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-4 py-20 md:min-h-[92vh] md:px-6 md:py-28">
        <Reveal className="w-full">
          <div className="relative">
            <div className="pointer-events-none absolute -right-[320px] top-1/2 hidden -translate-y-1/2 md:block">
              <Ornament
                className="h-[1040px] w-[1040px] blur-0 opacity-[0.28] mix-blend-screen invert brightness-200"
                variant="a"
              />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="absolute inset-0 -m-6 rounded-[32px] bg-wood-950/45 md:-m-8" />
              <div className="relative">
                <h1 className="mt-6 font-display text-4xl tracking-wide text-cream-50 md:text-6xl">
                  Tradycja spotyka nowoczesny komfort
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 md:text-lg">
                  Spokojna dzielnica Zakopanego, tuż przy urokliwej Dolinie Strążyskiej. Czystość, cisza i
                  widok na Tatry – w standardzie, który doceniają goście premium.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button onClick={() => scrollToId("zapytanie")}>Zapytaj o nocleg</Button>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-5 py-3 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-brass-400" />
                    ul. Strążyska 1H
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

