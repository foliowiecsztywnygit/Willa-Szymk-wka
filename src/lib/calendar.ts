export function parseIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatIsoDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addMonths(d: Date, delta: number) {
  const next = new Date(d);
  next.setMonth(next.getMonth() + delta);
  return next;
}

export function startOfMonth(d: Date) {
  const t = new Date(d);
  t.setDate(1);
  t.setHours(0, 0, 0, 0);
  return t;
}

export function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function clampDate(d: Date, min?: Date | null, max?: Date | null) {
  const t = d.getTime();
  if (min && t < min.getTime()) return min;
  if (max && t > max.getTime()) return max;
  return d;
}

