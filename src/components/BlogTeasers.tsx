import Reveal from "@/components/Reveal";
import { posts } from "@/content/posts";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogTeasers(props: { className?: string }) {
  return (
    <div className={cn("grid gap-8", props.className)}>
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Blog</div>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
            Inspiracje na pobyt w Zakopanem
          </h2>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-cream-100/85 ring-1 ring-white/10 transition hover:bg-white/8 hover:text-cream-100"
        >
          Zobacz wszystkie
          <ArrowRight className="h-4 w-4 text-brass-400" />
        </Link>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {posts.slice(0, 3).map((p) => (
          <Reveal key={p.slug} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">
              {p.date} • {p.readingTime}
            </div>
            <h3 className="mt-4 font-display text-xl tracking-wide text-cream-100">{p.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/80">{p.excerpt}</p>
            <Link
              to={`/blog/${p.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-400 transition hover:text-brass-300"
            >
              Czytaj dalej
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

