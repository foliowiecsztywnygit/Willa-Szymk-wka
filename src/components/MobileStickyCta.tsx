import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export default function MobileStickyCta(props: { onClick: () => void; className?: string }) {
  const [show, setShow] = useState(false);

  const canUseObserver = useMemo(() => typeof window !== "undefined" && "IntersectionObserver" in window, []);

  useEffect(() => {
    if (!canUseObserver) return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const heroVisible = Boolean(entry?.isIntersecting) && (entry?.intersectionRatio ?? 0) > 0.18;
        setShow(!heroVisible);
      },
      {
        threshold: [0, 0.18, 0.35, 0.6],
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [canUseObserver]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-[60] md:hidden",
        show ? "opacity-100" : "opacity-0",
        "transition-opacity duration-300",
        props.className,
      )}
      aria-hidden={!show}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      <div className="pointer-events-auto mx-auto max-w-6xl px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-4">
        <Button onClick={props.onClick} className="w-full justify-center">
          Zapytaj o nocleg
        </Button>
      </div>
    </div>
  );
}

