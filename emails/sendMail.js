const mailgun = require("mailgun-js");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Initialize Mailgun client
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_API_DOMAIN,
    // host: `api.${process.env.NETLIFY_EMAILS_MAILGUN_HOST_REGION}.mailgun.net`,
  });

  const data = {
    from: `${name} <${email}>`,
    to: "office@smartstake.ai",
    subject: "New contact form submission",
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
};
