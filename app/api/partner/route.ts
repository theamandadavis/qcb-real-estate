import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface PartnerPayload {
  name: string;
  market: string;
  propertyType: string;
  revenueGoals: string;
  email: string;
  phone?: string;
}

function buildHtml(d: PartnerPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #06060F; padding: 24px 32px; border-radius: 8px 8px 0 0; border-bottom: 1px solid rgba(212,175,55,0.3);">
        <h1 style="color: #D4AF37; margin: 0; font-size: 18px; letter-spacing: 0.1em; text-transform: uppercase;">Partner Inquiry</h1>
        <p style="color: rgba(255,255,255,0.4); margin: 4px 0 0; font-size: 13px;">QCB Global</p>
      </div>
      <div style="background-color: #0C0C1A; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid rgba(255,255,255,0.08);">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding:10px 0;color:#888;font-size:13px;width:130px;vertical-align:top;">Name</td><td style="padding:10px 0;color:#fff;font-weight:600;">${d.name}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Market / City</td><td style="padding:10px 0;color:#fff;">${d.market}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Property Type</td><td style="padding:10px 0;color:#D4AF37;font-weight:600;">${d.propertyType}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Revenue Goals</td><td style="padding:10px 0;color:#fff;white-space:pre-wrap;">${d.revenueGoals}</td></tr>
          <tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Email</td><td style="padding:10px 0;color:#fff;">${d.email}</td></tr>
          ${d.phone ? `<tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Phone</td><td style="padding:10px 0;color:#fff;">${d.phone}</td></tr>` : ''}
        </table>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: PartnerPayload = await request.json();
    const { name, market, propertyType, revenueGoals, email } = body;

    if (!name?.trim() || !market?.trim() || !propertyType?.trim() || !revenueGoals?.trim() || !email?.trim()) {
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
      replyTo: `"${name}" <${email}>`,
      subject: `Partner Inquiry — ${propertyType} in ${market} | ${name}`,
      html: buildHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Partner inquiry error:', err);
    return NextResponse.json({ error: 'Failed to submit. Please try again later.' }, { status: 500 });
  }
}
