import { describe, expect, it } from "vitest";
import { buildBookingUrl, BOOKING_BASE_URL } from "./booking";

describe("buildBookingUrl", () => {
  it("returns base URL when no parameters given", () => {
    expect(buildBookingUrl()).toBe(BOOKING_BASE_URL);
  });

  it("builds query with arrival, departure, adults and defaults step to rooms", () => {
    const url = buildBookingUrl({
      arrival: "2026-11-03",
      departure: "2026-11-05",
      adults: 2,
    });
    expect(url).toBe(
      "https://booking.brosystems.pl/a92f80f5f1d63b73?arrival=2026-11-03&departure=2026-11-05&adults=2&step=rooms",
    );
  });

  it("respects custom step parameter if specified", () => {
    const url = buildBookingUrl({
      arrival: "2026-11-03",
      departure: "2026-11-05",
      adults: 3,
      step: "addons",
    });
    expect(url).toBe(
      "https://booking.brosystems.pl/a92f80f5f1d63b73?arrival=2026-11-03&departure=2026-11-05&adults=3&step=addons",
    );
  });
});
