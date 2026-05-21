import Reveal from "@/components/Reveal";
import { type FaqItem } from "@/content/faq";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export default function FAQAccordion(props: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="grid gap-3">
      {props.items.map((item, idx) => {
        const isOpen = open === idx;
        const panelId = `${uid}-panel-${idx}`;
        const buttonId = `${uid}-button-${idx}`;

        return (
          <Reveal key={item.question} className="rounded-3xl bg-white/5 ring-1 ring-white/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((v) => (v === idx ? null : idx))}
              >
                <span className="font-display text-[15px] tracking-wide text-cream-100 md:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-brass-400 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-cream-200/80">{item.answer}</div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

