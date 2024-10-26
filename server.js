import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Resend } from 'resend';
import React from 'react';
import { renderToString } from 'react-dom/server';
import SignUpEmail from './src/emails/SignUpEmail.tsx';

// Load environment variables
dotenv.config({ path: join(__dirname, '.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(join(__dirname, 'dist')));

// Initialize Resend
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

app.post('/api/sign-up', async (req, res) => {
  const formData = req.body;

  try {
    // Render the email template to HTML
    const emailHtml = renderToString(React.createElement(SignUpEmail, formData));

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'KitchenAds <noreply@marketing.wepeacock.com>',
      to: 'david@kitchenads.email',
      subject: 'New KitchenAds Sign Up',
      html: emailHtml,
    });

    console.log('Email sent successfully via Resend');
    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      details: JSON.stringify(error, Object.getOwnPropertyNames(error))
    });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Resend API Key:', process.env.VITE_RESEND_API_KEY ? 'Set' : 'Not set');
});