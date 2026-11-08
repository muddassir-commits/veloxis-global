import { NextResponse, after } from 'next/server';
import * as z from 'zod';
import { insertRow, escapeHtml } from '../../../lib/db';
import { withinDailyLimit } from '../../../lib/rateLimit';
import { sendEmail } from '../../../lib/mail';
import { spamReason } from '../../../lib/spamGuard';
import { metaFieldsSchema, sameSiteUrl, sendCapiEvent } from '../../../lib/metaCapi';

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  service: z.string().min(1),
  message: z.string().optional(),
  _honey: z.string().optional(),
  company_website: z.string().optional(),
  _elapsed: z.number().optional(),
  _meta: metaFieldsSchema,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 2. Validate with Zod
    const parsedData = contactSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { success: false, errors: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { _honey, company_website, _elapsed, _meta, ...formData } = parsedData.data;

    // Spam (honeypot, filled in under 3 s, link-building pitch): answer "success" so the sender
    // learns nothing, but save nothing, email nothing and tell the browser it was not a lead.
    const spam = spamReason({ honeypots: [_honey, company_website], elapsedMs: _elapsed, message: formData.message });
    if (spam) {
      console.warn(`Contact form submission dropped as spam (${spam}).`);
      return NextResponse.json({ success: true, lead: false, message: 'Contact request received successfully' });
    }

    // Max 3 submissions per visitor per day (reset at midnight IST).
    if (!(await withinDailyLimit(request, 'contact'))) {
      return NextResponse.json(
        { success: false, error: "You've reached today's limit for this form. Please try again tomorrow or message us on WhatsApp." },
        { status: 429 }
      );
    }

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

    // Meta Conversions API: server copy of the browser's Lead (same event_id, so Meta counts it once).
    // Only with marketing consent; off until the META_* env vars are set. Runs after the response.
    if (_meta?.consent === true) {
      after(() =>
        sendCapiEvent({
          eventName: 'Lead',
          eventId: _meta.event_id,
          eventSourceUrl: sameSiteUrl(request, request.headers.get('referer')),
          request,
          phone: formData.phone,
          name: formData.name,
          country: 'in',
          fbp: _meta.fbp,
          fbc: _meta.fbc,
          customData: { content_name: 'ContactForm' },
        }),
      );
    }

    return NextResponse.json({ success: true, lead: true, message: 'Contact request received successfully' });
  } catch (error: any) {
    console.error('Error handling contact request:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
