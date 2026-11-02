export const BOOKING_BASE_URL = "https://booking.brosystems.pl/a92f80f5f1d63b73";

export type BookingQueryParams = {
  arrival?: string;
  departure?: string;
  adults?: number | string;
  step?: string;
};

export function buildBookingUrl(params?: BookingQueryParams): string {
  if (!params) return BOOKING_BASE_URL;

  const url = new URL(BOOKING_BASE_URL);

  if (params.arrival) {
    url.searchParams.set("arrival", params.arrival);
  }
  if (params.departure) {
    url.searchParams.set("departure", params.departure);
  }
  if (params.adults !== undefined && params.adults !== null) {
    url.searchParams.set("adults", String(params.adults));
  }
  if (params.step) {
    url.searchParams.set("step", params.step);
  } else if (params.arrival && params.departure) {
    url.searchParams.set("step", "rooms");
  }

  return url.toString();
}
