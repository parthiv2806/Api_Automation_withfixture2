import { Authfunction } from "../services/authservices";
import { Authpayload } from "../payloads/authPayload";

export async function Generatetoken(request) {
  const resposne = await Authfunction(request, Authpayload);
  const body = await resposne.json();
  return body.token;
}
