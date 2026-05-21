import Button from "@/components/Button";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { getPost } from "@/content/posts";
import { site } from "@/content/site";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

export default function Wpis() {
  const params = useParams();
  const slug = params.slug ?? "";
  const post = getPost(slug);

  const jsonLd = useMemo(() => {
    if (!post) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      datePublished: post.date,
      author: { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.name },
    };
  }, [post]);

  if (!post) {
    return (
      <>
        <Seo title="Nie znaleziono – Willa Szymkówka" description="Nie znaleziono wpisu." />
        <main className="ws-surface py-12 md:py-16">
          <Ornament variant="b" className="-right-24 -top-24 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <h1 className="font-display text-3xl tracking-wide text-cream-100">Nie znaleziono wpisu</h1>
              <p className="mt-4 text-sm text-cream-200/80">Wróć do listy artykułów.</p>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-400">
                <ArrowLeft className="h-4 w-4" />
                Blog
              </Link>
            </Reveal>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Seo title={`${post.title} – Willa Szymkówka`} description={post.excerpt} jsonLd={jsonLd} />
      <main className="ws-surface py-12 md:py-16">
        <Ornament variant="a" className="-left-28 -top-24 h-80 w-80 opacity-[0.10] md:h-[520px] md:w-[520px]" />
        <Ornament variant="b" className="-right-24 top-32 h-64 w-64 opacity-[0.08] md:h-[420px] md:w-[420px]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream-100/80 hover:text-cream-100"
            >
              <ArrowLeft className="h-4 w-4 text-brass-400" />
              Wróć do bloga
            </Link>
            <div className="mt-6 text-xs font-semibold tracking-[0.18em] text-cream-200/70">
              {post.date} • {post.readingTime}
            </div>
            <h1 className="mt-4 font-display text-4xl tracking-wide text-cream-50 md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-cream-100/85">{post.excerpt}</p>
          </Reveal>

          <article className="mt-10 max-w-3xl">
            <div className="grid gap-6">
              {post.sections.map((s, idx) => {
                if (s.type === "h2") {
                  return (
                    <Reveal key={idx}>
                      <h2 className="font-display text-2xl tracking-wide text-cream-100">{s.text}</h2>
                    </Reveal>
                  );
                }
                if (s.type === "ul") {
                  return (
                    <Reveal key={idx}>
                      <ul className="grid list-disc gap-2 pl-5 text-sm leading-relaxed text-cream-200/85">
                        {s.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </Reveal>
                  );
                }
                return (
                  <Reveal key={idx}>
                    <p className="text-sm leading-relaxed text-cream-200/85 md:text-base">{s.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </article>

          <section className="mt-14">
            <Reveal className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 md:p-10">
              <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Rezerwacja</div>
              <div className="mt-3 font-display text-2xl tracking-wide text-cream-100 md:text-3xl">
                Chcesz odpocząć blisko Doliny Strążyskiej?
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream-200/80">
                Wyślij krótkie zapytanie o termin – odpowiemy z dostępnością i propozycją najlepszego wariantu pobytu.
              </p>
              <div className="mt-7">
                <Link to="/kontakt#zapytanie">
                  <Button>Sprawdź dostępność</Button>
                </Link>
              </div>
            </Reveal>
          </section>
        </div>
      </main>
    </>
  );
}

