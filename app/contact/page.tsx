import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { ContactForm } from '../../components/forms/ContactForm';
import { siteData } from '@/data/site';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { contactFaqs } from '../../data/page-faqs';
import { Phone, Mail, MessageCircle, Calendar, MapPin } from 'lucide-react';

export const metadata: Metadata = constructMetadata(pageMeta.contact);

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'ContactPage',
          name: 'Contact Veloxis Global',
          description: pageMeta.contact.description,
          path: '/contact',
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          <div className="lg:col-span-7 flex flex-col items-start gap-6 order-last lg:order-first">
            <Badge variant="teal">FREE MARKETING AUDIT</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              Contact Veloxis Global
            </h1>
            <p className="text-base sm:text-body-md text-on-surface-variant leading-relaxed">
              Tell us about your project or current campaigns. We’ll review your landing page, ads and lead follow-up and
              come back with what we would change first — free, with no obligation.
            </p>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm w-full">
              <div className="relative w-12 h-12 rounded-full border border-slate-200 overflow-hidden shrink-0">
                <Image src="/images/profiles/muddassir.jpg" alt="Muddassir Ali" fill sizes="48px" className="object-cover" />
              </div>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Messages come straight to me, Muddassir. I reply personally — no call-centre follow-up, no sales pressure.
              </p>
            </div>

            <ContactForm />

            {/* Mobile/tablet: photo sits after the form so it never pushes the form down */}
            <ImageFrame
              src="/images/people/contact/professional-on-phone-call.jpg"
              alt="A woman in a navy blazer talking on a desk phone in an office"
              ratio="4/3"
              sizes="100vw"
              position="center top"
              className="lg:hidden shadow-sm border border-slate-100"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <ImageFrame
              src="/images/people/contact/professional-on-phone-call.jpg"
              alt="A woman in a navy blazer talking on a desk phone in an office"
              ratio="4/3"
              sizes="40vw"
              position="center top"
              className="hidden lg:block shadow-sm border border-slate-100"
            />

            <Card hoverable={false} className="bg-white border border-slate-100 p-8 flex flex-col gap-6">
              <h2 className="text-xl sm:text-headline-md font-bold text-slate-900 border-b border-slate-50 pb-4">
                Other ways to reach us
              </h2>

              <div className="flex flex-col gap-5">
                <a href={`tel:${siteData.phoneRaw}`} className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-royal-blue/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-royal-blue group-hover:text-white group-hover:scale-110" aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Call</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-royal-blue transition-colors">{siteData.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${siteData.email}`} className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-royal-blue/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-royal-blue group-hover:text-white group-hover:scale-110" aria-hidden="true">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-royal-blue transition-colors break-all">{siteData.email}</span>
                  </div>
                </a>

                <a href={siteData.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-teal-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-teal-accent/10 text-teal-accent flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                    <MessageCircle className="w-5 h-5 fill-teal-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">WhatsApp</span>
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg block mt-0.5 group-hover:text-teal-accent transition-colors">Message us on WhatsApp</span>
                  </div>
                </a>
              </div>

              <hr className="border-slate-100" />

              <div className="flex flex-col gap-4 text-sm text-on-surface-variant font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteData.address}. We work remotely.</span>
                </div>
              </div>
            </Card>

            <Card hoverable={false} className="relative bg-primary-container text-white border-slate-800 p-8 text-center flex flex-col items-center gap-4">
              <span className="border-beam border-beam-light" aria-hidden="true" />
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center" aria-hidden="true">
                <Calendar className="w-6 h-6 text-royal-blue" />
              </div>
              <h2 className="font-bold text-lg">Prefer a video call?</h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
                Pick a 30-minute slot to walk through your project and current lead flow with Muddassir.
              </p>
              <Button id="contact-calendly-btn" href={siteData.booking} target="_blank" variant="white" className="w-full mt-2">
                Book a call →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <FaqAccordion customFaqs={contactFaqs} title="Before you get in touch" badgeText="FAQ" description="What happens when you contact us, and what the free audit includes." />
    </>
  );
}
