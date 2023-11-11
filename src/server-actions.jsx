"use server";

import { Resend } from "resend";
import { Email } from "./components/email-template";
const resend = new Resend("re_WfRoBWzc_91FbtiMMQgAjTUW96F6snPkG");

export async function formSubmission(currentState, formData) {
  const email = formData.get("email");

  console.log(email);
  console.log(typeof email);
  try {
    const data = await resend.emails.send({
      from: "bitprowler <onboarding@resend.dev>",
      to: [email],
      subject: "testing bitprowler email ... from ghulam",
      react: <Email name={formData.get("name")}></Email>,
    });

    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "failure" };
  }
}