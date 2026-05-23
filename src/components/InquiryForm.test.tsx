import { render, screen, fireEvent } from "@testing-library/react";
import InquiryForm from "@/components/InquiryForm";
import { describe, expect, it } from "vitest";

describe("InquiryForm", () => {
  it("waliduje wymagane pola", async () => {
    render(<InquiryForm id="zapytanie" />);

    fireEvent.click(screen.getByRole("button", { name: /Sprawdź dostępność/i }));

    expect(await screen.findByText("Podaj imię i nazwisko.")).toBeInTheDocument();
    expect(await screen.findByText("Podaj poprawny adres e-mail.")).toBeInTheDocument();
    expect(await screen.findByText("Podaj numer telefonu (9 cyfr).")).toBeInTheDocument();
    expect(await screen.findByText("Wybierz datę przyjazdu.")).toBeInTheDocument();
    expect(await screen.findByText("Wybierz datę wyjazdu.")).toBeInTheDocument();
  });

  it("wykrywa niepoprawny zakres dat", async () => {
    render(<InquiryForm id="zapytanie" />);

    fireEvent.change(screen.getByLabelText(/Imię i Nazwisko/i), { target: { value: "Jan Kowalski" } });
    fireEvent.change(screen.getByLabelText(/Adres E-mail/i), { target: { value: "jan@example.com" } });
    fireEvent.change(screen.getByLabelText(/Numer telefonu/i), { target: { value: "600000000" } });
    fireEvent.change(screen.getByLabelText(/Data przyjazdu/i), { target: { value: "2026-06-10" } });
    fireEvent.change(screen.getByLabelText(/Data wyjazdu/i), { target: { value: "2026-06-09" } });

    expect((screen.getByLabelText(/Data przyjazdu/i) as HTMLInputElement).value).toBe("2026-06-10");
    expect((screen.getByLabelText(/Data wyjazdu/i) as HTMLInputElement).value).toBe("2026-06-09");

    fireEvent.click(screen.getByRole("button", { name: /Sprawdź dostępność/i }));

    const errors = Array.from(document.querySelectorAll(".text-brass-300")).map((n) => n.textContent ?? "");
    expect(errors).toContain("Data wyjazdu musi być późniejsza niż data przyjazdu.");
  });
});

