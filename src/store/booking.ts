import { create } from "zustand";

export type BookingState = {
  arrival: string;
  departure: string;
  adults: string;
  setBookingData: (data: Partial<Omit<BookingState, "setBookingData" | "resetBookingData">>) => void;
  resetBookingData: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  arrival: "",
  departure: "",
  adults: "2",
  setBookingData: (data) => set((prev) => ({ ...prev, ...data })),
  resetBookingData: () => set({ arrival: "", departure: "", adults: "2" }),
}));
