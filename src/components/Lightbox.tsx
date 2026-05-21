import { type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export default function Lightbox(props: {
  openId: string;
  items: GalleryItem[];
  onClose: () => void;
  onOpenIdChange: (nextId: string) => void;
  className?: string;
}) {
  const { openId, items, onClose, onOpenIdChange, className } = props;
  const index = items.findIndex((i) => i.id === openId);
  const current = index >= 0 ? items[index] : null;

  const go = useCallback((dir: -1 | 1) => {
    const next = index + dir;
    const item = items[(next + items.length) % items.length];
    if (!item) return;
    onOpenIdChange(item.id);
  }, [index, items, onOpenIdChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  if (!current) return null;

  return (
    <div
      className={cn("fixed inset-0 z-[60] grid place-items-center px-4 py-6", className)}
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęcia"
    >
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-wood-950 ring-1 ring-white/10 shadow-alpine">
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-cream-100 ring-1 ring-white/12 transition hover:bg-white/15 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400/70"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full">
          <img
            src={current.src}
            alt={current.alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-wood-950/85 to-transparent p-6">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">
              {current.category}
            </div>
            <div className="mt-2 font-display text-2xl tracking-wide text-cream-100">{current.title}</div>
            <div className="mt-3 max-w-3xl text-sm leading-relaxed text-cream-200/80">{current.alt}</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10 transition hover:bg-white/8 hover:text-cream-100"
          >
            <ChevronLeft className="h-4 w-4 text-brass-400" />
            Poprzednie
          </button>
          <div className="text-xs text-cream-200/70">
            {index + 1}/{items.length}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10 transition hover:bg-white/8 hover:text-cream-100"
          >
            Następne
            <ChevronRight className="h-4 w-4 text-brass-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

