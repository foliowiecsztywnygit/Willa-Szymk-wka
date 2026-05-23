import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { type ReactNode } from "react";

export default function Reveal(props: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700",
        inView ? "opacity-100" : "opacity-0 translate-y-4",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

