import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

function buildEmailHtml(data: ContactPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0c1b33; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        <p style="color: #c9a84c; margin: 4px 0 0; font-size: 14px;">QCB Real Estate</p>
      </div>
      <div style="background-color: #f8f9fa; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #0f172a;">${data.email}</td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0; color: #0f172a;">${data.phone}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Interest</td>
            <td style="padding: 10px 0; color: #0f172a;">${data.interest}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, interest, message } = body;

    if (!name?.trim() || !email?.trim() || !interest?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromName = process.env.SMTP_FROM_NAME ?? 'QCB Real Estate';
    const fromAddress = process.env.SMTP_USER ?? '';
    const toAddress = process.env.CONTACT_EMAIL ?? fromAddress;

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toAddress,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry: ${interest} — from ${name}`,
      html: buildEmailHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
