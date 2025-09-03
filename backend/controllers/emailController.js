import { sendEmail } from "../services/emailService.js";

export const sendTestEmail = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    service,
    budget,
    timeline,
    message,
    projectDetails,
  } = req.body;

  // Example: construct email message
  const fullMessage = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    Company: ${company}
    Service: ${service}
    Budget: ${budget}
    Timeline: ${timeline}
    Project Details: ${projectDetails}

    Message:
    ${message}
  `;
  console.log(fullMessage);

  const result = await sendEmail({
    to: ["tankdishant2003@gmail.com", "mananpatel.brandveda@gmail.com"],
    subject: "Client message",
    text: message,
    html: `<p>${fullMessage}</p>`,
  });

  if (result.success) {
    res
      .status(200)
      .json({ message: "Email sent successfully!", id: result.messageId });
  } else {
    res.status(500).json({ error: result.error });
  }
};
