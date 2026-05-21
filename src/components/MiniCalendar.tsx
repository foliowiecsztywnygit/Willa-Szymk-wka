import { addMonths, clampDate, formatIsoDate, isSameDay, parseIsoDate, startOfMonth } from "@/lib/calendar";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function MiniCalendar(props: {
  value: string;
  onChange: (nextIso: string) => void;
  min?: string;
  max?: string;
  onClose?: () => void;
  className?: string;
}) {
  const selected = useMemo(() => parseIsoDate(props.value), [props.value]);
  const min = useMemo(() => (props.min ? parseIsoDate(props.min) : null), [props.min]);
  const max = useMemo(() => (props.max ? parseIsoDate(props.max) : null), [props.max]);

  const [month, setMonth] = useState(() => startOfMonth(selected ?? new Date()));
  const selectedKey = useMemo(() => {
    if (!selected) return null;
    return `${selected.getFullYear()}-${selected.getMonth()}`;
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    setMonth(startOfMonth(selected));
  }, [selected, selectedKey]);

  const monthLabel = useMemo(() => {
    return new Intl.DateTimeFormat("pl-PL", { month: "long", year: "numeric" }).format(month);
  }, [month]);

  const days = useMemo(() => {
    const first = startOfMonth(month);
    const start = new Date(first);
    const jsDow = start.getDay();
    const mondayIndex = (jsDow + 6) % 7;
    start.setDate(first.getDate() - mondayIndex);

    return Array.from({ length: 42 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return {
        date: d,
        inMonth: d.getMonth() === month.getMonth(),
      };
    });
  }, [month]);

  const weekDays = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];

  const isDisabled = (d: Date) => {
    const t = d.getTime();
    if (min && t < min.getTime()) return true;
    if (max && t > max.getTime()) return true;
    return false;
  };

  const onPick = (d: Date) => {
    const next = clampDate(d, min, max);
    props.onChange(formatIsoDate(next));
    props.onClose?.();
  };

  return (
    <div
      className={cn(
        "w-[312px] rounded-3xl bg-wood-950/95 p-4 ring-1 ring-white/12 shadow-alpineSm backdrop-blur-md",
        props.className,
      )}
      role="dialog"
      aria-label="Wybór daty"
    >
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setMonth((m) => addMonths(m, -1))}
          className="inline-flex items-center justify-center rounded-full bg-white/6 p-2 text-cream-100 ring-1 ring-white/10 transition hover:bg-white/10"
          aria-label="Poprzedni miesiąc"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="min-w-0 flex-1 text-center">
          <div className="truncate font-display text-base capitalize tracking-wide text-cream-100">{monthLabel}</div>
        </div>
        <button
          type="button"
          onClick={() => setMonth((m) => addMonths(m, 1))}
          className="inline-flex items-center justify-center rounded-full bg-white/6 p-2 text-cream-100 ring-1 ring-white/10 transition hover:bg-white/10"
          aria-label="Następny miesiąc"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold tracking-wide text-cream-200/70">
        {weekDays.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map(({ date, inMonth }, idx) => {
          const disabled = isDisabled(date);
          const active = selected ? isSameDay(date, selected) : false;
          return (
            <button
              key={`${date.toISOString()}-${idx}`}
              type="button"
              onClick={() => onPick(date)}
              disabled={disabled}
              className={cn(
                "grid h-9 w-9 place-items-center rounded-2xl text-sm font-semibold transition",
                inMonth ? "text-cream-100/90" : "text-cream-200/35",
                active && "bg-brass-500 text-wood-950",
                !active && !disabled && "hover:bg-white/8",
                disabled && "opacity-40 pointer-events-none",
              )}
              aria-label={formatIsoDate(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
