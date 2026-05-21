import { render, screen, fireEvent } from "@testing-library/react";
import InquiryForm from "@/components/InquiryForm";
import { describe, expect, it } from "vitest";

describe("InquiryForm", () => {
  it("waliduje wymagane pola", () => {
    render(<InquiryForm id="zapytanie" />);

    fireEvent.click(screen.getByRole("button", { name: /Sprawdź dostępność/i }));

    expect(screen.getByText("Podaj imię i nazwisko.")).toBeInTheDocument();
    expect(screen.getByText("Podaj poprawny adres e-mail.")).toBeInTheDocument();
    expect(screen.getByText("Podaj numer telefonu.")).toBeInTheDocument();
    expect(screen.getByText("Wybierz datę przyjazdu.")).toBeInTheDocument();
    expect(screen.getByText("Wybierz datę wyjazdu.")).toBeInTheDocument();
  });

  it("wykrywa niepoprawny zakres dat", () => {
    render(<InquiryForm id="zapytanie" />);

    fireEvent.change(screen.getByLabelText(/Imię i Nazwisko/i), { target: { value: "Jan Kowalski" } });
    fireEvent.change(screen.getByLabelText(/Adres E-mail/i), { target: { value: "jan@example.com" } });
    fireEvent.change(screen.getByLabelText(/Numer telefonu/i), { target: { value: "600000000" } });
    fireEvent.change(screen.getByLabelText(/Data przyjazdu/i), { target: { value: "2026-06-10" } });
    fireEvent.change(screen.getByLabelText(/Data wyjazdu/i), { target: { value: "2026-06-09" } });

    fireEvent.click(screen.getByRole("button", { name: /Sprawdź dostępność/i }));

    expect(screen.getByText("Data wyjazdu musi być późniejsza niż data przyjazdu.")).toBeInTheDocument();
  });
});

