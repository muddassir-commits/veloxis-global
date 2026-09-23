import { NextResponse } from 'next/server';
import * as z from 'zod';
import { insertRow, escapeHtml } from '../../../lib/db';
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

    // 3. Save to Supabase. A repeat subscription is treated as success so we do not leak who is subscribed.
    const saved = await insertRow('newsletter_subscribers', { email: formData.email });
    if (!saved.ok && saved.duplicate) {
      return NextResponse.json({ success: true, message: 'Subscription received successfully' });
    }

    // 4. Notify by email. Either step succeeding means the subscriber is captured.
    const mailed = await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'hello@veloxisglobal.com',
      subject: `New Newsletter Subscriber: ${formData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      `,
    });

    const emailed = mailed.success && !('mock' in mailed);
    if (!saved.ok && !emailed) {
      console.error('Newsletter subscriber could not be stored or emailed:', formData.email);
      return NextResponse.json({ success: false, error: 'Could not subscribe right now. Please try again later.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: 'Subscription received successfully' });
  } catch (error: any) {
    console.error('Error handling newsletter subscription:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
