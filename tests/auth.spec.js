import { test, expect } from "@playwright/test";
import { Authfunction } from "../services/authservices";
import { Authpayload } from "../payloads/authPayload";
import { Generatetoken } from "../utils/tokenmanager";
import {
  invalidBoth,
  invalidPassword,
  invalidUsername,
} from "../payloads/invalidPayload";
test("valid login", async ({ request }) => {
  const response = await Authfunction(request, Authpayload);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeTruthy();
});

test("invaid_password", async ({ request }) => {
  const response = await Authfunction(request, invalidPassword);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.reason).toBe("Bad credentials");
});

test("invalidUsername", async ({ request }) => {
  const response = await Authfunction(request, invalidUsername);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.reason).toBe("Bad credentials");
});
test("invalidBoth", async ({ request }) => {
  const response = await Authfunction(request, invalidBoth);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.reason).toBe("Bad credentials");
});
