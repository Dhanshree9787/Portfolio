// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/send', (req, res) => {
//   const { name, email, phone, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'dhanshreenanotkar@gmail.com',
//       pass: 'wjtsuqfaeclkhqic'
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: 'dhanshreenanotkar@gmail.com',
//     subject: `Contact Form: ${subject}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Error sending email' });
//     } else {
//       res.status(200).json({ message: 'Message sent successfully' });
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// POST endpoint to handle contact form
app.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dhanshreenanotkar@gmail.com", // replace with your Gmail
      pass: " ftmxqelqzzqmjfil",   // replace with Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "dhanshreenanotkar@gmail.com", // receive mail here
    subject: `New Contact: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
