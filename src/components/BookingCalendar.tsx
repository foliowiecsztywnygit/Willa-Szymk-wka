import Button from "@/components/Button";
import DatePickerInput from "@/components/DatePickerInput";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import { compareIsoDates, isValidIsoDate } from "@/lib/dates";
import { buildBookingUrl } from "@/lib/booking";
import { useBookingStore } from "@/store/booking";
import { cn } from "@/lib/utils";
import { Calendar, CheckCircle2, ExternalLink, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookingCalendar(props: { id?: string; className?: string; showTitle?: boolean }) {
  const location = useLocation();
  const { arrival, departure, adults, setBookingData, resetBookingData } = useBookingStore();

  const [localArrival, setLocalArrival] = useState(arrival);
  const [localDeparture, setLocalDeparture] = useState(departure);
  const [localAdults, setLocalAdults] = useState(adults);
  const [dateError, setDateError] = useState<string | null>(null);

  // Synchronize from URL search parameters on mount or when search params change
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const arr = searchParams.get("arrival");
    const dep = searchParams.get("departure");
    const adu = searchParams.get("adults");

    if (arr || dep || adu) {
      if (arr && isValidIsoDate(arr)) {
        setLocalArrival(arr);
        setBookingData({ arrival: arr });
      }
      if (dep && isValidIsoDate(dep)) {
        setLocalDeparture(dep);
        setBookingData({ departure: dep });
      }
      if (adu) {
        setLocalAdults(adu);
        setBookingData({ adults: adu });
      }
    }
  }, [location.search, setBookingData]);

  // Keep local state in sync when store changes externally (e.g. from Hero quick search)
  useEffect(() => {
    setLocalArrival(arrival);
  }, [arrival]);

  useEffect(() => {
    setLocalDeparture(departure);
  }, [departure]);

  useEffect(() => {
    setLocalAdults(adults);
  }, [adults]);

  // Compute active iframe URL
  const bookingUrl = useMemo(() => {
    const hasValidDates =
      isValidIsoDate(arrival) &&
      isValidIsoDate(departure) &&
      compareIsoDates(arrival, departure) < 0;

    if (hasValidDates) {
      return buildBookingUrl({
        arrival,
        departure,
        adults,
        step: "rooms",
      });
    }

    return buildBookingUrl();
  }, [arrival, departure, adults]);

  const minDeparture = isValidIsoDate(localArrival) ? localArrival : undefined;

  const handleApply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setDateError(null);

    if (localArrival && !isValidIsoDate(localArrival)) {
      setDateError("Podaj poprawną datę przyjazdu.");
      return;
    }
    if (localDeparture && !isValidIsoDate(localDeparture)) {
      setDateError("Podaj poprawną datę wyjazdu.");
      return;
    }
    if (localArrival && localDeparture && compareIsoDates(localArrival, localDeparture) >= 0) {
      setDateError("Data wyjazdu musi być późniejsza niż data przyjazdu.");
      return;
    }

    setBookingData({
      arrival: localArrival,
      departure: localDeparture,
      adults: localAdults,
    });
  };

  const handleReset = () => {
    resetBookingData();
    setLocalArrival("");
    setLocalDeparture("");
    setLocalAdults("2");
    setDateError(null);
  };

  const showTitle = props.showTitle !== false;

  return (
    <section id={props.id ?? "rezerwacja"} className={cn("relative overflow-hidden", props.className)}>
      <div className="pointer-events-none absolute inset-0 ws-wood opacity-[0.24]" />
      <div className="absolute inset-0 bg-wood-950/75" />
      <Ornament variant="a" className="-right-24 -top-24 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
      <Ornament variant="b" className="-left-28 bottom-10 h-72 w-72 opacity-[0.08] md:h-[420px] md:w-[420px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <Reveal>
          {showTitle && (
            <div className="mb-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-cream-200/80 ring-1 ring-white/10">
                <Calendar className="h-3.5 w-3.5 text-brass-400" />
                OFICJALNY SYSTEM REZERWACJI ONLINE
              </div>
              <h2 className="mt-4 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
                Rezerwuj nocleg bezpośrednio – bez prowizji
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/80 md:text-base">
                Wybierz dogodny termin i liczbę gości, aby sprawdzić dostępne pokoje w Willi Szymkówka. Rezerwacja
                przez naszą stronę gwarantuje najniższą cenę oraz natychmiastowe potwierdzenie.
              </p>
            </div>
          )}

          {/* Quick Dates Filter Bar */}
          <div className="mb-6 rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 md:p-6">
            <form onSubmit={handleApply} className="grid gap-4 md:grid-cols-12 md:items-end">
              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-semibold tracking-[0.18em] text-cream-200/70">
                  Data przyjazdu
                </label>
                <DatePickerInput
                  value={localArrival}
                  onChange={(d) => {
                    setLocalArrival(d);
                    setDateError(null);
                  }}
                  placeholder="RRRR-MM-DD"
                  error={Boolean(dateError && !localArrival)}
                />
              </div>

              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-semibold tracking-[0.18em] text-cream-200/70">
                  Data wyjazdu
                </label>
                <DatePickerInput
                  value={localDeparture}
                  onChange={(d) => {
                    setLocalDeparture(d);
                    setDateError(null);
                  }}
                  min={minDeparture}
                  placeholder="RRRR-MM-DD"
                  error={Boolean(dateError && !localDeparture)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold tracking-[0.18em] text-cream-200/70">
                  Liczba gości
                </label>
                <div className="relative">
                  <select
                    value={localAdults}
                    onChange={(e) => setLocalAdults(e.target.value)}
                    className="h-12 w-full appearance-none rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60"
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <option key={i + 1} value={String(i + 1)} className="bg-wood-950 text-cream-100">
                        {i + 1} {i === 0 ? "osoba" : i < 4 ? "osoby" : "osób"}
                      </option>
                    ))}
                    <option value="9" className="bg-wood-950 text-cream-100">
                      9+ osób
                    </option>
                  </select>
                  <Users className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-200/50" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:col-span-4 md:justify-end">
                <Button type="submit" className="flex-1 md:flex-initial">
                  Zastosuj termin
                </Button>
                {(arrival || departure || localArrival || localDeparture) && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleReset}
                    className="flex items-center gap-1.5"
                    title="Wyczyść wybrane daty"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Wyczyść
                  </Button>
                )}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white/6 px-4 text-xs font-semibold text-cream-100 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-cream-50"
                  title="Otwórz panel rezerwacyjny w nowym oknie"
                >
                  <ExternalLink className="h-4 w-4 text-brass-400" />
                  <span className="hidden sm:inline">Nowe okno</span>
                </a>
              </div>
            </form>

            {dateError && <div className="mt-3 text-xs font-semibold text-brass-300">{dateError}</div>}
          </div>

          {/* Embedded Booking Iframe Container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-alpine ring-1 ring-black/10">
            <iframe
              key={bookingUrl}
              src={bookingUrl}
              width="100%"
              height="850px"
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                minHeight: "850px",
              }}
              title="Rezerwacja online"
              loading="lazy"
              allow="payment"
            />
          </div>

          {/* Trust & Guarantee Badges */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <div className="text-xs font-semibold tracking-wide text-cream-100">Gwarancja najniższej ceny</div>
                <div className="mt-1 text-xs text-cream-200/70">Rezerwując u nas omijasz prowizje Booking.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <div className="text-xs font-semibold tracking-wide text-cream-100">Bezpieczne płatności</div>
                <div className="mt-1 text-xs text-cream-200/70">Szybkie i certyfikowane metody płatności online</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <div className="text-xs font-semibold tracking-wide text-cream-100">Natychmiastowe potwierdzenie</div>
                <div className="mt-1 text-xs text-cream-200/70">Automatyczna rezerwacja pokoju i e-mail zwrotny</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
              <div>
                <div className="text-xs font-semibold tracking-wide text-cream-100">Wsparcie gospodarzy</div>
                <div className="mt-1 text-xs text-cream-200/70">
                  Zadzwoń do nas w razie pytań:{" "}
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-brass-300 underline">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
