import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

export default function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
    children: ReactNode;
  },
) {
  const { className, variant = "primary", ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition active:translate-y-[1px] disabled:opacity-60 disabled:pointer-events-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-wood-950",
        variant === "primary" &&
          "bg-brass-500 text-wood-950 shadow-alpineSm hover:bg-brass-400",
        variant === "ghost" &&
          "bg-white/5 text-cream-100 ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/20",
        className,
      )}
    />
  );
}

