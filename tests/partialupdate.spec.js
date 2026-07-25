import { test } from "../fixtures/apifixtures";
import { Partial_update } from "../services/partial_booking_update_services";
import { PartialBooking } from "../payloads/partialUpdateBookingPayload";
import { expect } from "@playwright/test";

test("Partial Update", async ({ request, token, bookingId }) => {
  const response = await Partial_update(
    request,
    token,
    PartialBooking,
    bookingId,
  );
  expect(response.status()).toBe(200);

  const partialBody = await response.json();
  console.log(partialBody);
  expect(partialBody.lastname).toBe(PartialBooking.lastname);
  expect(partialBody.totalprice).toBe(PartialBooking.totalprice);
});
