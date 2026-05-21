import Button from "@/components/Button";
import { scrollToId } from "@/lib/scroll";
import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoUrl from "../../logo.png";

const nav = [
  { to: "/pokoje", label: "Pokoje" },
  { to: "/galeria", label: "Galeria" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const active = useMemo(() => {
    const hit = nav.find((n) => location.pathname === n.to);
    return hit?.to ?? null;
  }, [location.pathname]);

  const onCta = () => {
    if (isHome) {
      scrollToId("zapytanie");
      return;
    }
    navigate("/#zapytanie");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 ws-wood opacity-[0.08]" />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-md" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Logo Willa Szymkówka"
              className="h-10 w-auto mix-blend-multiply drop-shadow-sm transition group-hover:opacity-95"
              loading="eager"
            />
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide text-wood-950 md:text-[17px]">
                Willa Szymkówka
              </div>
              <div className="text-xs text-wood-800/70">Zakopane • Strążyska</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-wood-950/70 transition hover:text-wood-950",
                  active === item.to ? "bg-black/5 text-wood-950 ring-1 ring-black/10" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <Button className="ml-2" onClick={onCta}>
              Zapytaj o nocleg
            </Button>
          </nav>

          <div className="md:hidden" />
        </div>
      </div>
    </header>
  );
}

