import BlogTeasers from "@/components/BlogTeasers";
import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";
import MobileStickyCta from "@/components/MobileStickyCta";
import Ornament from "@/components/Ornament";
import PremiumGallery from "@/components/PremiumGallery";
import Reviews from "@/components/Reviews";
import Seo from "@/components/Seo";
import { faq } from "@/content/faq";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { scrollToId } from "@/lib/scroll";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#zapytanie") {
      setTimeout(() => scrollToId("zapytanie"), 0);
    }
  }, [location.hash]);

  const jsonLd = useMemo(() => {
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: site.name,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        postalCode: site.postalCode,
        addressLocality: site.locality,
        addressCountry: site.country,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.googleReviews.rating,
        reviewCount: site.googleReviews.count,
      },
    };

    return [localBusiness, faqLd];
  }, []);

  return (
    <>
      <Seo
        title="Willa Szymkówka – Zakopane | Zapytaj o nocleg"
        description="Luksusowy wypoczynek w Zakopanem w regionalnym klimacie. Spokój, czystość, widok na Tatry i bliskość Doliny Strążyskiej. Wyślij zapytanie o nocleg."
        jsonLd={jsonLd}
      />
      <main className="pb-24 md:pb-0">
        <Hero />
        <MobileStickyCta onClick={() => scrollToId("zapytanie")} />

        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="a" className="-right-24 -top-28 h-72 w-72 opacity-[0.12] md:h-[440px] md:w-[440px]" />
          <Ornament variant="b" className="-left-28 bottom-6 h-64 w-64 opacity-[0.10] md:h-[380px] md:w-[380px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <PremiumGallery />
          </div>
        </section>

        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="b" className="-right-20 top-10 h-64 w-64 opacity-[0.10] md:h-[360px] md:w-[360px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <Reviews items={reviews} />
          </div>
        </section>

        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="a" className="-left-24 -top-20 h-64 w-64 opacity-[0.10] md:h-[360px] md:w-[360px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8">
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">FAQ</div>
                <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
                  Najczęstsze pytania gości
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream-200/80">
                  Krótko i konkretnie – tak, abyś mógł/mogła zaplanować pobyt bez niespodzianek.
                </p>
              </div>
              <FAQAccordion items={faq} />
            </div>
          </div>
        </section>

        <section className="ws-surface py-12 md:py-16">
          <Ornament variant="b" className="-right-28 -top-24 h-72 w-72 opacity-[0.10] md:h-[420px] md:w-[420px]" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <BlogTeasers />
          </div>
        </section>

        <InquiryForm id="zapytanie" />
      </main>
    </>
  );
}
