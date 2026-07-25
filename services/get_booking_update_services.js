export async function GetBooking(request, bookingId) {
  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}
`,
  );
  return response;
}
