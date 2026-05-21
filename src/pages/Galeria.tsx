import Ornament from "@/components/Ornament";
import PremiumGallery from "@/components/PremiumGallery";
import Seo from "@/components/Seo";

export default function Galeria() {
  return (
    <>
      <Seo
        title="Galeria – Willa Szymkówka | Zakopane"
        description="Zobacz wnętrza, łazienki, aneksy kuchenne oraz obejście i widoki na Tatry. Galeria premium Willi Szymkówka."
      />
      <main className="ws-surface py-12 md:py-16">
        <Ornament variant="a" className="-right-24 -top-24 h-80 w-80 opacity-[0.10] md:h-[480px] md:w-[480px]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <PremiumGallery />
        </div>
      </main>
    </>
  );
}

