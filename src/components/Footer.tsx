import { links, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.png";

const quick = [
  { to: "/pokoje", label: "Pokoje" },
  { to: "/galeria", label: "Galeria" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt / Rezerwacja" },
] as const;

export default function Footer(props: { className?: string }) {
  return (
    <footer className={cn("border-t border-white/10", props.className)}>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 ws-wood opacity-[0.24]" />
        <div className="absolute inset-0 bg-wood-950/85" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-cream-50/90 ring-1 ring-white/20 shadow-alpineSm">
                <img
                  src={logoUrl}
                  alt="Logo Willa Szymkówka"
                  className="h-full w-full scale-[1.28] object-cover object-[50%_26%]"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/55 to-transparent" />
              </span>
              <div>
                <div className="font-display text-lg tracking-wide">{site.name}</div>
                <div className="text-sm text-cream-200/70">{site.legalName}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-200/80">
              Otwarte całą dobę, umiarkowane ceny, świetne warunki. Jeśli szukasz spokojnej bazy blisko
              Doliny Strążyskiej i cenisz czystość oraz komfort – wyślij zapytanie o nocleg.
            </p>
          </div>

          <aside className="md:col-span-4">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Kontakt</div>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
              >
                <Phone className="mt-0.5 h-4 w-4 text-brass-400" />
                <span>
                  <span className="block font-semibold text-cream-100">{site.phone}</span>
                  <span className="block text-cream-200/70">Zadzwoń i zapytaj o termin</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
              >
                <Mail className="mt-0.5 h-4 w-4 text-brass-400" />
                <span>
                  <span className="block font-semibold text-cream-100">{site.email}</span>
                  <span className="block text-cream-200/70">Szybka odpowiedź na zapytania</span>
                </span>
              </a>
              <a
                href={links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
              >
                <MapPin className="mt-0.5 h-4 w-4 text-brass-400" />
                <span>
                  <span className="block font-semibold text-cream-100">{site.addressLine}</span>
                  <span className="block text-cream-200/70">Otwórz mapę Google</span>
                </span>
              </a>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <iframe
                  title="Mapa – Willa Szymkówka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.363507625069!2d19.945800577068887!3d49.288456770344546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f2bd7541b54d%3A0x37fac10a567a9e2c!2sWilla%20Szymk%C3%B3wka!5e0!3m2!1spl!2spl!4v1779375419988!5m2!1spl!2spl"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full md:h-64"
                />
              </div>
            </div>
          </aside>

          <aside className="md:col-span-3">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Na skróty</div>
            <div className="mt-4 grid gap-2">
              {quick.map((q) => (
                <Link
                  key={q.to}
                  to={q.to}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-cream-100/80 ring-1 ring-white/10 transition hover:bg-white/6 hover:text-cream-100"
                >
                  {q.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
}

