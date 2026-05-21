import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ProjectionPayload {
  address: string;
  bedrooms: string;
  bathrooms: string;
  market: string;
  currentUsage: string;
  revenueGoal: string;
  email: string;
  phone?: string;
}

function buildHtml(d: ProjectionPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #06060F; padding: 24px 32px; border-radius: 8px 8px 0 0; border-bottom: 1px solid rgba(212,175,55,0.3);">
        <h1 style="color: #D4AF37; margin: 0; font-size: 18px; letter-spacing: 0.1em; text-transform: uppercase;">Revenue Projection Request</h1>
        <p style="color: rgba(255,255,255,0.4); margin: 4px 0 0; font-size: 13px;">QCB Global</p>
      </div>
      <div style="background-color: #0C0C1A; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid rgba(255,255,255,0.08);">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding:10px 0;color:#888;font-size:13px;width:130px;vertical-align:top;">Property Address</td><td style="padding:10px 0;color:#fff;font-weight:600;">${d.address}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Bedrooms</td><td style="padding:10px 0;color:#fff;">${d.bedrooms}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Bathrooms</td><td style="padding:10px 0;color:#fff;">${d.bathrooms}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Market / Location</td><td style="padding:10px 0;color:#fff;">${d.market}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Current Usage</td><td style="padding:10px 0;color:#fff;">${d.currentUsage}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Revenue Goal</td><td style="padding:10px 0;color:#D4AF37;font-weight:600;">${d.revenueGoal}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Email</td><td style="padding:10px 0;color:#fff;">${d.email}</td></tr>
          ${d.phone ? `<tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Phone</td><td style="padding:10px 0;color:#fff;">${d.phone}</td></tr>` : ''}
        </table>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ProjectionPayload = await request.json();
    const { address, bedrooms, bathrooms, market, currentUsage, revenueGoal, email } = body;

    if (!address?.trim() || !bedrooms?.trim() || !bathrooms?.trim() || !market?.trim() || !currentUsage?.trim() || !revenueGoal?.trim() || !email?.trim()) {
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
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const fromName = process.env.SMTP_FROM_NAME ?? 'QCB Global';
    const fromAddress = process.env.SMTP_USER ?? '';
    const toAddress = process.env.CONTACT_EMAIL ?? fromAddress;

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `Revenue Projection Request — ${market} | ${bedrooms}BR`,
      html: buildHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Revenue projection error:', err);
    return NextResponse.json({ error: 'Failed to submit. Please try again later.' }, { status: 500 });
  }
}
