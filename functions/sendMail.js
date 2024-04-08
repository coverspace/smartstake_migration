import mailgun from "mailgun-js";
const mailgun = require("mailgun-js");

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body);

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

  const data = {
    from: `${name} <${email}>`,
    to: "office@smartstake.ai",
    subject: "New Contact Form Submission via Mailgun",
    text: message,
  };

  try {
    await mg.messages().send(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
