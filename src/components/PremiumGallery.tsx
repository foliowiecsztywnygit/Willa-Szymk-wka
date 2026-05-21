import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export default function PremiumGallery(props: { initialCategory?: GalleryCategory; items?: GalleryItem[] }) {
  const [category, setCategory] = useState<GalleryCategory | "Wszystko">(props.initialCategory ?? "Wszystko");
  const [openId, setOpenId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia("(min-width: 768px)").matches);
  const [expandedMobile, setExpandedMobile] = useState(() => window.matchMedia("(min-width: 768px)").matches);

  const items = props.items ?? galleryItems;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      setIsDesktop(mq.matches);
      if (mq.matches) setExpandedMobile(true);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) setExpandedMobile(false);
  }, [category, isDesktop]);

  const filtered = useMemo(() => {
    if (category === "Wszystko") return items;
    return items.filter((i) => i.category === category);
  }, [category, items]);

  const visible = useMemo(() => {
    if (isDesktop) return filtered;
    if (expandedMobile) return filtered;
    return filtered.slice(0, 5);
  }, [expandedMobile, filtered, isDesktop]);

  return (
    <div className="grid gap-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Galeria premium</div>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
            Willa. Pokoje. Tatry.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream-200/80">
            Zobacz prawdziwe ujęcia: willa i ogród, pokoje w regionalnym klimacie oraz łazienka. Spokojne,
            zielone Zakopane – tuż przy Dolinie Strążyskiej.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("Wszystko")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
              category === "Wszystko"
                ? "bg-brass-500 text-wood-950 ring-brass-500"
                : "bg-white/5 text-cream-100/85 ring-white/10 hover:bg-white/8 hover:ring-white/20",
            )}
          >
            Wszystko
          </button>
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
                category === c
                  ? "bg-brass-500 text-wood-950 ring-brass-500"
                  : "bg-white/5 text-cream-100/85 ring-white/10 hover:bg-white/8 hover:ring-white/20",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="-mx-4 grid gap-3 md:-mx-6 md:grid-cols-12 md:gap-4">
        {visible.map((item, idx) => (
          <Reveal
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10",
              idx === 0 ? "md:col-span-8" : idx === 1 ? "md:col-span-4" : "md:col-span-4",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(item.id)}
              className="block h-full w-full text-left"
              aria-label={`Powiększ: ${item.title}`}
            >
              <div className={cn("relative w-full", idx < 2 ? "aspect-[16/9] md:aspect-[21/12]" : "aspect-[16/10]")}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-950/75 via-wood-950/0 to-transparent opacity-95" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-cream-200/70">
                    {item.category}
                  </div>
                  <div className="mt-2 font-display text-lg tracking-wide text-cream-100">{item.title}</div>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {filtered.length > 5 && (
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setExpandedMobile((v) => !v)}
            className="w-full rounded-2xl bg-white/6 px-5 py-3 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
          >
            {expandedMobile ? "Pokaż mniej zdjęć" : `Pokaż więcej zdjęć (${filtered.length - 5})`}
          </button>
        </div>
      )}

      {openId && (
        <Lightbox
          openId={openId}
          onOpenIdChange={setOpenId}
          items={visible}
          onClose={() => setOpenId(null)}
        />
      )}
    </div>
  );
}

