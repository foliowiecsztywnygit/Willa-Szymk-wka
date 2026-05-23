import Button from "@/components/Button";
import DatePickerInput from "@/components/DatePickerInput";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import { compareIsoDates, isValidIsoDate } from "@/lib/dates";
import { buildMailtoHref } from "@/lib/mailto";
import { cn } from "@/lib/utils";
import { useToastStore } from "@/store/toast";
import { Mail, Phone } from "lucide-react";
import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  arrival: "",
  departure: "",
  guests: "2",
  message: "",
};

function validate(s: FormState): FormErrors {
  const e: FormErrors = {};
  const digits = s.phone.replace(/\D/g, "").slice(0, 9);
  if (!s.fullName.trim()) e.fullName = "Podaj imię i nazwisko.";
  if (!/^\S+@\S+\.\S+$/.test(s.email)) e.email = "Podaj poprawny adres e-mail.";
  if (digits.length !== 9) e.phone = "Podaj numer telefonu (9 cyfr).";
  if (!isValidIsoDate(s.arrival)) e.arrival = "Wybierz datę przyjazdu.";
  if (!isValidIsoDate(s.departure)) e.departure = "Wybierz datę wyjazdu.";
  if (isValidIsoDate(s.arrival) && isValidIsoDate(s.departure) && compareIsoDates(s.arrival, s.departure) >= 0) {
    e.departure = "Data wyjazdu musi być późniejsza niż data przyjazdu.";
  }
  const g = Number(s.guests);
  if (!Number.isFinite(g) || g <= 0) e.guests = "Podaj liczbę gości.";
  return e;
}

