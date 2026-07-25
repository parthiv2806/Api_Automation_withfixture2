
export async function Partial_update(request, token, payload, bookingId) {
  const response = await request.patch(
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
