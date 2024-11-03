import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  testInboxId: 3249915,
  accountId: process.env.MAILTRAP_ACCOUNT_ID,
});

export const mailtrapSender = {
  email: "hello@example.com",
  name: "Test",
};
