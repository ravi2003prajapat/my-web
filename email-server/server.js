const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Route for sending emails
app.post("/send", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // your App Password
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, // shows user's name, your Gmail
    to: process.env.EMAIL_USER, // your email
    replyTo: email, // user’s real email for replies
    subject: `New message from ${firstName} ${lastName}`,
    text: `
Message: ${message}

Sender Info:
Name: ${firstName} ${lastName}
Email: ${email}
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Email server is running");
});
app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on http://0.0.0.0:5000");
});