const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
// Change port to 5001 to match your frontend configuration
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files (like the resume PDF)

// Email transporter setup using Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const mailOptions = {
    from: email,
    to: 'ganeshbalarajude@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

// Resume download route
app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'Ganesh_Balaraju_Resume.pdf');
  res.download(filePath, 'Ganesh_Balaraju_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      res.status(500).json({ message: 'Failed to download resume.' });
    }
  });
});