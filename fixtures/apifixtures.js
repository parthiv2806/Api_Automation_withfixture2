import { test as base } from "@playwright/test";
import { Generatetoken } from "../utils/tokenmanager";
import { Create_booking } from "../services/createservices";
import { CreateBooking } from "../payloads/createBookingPaylod";

export const test = base.extend({
  token: async ({ request }, use) => {
    const token = await Generatetoken(request);
    await use(token);
  },
  bookingId: async ({ request }, use) => {
    const response = await Create_booking(request, CreateBooking);

    const body = await response.json();

    await use(body.bookingid);
  },
});
