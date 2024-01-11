"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_CONNECTION_STRING);
import Email from "../components/home/email-template";
export async function formSubmission(currentState, formData) {
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    await resend.emails.send({
      from: "bitprowler <team@bitprowler.com>",
      to: ["ilyasghulam35@gmail.com"], // Update with your email address
      subject: "Guys We Have A Client",
      text: message, // Include the message in the email body
    });

    await resend.emails.send({
      from: "bitprowler <team@bitprowler.com>",
      to: [email],
      subject: "Thank you for contacting",
      react: <Email name={formData.get("name")} />,
    });

    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "failure" };
  }
}
