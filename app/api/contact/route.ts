import { NextResponse } from 'next/server';
import * as z from 'zod';
import db from '../../../lib/db';
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

    // 3. Save to local SQLite database
    const stmt = db.prepare(`
      INSERT INTO contacts (name, phone, service, message)
      VALUES (@name, @phone, @service, @message)
    `);
    
    stmt.run({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      message: formData.message || null
    });

    // 4. Send email notification
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'hello@veloxisglobal.com',
      subject: `New Contact Lead: ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Contact request received successfully' });
  } catch (error: any) {
    console.error('Error handling contact request:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
