import React from 'react';
import { companyStats } from '../../data/stats';

export const StatsStrip: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-black text-royal-blue">{companyStats.yearsExperience}</span>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-black text-royal-blue">{companyStats.projectsDelivered}</span>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Projects Delivered</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-black text-royal-blue">{companyStats.clientsServed}</span>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Active Clients</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-black text-royal-blue">{companyStats.marketersTrained}</span>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Marketers Trained</span>
          </div>
        </div>
      </div>
    </section>
  );
};
