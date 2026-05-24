import { NextResponse } from 'next/server';
import * as z from 'zod';

const auditSchema = z.object({
  websiteUrl: z.string().url(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  city: z.string().min(1),
  _honey: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validate honeypot (reject if filled)
    if (body._honey && body._honey.trim() !== '') {
      console.warn('Audit form spam submission detected via honeypot:', body);
      return NextResponse.json({ success: false, error: 'Spam detected' }, { status: 400 });
    }

    // 2. Validate with Zod
    const parsedData = auditSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { success: false, errors: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { _honey, ...formData } = parsedData.data;

    // 3. Forward to N8N webhook
    const webhookUrl = process.env.N8N_AUDIT_WEBHOOK;
    if (!webhookUrl) {
      console.warn('Warning: N8N_AUDIT_WEBHOOK is not configured.');
      // Return success mock locally to prevent errors if not configured yet
      return NextResponse.json({ 
        success: true, 
        mock: true, 
        message: 'Mock audit request handled successfully (no N8N webhook set)' 
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'audit-form'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('N8N webhook returned error response:', errorText);
      throw new Error(`N8N response code: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: 'Audit request forwarded to N8n successfully' });
  } catch (error: any) {
    console.error('Error handling audit request:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}
