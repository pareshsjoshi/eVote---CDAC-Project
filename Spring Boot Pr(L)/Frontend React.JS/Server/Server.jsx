import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Configure your transporter using your SMTP provider details.
// For example, if using Gmail, you might use smtp.gmail.com.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g., smtp.gmail.com
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587, // Use 465 for secure connections
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address (stored in environment variables)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Endpoint to send the OTP
app.post('/send-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  const mailOptions = {
    from: '"eVote" <justbetter10u.com>', // Sender address
    to: email, // Recipient
    subject: 'Your OTP Code', // Subject line
    text: `Your OTP code is ${otp}`, // Plain text body
    // You can also send HTML:
    // html: `<p>Your OTP code is <strong>${otp}</strong></p>`,
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
