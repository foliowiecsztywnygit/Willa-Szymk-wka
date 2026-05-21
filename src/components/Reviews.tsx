import Reveal from "@/components/Reveal";
import { type Review } from "@/content/reviews";
import { site } from "@/content/site";
import { Star } from "lucide-react";

export default function Reviews(props: { items: Review[] }) {
  return (
    <div className="grid gap-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Opinie gości</div>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
            Zaufanie budujemy czystością i spokojem
          </h2>
        </div>
        <div className="rounded-3xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4"
                  fill="currentColor"
                  color="rgba(200,164,90,0.95)"
                />
              ))}
            </div>
            <div className="text-sm font-semibold text-cream-100">
              {site.googleReviews.rating.toFixed(1)}/5
            </div>
          </div>
          <div className="mt-1 text-xs text-cream-200/70">
            Na bazie {site.googleReviews.count} recenzji w Google
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {props.items.map((r) => (
          <Reveal key={r.name} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg tracking-wide text-cream-100">{r.name}</div>
              <div className="flex items-center gap-1 text-brass-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/80">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

