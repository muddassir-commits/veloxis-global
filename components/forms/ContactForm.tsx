'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import { events, metaFormFields, newEventId } from '../../lib/analytics';
import { siteData } from '../../data/site';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().optional(),
  _honey: z.string().optional(),
  company_website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: 'High-Converting Landing Pages', label: 'Websites & Landing Pages' },
  { value: 'Meta & Google Ads', label: 'Meta & Google Ads' },
  { value: 'SEO & Local SEO', label: 'SEO & Local SEO' },
  { value: 'AI & WhatsApp Automation', label: 'WhatsApp & AI Automation' },
  { value: 'Full Pipeline Setup (All)', label: 'Several services together' },
  { value: 'Real Estate Lead System', label: 'Real Estate Lead System (real estate only)' },
  { value: 'NRI buyer campaigns', label: 'NRI buyer campaigns' },
  { value: 'Other', label: 'Other' },
];

// Time-to-submit for the spam check: measured from the first focus inside the form (a person has
// to tap or click a field). Scripts that post without touching the form send 0 and are dropped.
// The first focus also sends GA4 form_start (feeds the "Started form, no lead" audience).
function markFirstFocus(e: React.FocusEvent<HTMLFormElement>) {
  if (!e.currentTarget.dataset.start) {
    e.currentTarget.dataset.start = String(Date.now());
    events.formStart('ContactForm', window.location.pathname);
  }
}

function msSinceFirstFocus(event?: React.BaseSyntheticEvent) {
  const form = event?.target as HTMLFormElement | undefined;
  const start = Number(form?.dataset?.start || 0);
  return start ? Date.now() - start : 0;
}

export const ContactForm: React.FC<{ defaultService?: string }> = ({ defaultService = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  // Server message for rate limits (429); other failures use the generic text.
  const [limitMessage, setLimitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: defaultService,
      message: '',
      _honey: '',
      company_website: '',
    }
  });



  // Links like /contact?service=NRI%20buyer%20campaigns preselect an option. Read on the client
  // so pages with the form stay static.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('service');
    if (wanted && serviceOptions.some((o) => o.value === wanted)) setValue('service', wanted);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData, event?: React.BaseSyntheticEvent) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setLimitMessage(null);
    // One id for the browser Pixel Lead and the server CAPI Lead, so Meta counts the lead once.
    const eventId = newEventId();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _elapsed: msSinceFirstFocus(event), ...metaFormFields(eventId) }),
      });

      if (response.ok) {
        const result = await response.json().catch(() => null);
        // generate_lead only for submissions the server accepted as real (spam is dropped silently).
        if (result?.lead === true) {
          events.leadSubmit('ContactForm', window.location.pathname, eventId);
        }
        setSubmitSuccess(true);
        reset();
      } else {
        if (response.status === 429) {
          const body = await response.json().catch(() => null);
          setLimitMessage(body?.error || "You've reached today's limit for this form. Please try again tomorrow.");
        }
        setSubmitSuccess(false);
      }
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full font-sans text-left">
      {submitSuccess === true ? (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Thank you for reaching out. I will review your request and get back to you within the next 24 hours.
          </p>
          <div className="text-left bg-white rounded-md p-4 border border-slate-100 max-w-sm w-full text-sm flex flex-col gap-2 shadow-sm">
            <span className="font-bold text-slate-900">What Happens Next:</span>
            <span className="text-slate-600">1. We look at your business and your current website, ads and lead flow.</span>
            <span className="text-slate-600">2. We fix a time for a short call.</span>
            <span className="text-slate-600">3. You get a written plan and quote.</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={markFirstFocus} className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm relative">
          {/* Honeypot fields: off-screen (not display:none, which many bots skip), never seen by people */}
          <div className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input
              id="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('company_website')}
            />
            <input
              id="honeypot-input"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              placeholder="Leave this empty"
              {...register('_honey')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Input
              id="name"
              label="Full Name*"
              placeholder="e.g., Rahul Sharma"
              error={errors.name?.message}
              disabled={isSubmitting}
              {...register('name')}
            />
            <Input
              id="phone"
              label="Phone Number*"
              placeholder="e.g., 9876543210"
              type="tel"
              error={errors.phone?.message}
              disabled={isSubmitting}
              {...register('phone')}
            />
          </div>

          <div className="w-full flex flex-col gap-1 sm:gap-2">
            <label htmlFor="service" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Service Interested In*
            </label>
            <select
              id="service"
              disabled={isSubmitting}
              className="bg-slate-50 border border-outline-variant rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all duration-300 w-full disabled:opacity-50"
              {...register('service')}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.service && <span className="text-[14px] text-red-500 font-medium">{errors.service.message}</span>}
          </div>

          <Textarea
            id="message"
            label="Message (Optional)"
            placeholder="Tell us about your business goals and marketing challenges..."
            error={errors.message?.message}
            disabled={isSubmitting}
            {...register('message')}
          />

          {submitSuccess === false && (
            <div className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-md border border-red-100">
              ❌ {limitMessage ?? <>Something went wrong. Please try again or email {siteData.email} directly.</>}
            </div>
          )}

          <Button
            id="contact-submit-btn"
            type="submit"
            track={false}
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto self-start flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Send Message →</span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};
