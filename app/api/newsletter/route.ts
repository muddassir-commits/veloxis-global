import { NextResponse } from 'next/server';
import * as z from 'zod';
import db from '../../../lib/db';
import { sendEmail } from '../../../lib/mail';

const newsletterSchema = z.object({
  email: z.string().email(),
  _honey: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate honeypot (reject if filled)
    if (body._honey && body._honey.trim() !== '') {
      console.warn('Newsletter subscription spam submission detected via honeypot:', body);
      return NextResponse.json({ success: false, error: 'Spam detected' }, { status: 400 });
    }

    // 2. Validate with Zod
    const parsedData = newsletterSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { success: false, errors: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { _honey, ...formData } = parsedData.data;

    // 3. Save to local SQLite database
    try {
      const stmt = db.prepare(`
        INSERT INTO newsletter_subscribers (email)
        VALUES (@email)
      `);
      stmt.run({ email: formData.email });
    } catch (dbError: any) {
      if (dbError.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        console.warn('Email already subscribed:', formData.email);
        // We can just return success anyway to not leak info, or a friendly message
      } else {
        throw dbError;
      }
    }

    // 4. Send email notification
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'hello@veloxisglobal.com',
      subject: `New Newsletter Subscriber: ${formData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Subscription received successfully' });
  } catch (error: any) {
    console.error('Error handling newsletter subscription:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
