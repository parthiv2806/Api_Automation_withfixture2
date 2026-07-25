import { expect, test } from "@playwright/test";
import { Create_booking } from "../services/createservices";
import { CreateBooking } from "../payloads/createBookingPaylod";

test("Create booking", async ({ request }) => {
  const response = await Create_booking(request, CreateBooking);
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
  //Booking validation
  expect(body.booking.firstname).toBe(CreateBooking.firstname);
  expect(body.booking.lastname).toBe(CreateBooking.lastname);
  expect(body.booking.totalprice).toBe(CreateBooking.totalprice);
  expect(body.booking.depositpaid).toBe(CreateBooking.depositpaid);
  expect(body.booking.bookingdates.checkin).toBe(
    CreateBooking.bookingdates.checkin,
  );
  expect(body.booking.bookingdates.checkout).toBe(
    CreateBooking.bookingdates.checkout,
  );
  expect(body.booking.additionalneeds).toBe(CreateBooking.additionalneeds);
});
