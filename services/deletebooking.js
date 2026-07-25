export async function Delete(request, token, bookingId) {
  const response = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`,
      },
    },
  );

  return response;
}
