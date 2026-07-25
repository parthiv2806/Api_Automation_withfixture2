import { CreateBooking } from "../payloads/createBookingPaylod";
export async function Create_booking(request, payload) {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: payload,
    },
  );
  return response;
}
