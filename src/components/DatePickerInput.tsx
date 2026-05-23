import MiniCalendar from "@/components/MiniCalendar";
import { parseIsoDate } from "@/lib/calendar";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";

export default function DatePickerInput(props: {
  value: string;
  onChange: (nextIso: string) => void;
  placeholder?: string;
  min?: string;
  max?: string;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const valid = useMemo(() => (props.value ? parseIsoDate(props.value) : null), [props.value]);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia("(min-width: 768px)").matches
      : true,
  );

  useEffect(() => {
    if (!open) return;
    const onDown = (e: Event) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && el.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (isDesktop) return;
    const el = rootRef.current;
    if (!el) return;
    window.setTimeout(() => {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }, [isDesktop, open]);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
    if (!open) setOpen(true);
  };

  return (
    <div ref={rootRef} className="relative">
      <input
        value={props.value}
        onChange={onTextChange}
        onFocus={() => setOpen(true)}
        placeholder={props.placeholder ?? "RRRR-MM-DD"}
        readOnly={!isDesktop}
        inputMode={isDesktop ? "numeric" : "none"}
        className={cn(
          "h-12 w-full rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60",
          props.error && "ring-brass-400/40",
        )}
        aria-invalid={props.error ? "true" : undefined}
      />

      {open ? (
        <div className="absolute left-0 top-full z-50 mt-2">
          <MiniCalendar
            value={valid ? props.value : new Date().toISOString().slice(0, 10)}
            onChange={(d) => props.onChange(d)}
            min={props.min}
            max={props.max}
            onClose={() => setOpen(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
