import { Authpayload } from "../payloads/authPayload";

export async function Authfunction(request, payload) {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: payload,
    },
  );
  return response;
}
