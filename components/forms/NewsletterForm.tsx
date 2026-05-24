'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/Button';
import { events } from '../../lib/analytics';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  _honey: z.string().optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const NewsletterForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      _honey: '',
    }
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (typeof window !== 'undefined') {
          events.formSubmit('NewsletterForm', window.location.pathname);
        }
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
    <div className="w-full max-w-md font-sans text-left">
      {submitSuccess === true ? (
        <p className="text-teal-accent text-sm font-bold">
          🎉 Subscribed! Welcome to the Veloxis growth newsletter.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 relative">
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

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-grow">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your business email"
                disabled={isSubmitting}
                className="bg-slate-800 text-white border border-slate-700 rounded-md px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all duration-300 w-full text-sm disabled:opacity-50"
                {...register('email')}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="py-3 px-6 text-sm shrink-0 whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </Button>
          </div>
          {errors.email && (
            <span className="text-[14px] text-red-400 font-semibold">{errors.email.message}</span>
          )}
          {submitSuccess === false && (
            <span className="text-[14px] text-red-400 font-semibold">❌ Submission failed. Please try again.</span>
          )}
        </form>
      )}
    </div>
  );
};
