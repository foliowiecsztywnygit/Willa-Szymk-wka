import BookingCalendar from "@/components/BookingCalendar";
import InquiryForm from "@/components/InquiryForm";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { site } from "@/content/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Rezerwacja() {
  return (
    <>
      <Seo
        title="Rezerwacja online – Willa Szymkówka | Zakopane"
        description="Zarezerwuj nocleg online w Willi Szymkówka w Zakopanem. Sprawdź wolne terminy i ceny pokojów bezpośrednio bez pośredników."
      />
      <main>
        {/* Reservation Calendar Section */}
        <BookingCalendar id="rezerwacja" />

        {/* Alternative contact information */}
        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="a" className="-left-24 -top-24 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Wolisz tradycyjny kontakt?</div>
              <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-50 md:text-4xl">
                Jesteśmy do Twojej dyspozycji
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80 md:text-base">
                Jeśli masz niestandardowe zapytanie, planujesz przyjazd większej grupy lub chcesz zapytać o szczegóły pobytu,
                skontaktuj się z nami bezpośrednio lub wypełnij poniższy formularz.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brass-400" />
                  <div className="text-sm font-semibold text-cream-100">Telefon</div>
                </div>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-4 block font-display text-xl tracking-wide text-cream-100 hover:text-cream-50"
                >
                  {site.phone}
                </a>
                <div className="mt-2 text-sm text-cream-200/70">Szymon Gąsienica Kaspruś</div>
              </Reveal>

              <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brass-400" />
                  <div className="text-sm font-semibold text-cream-100">E-mail</div>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all font-display text-xl tracking-wide text-cream-100 hover:text-cream-50"
                >
                  {site.email}
                </a>
                <div className="mt-2 text-sm text-cream-200/70">Odpowiedź najczęściej w kilka godzin</div>
              </Reveal>

              <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brass-400" />
                  <div className="text-sm font-semibold text-cream-100">Lokalizacja</div>
                </div>
                <div className="mt-4 font-display text-xl tracking-wide text-cream-100">{site.addressLine}</div>
                <div className="mt-2 text-sm text-cream-200/70">Zakopane • Strążyska</div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Alternative inquiry form */}
        <InquiryForm id="zapytanie" />
      </main>
    </>
  );
}
