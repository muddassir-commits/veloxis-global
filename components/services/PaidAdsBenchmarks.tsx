import React from 'react';
import { BarChart3, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

interface BenchmarkRow {
  city: string;
  submarkets: string;
  metaCpl: string;
  googleCpl: string;
  costPerVisit: string;
  avgConversionRate: string;
}

const benchmarkData: BenchmarkRow[] = [
  {
    city: 'Kanpur',
    submarkets: 'Civil Lines, Swaroop Nagar, Kalyanpur, Dubagga Corridor',
    metaCpl: '₹180 – ₹320',
    googleCpl: '₹450 – ₹850',
    costPerVisit: '₹1,400 – ₹2,200',
    avgConversionRate: '12% – 16%',
  },
  {
    city: 'Lucknow',
    submarkets: 'Shaheed Path, Gomti Nagar Ext, Sultanpur Rd, Amar Shaheed Path',
    metaCpl: '₹220 – ₹420',
    googleCpl: '₹550 – ₹1,100',
    costPerVisit: '₹1,600 – ₹2,800',
    avgConversionRate: '10% – 14%',
  },
  {
    city: 'Noida & Gr. Noida',
    submarkets: 'Sector 150, Noida Expressway, Gr. Noida West, Pari Chowk',
    metaCpl: '₹280 – ₹550',
    googleCpl: '₹750 – ₹1,600',
    costPerVisit: '₹2,200 – ₹3,800',
    avgConversionRate: '8% – 12%',
  },
  {
    city: 'Delhi NCR Luxury',
    submarkets: 'Dwarka Expressway, Golf Course Ext, Central Noida (₹2 Cr+)',
    metaCpl: '₹450 – ₹950',
    googleCpl: '₹1,200 – ₹2,800',
    costPerVisit: '₹3,500 – ₹6,500',
    avgConversionRate: '6% – 10%',
  },
];

export const PaidAdsBenchmarks: React.FC = () => {
  return (
    <section className="my-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm text-left">
      <div className="flex items-center gap-2 text-royal-blue text-xs font-bold uppercase tracking-wider mb-2">
        <BarChart3 className="w-4 h-4" />
        <span>Market Intelligence Benchmark</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        2026 Real Estate Ad Cost &amp; Lead Benchmarks in North India
      </h2>

      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
        Real-world cost per lead (CPL) and cost per qualified site visit across Meta (Facebook &amp; Instagram) and Google Search campaigns in Uttar Pradesh and Delhi NCR.
      </p>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mb-6">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <th className="py-3.5 px-4 font-semibold">City / Market</th>
              <th className="py-3.5 px-4 font-semibold">Meta Ads CPL</th>
              <th className="py-3.5 px-4 font-semibold">Google Search CPL</th>
              <th className="py-3.5 px-4 font-semibold">Cost / Site Visit</th>
              <th className="py-3.5 px-4 font-semibold">Visit Booking Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {benchmarkData.map((row) => (
              <tr key={row.city} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  {row.city}
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">{row.submarkets}</span>
                </td>
                <td className="py-4 px-4 font-semibold text-emerald-700">{row.metaCpl}</td>
                <td className="py-4 px-4 font-semibold text-blue-700">{row.googleCpl}</td>
                <td className="py-4 px-4 font-bold text-slate-900">{row.costPerVisit}</td>
                <td className="py-4 px-4 text-slate-600">{row.avgConversionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>Qualifying Questions Cut CPL Waste:</strong> Adding 3 qualifying questions (Budget, Configuration, Timeline) reduces total volume by 20% but increases genuine site visits by 3x.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>RERA Compliance Mandatory:</strong> Under RERA Section 11(2), all digital ad creatives must state the project RERA registration number and official authority portal link.
          </span>
        </div>
      </div>
    </section>
  );
};
