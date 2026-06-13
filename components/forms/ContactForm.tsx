'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import { events } from '../../lib/analytics';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  city: z.string().min(1, { message: 'Please select your city.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  _honey: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      city: '',
      message: '',
      _honey: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (typeof window !== 'undefined') {
          events.formSubmit('ContactForm', window.location.pathname);
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
    <div className="w-full font-sans text-left">
      {submitSuccess === true ? (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-slate-600 mb-6 text-sm">
            Thank you for reaching out. A marketing specialist from our team will contact you within the next 24 hours.
          </p>
          <div className="text-left bg-white rounded-md p-4 border border-slate-100 max-w-sm w-full text-sm flex flex-col gap-2 shadow-sm">
            <span className="font-bold text-slate-900">What Happens Next:</span>
            <span className="text-slate-600">1. We review your website and requirements.</span>
            <span className="text-slate-600">2. We schedule a brief discovery call.</span>
            <span className="text-slate-600">3. We deliver a custom growth proposal.</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm relative">
          {/* Honeypot field - visually hidden */}
          <div className="hidden" aria-hidden="true">
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
              placeholder="e.g., Rohit Malhotra"
              error={errors.name?.message}
              disabled={isSubmitting}
              {...register('name')}
            />
            <Input
              id="company"
              label="Company Name"
              placeholder="e.g., Malhotra Properties"
              error={errors.company?.message}
              disabled={isSubmitting}
              {...register('company')}
            />
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                <option value="SEO Services">SEO Services</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Google Ads & PPC">Google Ads & PPC</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Web Design & Dev">Web Design & Development</option>
                <option value="Email & WhatsApp Marketing">Email & WhatsApp Marketing</option>
              </select>
              {errors.service && <span className="text-[14px] text-red-500 font-medium">{errors.service.message}</span>}
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
          </div>

          <Textarea
            id="message"
            label="Message*"
            placeholder="Tell us about your business goals and marketing challenges..."
            error={errors.message?.message}
            disabled={isSubmitting}
            {...register('message')}
          />

          {submitSuccess === false && (
            <div className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-md border border-red-100">
              ❌ Something went wrong. Please try again or email muddassir@veloxisglobal.com directly.
            </div>
          )}

          <Button
            id="contact-submit-btn"
            type="submit"
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
