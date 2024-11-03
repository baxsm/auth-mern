import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, mailtrapSender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    await mailtrapClient.send({
      from: mailtrapSender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "verification",
    });
  } catch (error) {
    console.error(`Error sending verification email`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    await mailtrapClient.send({
      from: mailtrapSender,
      to: recipient,
      template_uuid: "830af756-04a3-4be3-900b-17858d00b1a6",
      template_variables: {
        name: name,
        company_info_name: "Company",
      },
    });
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetToken) => {
  const recipient = [{ email }];

  try {
    await mailtrapClient.send({
      from: mailtrapSender,
      to: recipient,
      subject: "Reset your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetUrl}",
        verificationToken
      ),
      category: "password-reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessfulEmail = async (email) => {
  const recipient = [{ email }];

  try {
    await mailtrapClient.send({
      from: mailtrapSender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "password-reset-success",
    });
  } catch (error) {
    console.error(`Error sending reset password success email`, error);
    throw new Error(`Error sending reset password success email: ${error}`);
  }
};
