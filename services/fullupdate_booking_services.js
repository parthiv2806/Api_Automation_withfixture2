export async function Full_update(request, token, payload, bookingId) {
  const response = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}
`,
    {
      headers: {
        Cookie: `token=${token}`,
      },
      data: payload,
    },
  );
  return response;
}
