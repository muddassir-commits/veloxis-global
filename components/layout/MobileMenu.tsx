import React from 'react';
import Link from 'next/link';
import { X, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  serviceLinks: Array<{ title: string; href: string }>;
  locationLinks: Array<{ name: string; href: string }>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  serviceLinks,
  locationLinks,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto pt-20 pb-8 px-6 flex flex-col justify-between">
      <div className="absolute top-6 right-6">
        <button onClick={onClose} className="p-2 text-slate-900 rounded-md hover:bg-slate-50">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Services Group */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Our Services
          </span>
          <div className="grid grid-cols-2 gap-2">
            {serviceLinks.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                onClick={onClose}
                className="p-2 border border-slate-50 rounded-md font-semibold text-sm text-slate-900 hover:text-royal-blue hover:bg-slate-50 transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Locations Group */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Locations Served
          </span>
          <div className="grid grid-cols-2 gap-2">
            {locationLinks.map((loc, index) => (
              <Link
                key={index}
                href={loc.href}
                onClick={onClose}
                className="flex items-center gap-1.5 p-2 border border-slate-50 rounded-md font-semibold text-sm text-slate-900 hover:text-royal-blue hover:bg-slate-50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-accent" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Core Pages */}
        <div className="flex flex-col gap-3 font-semibold text-slate-900 border-t border-slate-100 pt-4">
          <Link href="/about" onClick={onClose} className="hover:text-royal-blue py-1">About Us</Link>
          <Link href="/case-studies" onClick={onClose} className="hover:text-royal-blue py-1">Case Studies</Link>
          <Link href="/pricing" onClick={onClose} className="hover:text-royal-blue py-1">Pricing</Link>
          <Link href="/blog" onClick={onClose} className="hover:text-royal-blue py-1">Blog</Link>
          <Link href="/contact" onClick={onClose} className="hover:text-royal-blue py-1">Contact</Link>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100 mt-6">
        <a
          href="tel:+918887620727"
          className="flex items-center justify-center gap-2 font-bold text-slate-900 hover:text-royal-blue transition-colors py-3 w-full border border-slate-100 rounded-md bg-slate-50"
        >
          <Phone className="w-4 h-4 text-royal-blue" />
          +91-88876 20727
        </a>
        <Button href="/free-seo-audit" onClick={onClose} variant="primary" className="w-full py-3 text-center">
          Get Free Audit →
        </Button>
      </div>
    </div>
  );
};
