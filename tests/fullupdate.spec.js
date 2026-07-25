import { test } from "../fixtures/apifixtures";
import { Full_update } from "../services/fullupdate_booking_services";
import { FullupdateBooking } from "../payloads/fullupdatePayload";
import { expect } from "@playwright/test";

test("Full Update", async ({ request, token, bookingId }) => {
  const response = await Full_update(
    request,
    token,
    FullupdateBooking,
    bookingId,
  );
  expect(response.status()).toBe(200);

  const FullBody = await response.json();
  console.log(FullBody);
  expect(FullBody.lastname).toBe(FullupdateBooking.lastname);
  expect(FullBody.totalprice).toBe(FullupdateBooking.totalprice);
  expect(FullBody.totalprice).toBe(FullupdateBooking.totalprice);
  expect(FullBody.depositpaid).toBe(FullupdateBooking.depositpaid);
  expect(FullBody.bookingdates.checkin).toBe(
    FullupdateBooking.bookingdates.checkin,
  );
  expect(FullBody.bookingdates.checkout).toBe(
    FullupdateBooking.bookingdates.checkout,
  );
  expect(FullBody.additionalneeds).toBe(FullupdateBooking.additionalneeds);
});
