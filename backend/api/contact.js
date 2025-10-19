const express = require('express');
const { Resend } = require('resend'); // Import Resend SDK
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(bodyParser.json()); // Parse JSON payload

// API endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'OZ Design Group <no-reply@ozdesign.com.au>', // Use a verified domain email
      to: ['info@omlending.com.au'], // Your recipient email
      subject: 'New Contact Form Submission',
      html: `
        <p>You have received a new message from the contact form on your website.</p>
        <p><strong>Here are the details:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p>Best regards,<br>OZ Design Group</p>
      `
    });

    console.log('Email response:', response);
    res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});