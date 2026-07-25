import { test } from "../fixtures/apifixtures";
import { Delete } from "../services/deletebooking";
import { expect } from "@playwright/test";
import { GetBooking } from "../services/get_booking_update_services";
test("Delete booking", async ({ request, token, bookingId }) => {
  const response = await Delete(request, token, bookingId);
  expect(response.status()).toBe(201);

  const deleteBody = await response.text();
  expect(deleteBody).toBe("Created");
  // Verify booking is deleted
  const getDeletedBooking = await GetBooking(request, bookingId);
  expect(getDeletedBooking.status()).toBe(404);
});
