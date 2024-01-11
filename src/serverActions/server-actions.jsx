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
      to: [
        "ilyasghulam35@gmail.com" , "mbinshahz@gmail.com" , "sarimibrahim16@gmail.com",
      ],
      subject: "Guys We Have A Client !!!",
      text: `client's email id is -----${email}----- and client's name ----- ${formData.get(
        "name"
      )} ----- and the message is -----${message} ---------`,
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
