import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { posts } from "@/content/posts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog – Willa Szymkówka | Zakopane"
        description="Przewodniki i inspiracje na wypoczynek w Zakopanem: Dolina Strążyska, weekend blisko szlaków i modern alpine na Podhalu."
      />
      <main className="ws-surface py-12 md:py-16">
        <Ornament variant="b" className="-right-24 -top-28 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Blog (SEO)</div>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-cream-50 md:text-5xl">
            Zakopane w dobrym rytmie
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-cream-200/80 md:text-base">
            Artykuły, które pomagają zaplanować pobyt: mniej pośpiechu, więcej jakości, spokojna baza przy
            Strążyskiej.
          </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Reveal key={p.slug} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
              <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">
                {p.date} • {p.readingTime}
              </div>
              <h2 className="mt-4 font-display text-2xl tracking-wide text-cream-100">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/80">{p.excerpt}</p>
              <Link
                to={`/blog/${p.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-400 transition hover:text-brass-300"
              >
                Czytaj artykuł
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
          </div>
        </div>
      </main>
    </>
  );
}

