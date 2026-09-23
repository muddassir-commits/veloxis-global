import { NextResponse } from 'next/server';
import * as z from 'zod';
import { insertRow, escapeHtml } from '../../../lib/db';
import { sendEmail } from '../../../lib/mail';

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  service: z.string().min(1),
  message: z.string().optional(),
  _honey: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate honeypot (reject if filled)
    if (body._honey && body._honey.trim() !== '') {
      console.warn('Contact form spam submission detected via honeypot:', body);
      return NextResponse.json({ success: false, error: 'Spam detected' }, { status: 400 });
    }

    // 2. Validate with Zod
    const parsedData = contactSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { success: false, errors: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { _honey, ...formData } = parsedData.data;

    // 3. Save to Supabase and notify by email. Either one succeeding means the lead is captured.
    const [saved, mailed] = await Promise.all([
      insertRow('contacts', {
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        message: formData.message || null,
      }),
      sendEmail({
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'hello@veloxisglobal.com',
        subject: `New Contact Lead: ${formData.name}`,
        html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(formData.service)}</p>
        <p><strong>Message:</strong> ${escapeHtml(formData.message || 'N/A')}</p>
      `,
      }),
    ]);

    const emailed = mailed.success && !('mock' in mailed);
    if (!saved.ok && !emailed) {
      console.error('Contact lead could not be stored or emailed:', formData);
      return NextResponse.json({ success: false, error: 'Could not submit right now. Please try WhatsApp.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: 'Contact request received successfully' });
  } catch (error: any) {
    console.error('Error handling contact request:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
