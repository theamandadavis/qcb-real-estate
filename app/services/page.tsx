import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Services | QCB Global',
  description: 'Full-service STR management including Airbnb management, rental arbitrage, property optimization, dynamic pricing, and investor partnerships.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Full-Service Management</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          From Airbnb management to investor partnerships — QCB Global delivers comprehensive STR solutions that maximize revenue and eliminate operational friction.
        </p>
      </div>

      <ServicesSection />

      <div className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm">Get your free revenue projection or submit a partner inquiry to learn how QCB Global can transform your property.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/revenue-projections" className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-xl transition-colors">Get Revenue Projections</Link>
          <Link href="/partner" className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 transition-colors">Partner With Us</Link>
        </div>
      </div>
    </div>
  );
}
