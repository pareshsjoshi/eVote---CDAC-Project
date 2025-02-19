// server.js (using ES module syntax)
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Use the CORS middleware to allow requests from all origins
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Configure your transporter using your SMTP provider details.
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || 'gmail',
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g., smtp.gmail.com
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587, // Use 465 for secure connections
  secure: false, // true for port 465, false for others
  auth: {
    user: process.env.EMAIL_USER || 'justbetter10u@gmail.com', // Your email address from environment variables
    pass: process.env.EMAIL_PASS || 'agjycqidqtkgcmvn', // Your email password or app-specific password
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error with transporter configuration:', error);
  } else {
    console.log('Server is ready to take our messages:', success);
  }
});

// Endpoint to send the OTP
app.post('/send-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  const mailOptions = {
    from: '"Just Better" <justbetter10u@gmail.com>',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
