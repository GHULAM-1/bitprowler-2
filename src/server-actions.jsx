"use server";
import { Resend } from "resend";
const resend = new Resend("re_WfRoBWzc_91FbtiMMQgAjTUW96F6snPkG");
// import { EmailTemplate } from "./components/email-template";
import Email from "./components/email-template";
export async function formSubmission(currentState, formData) {
  const email = formData.get("email");

  console.log(email);
  console.log(typeof email);
  try {
    const data = await resend.emails.send({
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
