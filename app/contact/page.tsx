import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { ContactForm } from '../../components/forms/ContactForm';
import { Phone, Mail, MessageCircle, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: pageMeta.contact.path
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: 'Contact Us', href: '/contact' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Contact', item: 'https://veloxisglobal.com/contact' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <Badge variant="teal">GET IN TOUCH</Badge>
            
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Accelerate Your Business Growth?
            </h1>
            
            <p className="text-base sm:text-body-md text-on-surface-variant leading-relaxed">
              Complete the form below and a performance marketing specialist from our local team will call you within 24 hours to schedule a discovery call.
            </p>

            <ContactForm />
          </div>

          {/* Right Column - Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverable={false} className="bg-white border border-slate-100 p-8 flex flex-col gap-6">
              <h2 className="text-xl sm:text-headline-md font-bold text-slate-900 border-b border-slate-50 pb-4">
                Direct Contact Channels
              </h2>

              <div className="flex flex-col gap-5">
                {/* Phone */}
                <a
                  href="tel:+918887620727"
                  className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Call Our Team</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-royal-blue transition-colors">
                      +91-88876 20727
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:muddassir@veloxisglobal.com"
                  className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-royal-blue transition-colors">
                      muddassir@veloxisglobal.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-accent/10 text-teal-accent flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-teal-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Chat on WhatsApp</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-teal-accent transition-colors">
                      Message Us Now
                    </span>
                  </div>
                </a>
              </div>

              <hr className="border-slate-100" />

              {/* Hours / Address */}
              <div className="flex flex-col gap-4 text-sm text-on-surface-variant font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Mon–Sat, 9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">📍</span>
                  <span>
                    12 Faithful Ganj, Cantt, Kanpur, UP — Serving Delhi · Noida · Lucknow · Kanpur
                  </span>
                </div>
              </div>
            </Card>

            {/* Calendly Booking Card */}
            <Card hoverable={false} className="bg-primary-container text-white border-slate-800 p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="font-bold text-lg">Prefer a Scheduled Video Call?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                 Pick a 30-minute slot on our calendar to discuss your digital audit results directly with our strategy director.
              </p>
              <Button href="https://calendly.com/veloxisglobal/30min" target="_blank" variant="white" className="w-full mt-2">
                Book a Strategy Call →
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
