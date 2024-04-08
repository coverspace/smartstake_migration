require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.NETLIFY_EMAILS_PROVIDER_API_KEY,
});

exports.handler = async (event) => {
  try {
    // Parse form input
    const { name, email, message } = JSON.parse(event.body);

    // Send email using Mailgun
    const emailData = {
      from: `${name} <${email}>`,
      to: "office@smartstake.ai",
      subject: "New Contact Form Submission",
      text: message,
    };

    await mg.messages.create(
      process.env.NETLIFY_EMAILS_MAILGUN_DOMAIN,
      emailData
    );

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
