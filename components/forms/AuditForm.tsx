'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import { events } from '../../lib/analytics';

const auditSchema = z.object({
  websiteUrl: z.string().url({ message: 'Please enter a valid website URL (including http/https).' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  city: z.string().min(1, { message: 'Please select your city.' }),
  _honey: z.string().optional(),
});

type AuditFormData = z.infer<typeof auditSchema>;

export const AuditForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      websiteUrl: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      _honey: '',
    }
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    try {
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (typeof window !== 'undefined') {
          events.formSubmit('AuditForm', window.location.pathname);
        }
        setSubmittedEmail(data.email);
        setSubmitSuccess(true);
        reset();
      } else {
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
          <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Requested Successfully!</h3>
          <p className="text-slate-600 mb-6 text-sm">
            Received! We'll send your audit to <strong className="text-slate-900">{submittedEmail}</strong> within 48 hours.
          </p>
          <div className="text-left bg-white rounded-md p-4 border border-slate-100 max-w-sm w-full text-sm flex flex-col gap-2 shadow-sm">
            <span className="font-bold text-teal-600">What You'll Receive:</span>
            <span className="text-slate-600">✅ Page Speed & Core Web Vitals health score</span>
            <span className="text-slate-600">✅ Top 5 critical technical errors holding you back</span>
            <span className="text-slate-600">✅ Competitor keyword comparison & gap checklist</span>
            <span className="text-slate-600">✅ Actionable 90-day rank acceleration blueprint</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-lg relative">
          {/* Honeypot field - visually hidden */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              placeholder="Leave this empty"
              {...register('_honey')}
            />
          </div>

          <Input
            id="websiteUrl"
            label="Website URL*"
            placeholder="e.g., https://mybusiness.com"
            type="url"
            error={errors.websiteUrl?.message}
            disabled={isSubmitting}
            {...register('websiteUrl')}
          />

          <Input
            id="name"
            label="Full Name*"
            placeholder="e.g., Rohit Malhotra"
            error={errors.name?.message}
            disabled={isSubmitting}
            {...register('name')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Input
              id="email"
              label="Email Address*"
              placeholder="e.g., rohit@company.com"
              type="email"
              error={errors.email?.message}
              disabled={isSubmitting}
              {...register('email')}
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
            <label htmlFor="city" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Your City*
            </label>
            <select
              id="city"
              disabled={isSubmitting}
              className="bg-slate-50 border border-outline-variant rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all duration-300 w-full disabled:opacity-50"
              {...register('city')}
            >
              <option value="">Select your city</option>
              <option value="Delhi">Delhi NCR</option>
              <option value="Noida">Noida</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Other">Other</option>
            </select>
            {errors.city && <span className="text-[14px] text-red-500 font-medium">{errors.city.message}</span>}
          </div>

          {submitSuccess === false && (
            <div className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-md border border-red-100">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full text-center flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Analyzing Site...</span>
              </>
            ) : (
              <span>Get My Free Audit →</span>
            )}
          </Button>

          <span className="text-xs text-center text-slate-400 font-medium block">
            🔒 We respect your privacy. No spam. Unsubscribe anytime.
          </span>
        </form>
      )}
    </div>
  );
};
