import { Resend } from 'resend';

const resend = new Resend('re_Wkz6mWs2_EGnXPsf9undNQ5djvwemUne9');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'ilyasghulam35@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});