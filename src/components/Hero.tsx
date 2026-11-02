import Button from "@/components/Button";
import DatePickerInput from "@/components/DatePickerInput";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { useBookingStore } from "@/store/booking";
import { Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";

const heroImage = "/optimized/ext-01-hero.jpeg";

export default function Hero() {
  const { arrival, departure, adults, setBookingData } = useBookingStore();
  const [heroArrival, setHeroArrival] = useState(arrival);
  const [heroDeparture, setHeroDeparture] = useState(departure);
  const [heroAdults, setHeroAdults] = useState(adults);

  const onQuickSearch = () => {
    setBookingData({
      arrival: heroArrival,
      departure: heroDeparture,
      adults: heroAdults,
    });
    scrollToId("rezerwacja");
  };

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

            <div className="relative z-10 max-w-4xl">
              <div className="absolute inset-0 -m-6 rounded-[32px] bg-wood-950/45 md:-m-8" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-cream-100 ring-1 ring-white/15 backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5 text-brass-400" />
                  OFICJALNA REZERWACJA ONLINE
                </div>

                <h1 className="mt-5 font-display text-4xl tracking-wide text-cream-50 md:text-6xl">
                  Tradycja spotyka nowoczesny komfort
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/85 md:text-lg">
                  Spokojna dzielnica Zakopanego, tuż przy urokliwej Dolinie Strążyskiej. Czystość, cisza i
                  widok na Tatry – w standardzie, który doceniają goście premium.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button onClick={() => scrollToId("rezerwacja")}>Zarezerwuj online</Button>
                  <Button variant="ghost" onClick={() => scrollToId("zapytanie")}>
                    Zapytaj o nocleg
                  </Button>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-5 py-3 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-brass-400" />
                    ul. Strążyska 1H
                  </div>
                </div>

                {/* Quick Reservation Search Bar */}
                <div className="mt-8 rounded-3xl bg-wood-950/80 p-4 ring-1 ring-white/15 backdrop-blur-md md:p-5">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-4">
                      <span className="mb-1.5 block text-xs font-semibold tracking-wider text-cream-200/70">
                        Data przyjazdu
                      </span>
                      <DatePickerInput
                        value={heroArrival}
                        onChange={setHeroArrival}
                        placeholder="Wybierz termin"
                      />
                    </div>

                    <div className="lg:col-span-4">
                      <span className="mb-1.5 block text-xs font-semibold tracking-wider text-cream-200/70">
                        Data wyjazdu
                      </span>
                      <DatePickerInput
                        value={heroDeparture}
                        onChange={setHeroDeparture}
                        min={heroArrival || undefined}
                        placeholder="Wybierz termin"
                      />
                    </div>

                    <div className="lg:col-span-2">
                      <span className="mb-1.5 block text-xs font-semibold tracking-wider text-cream-200/70">
                        Goście
                      </span>
                      <div className="relative">
                        <select
                          value={heroAdults}
                          onChange={(e) => setHeroAdults(e.target.value)}
                          className="h-12 w-full appearance-none rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60"
                        >
                          {Array.from({ length: 8 }).map((_, i) => (
                            <option key={i + 1} value={String(i + 1)} className="bg-wood-950 text-cream-100">
                              {i + 1} {i === 0 ? "osoba" : i < 4 ? "osoby" : "osób"}
                            </option>
                          ))}
                          <option value="9" className="bg-wood-950 text-cream-100">
                            9+
                          </option>
                        </select>
                        <Users className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-200/50" />
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <Button onClick={onQuickSearch} className="h-12 w-full justify-center">
                        Szukaj pokoju
                      </Button>
                    </div>
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
