import { test as base } from "@playwright/test";
import { Generatetoken } from "../utils/tokenmanager";

export const test = base.extend({
  token: async ({ request }, use) => {
    const token = await Generatetoken(request);
    await use(token);
  },
});
