import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { executeQuery } from '@/config/database';

export const runtime = 'nodejs';

// Replace with your email service credentials
const transporter = nodemailer.createTransporter({
  service: 'gmail', // Change this to your email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Use app password for Gmail
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone } = body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to MySQL database
    const query = `
      INSERT INTO contact_submissions (name, email, subject, message, phone)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    await executeQuery(query, [name, email, subject, message, phone || null]);
    
    // Create email content
    const mailOptions = {
      from: email,
      to: process.env.PERSONAL_EMAIL || 'your-personal-email@example.com', // Your personal email address
      subject: `Website Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #0ea5e9;">New contact message from your website</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 20px; border-left: 4px solid #0ea5e9; padding-left: 15px;">
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  </div>
</div>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}