export default function InquiryForm(props: { id?: string; className?: string }) {
  const pushToast = useToastStore((s) => s.push);
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const minDeparture = isValidIsoDate(state.arrival) ? state.arrival : undefined;

  const summary = useMemo(() => {
    const lines = [
      `Zapytanie o nocleg — ${site.name}`,
      "",
      `Imię i nazwisko: ${state.fullName}`,
      `E-mail: ${state.email}`,
      `Telefon: ${state.phone}`,
      "",
      `Data przyjazdu: ${state.arrival}`,
      `Data wyjazdu: ${state.departure}`,
      `Liczba gości: ${state.guests}`,
    ];
    if (state.message.trim()) {
      lines.push("", "Uwagi:", state.message.trim());
    }
    lines.push("", `Wysłane ze strony: ${site.name}`);
    return lines.join("\n");
  }, [state]);

  const copy = async () => {
    await navigator.clipboard.writeText(summary);
    pushToast({ title: "Skopiowano treść zapytania", description: "Możesz wkleić ją do wiadomości e-mail lub SMS." });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(state);
    setErrors(v);
    setSubmitted(true);
    if (Object.keys(v).length) {
      pushToast({ title: "Uzupełnij formularz", description: "Sprawdź oznaczone pola i spróbuj ponownie." });
      return;
    }

    const href = buildMailtoHref({
      to: site.email,
      subject: `Zapytanie o nocleg — ${site.name}`,
      body: summary,
    });

    pushToast({ title: "Otwieram wiadomość e-mail", description: "Jeśli nic się nie otworzy, skopiuj treść zapytania." });
    window.location.href = href;
  };

  const onChange =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setState((s) => ({ ...s, [key]: e.target.value }));
      if (submitted) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
    const next =
      digits.length <= 3
        ? digits
        : digits.length <= 6
          ? `${digits.slice(0, 3)}-${digits.slice(3)}`
          : `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    setState((s) => ({ ...s, phone: next }));
    if (submitted) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const onDateChange = (key: "arrival" | "departure") => (value: string) => {
    setState((s) => ({ ...s, [key]: value }));
    if (submitted) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const Field = (p: {
    label: string;
    hint?: string;
    error?: string;
    children: ReactNode;
  }) => (
    <label className="grid gap-2">
      <span className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">{p.label}</span>
      {p.children}
      {p.hint ? <span className="text-xs text-cream-200/60">{p.hint}</span> : null}
      {p.error ? <span className="text-xs font-semibold text-brass-300">{p.error}</span> : null}
    </label>
  );

  return (
    <section id={props.id} className={cn("relative overflow-hidden", props.className)}>
      <div className="pointer-events-none absolute inset-0 ws-wood opacity-[0.26]" />
      <div className="absolute inset-0 bg-wood-950/70" />
      <Ornament variant="a" className="-right-20 -top-20 h-72 w-72 opacity-[0.12] md:h-[420px] md:w-[420px]" />
      <Ornament variant="b" className="-left-28 bottom-10 h-64 w-64 opacity-[0.10] md:h-[380px] md:w-[380px]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <Reveal className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold tracking-[0.18em] text-cream-200/70">Rezerwacja</div>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-cream-100 md:text-4xl">
              Zarezerwuj swój pobyt w Tatrach - Wyślij zapytanie
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
              Odpowiemy możliwie szybko z potwierdzeniem dostępności i propozycją najlepszej opcji pobytu.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`tel:${site.phone.replace(/\\s/g, "")}`}
                className="flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
              >
                <Phone className="h-4 w-4 text-brass-400" />
                <div>
                  <div className="text-sm font-semibold text-cream-100">{site.phone}</div>
                  <div className="text-xs text-cream-200/70">Najprostsza droga do szybkiej rezerwacji</div>
                </div>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20"
              >
                <Mail className="h-4 w-4 text-brass-400" />
                <div>
                  <div className="text-sm font-semibold text-cream-100">{site.email}</div>
                  <div className="text-xs text-cream-200/70">Możesz też wysłać wiadomość bez formularza</div>
                </div>
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={submit} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Imię i Nazwisko" error={errors.fullName}>
                  <input
                    value={state.fullName}
                    onChange={onChange("fullName")}
                    className={cn(
                      "h-12 w-full rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60",
                      errors.fullName && "ring-brass-400/40",
                    )}
                    autoComplete="name"
                    inputMode="text"
                  />
                </Field>

                <Field label="Adres E-mail" error={errors.email}>
                  <input
                    value={state.email}
                    onChange={onChange("email")}
                    className={cn(
                      "h-12 w-full rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60",
                      errors.email && "ring-brass-400/40",
                    )}
                    autoComplete="email"
                    inputMode="email"
                    type="email"
                  />
                </Field>

                <Field label="Numer telefonu" error={errors.phone}>
                  <input
                    value={state.phone}
                    onChange={onPhoneChange}
                    className={cn(
                      "h-12 w-full rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60",
                      errors.phone && "ring-brass-400/40",
                    )}
                    autoComplete="tel"
                    placeholder="___-___-___"
                    inputMode="numeric"
                    type="tel"
                    maxLength={11}
                  />
                </Field>

                <Field label="Liczba gości" error={errors.guests} hint="Możesz doprecyzować w wiadomości.">
                  <select
                    value={state.guests}
                    onChange={onChange("guests")}
                    className={cn(
                      "h-12 w-full rounded-2xl bg-wood-950/60 px-4 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60",
                      errors.guests && "ring-brass-400/40",
                    )}
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <option key={i + 1} value={String(i + 1)} className="bg-wood-950 text-cream-100">
                        {i + 1}
                      </option>
                    ))}
                    <option value="9" className="bg-wood-950 text-cream-100">
                      9+
                    </option>
                  </select>
                </Field>

                <Field label="Data przyjazdu" error={errors.arrival}>
                  <DatePickerInput
                    value={state.arrival}
                    onChange={onDateChange("arrival")}
                    error={Boolean(errors.arrival)}
                  />
                </Field>

                <Field label="Data wyjazdu" error={errors.departure}>
                  <DatePickerInput
                    value={state.departure}
                    onChange={onDateChange("departure")}
                    min={minDeparture}
                    error={Boolean(errors.departure)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Wiadomość / Uwagi dodatkowe">
                  <textarea
                    value={state.message}
                    onChange={onChange("message")}
                    rows={5}
                    className="w-full resize-none rounded-2xl bg-wood-950/60 px-4 py-3 text-sm text-cream-100 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brass-400/60"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-xs text-cream-200/70">
                  Klikając “Sprawdź dostępność” otworzysz wiadomość e-mail do gospodarza.
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <Button type="button" variant="ghost" onClick={copy}>
                    Kopiuj treść
                  </Button>
                  <Button type="submit">Sprawdź dostępność</Button>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

