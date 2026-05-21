import { render, screen, fireEvent } from "@testing-library/react";
import FAQAccordion from "@/components/FAQAccordion";
import { describe, expect, it } from "vitest";

const items = [
  { question: "Q1", answer: "A1" },
  { question: "Q2", answer: "A2" },
] as const;

describe("FAQAccordion", () => {
  it("pokazuje odpowiedź dla pierwszego pytania domyślnie i pozwala przełączać", () => {
    render(<FAQAccordion items={[...items]} />);

    const q1 = screen.getByRole("button", { name: /Q1/i });
    const q2 = screen.getByRole("button", { name: /Q2/i });

    expect(q1).toHaveAttribute("aria-expanded", "true");
    expect(q2).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(q2);
    expect(q1).toHaveAttribute("aria-expanded", "false");
    expect(q2).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(q2);
    expect(q2).toHaveAttribute("aria-expanded", "false");
  });
});

