import { GetBooking } from "../services/get_booking_update_services";
import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";
test("Get Booking", async ({ request, bookingId }) => {
  const response = await GetBooking(request, bookingId);
  expect(response.status()).toBe(200);
  const getBody = await response.json();
  console.log(getBody);
});
