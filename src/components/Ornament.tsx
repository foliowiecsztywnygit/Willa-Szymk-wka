import { cn } from "@/lib/utils";
import wzorUrl from "../../wzor.png";

export default function Ornament(props: { className?: string; variant?: "a" | "b" }) {
  const variant = props.variant ?? "a";
  return (
    <img
      src={wzorUrl}
      alt=""
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none opacity-[0.10] blur-[0.2px] mix-blend-overlay",
        variant === "a" ? "animate-spinSlow" : "animate-spinSlowReverse",
        props.className,
      )}
      loading="lazy"
      draggable={false}
    />
  );
}

