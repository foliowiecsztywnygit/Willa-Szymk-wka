import { useToastStore } from "@/store/toast";
import { cn } from "@/lib/utils";

export default function Toaster() {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 md:px-6">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "pointer-events-auto w-full max-w-lg rounded-3xl bg-wood-950/95 p-4 ring-1 ring-white/12 shadow-alpineSm backdrop-blur-md",
          )}
        >
          <div className="font-display text-sm tracking-wide text-cream-100">{t.title}</div>
          {t.description ? <div className="mt-1 text-sm text-cream-200/75">{t.description}</div> : null}
        </div>
      ))}
    </div>
  );
}

