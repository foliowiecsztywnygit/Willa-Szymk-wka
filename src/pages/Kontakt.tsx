import InquiryForm from "@/components/InquiryForm";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { links, site } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Kontakt() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#zapytanie") {
      setTimeout(() => scrollToId("zapytanie"), 0);
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Kontakt i rezerwacja – Willa Szymkówka | Zakopane"
        description="Wyślij zapytanie o nocleg w Willi Szymkówka. Dane kontaktowe, adres i szybkie połączenie telefoniczne."
      />
      <main>
        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="a" className="-left-24 -top-24 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Kontakt</div>
            <h1 className="mt-3 font-display text-4xl tracking-wide text-cream-50 md:text-5xl">
              Porozmawiajmy o Twoim pobycie
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-cream-200/80 md:text-base">
              Możesz wysłać zapytanie przez formularz lub skorzystać z kontaktu bezpośredniego. Odpowiadamy szybko.
            </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brass-400" />
                <div className="text-sm font-semibold text-cream-100">Telefon</div>
              </div>
              <a
                href={`tel:${site.phone.replace(/\\s/g, "")}`}
                className="mt-4 block font-display text-xl tracking-wide text-cream-100 hover:text-cream-50"
              >
                {site.phone}
              </a>
              <div className="mt-2 text-sm text-cream-200/70">Najszybsza rezerwacja</div>
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
              <div className="mt-2 text-sm text-cream-200/70">Wyślij wiadomość w dowolnym momencie</div>
            </Reveal>

            <Reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brass-400" />
                <div className="text-sm font-semibold text-cream-100">Adres</div>
              </div>
              <div className="mt-4 font-display text-xl tracking-wide text-cream-100">{site.addressLine}</div>
              <a
                href={links.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-brass-400 hover:text-brass-300"
              >
                Otwórz w Google Maps
              </a>
              <div className="mt-2 text-sm text-cream-200/70">Spokojna okolica przy Dolinie Strążyskiej</div>
            </Reveal>
            </div>
          </div>
        </section>

        <InquiryForm id="zapytanie" />
      </main>
    </>
  );
}

