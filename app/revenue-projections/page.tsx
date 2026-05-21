import type { Metadata } from 'next';
import Image from 'next/image';
import RevenueProjectionForm from '@/components/RevenueProjectionForm';

export const metadata: Metadata = {
  title: 'Revenue Projections | QCB Global',
  description: 'Get estimated monthly STR revenue, occupancy projections, peak season analysis, and ROI potential for your property from QCB Global.',
};

const outputs = [
  'Estimated monthly STR revenue',
  'Occupancy projections',
  'Peak season analysis',
  'Competitive market comparison',
  'ROI potential',
  'Dynamic pricing opportunities',
  'Optimization recommendations',
];

export default function RevenueProjectionsPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Free Analysis</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get Revenue Projections</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Tell us about your property. We&apos;ll provide a comprehensive revenue analysis tailored to your market within one business day.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* What you get */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What You&apos;ll Receive</h2>
            {outputs.map((item, i) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3">
                <div className="w-6 h-6 rounded-full bg-amber-50 border border-gold-400/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-600 text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-6">
              <Image src="/images/revenue.jpg" alt="Property revenue growth" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <RevenueProjectionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
